import { motion } from 'motion/react';

export default function Welcome() {
  return (
    <section id="overview" className="py-24 md:py-32 bg-brand-50 text-brand-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-600 mb-2">
                The Experience
              </h3>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-900 leading-tight">
                Welcome to WhiteCloud Homestay!
              </h2>
            </div>
            
            <div className="space-y-6 text-brand-800/80 leading-relaxed font-light text-lg">
              <p>
                Experience the perfect blend of comfort and convenience. Our homestay offers an inviting, well-appointed atmosphere with all the essential amenities, ensuring a relaxing and seamless stay.
              </p>
              <p>
                We are just a 5-minute walk from Bishopdale Village Mall, giving you easy access to a library, New World supermarket, diverse restaurants, and retail shops. Christchurch Airport is a quick 8-minute drive away, and nearby bus stops offer direct connections to the Christchurch City Centre.
              </p>
              <p>
                Designed for the social traveler, our five-bedroom home allows you to connect with like-minded guests. Meet new people, share stories, and enjoy cooking a meal together. <a href="https://wa.me/64226919410?text=Hi%2C%20I%20would%20like%20to%20book%20a%20stay" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-800 underline font-medium">Book now</a> to start making unforgettable memories and lifelong connections!
              </p>
            </div>


            <div className="pt-8">
              <a
                href="#gallery"
                className="inline-flex items-center text-sm font-semibold uppercase tracking-widest text-brand-800 hover:text-brand-600 transition-colors group"
              >
                View Gallery
                <span className="ml-2 block w-8 h-[1px] bg-brand-800 group-hover:w-12 transition-all duration-300"></span>
              </a>
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4 relative"
          >
            <div className="space-y-4 pt-12">
              <img
                src="/gallery/kitchen.jpg"
                alt="Interior Bedroom"
                className="w-full h-64 object-cover rounded-sm shadow-md"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              <img
                src="/gallery/ensuite.jpg"
                alt="Living Area"
                className="w-full h-80 object-cover rounded-sm shadow-md"
                referrerPolicy="no-referrer"
                loading="eager"
              />
            </div>
            <div className="space-y-4">
              <img
                src="/gallery/living-area.jpg"
                alt="Dining Area"
                className="w-full h-80 object-cover rounded-sm shadow-md"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              <img
                src="/gallery/main-bathroom.jpg"
                alt="Kitchen"
                className="w-full h-64 object-cover rounded-sm shadow-md"
                referrerPolicy="no-referrer"
                loading="eager"
              />
            </div>
            
            {/* Badge */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-full shadow-xl flex flex-col items-center justify-center w-32 h-32 text-center border border-brand-100 z-10">
              <span className="text-3xl font-serif text-brand-800 mb-1">5</span>
              <span className="text-[10px] uppercase tracking-widest font-semibold text-brand-600">Bedrooms</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
