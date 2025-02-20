"use client"

import { motion } from "framer-motion"

const banks = [
  {
    name: "Banco Nación",
    logo: "https://www.bancogalicia.com/content/dam/public-site/logos/logo-galicia.svg",
    bgColor: "bg-blue-50",
  },
  {
    name: "Banco Provincia",
    logo: "https://www.santander.com.ar/banco/wcm/connect/public/sites/logos/santander-logo.svg",
    bgColor: "bg-green-50",
  },
  {
    name: "BBVA",
    logo: "https://www.bbva.com/wp-content/uploads/2019/03/bbva-logo-1024x576.jpg",
    bgColor: "bg-blue-50",
  },
  {
    name: "Banco Macro",
    logo: "https://www.macro.com.ar/images/logo-banco-macro.svg",
    bgColor: "bg-yellow-50",
  },
  {
    name: "Banco Santander",
    logo: "https://www.santander.com.ar/banco/wcm/connect/public/sites/logos/santander-logo.svg",
    bgColor: "bg-red-50",
  },
  {
    name: "HSBC",
    logo: "https://www.hsbc.com/-/files/hsbc/news-and-insight/2018/november/181101-hsbc-logo-desktop-thumbnail.jpg",
    bgColor: "bg-red-50",
  },
  // ... Add more banks with their respective logos and background colors
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
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Accepted Payment Methods</h2>
          <p className="text-gray-600">We work with all major Argentine banks</p>
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

