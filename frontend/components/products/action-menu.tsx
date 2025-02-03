import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { Eye, Pencil, Trash2 } from "lucide-react"

interface ActionMenuProps {
  isOpen: boolean
  onClose: () => void
  position: { top: number; left: number }
  onView: () => void
  onEdit: () => void
  onDelete: () => void
}

export function ActionMenu({ isOpen, onClose, position, onView, onEdit, onDelete }: ActionMenuProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (isOpen) {
      const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as HTMLElement
        if (!target.closest("[data-action-menu]")) {
          onClose()
        }
      }
      document.addEventListener("click", handleClickOutside)
      return () => document.removeEventListener("click", handleClickOutside)
    }
  }, [isOpen, onClose])

  if (!mounted || !isOpen) return null

  return createPortal(
    <div
      data-action-menu
      className="fixed z-50 w-48 rounded-md border bg-white py-1 shadow-lg"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
    >
      <button onClick={onView} className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
        <Eye className="mr-2 h-4 w-4" />
        Ver detalles
      </button>
      <button onClick={onEdit} className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
        <Pencil className="mr-2 h-4 w-4" />
        Editar
      </button>
      <button onClick={onDelete} className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50">
        <Trash2 className="mr-2 h-4 w-4" />
        Eliminar
      </button>
    </div>,
    document.body,
  )
}

