"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { DashboardNav } from "./dashboard-nav"
import type React from "react" // Added import for React

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen">
      {/* Sidebar para móvil */}
      <div className="lg:hidden">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="fixed left-4 top-4 z-40 rounded-md bg-white p-2 shadow-md"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-gray-600 bg-opacity-75 transition-opacity"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar móvil */}
        <aside
          className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-white transition-transform duration-300 ease-in-out ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex h-16 items-center justify-center border-b">
            <span className="text-xl font-semibold">SisCompras</span>
          </div>
          <div className="p-4">
            <DashboardNav />
          </div>
        </aside>
      </div>

      {/* Sidebar desktop */}
      <aside className="hidden lg:flex lg:w-64 lg:flex-col">
        <div className="flex h-full flex-col border-r bg-white">
          <div className="flex h-16 items-center justify-center border-b">
            <span className="text-xl font-semibold">SisCompras</span>
          </div>
          <div className="flex-1 p-4">
            <DashboardNav />
          </div>
        </div>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 bg-gray-50">
        <div className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
        </div>
      </main>
    </div>
  )
}

