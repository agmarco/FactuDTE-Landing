import { useState, useEffect } from 'react'
import dashboardImg from './assets/dashboard.png'
import invoiceCreationImg from './assets/invoice-creation.png'
import historialImg from './assets/historial.png'
import reportesImg from './assets/reportes.png'

function App() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)

  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null)
      }
    }

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden' // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary-600">FactuDTE</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-primary-600 transition">Características</a>
              <a href="#pricing" className="text-gray-700 hover:text-primary-600 transition">Precios</a>
              <a href="#screenshots" className="text-gray-700 hover:text-primary-600 transition">Capturas</a>
            </div>
            <div>
              <a
                href="https://app.factudte.com"
                className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition font-medium"
              >
                Comenzar
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              De Cero a <span className="text-primary-600">DTE Listo</span> en Menos de una Hora
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              La forma más simple de crear y administrar facturas electrónicas en El Salvador.
              Cumple con los requisitos gubernamentales, fácil de usar y hecho para todos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-semibold text-lg shadow-md"
              >
                Oferta de Pioneros
              </a>
              <a
                href="#features"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition font-semibold text-lg shadow-md"
              >
                Ver Más
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Sin tarjeta de crédito • Funciona en cualquier dispositivo • Modo sin conexión
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple. Práctico. Poderoso.</h2>
            <p className="text-xl text-gray-600">Todo lo que necesitás para administrar facturas, nada que no.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Súper Rápido</h3>
              <p className="text-gray-600">
                Creá facturas en segundos. Nuestra interfaz intuitiva significa que no hay curva de aprendizaje—empezá a facturar de inmediato.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">100% Cumplimiento</h3>
              <p className="text-gray-600">
                Totalmente compatible con los requisitos de DTE de El Salvador. Enviá directamente al Ministerio de Hacienda.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Funciona en Todas Partes</h3>
              <p className="text-gray-600">
                Escritorio, tableta, móvil—incluso sin conexión. Tus facturas siempre están accesibles, dondequiera que estés.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cálculos Automáticos</h3>
              <p className="text-gray-600">
                Cálculos de IVA, totales y desgloses de impuestos se hacen automáticamente. No se necesita hacer cuentas manuales.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Reportes Profesionales</h3>
              <p className="text-gray-600">
                Seguí el rendimiento de tu facturación con reportes detallados y análisis para tus necesidades contables.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Seguro y Privado</h3>
              <p className="text-gray-600">
                Tus datos permanecen privados. Arquitectura local con respaldo en la nube opcional para mayor seguridad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Oferta Especial para Pioneros</h2>
            <p className="text-xl text-gray-600 mb-8">Unite a los primeros 50 usuarios y asegurá tu precio especial</p>

            {/* Visual indicator - Spots filling up */}
            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-600">Lugares disponibles</span>
                <span className="text-sm font-bold text-blue-600">23 de 50 restantes</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500" style={{width: '54%'}}></div>
              </div>
              <div className="mt-3 flex items-center justify-center gap-1">
                {[...Array(50)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      i < 27 ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <div className="mt-2 flex items-center justify-center gap-4 text-xs text-gray-600">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <span>Reservados (27)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  <span>Disponibles (23)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold transform rotate-12 z-10">
                Oferta Limitada
              </div>

              <div className="grid md:grid-cols-2 gap-0">
                {/* Left side - Visual Benefits */}
                <div className="bg-white p-5 pb-0">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Lo Que Obtenés Como Pionero</h3>
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Ahorrás $360 USD</h4>
                        <p className="text-sm text-gray-600">$20/mes vs $35/mes por 24 meses</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Precio Bloqueado</h4>
                        <p className="text-sm text-gray-600">Garantía de precio fijo hasta 2027</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Acceso VIP</h4>
                        <p className="text-sm text-gray-600">Soporte prioritario y nuevas funciones primero</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Respaldo en la Nube</h4>
                        <p className="text-sm text-gray-600">2 años gratis de respaldo de facturas</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Visita Técnica</h4>
                        <p className="text-sm text-gray-600">Configuración y visita técnica en persona</p>
                      </div>
                    </div>
                  </div>
                  {/* Contact Button */}
                  <div className="p-5 pt-0">
                    <a
                      href="mailto:marcoaguirreg@gmail.com?subject=Consulta sobre Oferta de Pioneros - FactuDTE"
                      className="block w-full bg-blue-600 text-white text-center py-3 px-4 rounded-lg hover:bg-blue-700 transition font-semibold shadow-md"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>Contactar para Reservar</span>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Right side - Pricing Details */}
                <div className="p-5 text-white relative">
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-1">Plan Pionero</h3>
                    <p className="text-primary-100 text-sm mb-3">Solo los primeros 50 usuarios</p>
                    <div className="mb-3">
                      <span className="text-4xl font-bold">$20</span>
                      <span className="text-lg">/mes</span>
                    </div>
                    <div className="bg-white/20 rounded-lg p-2.5 mb-3">
                      <p className="font-semibold text-sm mb-0.5">Precio Fijo por 2 Años</p>
                      <p className="text-xs text-primary-100">Tu tarifa nunca aumentará hasta 2027</p>
                    </div>
                <ul className="text-left space-y-1 mb-3 text-sm">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Facturas ilimitadas (FCF y CCF)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Envío directo al gobierno</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Acceso multi-dispositivo</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Modo sin conexión</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Reportes profesionales</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Soporte prioritario</span>
                  </li>
                </ul>
                <a
                  href="https://app.factudte.com"
                  className="block w-full bg-white text-primary-600 py-3 rounded-lg font-bold text-base hover:bg-gray-50 transition"
                >
                  Reservá tu Lugar
                </a>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center mt-6 text-gray-500 text-sm">
              Precio regular: $35/mes después del período de oferta pionera
            </p>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mirá Cómo Funciona</h2>
            <p className="text-xl text-gray-600">Una interfaz limpia e intuitiva diseñada para la eficiencia</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Screenshot 1 - Dashboard */}
            <div className="group">
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelectedImage({ src: dashboardImg, alt: 'Panel de Control de FactuDTE' })}
              >
                <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white rounded px-3 py-1 text-xs text-gray-500 text-center">app.factudte.com</div>
                  </div>
                </div>
                <div className="aspect-video overflow-hidden bg-white relative group-hover:bg-gray-50">
                  <img src={dashboardImg} alt="Panel de Control de FactuDTE" className="w-full h-full object-contain" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-all">
                    <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Panel de Control</h3>
                <p className="text-gray-600">Obtené una vista completa de tu actividad de facturación de un vistazo.</p>
              </div>
            </div>

            {/* Screenshot 2 - Invoice Creation */}
            <div className="group">
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelectedImage({ src: invoiceCreationImg, alt: 'Creación de Facturas en FactuDTE' })}
              >
                <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white rounded px-3 py-1 text-xs text-gray-500 text-center">app.factudte.com</div>
                  </div>
                </div>
                <div className="aspect-video overflow-hidden bg-white relative group-hover:bg-gray-50">
                  <img src={invoiceCreationImg} alt="Creación de Facturas en FactuDTE" className="w-full h-full object-contain" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-all">
                    <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Crear Facturas</h3>
                <p className="text-gray-600">Interfaz de formulario simple que hace la creación de facturas rápida y sin errores.</p>
              </div>
            </div>

            {/* Screenshot 3 - History */}
            <div className="group">
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelectedImage({ src: historialImg, alt: 'Historial de Facturas en FactuDTE' })}
              >
                <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white rounded px-3 py-1 text-xs text-gray-500 text-center">app.factudte.com</div>
                  </div>
                </div>
                <div className="aspect-video overflow-hidden bg-white relative group-hover:bg-gray-50">
                  <img src={historialImg} alt="Historial de Facturas en FactuDTE" className="w-full h-full object-contain" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-all">
                    <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Historial de Facturas</h3>
                <p className="text-gray-600">Seguí todas tus facturas con opciones potentes de búsqueda y filtrado.</p>
              </div>
            </div>

            {/* Screenshot 4 - Reports */}
            <div className="group">
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelectedImage({ src: reportesImg, alt: 'Reportes y Análisis en FactuDTE' })}
              >
                <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white rounded px-3 py-1 text-xs text-gray-500 text-center">app.factudte.com</div>
                  </div>
                </div>
                <div className="aspect-video overflow-hidden bg-white relative group-hover:bg-gray-50">
                  <img src={reportesImg} alt="Reportes y Análisis en FactuDTE" className="w-full h-full object-contain" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-all">
                    <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Reportes</h3>
                <p className="text-gray-600">Reportes completos para contabilidad y análisis empresarial.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Listo para Simplificar tu Facturación?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Unite a los primeros 50 usuarios y empezá a crear facturas conformes al gobierno hoy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.factudte.com"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-bold text-lg shadow-md"
            >
              Comenzar Ahora
            </a>
            <a
              href="mailto:marcoaguirreg@gmail.com?subject=Consulta - FactuDTE"
              className="inline-block bg-primary-700 text-white px-8 py-4 rounded-lg hover:bg-primary-800 transition font-bold text-lg border-2 border-white shadow-md"
            >
              Contactar
            </a>
          </div>
          <p className="mt-6 text-primary-100">
            Sin tarjeta de crédito • Configuración en minutos • Cancelá en cualquier momento
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-xl mb-4">FactuDTE</h3>
              <p className="text-sm mb-4">
                La forma más simple de administrar facturas electrónicas en El Salvador.
              </p>
              <a href="mailto:marcoaguirreg@gmail.com" className="text-sm text-blue-400 hover:text-blue-300 transition">
                marcoaguirreg@gmail.com
              </a>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Producto</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-white transition">Características</a></li>
                <li><a href="#pricing" className="hover:text-white transition">Precios</a></li>
                <li><a href="#screenshots" className="hover:text-white transition">Capturas</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Acerca de</a></li>
                <li><a href="mailto:marcoaguirreg@gmail.com" className="hover:text-white transition">Contacto</a></li>
                <li><a href="mailto:marcoaguirreg@gmail.com?subject=Soporte - FactuDTE" className="hover:text-white transition">Soporte</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Política de Privacidad</a></li>
                <li><a href="#" className="hover:text-white transition">Términos de Servicio</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
            <p>&copy; 2025 FactuDTE. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            onClick={() => setSelectedImage(null)}
            aria-label="Cerrar"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="max-w-7xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
