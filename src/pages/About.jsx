import { Award, Users, Truck } from "lucide-react"
import { motion } from "framer-motion"

const About = () => (
  <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Main Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=800&q=80" 
            alt="Nuestra carnicería" 
            className="rounded-3xl shadow-2xl"
          />
          <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl">
            <div className="text-butcher-600 font-serif text-5xl font-bold">10+</div>
            <div className="text-gray-600">Años de Tradición</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <span className="text-butcher-600 font-medium">Nuestra Historia</span>
          <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 leading-tight">
            Tradición Familiar en<br />Cada Corte desde 2013
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Comenzamos como un pequeño almacén en el corazón de San Nicolás, 
            con un sueño simple pero poderoso: ofrecer la mejor carne argentina 
            a nuestros vecinos. Hoy, más de una década después, ese compromiso 
            con la calidad sigue siendo nuestra marca distintiva.
          </p>
        </motion.div>
      </div>

      {/* Core Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <div className="w-16 h-16 bg-butcher-600/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Award className="w-8 h-8 text-butcher-600" />
          </div>
          <h3 className="text-2xl font-serif text-gray-900">Calidad Premium</h3>
          <p className="text-gray-600">
            Seleccionamos cuidadosamente cada corte para garantizar la mejor 
            experiencia en su mesa.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center space-y-4"
        >
          <div className="w-16 h-16 bg-butcher-600/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8 text-butcher-600" />
          </div>
          <h3 className="text-2xl font-serif text-gray-900">Atención Personalizada</h3>
          <p className="text-gray-600">
            Nuestro equipo experto está siempre listo para asesorarte y encontrar 
            el corte perfecto.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center space-y-4"
        >
          <div className="w-16 h-16 bg-butcher-600/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Truck className="w-8 h-8 text-butcher-600" />
          </div>
          <h3 className="text-2xl font-serif text-gray-900">Delivery Local</h3>
          <p className="text-gray-600">
            Llevamos nuestros productos directamente a tu puerta, manteniendo 
            la calidad que nos caracteriza.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
)

export default About