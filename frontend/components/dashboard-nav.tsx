"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Package, ShoppingCart, LogOut, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { removeAuthCookie } from "@/lib/cookies"

const routes = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Productos",
    href: "/dashboard/products",
    icon: Package,
  },
  {
    title: "Órdenes",
    href: "/dashboard/orders",
    icon: ShoppingCart,
  },
]

export function DashboardNav() {
  const pathname = usePathname()
  const router = useRouter()
  const userName = localStorage.getItem("name")

  const handleLogout = () => {
    // Limpiar localStorage
    localStorage.removeItem("token")
    localStorage.removeItem("name")
    localStorage.removeItem("role")

    // Eliminar cookie de autenticación
    removeAuthCookie()

    // Redirigir a la página principal
    router.push("/")
  }

  return (
    <div className="flex h-full flex-col justify-between">
      <nav className="grid items-start gap-2">
        {routes.map((route) => {
          const Icon = route.icon
          return (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900",
                pathname === route.href ? "bg-gray-100 text-gray-900" : "",
              )}
            >
              <Icon className="h-4 w-4" />
              <span>{route.title}</span>
            </Link>
          )
        })}
      </nav>

      {/* User Section */}
      <div className="border-t pt-4 mt-auto">
        <div className="px-3 py-2">
          <div className="flex items-center gap-3 mb-4 text-gray-700">
            <User className="h-4 w-4" />
            <span className="font-medium">{userName}</span>
          </div>
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-red-50 hover:text-red-600"
          >
            <LogOut className="h-4 w-4" />
            <span>Cerrar Sesión</span>
          </button>
        </div>
      </div>
    </div>
  )
}

