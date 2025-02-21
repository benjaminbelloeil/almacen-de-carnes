"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import BanksSection from "../components/BanksSection"
import About from "./About"
import Footer from "./Footer"





const Home = () => {

  useEffect(() => {
    document.body.classList.add("home")
    return () => document.body.classList.remove("home")
  }, [])
  
  return (
    // Wrap everything in a container with safe area insets and black background
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        paddingTop: "env(safe-area-inset-top)",
        paddingBottom: "env(safe-area-inset-bottom)",
        backgroundColor: "black" // Matches the hero's black overlay
      }}
    >
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=1920&q=80')]
            bg-cover bg-fixed bg-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
        </motion.div>

        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-serif mb-2 text-white leading-tight">
                Carne Argentina de Primera
                <span className="block mt-2 text-butcher-400">Calidad</span>
              </h1>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mx-auto mt-2 h-0.5 bg-butcher-400 w-1/4"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto mt-8"
              >
                Descubri los mejores cortes de San Nicolás, donde la tradición se une 
                a la excelencia en cada pieza
              </motion.p>

              <div className="flex flex-wrap gap-6 justify-center">
                <Link to="/products">
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "#fff" }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-butcher-400 text-white hover:text-black px-10 py-4 rounded-full text-lg font-medium 
                    shadow-lg shadow-butcher-400/30 transition-all duration-300 inline-flex items-center gap-2"
                  >
                    Ver Nuestra Selección
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </motion.button>
                </Link>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                    whileTap={{ scale: 0.98 }}
                    className="border-2 border-white text-white px-10 py-4 rounded-full text-lg font-medium 
                    hover:border-butcher-400 transition-all duration-300"
                  >
                    Contáctanos
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <About />

      {/* Featured Products Section */}
      <section className="py-32 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Information */}
            <div className="lg:pr-12 flex flex-col justify-between">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <span className="text-butcher-600 font-medium text-lg">Nuestra Selección</span>
                <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 leading-tight">
                  La Mejor Carne Argentina en San Nicolás
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  En nuestro almacén, cada corte cuenta una historia de tradición y excelencia. 
                  Seleccionamos cuidadosamente las mejores piezas para ofrecerte una experiencia 
                  gastronómica única.
                </p>
                <div className="space-y-4 text-gray-600">
                  <h3 className="text-2xl font-serif text-gray-900">Nuestros Cortes Incluyen:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-4">
                      <span className="w-2 h-2 bg-butcher-600 rounded-full mt-2"/>
                      <span>
                        <strong className="block text-gray-900">Cortes de Res Premium</strong>
                        Bife de chorizo, lomo, entraña y costilla, preparados según la tradición argentina
                      </span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="w-2 h-2 bg-butcher-600 rounded-full mt-2"/>
                      <span>
                        <strong className="block text-gray-900">Selección de Cerdo</strong>
                        Pechito, bondiola y costillas, con nuestro toque especial
                      </span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="w-2 h-2 bg-butcher-600 rounded-full mt-2"/>
                      <span>
                        <strong className="block text-gray-900">Aves Seleccionadas</strong>
                        Pollo fresco y otras aves de primera calidad
                      </span>
                    </li>
                  </ul>
                </div>

                <Link to="/products" className="inline-block mt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-butcher-600 text-white px-10 py-4 rounded-full text-lg font-medium 
                    inline-flex items-center gap-3 group hover:bg-butcher-700 transition-all duration-300"
                  >
                    Explorar Todos los Cortes
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
              </motion.div>

              {/* "Sabías que" Card - Moved to left column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="bg-butcher-50 rounded-3xl p-8 border border-butcher-100 shadow-xl mt-4"
              >
                <div className="text-center space-y-4">
                  <h4 className="text-2xl font-serif text-butcher-800">
                    ¿Sabías que?
                  </h4>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Nuestros cortes son <span className="font-semibold text-butcher-800">100% frescos</span> y 
                    seleccionados diariamente. Trabajamos directamente con productores locales de confianza 
                    para garantizar la más alta calidad en cada pieza que ofrecemos. Además, nuestro equipo 
                    de expertos carniceros cuenta con más de 30 años de experiencia en el oficio.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Stacked Images */}
            <div className="space-y-6">
              {/* Cortes de Res */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl shadow-xl"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src="https://images.unsplash.com/photo-1615937722923-67f6deaf2cc9?auto=format&fit=crop&w=1200&q=80"
                    alt="Cortes de Res"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-3xl font-serif text-white mb-2">Cortes de Res</h3>
                    <span className="text-butcher-400 font-medium">Premium Selection</span>
                  </div>
                </div>
              </motion.div>

              {/* Cortes de Cerdo */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group relative overflow-hidden rounded-3xl shadow-xl"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80"
                    alt="Cortes de Cerdo"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-3xl font-serif text-white mb-2">Cortes de Cerdo</h3>
                    <span className="text-butcher-400 font-medium">Selección Especial</span>
                  </div>
                </div>
              </motion.div>

              {/* Aves */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="group relative overflow-hidden rounded-3xl shadow-xl"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src="https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=1200&q=80"
                    alt="Aves"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-3xl font-serif text-white mb-2">Aves</h3>
                    <span className="text-butcher-400 font-medium">Frescura Garantizada</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <BanksSection />
      <Footer />
    </div>
  )
}

export default Home;