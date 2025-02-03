interface ViewProductModalProps {
    isOpen: boolean
    onClose: () => void
    product: {
      name: string
      description: string
      price: number
      createdAt: string
    } | null
  }
  
  export function ViewProductModal({ isOpen, onClose, product }: ViewProductModalProps) {
    if (!isOpen || !product) return null
  
    const formatPrice = (price: number) => {
      return new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
      }).format(price)
    }
  
    const formatDate = (date: string) => {
      return new Date(date).toLocaleDateString("es-CO", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    }
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-medium text-black">Detalles del Producto</h3>
            <button
              onClick={onClose}
              className="rounded-full p-1 hover:bg-gray-100"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-black">Nombre</h4>
              <p className="text-gray-600">{product.name}</p>
            </div>
            <div>
              <h4 className="font-medium text-black">Descripción</h4>
              <p className="text-gray-600">{product.description}</p>
            </div>
            <div>
              <h4 className="font-medium text-black">Precio</h4>
              <p className="text-gray-600">{formatPrice(product.price)}</p>
            </div>
            <div>
              <h4 className="font-medium text-black">Fecha de Creación</h4>
              <p className="text-gray-600">{formatDate(product.createdAt)}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  