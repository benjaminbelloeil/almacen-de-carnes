"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ProductCard from "../components/ProductCard"

const products = [
  {
    title: "Premium Ribeye",
    price: "29.99",
    description: "Perfectly marbled for maximum flavor",
    image: "https://images.unsplash.com/photo-1615937722923-67f6deaf2cc9?auto=format&fit=crop&w=800&q=80",
    category: "Premium Cuts",
  },
  {
    title: "Tenderloin",
    price: "34.99",
    description: "The most tender cut of beef",
    image: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&w=800&q=80",
    category: "Premium Cuts",
  },
  {
    title: "New York Strip",
    price: "27.99",
    description: "Classic steakhouse favorite",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    category: "Premium Cuts",
  },
  {
    title: "T-Bone Steak",
    price: "32.99",
    description: "The best of both worlds",
    image: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?auto=format&fit=crop&w=800&q=80",
    category: "Premium Cuts",
  },
  {
    title: "Ground Beef",
    price: "12.99",
    description: "Perfect for burgers and meatballs",
    image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=800&q=80",
    category: "Grill Favorites",
  },
  {
    title: "Beef Short Ribs",
    price: "24.99",
    description: "Rich and flavorful",
    image: "https://images.unsplash.com/photo-1611518040286-9af15f633f7d?auto=format&fit=crop&w=800&q=80",
    category: "Grill Favorites",
  },
  {
    title: "Pork Chops",
    price: "18.99",
    description: "Juicy and tender",
    image: "https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&w=800&q=80",
    category: "Grill Favorites",
  },
  {
    title: "Lamb Chops",
    price: "29.99",
    description: "Premium quality lamb",
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=800&q=80",
    category: "Premium Cuts",
  },
  {
    title: "Chicken Breast",
    price: "9.99",
    description: "Lean and versatile",
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=800&q=80",
    category: "Special Offers",
  },
  // ... previous products
]

const categories = ["All", "Premium Cuts", "Grill Favorites", "Special Offers"]

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((product) => product.category === selectedCategory)

  return (
    <div className="min-h-screen pt-20 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif mb-4 text-gray-900"
          >
            Our Premium Selection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Discover our carefully curated selection of premium meats, sourced from the finest Argentine farms
          </motion.p>
        </div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? "bg-butcher-600 text-white shadow-lg shadow-butcher-600/20"
                  : "bg-white text-gray-800 hover:bg-butcher-50 hover:text-butcher-600 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}

export default Products

