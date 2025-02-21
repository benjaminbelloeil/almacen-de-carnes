"use client"

import { motion } from "framer-motion"
import { ShoppingCart, Heart } from "lucide-react"

// eslint-disable-next-line react/prop-types
const ProductCard = ({ title, price, description, image, category }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-72 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Category Tag */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 rounded-full text-sm font-medium text-butcher-600">{category}</span>
        </div>

        {/* Favorite Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/90 text-butcher-600 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart className="w-5 h-5" />
        </motion.button>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-serif mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Precio por kg</p>
            <p className="text-2xl font-semibold text-butcher-600">${price}</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-butcher-600 text-white rounded-full inline-flex items-center gap-2 hover:bg-butcher-700 transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            Añadir al carrito
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard