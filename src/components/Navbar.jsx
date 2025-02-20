/* eslint-disable react/prop-types */
"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ShoppingCart } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.05,
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  }

  const itemVariants = {
    closed: { opacity: 0, x: -16 },
    open: { opacity: 1, x: 0 },
  }

  const navbarVariants = {
    top: {
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      backdropFilter: "blur(0px)",
      boxShadow: "none",
    },
    scrolled: {
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(8px)",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    },
  }

  return (
    <motion.nav
      initial="top"
      animate={isScrolled ? "scrolled" : "top"}
      variants={navbarVariants}
      transition={{ duration: 0.3 }}
      className="fixed w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-4">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20principal.jpg-Kifo0BeHZ9WYJHOuy18760Y19Rw774.jpeg"
              alt="Almacén de Carnes"
              className="h-12"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" isActive={location.pathname === "/"}>
              Home
            </NavLink>
            <NavLink to="/products" isActive={location.pathname === "/products"}>
              Products
            </NavLink>
            <NavLink to="/contact" isActive={location.pathname === "/contact"}>
              Contact
            </NavLink>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-butcher-600 text-white px-6 py-2.5 rounded-full hover:bg-butcher-700 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Cart (0)</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? "close" : "menu"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X className="w-6 h-6 text-butcher-600" /> : <Menu className="w-6 h-6 text-butcher-600" />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-3 space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/products", label: "Products" },
                { to: "/contact", label: "Contact" },
              ].map(({ to, label }) => (
                <motion.div key={to} variants={itemVariants}>
                  <MobileNavLink to={to} isActive={location.pathname === to} onClick={() => setIsOpen(false)}>
                    {label}
                  </MobileNavLink>
                </motion.div>
              ))}
              <motion.div variants={itemVariants}>
                <button className="w-full flex items-center justify-center space-x-2 bg-butcher-600 text-white py-3 rounded-lg font-medium hover:bg-butcher-700 transition-colors">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Cart (0)</span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

const NavLink = ({ to, isActive, children }) => (
  <Link
    to={to}
    className={`relative px-4 py-2 rounded-full font-medium transition-colors ${
      isActive ? "text-butcher-600" : "text-gray-800 hover:text-butcher-600"
    }`}
  >
    {children}
    {isActive && (
      <motion.div
        layoutId="activeNavLink"
        className="absolute inset-0 bg-butcher-50 rounded-full -z-10"
        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
      />
    )}
  </Link>
)

const MobileNavLink = ({ to, isActive, onClick, children }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`block w-full px-4 py-2 rounded-lg font-medium transition-colors ${
      isActive ? "text-butcher-600 bg-butcher-50" : "text-gray-800 hover:text-butcher-600 hover:bg-butcher-50"
    }`}
  >
    {children}
  </Link>
)

export default Navbar

