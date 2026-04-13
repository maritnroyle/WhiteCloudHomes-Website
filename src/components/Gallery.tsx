import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryProps {
  onBookNow: (e: React.MouseEvent) => void;
}

export default function Gallery({ onBookNow }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = [
    {
      src: "/gallery/kitchen.jpg",
      caption: "Fully Equipped Kitchen and Dining Area"
    },
    {
      src: "/gallery/ensuite.jpg",
      caption: "Ensuite Toilet"
    },
    {
      src: "/gallery/living-area.jpg",
      caption: "Spacious Living Area"
    },
    {
      src: "/gallery/main-bathroom.jpg",
      caption: "Main Bathroom"
    },
    {
      src: "/gallery/bedroom-1.jpg",
      caption: "Bedroom"
    },
    {
      src: "/gallery/bedroom-2.jpg",
      caption: "Bedroom"
    },
    {
      src: "/gallery/bedroom-3.jpg",
      caption: "Bedroom"
    },
    {
      src: "/gallery/bedroom-4.jpg",
      caption: "Bedroom"
    },
    {
      src: "/gallery/laundry.jpg",
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
            href="#"
            onClick={onBookNow}
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
