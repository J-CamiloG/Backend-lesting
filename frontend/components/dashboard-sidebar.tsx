"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, ShoppingCart, Package, Users, Settings, Building2 } from "lucide-react"

const sidebarLinks = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Órdenes",
    href: "/orders",
    icon: ShoppingCart,
  },
  {
    title: "Productos",
    href: "/products",
    icon: Package,
  },
  {
    title: "Proveedores",
    href: "/suppliers",
    icon: Building2,
  },
  {
    title: "Usuarios",
    href: "/users",
    icon: Users,
  },
  {
    title: "Configuración",
    href: "/settings",
    icon: Settings,
  },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden border-r bg-muted/40 lg:block lg:w-64">
      <div className="flex h-full flex-col gap-2">
        <div className="flex h-14 items-center border-b px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Package className="h-6 w-6" />
            <span>Sistema de Compras</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto">
          <nav className="grid items-start px-4 text-sm font-medium">
            {sidebarLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                    pathname === link.href && "bg-muted text-primary",
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {link.title}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </aside>
  )
}

