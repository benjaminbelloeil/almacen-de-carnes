import { Clock, MapPin, Award, Users } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Más de 10 Años",
    description: "De experiencia en el mercado cárnico"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Ubicación Premium",
    description: "En el corazón de San Nicolás"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Calidad Garantizada",
    description: "Selección de los mejores cortes"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Atención Personalizada",
    description: "Asesoramiento experto"
  }
]

const About = () => (
      <section className="relative py-5 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-serif text-gray-900 mb-6"
            >
              Nuestra Historia
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              Desde 2013, llevamos la tradición de la mejor carne argentina 
              a las mesas de San Nicolás, con dedicación y excelencia en cada corte.
            </motion.p>
          </div>

          {/* Features Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-butcher-600 rounded-xl flex items-center justify-center text-white mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=800&q=80" 
                alt="Nuestra carnicería" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-butcher-600 font-serif text-3xl">+1000</div>
                <div className="text-gray-600">Clientes Satisfechos</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-3xl font-serif text-gray-900 mb-6">Tradición y Calidad</h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Nuestra pasión por la carne de calidad nos ha convertido en referentes 
                en San Nicolás. Seleccionamos cuidadosamente cada corte para garantizar 
                la mejor experiencia en su mesa.
              </p>
              <div className="flex items-center gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-4xl font-serif text-butcher-600">10+</div>
                  <div className="text-gray-600">Años de Experiencia</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-4xl font-serif text-butcher-600">100%</div>
                  <div className="text-gray-600">Calidad Garantizada</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    )

export default About;