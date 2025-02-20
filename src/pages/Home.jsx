"use client"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import BanksSection from "../components/BanksSection"
import Products from "./Products"

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
              Premium Quality
              <span className="block text-butcher-600">Argentine Meats</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Discover the finest cuts in San Nicolás, where tradition meets excellence in every piece
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-butcher-600 text-gray-800 px-8 py-3 rounded-full text-lg hover:bg-butcher-700 transition-colors inline-flex items-center gap-2 group shadow-lg shadow-butcher-600/20"
              >
                View Our Selection
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-butcher-600 border-2 border-butcher-600 px-8 py-3 rounded-full text-lg hover:bg-butcher-50 transition-colors"
              >
                Contact Us
              </motion.button>
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
              alt="Premium meat selection"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl">
              <div className="text-butcher-600 font-serif text-2xl">20+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
          </motion.div>
        </div>
      </div>
      <Products />
      <BanksSection />
    </div>
  )
}

export default Home