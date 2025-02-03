"use client"

import { BarChart, DollarSign, Package, ShoppingCart } from "lucide-react"

const metrics = [
  {
    title: "Ventas Totales",
    value: "$12,345",
    change: "+12%",
    icon: DollarSign,
  },
  {
    title: "Órdenes Nuevas",
    value: "145",
    change: "+4%",
    icon: ShoppingCart,
  },
  {
    title: "Productos Activos",
    value: "89",
    change: "+8%",
    icon: Package,
  },
  {
    title: "Ingresos Mensuales",
    value: "$8,234",
    change: "+15%",
    icon: BarChart,
  },
]

const recentOrders = [
  {
    id: "ORD001",
    product: "Laptop Dell XPS 13",
    date: "2024-02-03",
    amount: "$1,299.99",
    status: "Completada",
  },
  {
    id: "ORD002",
    product: "Monitor LG 27'",
    date: "2024-02-02",
    amount: "$349.99",
    status: "Pendiente",
  },
  {
    id: "ORD003",
    product: "Teclado Mecánico",
    date: "2024-02-02",
    amount: "$129.99",
    status: "Procesando",
  },
  {
    id: "ORD004",
    product: "Mouse Inalámbrico",
    date: "2024-02-01",
    amount: "$49.99",
    status: "Completada",
  },
  {
    id: "ORD005",
    product: "Auriculares Sony",
    date: "2024-02-01",
    amount: "$199.99",
    status: "Completada",
  },
]

const monthlyData = [
  { name: "Ene", total: 4500 },
  { name: "Feb", total: 3800 },
  { name: "Mar", total: 5200 },
  { name: "Abr", total: 4800 },
  { name: "May", total: 6000 },
  { name: "Jun", total: 5300 },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">Resumen general del sistema de compras</p>
      </div>

      {/* Métricas */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => {
          const Icon = metric.icon
          return (
            <div key={metric.title} className="rounded-xl border bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <Icon className="h-5 w-5 text-gray-600" />
                <span className="text-sm font-medium text-gray-600">{metric.title}</span>
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl font-semibold">{metric.value}</span>
                <span className="text-sm text-green-600">{metric.change}</span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Gráfico y Órdenes Recientes */}
      <div className="grid gap-6 lg:grid-cols-7">
        {/* Gráfico */}
        <div className="col-span-4 rounded-xl border bg-white p-6 shadow-sm">
          <h3 className="font-semibold">Ventas Mensuales</h3>
          <div className="mt-4 h-[240px]">
            <div className="h-full w-full">
              <div className="flex h-full items-end gap-2">
                {monthlyData.map((data) => (
                  <div key={data.name} className="relative flex flex-1 flex-col items-center">
                    <div
                      className="w-full bg-blue-500 transition-all duration-300"
                      style={{
                        height: `${(data.total / 6000) * 100}%`,
                      }}
                    />
                    <span className="mt-2 text-sm text-gray-600">{data.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Órdenes Recientes */}
        <div className="col-span-3 rounded-xl border bg-white shadow-sm">
          <div className="p-6">
            <h3 className="font-semibold">Órdenes Recientes</h3>
          </div>
          <div className="px-6">
            <div className="divide-y">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-medium">{order.product}</p>
                    <p className="text-sm text-gray-600">{order.id}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{order.amount}</p>
                    <p className="text-sm text-gray-600">{order.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 pt-0">
            <button className="w-full rounded-lg border border-gray-200 py-2 text-sm font-medium hover:bg-gray-50">
              Ver todas las órdenes
            </button>
          </div>
        </div>
      </div>

      {/* Tabla de Órdenes */}
      <div className="rounded-xl border bg-white shadow-sm">
        <div className="p-6">
          <h3 className="font-semibold">Todas las Órdenes</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50 text-sm">
                <th className="py-3 pl-6 text-left font-medium text-gray-600">ID</th>
                <th className="px-4 py-3 text-left font-medium text-gray-600">Producto</th>
                <th className="px-4 py-3 text-left font-medium text-gray-600">Fecha</th>
                <th className="px-4 py-3 text-left font-medium text-gray-600">Monto</th>
                <th className="px-4 py-3 text-left font-medium text-gray-600">Estado</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="py-3 pl-6 text-sm">{order.id}</td>
                  <td className="px-4 py-3 text-sm">{order.product}</td>
                  <td className="px-4 py-3 text-sm">{order.date}</td>
                  <td className="px-4 py-3 text-sm">{order.amount}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                        order.status === "Completada"
                          ? "bg-green-50 text-green-700"
                          : order.status === "Pendiente"
                            ? "bg-yellow-50 text-yellow-700"
                            : "bg-blue-50 text-blue-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

