"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ProductCard from "../components/ProductCard"

const products = [
  {
    title: "Costillar Premium",
    price: "29.99",
    description: "Con el veteado ideal para el máximo sabor",
    image: "https://images.unsplash.com/photo-1615937722923-67f6deaf2cc9?auto=format&fit=crop&w=800&q=80",
    category: "Cortes Premium",
  },
  {
    title: "Lomo Fino",
    price: "34.99",
    description: "El corte más suave y tierno",
    image: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&w=800&q=80",
    category: "Cortes Premium",
  },
  {
    title: "Bife de Chorizo",
    price: "27.99",
    description: "El clásico preferido de la parrilla",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    category: "Cortes Premium",
  },
  {
    title: "T-Bone Steak",
    price: "32.99",
    description: "Dos sabores en un mismo corte",
    image: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?auto=format&fit=crop&w=800&q=80",
    category: "Cortes Premium",
  },
  {
    title: "Carne Molida",
    price: "12.99",
    description: "Ideal para hamburguesas y albóndigas",
    image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=800&q=80",
    category: "Favoritos a la Parrilla",
  },
  {
    title: "Asado de Tira",
    price: "24.99",
    description: "Sabroso y jugoso para asar",
    image: "https://images.unsplash.com/photo-1611518040286-9af15f633f7d?auto=format&fit=crop&w=800&q=80",
    category: "Favoritos a la Parrilla",
  },
  {
    title: "Chuletas de Cerdo",
    price: "18.99",
    description: "Tiernas y deliciosas",
    image: "https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&w=800&q=80",
    category: "Favoritos a la Parrilla",
  },
  {
    title: "Chuletas de Cordero",
    price: "29.99",
    description: "Calidad premium asegurada",
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=800&q=80",
    category: "Cortes Premium",
  },
  {
    title: "Pechuga de Pollo",
    price: "9.99",
    description: "Magra y versátil para todo tipo de recetas",
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=800&q=80",
    category: "Ofertas Especiales",
  },
]

const categories = ["Todos", "Cortes Premium", "A la Parrilla", "Ofertas Especiales"]

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  const filteredProducts =
    selectedCategory === "Todos"
      ? products
      : products.filter((product) => product.category === selectedCategory)

  return (
    <div className="min-h-screen pt-32 pb-16 bg-white">
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

        {/* Navegación de Categorías */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? "bg-butcher-600 text-gray-800 shadow-lg shadow-butcher-600/20"
                  : "bg-white text-gray-800 hover:bg-butcher-50 hover:text-butcher-600 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Productos */}
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
    </div>
  )
}

export default Products