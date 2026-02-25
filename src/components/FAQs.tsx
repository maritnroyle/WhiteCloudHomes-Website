import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What is the check-in and check-out time?",
    answer: "Check-in is from 2:00 PM, and check-out is by 12:00 PM. If you need to request an early check-in or late check-out, please contact us in advance."
  },
  {
    question: "Is there parking available?",
    answer: "Yes, we offer on-site parking for our guests on first come first served basis. There is also plenty of free street parking available."
  },
  {
    question: "Can I arrive early and store bags?",
    answer: "Yes! You can drop your bags and explore the city or surrounding area while you wait."
  },
  {
    question: "Can you help me open a bank account?",
    answer: "We can point you in the right direction — and we’ll give you everything you need to get started (including that proof of address letter)."
  },
  {
    question: "Can I store my bags after checkout?",
    answer: "Yes, please let us know."
  },
  {
    question: "Is there a minimun stay?",
    answer: "Yes, our standard stay is 2 weeks. If you need shorter period, please contact us."
  }
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 bg-white text-brand-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-600 mb-4">
            Questions & Answers
          </h3>
          <h2 className="text-4xl font-serif text-brand-900">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border border-brand-100 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left bg-brand-50 hover:bg-brand-100 transition-colors focus:outline-none"
              >
                <span className="font-medium text-lg text-brand-900">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-600 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 bg-white border-t border-brand-100 text-brand-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
