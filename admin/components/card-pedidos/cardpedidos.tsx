import { Clock, Package } from "lucide-react"

const order = {
  _id: "6941d7654c58987722a0050f",
  orderNumber: "ORD-1765922661503-588",
  total: 4050,
  status: "pending",
  items: [
    {
      productId: "6941b57dcb8789ee253b388c",
      productName: "Sumo de Laranja",
      price: 240,
      quantity: 4,
    },
    {
      productId: "6941b56acb8789ee253b3889",
      productName: "Sumo de Limao",
      price: 515,
      quantity: 6,
    },
  ],
}

export function OrderCard() {
  return (
    <div className="rounded-xl mb-2 border p-4 space-y-3 hover:shadow-sm transition">
      
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-muted-foreground">Pedido</p>
          <p className="font-semibold text-sm">{order.orderNumber}</p>
        </div>

        <span className="flex items-center gap-1 text-xs rounded-full bg-yellow-100 text-yellow-700 px-2 py-0.5">
          <Clock className="h-3 w-3" />
          Pendente
        </span>
      </div>

      {/* Itens */}
      <div className="space-y-1 text-sm">
        {order.items.map((item) => (
          <div
            key={item.productId}
            className="flex justify-between text-muted-foreground"
          >
            <span>
              {item.quantity}× {item.productName}
            </span>
            <span>
              {(item.price * item.quantity).toLocaleString("pt-PT")} Kz
            </span>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="h-px bg-border" />

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-sm font-semibold">
          <Package className="h-4 w-4 text-muted-foreground" />
          Total
        </div>

        <span className="font-bold text-sm">
          {order.total.toLocaleString("pt-PT")} Kz
        </span>
      </div>
    </div>
  )
}
