import { motion } from 'motion/react';
import { Wifi, Coffee, Car, Sparkles, Snowflake, Utensils, WashingMachine, Luggage, Key } from 'lucide-react';

export default function Features() {
  const amenities = [
    { name: "Fast and Free Wi-Fi", icon: Wifi },
    { name: "Fully Equipped Kitchen", icon: Utensils },
    { name: "Onsite Parking", icon: Car },
    { name: "Fortnightly Housekeeping Service", icon: Sparkles },
    { name: "Air Conditioning", icon: Snowflake },
    { name: "Nespresso Coffee Machine", icon: Coffee },
    { name: "Laundry Facilities", icon: WashingMachine },
    { name: "Luggage Storage", icon: Luggage },
    { name: "Self Check-in", icon: Key },
  ];

  return (
    <section className="py-24 bg-white text-brand-900 border-y border-brand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-600 mb-4">
            Amenities
          </h3>
          <h2 className="text-4xl font-serif text-brand-900">
            Everything You Need
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center p-6 border border-brand-100 hover:border-brand-300 hover:bg-brand-50 transition-colors duration-300"
              >
                <Icon className="w-8 h-8 text-brand-600 mb-4" strokeWidth={1.5} />
                <span className="text-sm font-medium text-brand-800 uppercase tracking-wider text-center">
                  {amenity.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
