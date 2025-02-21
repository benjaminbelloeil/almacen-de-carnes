"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from "lucide-react"
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa"
import { useState, useEffect } from "react"

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formHeight, setFormHeight] = useState(0)
  const [contactInfoHeight, setContactInfoHeight] = useState(0)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
  }

  useEffect(() => {
    const calculateHeights = () => {
      const contactInfoDiv = document.querySelector(".contact-info")
      const contactFormDiv = document.querySelector(".contact-form")

      if (contactInfoDiv && contactFormDiv) {
        setContactInfoHeight(contactInfoDiv.offsetHeight)
        setFormHeight(contactFormDiv.offsetHeight)
      }
    }

    calculateHeights()
    window.addEventListener("resize", calculateHeights)

    return () => window.removeEventListener("resize", calculateHeights)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif mb-4"
          >
            Contáctanos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            ¿Tiene preguntas sobre nuestros productos o desea realizar un pedido especial? Estamos aquí para ayudarle a
            obtener los mejores cortes para su mesa.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="contact-info space-y-8 bg-white p-8 rounded-2xl shadow-lg"
            style={{ minHeight: `${Math.max(formHeight, 300)}px` }}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-butcher-50 rounded-lg">
                <MapPin className="w-6 h-6 text-butcher-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Ubicación</h3>
                <p className="text-gray-600">
                  123 Calle San Martín
                  <br />
                  San Nicolás, Argentina
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-butcher-50 rounded-lg">
                <Phone className="w-6 h-6 text-butcher-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Teléfono</h3>
                <p className="text-gray-600">+54 336 442-1234</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-butcher-50 rounded-lg">
                <Mail className="w-6 h-6 text-butcher-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Correo Electrónico</h3>
                <p className="text-gray-600">info@almacendecarnes.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-butcher-50 rounded-lg">
                <Clock className="w-6 h-6 text-butcher-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Horario</h3>
                <p className="text-gray-600">
                  Lunes - Viernes: 8:00 AM - 8:00 PM
                  <br />
                  Sábado: 9:00 AM - 6:00 PM
                  <br />
                  Domingo: Cerrado
                </p>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="font-semibold text-lg mb-4">Conéctate con Nosotros</h3>
              <div className="flex gap-4">
                <a
                  href="https://wa.me/543364421234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
                >
                  <div className="p-3 bg-green-50 rounded-lg">
                    <FaWhatsapp className="w-6 h-6 text-green-600" />
                  </div>
                  <span>WhatsApp</span>
                </a>

                <a
                  href="https://instagram.com/almacendecarnes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors"
                >
                  <div className="p-3 bg-pink-50 rounded-lg">
                    <FaInstagram className="w-6 h-6 text-pink-600" />
                  </div>
                  <span>Instagram</span>
                </a>

                <a
                  href="https://facebook.com/almacendecarnes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <FaFacebook className="w-6 h-6 text-blue-600" />
                  </div>
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            onSubmit={handleSubmit}
            className="contact-form space-y-6 bg-white p-8 rounded-2xl shadow-lg"
            style={{ minHeight: `${Math.max(contactInfoHeight, 300)}px` }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-butcher-500 focus:border-transparent transition-shadow"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-butcher-500 focus:border-transparent transition-shadow"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-butcher-500 focus:border-transparent transition-shadow"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={6} // Increased rows for a larger message box
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-butcher-500 focus:border-transparent transition-shadow resize-none" // resize-none to prevent manual resizing
                style={{ minHeight: "120px" }} // Minimum height for the textarea
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-butcher-600 text-white py-3 rounded-lg hover:bg-butcher-700 transition-colors flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Enviando...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Enviar Mensaje</span>
                </>
              )}
            </motion.button>
          </motion.form>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26776.203468230035!2d-60.24244755!3d-33.33308785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7678d283e5555%3A0x2c541b90f40869dd!2sSan%20Nicol%C3%A1s%20de%20los%20Arroyos%2C%20Buenos%20Aires%20Province%2C%20Argentina!5e0!3m2!1sen!2s!4v1645454545454!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Location map"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Contact