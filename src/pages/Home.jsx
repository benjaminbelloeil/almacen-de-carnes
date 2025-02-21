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
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white to-gray-50">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551355738-1875c6f6c7f0?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />
        </div>

        <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <img
              src="./Logo.jpg"
              alt="Almacén de Carnes"
              className="h-32 mb-8 mx-auto lg:mx-0"
            />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 text-gray-900 leading-tight">
              Carne Argentina de Primera
              <span className="block text-butcher-600">Calidad</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Descubri los mejores cortes de San Nicolás, donde la tradición se une a la excelencia en cada pieza
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link to="/products">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-butcher-600 text-gray-800 px-8 py-3 rounded-full text-lg hover:bg-butcher-700 transition-colors inline-flex items-center gap-2 group shadow-lg shadow-butcher-600/20"
                >
                  Ver Nuestra Selección
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white text-butcher-600 border-2 border-butcher-600 px-8 py-3 rounded-full text-lg hover:bg-butcher-50 transition-colors"
                >
                  Contáctanos
                </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex-1 relative"
          >
            <img
              src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=800&q=80"
              alt="Selección de carne premium"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl">
              <div className="text-butcher-600 font-serif text-2xl">Más de 10</div>
              <div className="text-gray-600">Años de Excelencia</div>
            </div>
          </motion.div>
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

export default Home