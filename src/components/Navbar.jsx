/* eslint-disable react/prop-types */
"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight - 80)
    }

    if (isHomePage) {
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    } else {
      setIsScrolled(true)
    }
  }, [isHomePage])

  const navbarVariants = {
    transparent: {
      background: "rgba(255, 255, 255, 0)",
      backdropFilter: "none",
      boxShadow: "none",
      borderBottom: "1px solid rgba(229, 231, 235, 0)", // Transparent border
    },
    solid: {
      background: "rgba(255, 255, 255, 0.98)",
      backdropFilter: "blur(12px)",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      borderBottom: "1px solid rgba(229, 231, 235, 1)",
    },
  }

  return (
    <motion.nav
      initial="transparent"
      animate={isScrolled || !isHomePage ? "solid" : "transparent"}
      variants={navbarVariants}
      transition={{ duration: 0.4 }}
      className="fixed w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-4">
            <motion.img
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              src={isScrolled || !isHomePage ? "./Logo5.jpg" : "./Logo4.jpg"}
              alt="Almacén de Carnes"
              className="h-14 w-auto transition-all duration-300"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            <NavLink 
              to="/" 
              isActive={location.pathname === "/"} 
              isTransparent={!isScrolled && isHomePage}
            >
              Inicio
            </NavLink>
            <NavLink 
              to="/products" 
              isActive={location.pathname === "/products"}
              isTransparent={!isScrolled && isHomePage}
            >
              Productos
            </NavLink>
            <NavLink 
              to="/contact" 
              isActive={location.pathname === "/contact"}
              isTransparent={!isScrolled && isHomePage}
            >
              Contacto
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded-xl bg-gradient-to-r from-butcher-50 to-butcher-100 hover:from-butcher-100 hover:to-butcher-200 transition-all duration-300 shadow-md"
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
                {isOpen ? 
                  <X className="w-7 h-7 text-butcher-600" /> : 
                  <Menu className="w-7 h-7 text-butcher-600" />
                }
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <motion.div 
              className="px-4 py-6 space-y-3"
              initial="closed"
              animate="open"
              variants={{
                open: {
                  transition: { staggerChildren: 0.1, delayChildren: 0.1 }
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 }
                }
              }}
            >
              {[
                { to: "/", label: "Inicio" },
                { to: "/products", label: "Productos" },
                { to: "/contact", label: "Contacto" },
              ].map(({ to, label }) => (
                <motion.div
                  key={to}
                  variants={{
                    open: { y: 0, opacity: 1 },
                    closed: { y: 20, opacity: 0 }
                  }}
                >
                  <MobileNavLink
                    to={to}
                    isActive={location.pathname === to}
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </MobileNavLink>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

const NavLink = ({ to, isActive, isTransparent, children }) => (
  <Link
    to={to}
    className="relative group px-6 py-3 rounded-xl"
  >
    <span 
      className={`text-base font-medium transition-colors duration-300 ${
        isActive
          ? isTransparent 
            ? "text-white" 
            : "text-butcher-600"
          : isTransparent
            ? "text-white/90 group-hover:text-white"
            : "text-gray-700 group-hover:text-butcher-600"
      }`}
      style={{ transition: "color 0.3s ease, opacity 0.3s ease" }}
    >
      {children}
    </span>
    <motion.div
      className={`absolute bottom-0 left-0 right-0 h-1 rounded-full transition-colors duration-300 ${
        isTransparent ? "bg-white" : "bg-butcher-600"
      }`}
      initial={false}
      animate={{
        opacity: isActive ? 1 : 0,
        width: isActive ? "100%" : "0%",
      }}
      transition={{ duration: 0.3 }}
    />
  </Link>
)

const MobileNavLink = ({ to, isActive, onClick, children }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`block w-full px-6 py-4 text-base font-medium rounded-xl transition-all duration-300 ${
      isActive 
        ? "bg-gradient-to-r from-butcher-50 to-butcher-100 text-butcher-600 shadow-md" 
        : "text-gray-700 hover:bg-butcher-50 hover:text-butcher-600"
    }`}
  >
    {children}
  </Link>
)

export default Navbar