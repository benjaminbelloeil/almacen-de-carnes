/* eslint-disable react/prop-types */
"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, Store, Phone } from "lucide-react" // Added icon imports

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
      borderBottom: "1px solid rgba(229, 231, 235, 0)",
    },
    solid: {
      background: "rgba(255, 255, 255, 0.98)",
      backdropFilter: "blur(12px)",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      borderBottom: "1px solid rgba(229, 231, 235, 1)",
    },
  }

  const menuItems = [
    { to: "/", label: "Inicio", icon: <Home className="w-5 h-5" /> },
    { to: "/products", label: "Productos", icon: <Store className="w-5 h-5" /> },
    { to: "/contact", label: "Contacto", icon: <Phone className="w-5 h-5" /> },
  ]

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
          <div className="md:hidden relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg"
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
                    <X className="w-6 h-6 text-gray-900" /> : 
                    <Menu className="w-6 h-6 text-gray-900" />
                  }
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* Mobile Menu - Now attached to the button */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute right-0 top-14 md:hidden"
                >
                  <motion.div 
                    className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 w-48"
                    initial="closed"
                    animate="open"
                    variants={{
                      open: {
                        clipPath: "inset(0% 0% 0% 0% round 1rem)",
                        transition: {
                          type: "spring",
                          bounce: 0,
                          duration: 0.7,
                          delayChildren: 0.3,
                          staggerChildren: 0.05
                        }
                      },
                      closed: {
                        clipPath: "inset(10% 50% 90% 50% round 1rem)",
                        transition: {
                          type: "spring",
                          bounce: 0,
                          duration: 0.3
                        }
                      }
                    }}
                  >
                    <div className="py-2">
                      {menuItems.map(({ to, label, icon }) => (
                        <motion.div
                          key={to}
                          variants={{
                            open: { opacity: 1, y: 0 },
                            closed: { opacity: 0, y: 20 }
                          }}
                        >
                          <MobileNavLink
                            to={to}
                            isActive={location.pathname === to}
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="flex items-center gap-3">
                              {icon}
                              <span>{label}</span>
                            </div>
                          </MobileNavLink>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
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
    className={`block w-full px-4 py-3 text-sm font-medium transition-all duration-300 ${
      isActive 
        ? "bg-gradient-to-r from-butcher-50 to-butcher-100 text-butcher-600" 
        : "text-gray-700 hover:bg-butcher-50 hover:text-butcher-600"
    }`}
  >
    {children}
  </Link>
)

export default Navbar