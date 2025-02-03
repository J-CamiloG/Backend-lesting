"use client"

import Link from "next/link"

export function DashboardHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white">
            <div className="container flex h-14 items-center">
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                <div className="w-full flex-1 md:w-auto md:flex-none">
                    <div className="relative">
                    <svg
                        className="absolute left-2 top-2.5 h-4 w-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                    <input
                        type="search"
                        placeholder="Buscar órdenes..."
                        className="w-full rounded-md border border-gray-200 pl-8 pr-4 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 md:w-[300px] lg:w-[400px]"
                    />
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button
                    className="relative p-2 text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
                    aria-label="Notificaciones"
                    >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                    </svg>
                    <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-blue-600 text-[10px] font-medium text-white flex items-center justify-center">
                        4
                    </span>
                    </button>
                    <div className="relative group">
                    <button
                        className="relative h-8 w-8 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label="Menú de usuario"
                    >
                        <img src="/placeholder.svg" alt="Avatar" className="rounded-full" />
                    </button>
                    <div className="absolute right-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 ease-in-out">
                        <div className="rounded-md border border-gray-200 bg-white py-1 shadow-lg">
                        <div className="px-4 py-2">
                            <p className="text-sm font-medium">Juan Pérez</p>
                            <p className="text-xs text-gray-500">juan@ejemplo.com</p>
                        </div>
                        <div className="border-t border-gray-100">
                            <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Perfil
                            </Link>
                            <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Configuración
                            </Link>
                        </div>
                        <div className="border-t border-gray-100">
                            <Link href="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Cerrar Sesión
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </header>
    )
}

