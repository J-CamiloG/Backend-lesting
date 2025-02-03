"use client"

import { useAuth } from "@/contexts/auth-context"
import type { UserRole } from "@/types/auth"
import type React from "react" 

interface RoleGateProps {
  children: React.ReactNode
  allowedRoles: UserRole[]
}

export function RoleGate({ children, allowedRoles }: RoleGateProps) {
  const { user, isLoading } = useAuth()

  if (isLoading) {
    return <div>Cargando...</div>
  }

  if (!user || !allowedRoles.includes(user.role)) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-900">Acceso Denegado</h2>
        <p className="mt-2 text-gray-600">No tienes permisos para ver esta página.</p>
      </div>
    )
  }

  return <>{children}</>
}

