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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Métodos de Pago Aceptados</h2>
          <p className="text-gray-600">Trabajamos con todos los principales bancos argentinos</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {banks.map((bank, index) => (
            <motion.div
              key={bank.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow ${bank.bgColor}`}
            >
              <div className="aspect-[3/2] relative">
                <img
                  src={bank.logo || "/placeholder.svg"}
                  alt={bank.name}
                  className="absolute inset-0 w-full h-full object-contain p-2"
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