import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const recentOrders = [
  {
    orderNumber: "ORD001",
    supplier: "Proveedor A",
    date: "2024-01-30",
    status: "Pendiente",
    amount: "$1,234.56",
  },
  {
    orderNumber: "ORD002",
    supplier: "Proveedor B",
    date: "2024-01-29",
    status: "Completada",
    amount: "$2,345.67",
  },
  {
    orderNumber: "ORD003",
    supplier: "Proveedor C",
    date: "2024-01-28",
    status: "En Proceso",
    amount: "$3,456.78",
  },
  {
    orderNumber: "ORD004",
    supplier: "Proveedor D",
    date: "2024-01-27",
    status: "Completada",
    amount: "$4,567.89",
  },
  {
    orderNumber: "ORD005",
    supplier: "Proveedor E",
    date: "2024-01-26",
    status: "Pendiente",
    amount: "$5,678.90",
  },
]

export function RecentOrders() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Orden</TableHead>
          <TableHead>Proveedor</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead className="text-right">Monto</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentOrders.map((order) => (
          <TableRow key={order.orderNumber}>
            <TableCell className="font-medium">{order.orderNumber}</TableCell>
            <TableCell>{order.supplier}</TableCell>
            <TableCell>{order.status}</TableCell>
            <TableCell className="text-right">{order.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

