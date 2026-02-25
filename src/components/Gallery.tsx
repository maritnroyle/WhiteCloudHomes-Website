import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = [
    {
      src: "https://lh3.googleusercontent.com/pw/AP1GczPyORml2zj-oYMnQB6HkKih16KiTMRaqlFhoubMTl9l-9U_AS0YS7THKK2OgR5jEXnfKNyK8A4EICLrPjS3nq2Exb_QKClhuDXo1vocDFOCqVK6xTVZbPhgPr-oxqplWV4cEiLT1InCvuvLx7qc3hHn=w1200-h896-s-no?authuser=0",
      caption: "Fully Equipped Kitchen and Dining Area"
    },
    {
      src: "https://lh3.googleusercontent.com/pw/AP1GczPQcxwrPf29nce8JmAlC_S88wuxN_-BuZgmWuat9eTXO4W_5WF8YfSYi0CaUhnuRbbOlLm3WDkZy_eXC2CYraHVmb7JffcMBwLtNhDmqqOGcOnoCUsu_-1P0Dx8SQBaHg7ZvwP3ryULwaOdprdDaibM=w896-h1200-s-no?authuser=0",
      caption: "Ensuite Toilet"
    },
    {
      src: "https://lh3.googleusercontent.com/pw/AP1GczMky0tQQiv71b1oTfdcRARsur47pi6pNq5zinUGxo3S0r-oXmRY_J_IWP4NubQ0-QtYnmXd1jqu8flZVdyShExPL-Rb2EJSvc_hHC1-wJxXOSiutfAueFDzyZzNUFjQKs8x3cUSeD0-Wl9SyRFSKxBQ=w1200-h896-s-no?authuser=0",
      caption: "Spacious Living Area"
    },
    {
      src: "https://lh3.googleusercontent.com/pw/AP1GczPxRmOjw2K4v40gxKw-Oa5-_MruUxHYw6H9kIjBbFG7ySmcMhypDrgs2_rBxskS-wxXquuShazNXLXOYKEK8beC5-Yrs0B8bmL_ByzCHX7v1sS-6PAVGXWdLrvowFJE_0BUMB-aHBwYHjxXNS9BsXBY=w1264-h848-s-no?authuser=0",
      caption: "Main Bathroom"
    },
    {
      src: "https://lh3.googleusercontent.com/pw/AP1GczNelaAMzMGzdLch3VURHe5lAZPf0tWFsV4Gsc3evlmX4_Z5k3tvmbnfhRK-a8dkmkU2XKQc1VR0KD9c1wafMasPo71SOEWul1-lrJjyiUvuFrz8mbrBBDSBqop4z2rgHioauO7qs9IH05KI_JwT0gRm=w3312-h2484-s-no?authuser=0",
      caption: "Bedroom"
    },
    {
      src: "https://lh3.googleusercontent.com/pw/AP1GczO95sgxqwPeEylDvghuBLs0C9k4MrRdZ7hp1CfswDKmPEU8_HCL0J5tXrUTYRskAsw_9QHrbyP0gTKpr7LvFDiL3VcCZglHtjCpmfzcKn7XQmjw0kpotouWBpereSrLU2jUep8-7F9aFyXYfTHWSL61=w3312-h2484-s-no?authuser=0",
      caption: "Bedroom"
    },
    {
      src: "https://lh3.googleusercontent.com/pw/AP1GczPEgo-pc-ynOD4tJo7z02guLUKGSw2lGeFRafvFnQKnLjHP7-hS8lA5Z2lnzsjLMF95Q-CoLR09mC8E_20SVtl6ctTKGTZMouzFdhqTNylxr7CnuUdgin7ROe_md92OG_aaZZi-UJRKBHtnd3Re9Xv4=w3312-h2484-s-no?authuser=0",
      caption: "Bedroom"
    },
    {
      src: "https://lh3.googleusercontent.com/pw/AP1GczOQ9O4Dixs56B6n59oZTXbhnM4niVsWXCqhH9joEcPqdKD93qcdlTPNu1BVbUjNRtBfLf84qxQ0P-zgjYX-y9NVWkGL7extZzfmEcbwh5lBLJHVhT8unnc98e-NoTn0XlcoJs2rcBCGjdPT-k1D6evb=w2048-h1536-s-no?authuser=0",
      caption: "Bedroom"
    },
    {
      src: "https://lh3.googleusercontent.com/pw/AP1GczO_nUqncVVa9ripitLeU79xB7H3FRGy7MMOuayyaGrizM3kv-Qqwf9vZWCcySeWv1LYHfOl29elfDh3kIA0cf9JriWgyA-KtbVkNOUcovBmM51_K2X5W3cXzQGkWNZi91VzfrbvdP5A_qsGII6lWTQO=w1024-h765-s-no?authuser=0",
      caption: "Laundry"
    }
  ];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

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
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group overflow-hidden relative aspect-w-4 aspect-h-3 bg-brand-200 cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={image.src}
                alt={image.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {image.caption}
                </p>
              </div>
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

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={handleClose}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50 p-2"
              onClick={handleClose}
            >
              <X className="w-8 h-8" />
            </button>
            
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-50 p-2"
              onClick={handlePrev}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <div className="flex flex-col items-center max-w-full max-h-[90vh]">
              <motion.img
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                src={images[selectedIndex].src}
                alt={images[selectedIndex].caption}
                className="max-w-full max-h-[80vh] object-contain"
                referrerPolicy="no-referrer"
                onClick={(e) => e.stopPropagation()}
              />
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white text-lg mt-4 font-medium"
              >
                {images[selectedIndex].caption}
              </motion.p>
            </div>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-50 p-2"
              onClick={handleNext}
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
