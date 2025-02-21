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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-butcher-600 font-medium text-lg block mb-4"
          >
            Medios de Pago
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-serif text-gray-900 mb-6"
          >
            Trabajamos con los Principales Bancos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Aceptamos todas las tarjetas de crédito y débito de los bancos más importantes del país
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
        >
          {banks.map((bank, index) => (
            <motion.div
              key={bank.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300
              p-6 flex items-center justify-center"
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
        </motion.div>
      </div>
    </section>
  )
}

export default BanksSection