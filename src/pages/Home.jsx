"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import BanksSection from "../components/BanksSection"
import About from "./About"
import Footer from "./Footer"

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
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
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-butcher-600 font-medium text-lg mb-4 block"
            >
              Nuestra Selección
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-serif text-gray-900 mb-6"
            >
              Cortes Destacados
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Descubre nuestra selección de los cortes más exclusivos, 
              cuidadosamente elegidos para garantizar la máxima calidad
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16"
          >
            {/* Featured Product 1 */}
            <motion.div
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative overflow-hidden rounded-3xl shadow-xl"
            >
              <div className="aspect-w-4 aspect-h-5">
                <img
                  src="https://images.unsplash.com/photo-1615937722923-67f6deaf2cc9?auto=format&fit=crop&w=800&q=80"
                  alt="Costillar Premium"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <span className="text-butcher-400 font-medium mb-2 block">Premium</span>
                <h3 className="text-3xl font-serif mb-3">Costillar Premium</h3>
                <p className="text-gray-200 mb-4 text-lg opacity-90">El corte perfecto para cada ocasión</p>
                <p className="font-serif text-2xl text-butcher-400">$29.99/kg</p>
              </div>
            </motion.div>

            {/* Featured Product 2 */}
            <motion.div
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative overflow-hidden rounded-3xl shadow-xl"
            >
              <div className="aspect-w-4 aspect-h-5">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
                  alt="Bife de Chorizo"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <span className="text-butcher-400 font-medium mb-2 block">Destacado</span>
                <h3 className="text-3xl font-serif mb-3">Bife de Chorizo</h3>
                <p className="text-gray-200 mb-4 text-lg opacity-90">Sabor y terneza incomparables</p>
                <p className="font-serif text-2xl text-butcher-400">$27.99/kg</p>
              </div>
            </motion.div>

            {/* Featured Product 3 */}
            <motion.div
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative overflow-hidden rounded-3xl shadow-xl"
            >
              <div className="aspect-w-4 aspect-h-5">
                <img
                  src="https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&w=800&q=80"
                  alt="Lomo Fino"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <span className="text-butcher-400 font-medium mb-2 block">Exclusivo</span>
                <h3 className="text-3xl font-serif mb-3">Lomo Fino</h3>
                <p className="text-gray-200 mb-4 text-lg opacity-90">La máxima expresión de calidad</p>
                <p className="font-serif text-2xl text-butcher-400">$34.99/kg</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-butcher-600 text-gray-900 px-10 py-5 rounded-full text-xl font-medium inline-flex items-center gap-3 group hover:bg-butcher-700 transition-all duration-300 shadow-lg shadow-butcher-600/20"
              >
                Explorar Catálogo Completo
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <BanksSection />
      <Footer />
    </div>
  )
}

export default Home;