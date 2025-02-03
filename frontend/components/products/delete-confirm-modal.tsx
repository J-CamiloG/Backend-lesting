interface DeleteConfirmModalProps {
    isOpen: boolean
    onClose: () => void
    onConfirm: () => void
    productName: string
  }
  
  export function DeleteConfirmModal({ isOpen, onClose, onConfirm, productName }: DeleteConfirmModalProps) {
    if (!isOpen) return null
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">
          <h3 className="mb-2 text-lg font-medium">¿Estás seguro?</h3>
          <p className="mb-4 text-gray-600">
            Esta acción eliminará permanentemente el producto &quot;{productName}&quot;.
          </p>
          <div className="flex justify-end gap-2">
            <button
              onClick={onClose}
              className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancelar
            </button>
            <button
              onClick={onConfirm}
              className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    )
  }
  