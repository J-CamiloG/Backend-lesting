"use client"

import { useState, useEffect } from "react"
import { Plus, MoreVertical } from 'lucide-react'
import api from "@/lib/api"
import { CreateProductModal } from "@/components/products/create-product-modal"
import { UpdateProductModal } from "@/components/products/update-product-modal"
import { ViewProductModal } from "@/components/products/view-prodcut-modal"
import { DeleteConfirmModal } from "@/components/products/delete-confirm-modal"
import { ActionMenu } from "@/components/products/action-menu"

interface Product {
  _id: string
  name: string
  price: number
  description: string
  createdAt: string
}

export default function ProductsPage() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
  const [isViewModalOpen, setIsViewModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [menuPosition, setMenuPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 })
  const isAdmin = localStorage.getItem("role") === "admin"

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true)
        const response = await api.get("/api/products")
        setProducts(response.data)
      } catch (err) {
        setError("Error al cargar los productos")
        console.error("Error fetching products:", err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const handleCreateProduct = async (newProduct: Omit<Product, "_id" | "createdAt">) => {
    try {
      const response = await api.post("/api/products", newProduct)
      setProducts((prev) => [...prev, response.data])
      setIsCreateModalOpen(false)
    } catch (err) {
      console.error("Error creating product:", err)
      throw err
    }
  }

  const handleUpdateProduct = async (productId: string, updatedProduct: Omit<Product, "_id" | "createdAt">) => {
    try {
      const response = await api.put(`/api/products/${productId}`, updatedProduct)
      setProducts((prev) => prev.map((product) => (product._id === productId ? response.data : product)))
      setIsUpdateModalOpen(false)
    } catch (err) {
      console.error("Error updating product:", err)
      throw err
    }
  }

  const handleDeleteProduct = async (productId: string) => {
    try {
      await api.delete(`/api/products/${productId}`)
      setProducts((prev) => prev.filter((product) => product._id !== productId))
    } catch (err) {
      console.error("Error deleting product:", err)
      alert("Error al eliminar el producto")
    }
  }

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

  if (isLoading) {
    return (
      <div className="flex h-[200px] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">Error</h3>
            <div className="mt-2 text-sm text-red-700">{error}</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-black">Productos</h2>
          <p className="text-muted-foreground text-gray-500">Gestiona los productos del sistema</p>
        </div>
        {isAdmin && (
          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            <Plus className="mr-2 h-4 w-4" />
            Nuevo Producto
          </button>
        )}
      </div>

      <div className="rounded-xl border bg-white shadow-sm">
        <div className="overflow-x-auto">
          {products.length === 0 ? (
            <div className="flex h-[200px] items-center justify-center text-gray-500">No hay productos disponibles</div>
          ) : (
            <table className="w-full">
              <thead>
                <tr className="border-b bg-gray-50 text-sm">
                  <th className="py-3 pl-6 text-left font-medium text-gray-600">Nombre</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-600">Descripción</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-600">Precio</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-600">Fecha de Creación</th>
                  {isAdmin && <th className="px-4 py-3 text-right font-medium text-gray-600">Acciones</th>}
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id} className="border-b">
                    <td className="py-3 pl-6 text-sm font-medium text-black">{product.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{product.description}</td>
                    <td className="px-4 py-3 text-sm text-black">{formatPrice(product.price)}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{formatDate(product.createdAt)}</td>
                    {isAdmin && (
                      <td className="px-4 py-3 text-right">
                        <button
                          onClick={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect()
                            setMenuPosition({
                              top: rect.bottom + window.scrollY + 4,
                              left: rect.right - 192,
                            })
                            setActiveDropdown(activeDropdown === product._id ? null : product._id)
                          }}
                          className="rounded p-2 hover:bg-gray-100"
                        >
                          <MoreVertical className="h-4 w-4 text-gray-600" />
                        </button>
                        <ActionMenu
                          isOpen={activeDropdown === product._id}
                          onClose={() => setActiveDropdown(null)}
                          position={menuPosition}
                          onView={() => {
                            setSelectedProduct(product)
                            setIsViewModalOpen(true)
                            setActiveDropdown(null)
                          }}
                          onEdit={() => {
                            setSelectedProduct(product)
                            setIsUpdateModalOpen(true)
                            setActiveDropdown(null)
                          }}
                          onDelete={() => {
                            setSelectedProduct(product)
                            setIsDeleteModalOpen(true)
                            setActiveDropdown(null)
                          }}
                        />
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      <CreateProductModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={handleCreateProduct}
      />

      <UpdateProductModal
        isOpen={isUpdateModalOpen}
        onClose={() => {
          setIsUpdateModalOpen(false)
          setSelectedProduct(null)
        }}
        onSubmit={handleUpdateProduct}
        product={selectedProduct}
      />

      <ViewProductModal
        isOpen={isViewModalOpen}
        onClose={() => {
          setIsViewModalOpen(false)
          setSelectedProduct(null)
        }}
        product={selectedProduct}
      />

      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false)
          setSelectedProduct(null)
        }}
        onConfirm={() => {
          if (selectedProduct) {
            handleDeleteProduct(selectedProduct._id)
            setIsDeleteModalOpen(false)
            setSelectedProduct(null)
          }
        }}
        productName={selectedProduct?.name ?? ""}
      />
    </div>
  )
}
