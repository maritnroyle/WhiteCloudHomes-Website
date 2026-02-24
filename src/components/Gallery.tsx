import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    "https://lh3.googleusercontent.com/pw/AP1GczPyORml2zj-oYMnQB6HkKih16KiTMRaqlFhoubMTl9l-9U_AS0YS7THKK2OgR5jEXnfKNyK8A4EICLrPjS3nq2Exb_QKClhuDXo1vocDFOCqVK6xTVZbPhgPr-oxqplWV4cEiLT1InCvuvLx7qc3hHn=w1200-h896-s-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczPQcxwrPf29nce8JmAlC_S88wuxN_-BuZgmWuat9eTXO4W_5WF8YfSYi0CaUhnuRbbOlLm3WDkZy_eXC2CYraHVmb7JffcMBwLtNhDmqqOGcOnoCUsu_-1P0Dx8SQBaHg7ZvwP3ryULwaOdprdDaibM=w896-h1200-s-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczMky0tQQiv71b1oTfdcRARsur47pi6pNq5zinUGxo3S0r-oXmRY_J_IWP4NubQ0-QtYnmXd1jqu8flZVdyShExPL-Rb2EJSvc_hHC1-wJxXOSiutfAueFDzyZzNUFjQKs8x3cUSeD0-Wl9SyRFSKxBQ=w1200-h896-s-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczPxRmOjw2K4v40gxKw-Oa5-_MruUxHYw6H9kIjBbFG7ySmcMhypDrgs2_rBxskS-wxXquuShazNXLXOYKEK8beC5-Yrs0B8bmL_ByzCHX7v1sS-6PAVGXWdLrvowFJE_0BUMB-aHBwYHjxXNS9BsXBY=w1264-h848-s-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczNelaAMzMGzdLch3VURHe5lAZPf0tWFsV4Gsc3evlmX4_Z5k3tvmbnfhRK-a8dkmkU2XKQc1VR0KD9c1wafMasPo71SOEWul1-lrJjyiUvuFrz8mbrBBDSBqop4z2rgHioauO7qs9IH05KI_JwT0gRm=w3312-h2484-s-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczO95sgxqwPeEylDvghuBLs0C9k4MrRdZ7hp1CfswDKmPEU8_HCL0J5tXrUTYRskAsw_9QHrbyP0gTKpr7LvFDiL3VcCZglHtjCpmfzcKn7XQmjw0kpotouWBpereSrLU2jUep8-7F9aFyXYfTHWSL61=w3312-h2484-s-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczPEgo-pc-ynOD4tJo7z02guLUKGSw2lGeFRafvFnQKnLjHP7-hS8lA5Z2lnzsjLMF95Q-CoLR09mC8E_20SVtl6ctTKGTZMouzFdhqTNylxr7CnuUdgin7ROe_md92OG_aaZZi-UJRKBHtnd3Re9Xv4=w3312-h2484-s-no?authuser=0"
  ];

  return (
    <section id="gallery" className="py-24 bg-brand-50 text-brand-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-600 mb-4">
            Gallery
          </h3>
          <h2 className="text-4xl font-serif text-brand-900">
            A Glimpse Inside
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group overflow-hidden relative aspect-w-4 aspect-h-3 bg-brand-200"
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="https://wa.me/64226919410?text=Hi%2C%20I%20would%20like%20to%20book%20a%20stay"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-brand-800 text-brand-900 px-10 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-brand-800 hover:text-white transition-colors duration-300"
          >
            Book Your Stay
          </a>
        </div>
      </div>
    </section>
  );
}
