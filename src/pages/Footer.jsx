import { FaWhatsapp, FaInstagram, FaFacebook, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <footer className="bg-butcher-50 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <img src="/Logo.jpg" alt="Almacen de Carnes Logo" className="h-20 w-auto rounded-lg shadow-lg" />
            <p className="text-gray-700">
              Ofreciendo los mejores cortes de carne desde 1990. Calidad y tradición en cada producto.
            </p>
          </motion.div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4 text-gray-900">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-700 hover:text-butcher-600 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-700 hover:text-butcher-600 transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-700 hover:text-butcher-600 transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-700 hover:text-butcher-600 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4 text-gray-900">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-700">
                <FaMapMarkerAlt className="text-butcher-600" />
                <span>123 Calle San Martín, San Nicolás</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <FaPhone className="text-butcher-600" />
                <span>+54 336 442-1234</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <FaEnvelope className="text-butcher-600" />
                <span>info@almacendecarnes.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4 text-gray-900">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/543364421234"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:text-[#128C7E] transition-colors"
              >
                <FaWhatsapp className="w-8 h-8" />
              </a>
              <a
                href="https://instagram.com/almacendecarnes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E4405F] hover:text-[#C13584] transition-colors"
              >
                <FaInstagram className="w-8 h-8" />
              </a>
              <a
                href="https://facebook.com/almacendecarnes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1877F2] hover:text-[#166FE5] transition-colors"
              >
                <FaFacebook className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Almacén de Carnes. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-600 hover:text-butcher-600 text-sm transition-colors">
                Política de Privacidad
              </Link>
              <Link to="/terms" className="text-gray-600 hover:text-butcher-600 text-sm transition-colors">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer