import Link from "next/link"
import { ArrowRight, Building2, Menu } from "lucide-react"

const features = [
  {
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Gestión Eficiente",
    description: "Automatiza y optimiza todos tus procesos de compra con nuestra plataforma intuitiva.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Seguridad Avanzada",
    description: "Protección de datos y transacciones con los más altos estándares de seguridad.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: "Análisis en Tiempo Real",
    description: "Monitorea y analiza tus compras con reportes detallados y métricas en tiempo real.",
  },
]

const plans = [
  {
    name: "Básico",
    description: "Perfecto para pequeñas empresas",
    price: "29.900",
    features: ["Hasta 100 órdenes mensuales", "3 usuarios", "Soporte por email", "Reportes básicos"],
  },
  {
    name: "Profesional",
    description: "Ideal para empresas en crecimiento",
    price: "99.000",
    features: ["Órdenes ilimitadas", "10 usuarios", "Soporte prioritario", "Reportes avanzados", "API access"],
  },
  {
    name: "Empresarial",
    description: "Para grandes organizaciones",
    price: "299.000",
    features: [
      "Órdenes ilimitadas",
      "Usuarios ilimitados",
      "Soporte 24/7",
      "Reportes personalizados",
      "API access",
      "Implementación dedicada",
    ],
  },
]


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="fixed w-full bg-white border-b z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Building2 className="text-blue-700" size={32} />
            <span className="text-xl font-bold text-black">SisCompras</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#caracteristicas" className="text-gray-600 hover:text-gray-900">
              Características
            </Link>
            <Link href="#precios" className="text-gray-600 hover:text-gray-900">
              Precios
            </Link>
            <Link href="#contacto" className="text-gray-600 hover:text-gray-900">
              Contacto
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            >
              Iniciar Sesión
            </Link>
          </nav>


          {/* Menú móvil */}
          <button className="md:hidden p-2">
            <Menu className="text-blue-700" size={32} />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Sistema de Gestión de Compras Empresariales
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Optimiza tus procesos de compra, gestiona proveedores y mantén el control total de tu inventario con
              nuestra solución integral.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/login"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                Comenzar ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#demo"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Ver demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Características */}
      <section id="caracteristicas" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Características Principales</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-sm border">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Precios */}
      <section id="precios" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Planes y Precios</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border p-8">
                  <h3 className="text-xl font-semibold mb-2 text-black">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <p className="text-3xl font-bold mb-6 text-green-700 flex items-center">
                    ${plan.price}
                    <span className="text-base font-normal text-gray-600">/mes</span>
                  </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/login"
                  className="block text-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  Comenzar
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">SisCompras</h3>
              <p className="text-gray-400">Sistema integral para la gestión de compras empresariales.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Producto</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Características
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Precios
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Guías
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Compañía</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Acerca de
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Términos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 SisCompras. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}


