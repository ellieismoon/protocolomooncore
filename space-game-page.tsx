"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, Users, Zap, Target, Star, Moon, Play, Download, Shield } from "lucide-react"

export default function SpaceGamePage() {
  const [scrollY, setScrollY] = useState(0)
  
  // Helper function to get the correct path for GitHub Pages
  const getAssetPath = (path: string) => {
    const basePath = process.env.NODE_ENV === 'production' ? '/protocolomooncore' : ''
    return `${basePath}${path}`
  }

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Enhanced Starry Background */}
      <div className="fixed inset-0 z-0">
        {/* Constellation patterns */}
        <svg className="absolute inset-0 w-full h-full opacity-30">
          <defs>
            <pattern id="constellation" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="white" opacity="0.8" />
              <circle cx="150" cy="80" r="0.5" fill="white" opacity="0.6" />
              <circle cx="100" cy="150" r="1.5" fill="white" opacity="0.9" />
              <line x1="50" y1="50" x2="150" y2="80" stroke="white" strokeWidth="0.5" opacity="0.3" />
              <line x1="150" y1="80" x2="100" y2="150" stroke="white" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#constellation)" />
        </svg>

        {/* Animated stars */}
        {[...Array(80)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}

        {/* Nebula effect */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `radial-gradient(ellipse at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 50%),
                        radial-gradient(ellipse at 80% 70%, rgba(255,255,255,0.05) 0%, transparent 50%)`,
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <img 
                src={getAssetPath("/LOGO_PAG_sin_l.png")}
                alt="Protocolo Mooncore Logo" 
                className="w-8 h-8 sm:w-12 sm:h-12 md:w-15 md:h-15 object-contain"
              />
              <span className="text-sm sm:text-lg md:text-xl font-bold tracking-wider">PROTOCOLO MOONCORE</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#gameplay" className="text-sm uppercase tracking-wide hover:text-gray-300 transition-colors">
                Gameplay
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Split Layout */}
      <section className="relative z-10 min-h-screen flex items-center pt-16 sm:pt-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none">
                  PROTOCOLO
                  <br />
                  <span className="text-stroke">MOONCORE</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed mx-auto lg:mx-0">
                  Un emocionante juego de mesa donde cada jugador lidera una misión interestelar con un solo objetivo: llegar con la mayor cantidad de tripulantes posibles a la Luna. 
                  A lo largo de la partida, explorarás el espacio colocando losetas hexagonales que cambian el tablero constantemente. 
                  Enfréntate a campos gravitacionales, atraviesa agujeros negros, evita colisiones con meteoritos y aprovecha los atajos del universo para adelantarte a tus oponentes.
                  Cada decisión cuenta. Cada loseta puede impulsarte… o hacerte perderlo todo.
                </p>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-4 sm:space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold">2-3</div>
                  <div className="text-xs uppercase tracking-wide text-gray-400">Jugadores</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold">90</div>
                  <div className="text-xs uppercase tracking-wide text-gray-400">Minutos</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold">14+</div>
                  <div className="text-xs uppercase tracking-wide text-gray-400">Edad</div>
                </div>
              </div>
            </div>

            {/* Right Side - Floating Cards */}
            <div className="relative h-64 sm:h-80 lg:h-[600px] mt-8 lg:mt-0">
              <Card
                className="absolute top-0 right-0 w-48 sm:w-56 lg:w-64 bg-black/70 border-white/20 backdrop-blur-sm transform rotate-1 sm:rotate-3 hover:rotate-0 transition-transform duration-500"
                style={{ transform: `translateY(${scrollY * -0.1}px) rotate(3deg)` }}
              >
                <CardHeader className="p-4 sm:p-6">
                  <Rocket className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  <CardTitle className="text-white text-sm sm:text-base">Explora. Sobrevive. Llega a la Luna.</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <CardDescription className="text-gray-300 text-xs sm:text-sm">
                    Un juego de estrategia espacial donde cada loseta puede cambiar tu destino.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card
                className="absolute top-20 sm:top-32 left-4 sm:left-8 w-48 sm:w-56 lg:w-64 bg-black/70 border-white/20 backdrop-blur-sm transform -rotate-1 sm:-rotate-2 hover:rotate-0 transition-transform duration-500"
                style={{ transform: `translateY(${scrollY * -0.05}px) rotate(-2deg)` }}
              >
                <CardHeader className="p-4 sm:p-6">
                  <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  <CardTitle className="text-white text-sm sm:text-base">¡La Luna no espera a nadie!</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <CardDescription className="text-gray-300 text-xs sm:text-sm">
                    Construye tu ruta, esquiva peligros y supera a tus rivales.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card
                className="absolute bottom-0 right-4 sm:right-12 w-48 sm:w-56 lg:w-64 bg-black/70 border-white/20 backdrop-blur-sm transform rotate-1 hover:rotate-0 transition-transform duration-500 hidden sm:block"
                style={{ transform: `translateY(${scrollY * -0.15}px) rotate(1deg)` }}
              >
                <CardHeader className="p-4 sm:p-6">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  <CardTitle className="text-white text-sm sm:text-base">El protocolo es una aventura táctica en el espacio profundo.</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <CardDescription className="text-gray-300 text-xs sm:text-sm">
                    Coloca losetas, esquiva agujeros negros y lidera a tu tripulación hacia la victoria.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Gameplay Section - Asymmetrical Layout */}
      <section id="gameplay" className="relative z-10 py-16 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-16">
            {/* Large Feature Card */}
            <div className="lg:col-span-2">
              <Card className="bg-gradient-to-br from-black/80 to-black/40 border-white/20 backdrop-blur-sm h-full">
                <CardContent className="p-6 sm:p-8 lg:p-12">
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-white rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 sm:w-8 sm:h-8" />
                      </div>
                      <div className="text-center sm:text-left">
                        <h3 className="text-2xl sm:text-3xl font-bold">ESTRATEGIA MULTIJUGADOR</h3>
                        <p className="text-gray-400">Dirige tu facción hacia la victoria</p>
                      </div>
                    </div>
                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed text-center sm:text-left">
                      Ganarás si eres el jugador que logra llevar 
                      la mayor cantidad de tripulación a la Luna
                      antes de que se llegue al límite.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-black bg-transparent w-full sm:w-auto"
                        asChild
                        >
                        <a href={getAssetPath("/MECANICAS_MOONCORE.pdf")} download="MECANICAS_MOONCORE.pdf">
                          <Download className="w-5 h-5 mr-2" />
                          Descarga las reglas
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Stacked Small Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-8 lg:space-y-0">
              <Card className="bg-black/60 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6 sm:p-8 text-center">
                  <Zap className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 text-white" />
                  <h4 className="text-lg sm:text-xl font-bold mb-2 text-white">LANZA EL DADO</h4>
                  <p className="text-gray-300 text-sm">Listo para jugar en menos de 5 minutos</p>
                </CardContent>
              </Card>

              <Card className="bg-black/60 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6 sm:p-8 text-center">
                  <Moon className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 text-white" />
                  <h4 className="text-lg sm:text-xl font-bold mb-2 text-white">TABLERO MODULAR</h4>
                  <p className="text-gray-300 text-sm">Controla el terreno. Un mapa distinto cada partida</p>
                </CardContent>
              </Card>

              <Card className="bg-black/60 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6 sm:p-8 text-center">
                  <Star className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 text-white" />
                  <h4 className="text-lg sm:text-xl font-bold mb-2 text-white">ESCALA EPICA</h4>
                  <p className="text-gray-300 text-sm">Haz lo que sea necesario por la dominación lunar</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 py-16 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              LA GALAXIA
              <br />
              <span className="text-stroke">TE ESPERA</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 px-4">
              Únete a las filas de los comandantes estelares. Tu imperio comienza con una sola decisión.
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 w-full sm:w-auto">
              <Rocket className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
              LANZA TU CONQUISTA
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <Star className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="font-bold text-sm sm:text-base">PROTOCOLO MOONCORE</span>
            </div>
            <div className="text-gray-400 text-xs sm:text-sm text-center md:text-right">
              © 2025 Protocolo Mooncore - Ellie Valencia. Diseñado para el cosmos.
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .text-stroke {
          -webkit-text-stroke: 2px white;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  )
}
