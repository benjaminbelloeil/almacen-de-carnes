"use client"

import { motion } from "framer-motion"

const banks = [
  {
    name: "Banco Nación",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Logo_Banco_de_la_Nacion_Argentina.svg/1000px-Logo_Banco_de_la_Nacion_Argentina.svg.png",
    bgColor: "bg-blue-50",
  },
  {
    name: "Banco Provincia",
    logo: "https://www.bancoprovincia.com.ar/CDN/Get/logo_2021_S",
    bgColor: "bg-green-50",
  },
  {
    name: "BBVA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/BBVA_Bancomer_logo.svg/1558px-BBVA_Bancomer_logo.svg.png",
    bgColor: "bg-blue-50",
  },
  {
    name: "Banco Macro",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Logo_Macro.png",
    bgColor: "",
  },
  {
    name: "Banco Santander",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Banco_Santander_Logotipo.svg/476px-Banco_Santander_Logotipo.svg.png",
    bgColor: "bg-red-50",
  },
  {
    name: "HSBC",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/HSBC_logo_%282018%29.svg/1024px-HSBC_logo_%282018%29.svg.png",
    bgColor: "bg-red-50",
  },
  {
    name: "Banco Galicia",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Logo_Banco_Galicia.svg/1100px-Logo_Banco_Galicia.svg.png",
    bgColor: "bg-blue-50",
  },
  {
    name: "Banco Ciudad",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Logo_Banco_Ciudad.svg/440px-Logo_Banco_Ciudad.svg.png",
    bgColor: "bg-blue-50",
  },
  {
    name: "Credicoop",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Logo_Banco_Credicoop.svg/800px-Logo_Banco_Credicoop.svg.png",
    bgColor: "bg-green-50",
  },
  {
    name: "Supervielle",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Logo_Banco_Supervielle.svg/1000px-Logo_Banco_Supervielle.svg.png",
    bgColor: "bg-red-50",
  },
  {
    name: "Citibank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Citibank.svg/500px-Citibank.svg.png",
    bgColor: "bg-blue-50",
  },
  {
    name: "Banco Hipotecario",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Logo_Banco_Hipotecario.svg/1000px-Logo_Banco_Hipotecario.svg.png",
    bgColor: "bg-blue-50",
  },
]

const BanksSection = () => {
  return (
    <section className="pt-16 pb-32 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Bank Logos */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 content-start order-last lg:order-first">
            {banks.map((bank, index) => (
              <motion.div
                key={bank.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300
                p-4 flex items-center justify-center"
              >
                <div className="relative w-full aspect-[3/2]">
                  <img
                    src={bank.logo}
                    alt={bank.name}
                    className="absolute inset-0 w-full h-full object-contain 
                    transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Information */}
          <div className="lg:pl-12 space-y-8 order-first lg:order-last">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-butcher-600 font-medium text-lg block"
            >
              Medios de Pago
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-serif text-gray-900"
            >
              La Mayor Red de Bancos en San Nicolás
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-xl text-gray-600 leading-relaxed">
                Somos el único comercio en San Nicolás que trabaja con 12 bancos diferentes, 
                ofreciéndote la mayor flexibilidad en tus pagos y las mejores promociones bancarias.
              </p>

              <div className="space-y-6">
                <h3 className="text-2xl font-serif text-gray-900">¿Por qué elegir nuestros medios de pago?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 bg-butcher-600 rounded-full mt-2"/>
                    <span>
                      <strong className="block text-gray-900">Promociones Exclusivas</strong>
                      Descuentos especiales y cuotas sin interés con todos los bancos principales
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 bg-butcher-600 rounded-full mt-2"/>
                    <span>
                      <strong className="block text-gray-900">Flexibilidad de Pago</strong>
                      Aceptamos todas las tarjetas de crédito y débito, incluyendo planes especiales
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 bg-butcher-600 rounded-full mt-2"/>
                    <span>
                      <strong className="block text-gray-900">Beneficios Bancarios</strong>
                      Aprovecha los programas de puntos y recompensas de tu banco favorito
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Full Width "Sabías que" Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-butcher-50 rounded-3xl p-8 border border-butcher-100 w-full"
        >
          <div className="max-w-7xl mx-auto text-center space-y-4">
            <h4 className="text-2xl font-serif text-butcher-800">
              ¿Sabías que?
            </h4>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Somos el único comercio en San Nicolás que te ofrece la posibilidad de elegir 
              entre <span className="font-semibold text-butcher-800">12 bancos diferentes</span> para tus compras. 
              Esto significa acceso a las mejores promociones bancarias, más opciones de financiación 
              y la libertad de elegir el plan que mejor se adapte a tus necesidades.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BanksSection;