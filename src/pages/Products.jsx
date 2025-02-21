"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ProductCard from "../components/ProductCard"
import Footer from "./Footer"

const products = [
  // Res Products
  {
    title: "Costillar Premium",
    price: "29.99",
    description: "Con el veteado ideal para el máximo sabor",
    image: "https://images.unsplash.com/photo-1615937722923-67f6deaf2cc9?auto=format&fit=crop&w=800&q=80",
    category: "Res",
  },
  {
    title: "Lomo Fino",
    price: "34.99",
    description: "El corte más suave y tierno",
    image: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&w=800&q=80",
    category: "Res",
  },
  {
    title: "Bife de Chorizo",
    price: "27.99",
    description: "El clásico preferido de la parrilla",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    category: "Res",
  },
  {
    title: "T-Bone Steak",
    price: "32.99",
    description: "Dos sabores en un mismo corte",
    image: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?auto=format&fit=crop&w=800&q=80",
    category: "Res",
  },
  {
    title: "Asado de Tira",
    price: "24.99",
    description: "Sabroso y jugoso para asar",
    image: "https://images.unsplash.com/photo-1611518040286-9af15f633f7d?auto=format&fit=crop&w=800&q=80",
    category: "Res",
  },
  // Pollo Products
  {
    title: "Pechuga de Pollo",
    price: "9.99",
    description: "Magra y versátil para todo tipo de recetas",
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=800&q=80",
    category: "Pollo",
  },
  {
    title: "Muslos de Pollo",
    price: "8.99",
    description: "Jugosos y perfectos para el horno",
    image: "https://images.unsplash.com/photo-1588167048600-c2f7acbf26e9?auto=format&fit=crop&w=800&q=80",
    category: "Pollo",
  },
  {
    title: "Pollo Entero",
    price: "15.99",
    description: "Fresco y listo para preparar",
    image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=800&q=80",
    category: "Pollo",
  },
  // Pescado Products
  {
    title: "Salmón Fresco",
    price: "24.99",
    description: "Rico en omega-3, cortado en filetes",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    category: "Pescado",
  },
  {
    title: "Merluza Premium",
    price: "19.99",
    description: "Pescado blanco de textura suave",
    image: "https://images.unsplash.com/photo-1578159802020-13d79926fe6d?auto=format&fit=crop&w=800&q=80",
    category: "Pescado",
  },
  {
    title: "Atún Fresco",
    price: "29.99",
    description: "Corte premium para la parrilla",
    image: "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?auto=format&fit=crop&w=800&q=80",
    category: "Pescado",
  }
]

const categories = ["Todos", "Res", "Pollo", "Pescado"]

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  const filteredProducts =
    selectedCategory === "Todos"
      ? products
      : products.filter((product) => product.category === selectedCategory)

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow pt-32 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-serif mb-4 text-gray-900"
            >
              Nuestra Selección Premium
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Descubre nuestra cuidada selección de carnes premium, provenientes de las mejores haciendas argentinas
            </motion.p>
          </div>

          {/* Category Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12 min-h-[48px] px-4"
          >
            <div className="flex flex-wrap justify-center gap-3 w-full">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-1.5 rounded-full text-sm font-medium transition-all duration-300 min-w-[140px] ${
                    selectedCategory === category
                      ? "bg-butcher-600 shadow-md shadow-butcher-600/20 border border-gray-200"
                      : "bg-gray-100 hover:bg-butcher-50 border border-gray-200"
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className={`${
                    selectedCategory === category 
                      ? "text-gray-800" 
                      : "text-gray-800"
                  }`}>
                    {category}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Products Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.9,
                  ease: [0.6, 0.05, 0.01, 0.9],
                  staggerChildren: 0.1
                }
              }}
              exit={{ 
                opacity: 0,
                y: -20, 
                transition: { 
                  duration: 0.6,
                  ease: "easeInOut"
                }
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 0.5,
                      ease: "easeOut"
                    }
                  }}
                >
                  <ProductCard {...product} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Products