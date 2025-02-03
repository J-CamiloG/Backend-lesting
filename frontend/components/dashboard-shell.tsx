"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { DashboardNav } from "./dashboard-nav"
import type React from "react" // Added import for React

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar Mobile */}
      <div className="lg:hidden">
        <button
          onClick={() => setSidebarOpen(true)}
          className="fixed left-4 top-4 z-50 rounded-md bg-white p-2 shadow-md"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Overlay */}
        {isSidebarOpen && (
          <div className="fixed inset-0 z-40 bg-gray-600/75 transition-opacity" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Mobile Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-white transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex h-16 items-center border-b px-6">
            <span className="text-xl font-semibold">SisCompras</span>
          </div>
          <div className="p-4">
            <DashboardNav />
          </div>
        </aside>
      </div>

      {/* Sidebar Desktop */}
      <aside className="hidden w-64 flex-col border-r bg-white lg:flex">
        <div className="flex h-16 items-center border-b px-6">
          <span className="text-xl font-semibold">SisCompras</span>
        </div>
        <div className="flex-1 p-4">
          <DashboardNav />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <div className="container mx-auto p-6">{children}</div>
      </main>
    </div>
  )
}

