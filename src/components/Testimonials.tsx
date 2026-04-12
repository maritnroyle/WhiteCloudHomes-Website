import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Yuen Mae",
    photo: "https://lh3.googleusercontent.com/pw/AP1GczN9g2D-T-mbckgpF3Q7oqdHJK1rJthcPhj_k5wqQGcR_xxOOlcooXaQM6T5_A8kSTB4eejc3ln6QKc_4cnY_baFYrMXgU2Q1SiD0gxMz2QBNo2cr033gXOmHZoUZFA-fiYVbtHX0nVWnQrzIbtjQFNT=w960-h960-s-no?authuser=0",
    review: "We were really grateful for accommodating us on such short notice. My friend and I shared a comfortable room, and the place was well-equipped with everything we needed — a washing machine, dryer, a cozy living room with a TV, a kitchen and most importantly, an electric blanket (it was winter). Everything was very clean, and there was plenty of space for parking. A great stay overall!"
  },
  {
    name: "Evol Wong",
    photo: "https://lh3.googleusercontent.com/pw/AP1GczNjQ_2co1qk3ZwkWd3hL-QFBsWdPt3iVH7-mID9tdPOOgo_vuLmegfpokBL1yu8IWwP-YJbMjGjKjgUbq-C0u01bR7qOKXsV9zujDS70mhQcknPo3sKmZq0-qIPkyq7Whq1DH1qHNXwRpXOkFMaWfI5=w987-h986-s-no?authuser=0",
    review: "A perfect base for exploring Christchurch. The location is very convenient, close to the airport and easy to get to the city center. The kitchen had everything we needed."
  },
  {
    name: "Calvin Leong",
    photo: "https://lh3.googleusercontent.com/pw/AP1GczOLS7bX43MuTJX9RS6CvDLHsWzvfCStrtq8_asretFKw-EzCUQLo_gm8uH-l8LLPzDfve-lKAO5PtaM0mUR0uCsaLfJjt82GgzbyhjCs5QQyEcRWd8tk-bopoE8AdvH8Xw4td-c_XfQF7k2ae3xoDM0=w2048-h2048-s-no?authuser=0",
    review: "I had a lovely stay here. Cosy and well equipped place. It’s very convenient and there are eateries and a supermarket within 5-10 mins walk, and it’s around 10 mins drive from the airport. I would stay again when I’m back in Christchurch next time!"
  },
  {
    name: "Chang Judy",
    photo: "https://lh3.googleusercontent.com/pw/AP1GczMc7cFnWsfagCMivmWxSTHsVez6J3jH4PUREeFOJJJ13gTUapqFVtPEOG46tbHM6NUaOOjzeD4_DsgAX9xHxeXaNcK569MX_Zttgly940GrHa3woEcwr1FwyPfNufp6ZfLYtidyK8FNJLBd5dH19JiD=w960-h960-s-no?authuser=0",
    review: "環境維持得很好，租金合理，地理位置也很便利，附近很多公車路線。生活機能佳，離各種賣場超市開車或搭公車都不遠；走路就能到的距離，也有當地人經營的蔬果店和規模比較小的超市。房東很友善也很樂於提供協助，房客多半是港台馬的打工度假背包客，大家可以互相交流資訊和經驗～是很溫馨友善的住所，對於新落地或是即將返國的包包都是很理想的選擇，也是會想要長期續住的地方～非常推薦!"
  },
  {
    name: "Eunice Lim",
    photo: "https://lh3.googleusercontent.com/pw/AP1GczM3JZZvCOgJA7PEWKDF4j3Y-RrnFLyG25yqHwxyyCmnsGM2LAAcPxWSDEJxPWWT6BXwCE8B7uJcos0IqCeJ7hWUfWjTzwCPXQTk1-Sg0Rgo6Y8aIJHmbnhGhyf1EiNb6sEBkCE-t0fWFeTjrFg_AJeC=w2048-h1361-s-no?authuser=0",
    review: "I had an amazing stay at White House Homestay! It’s a fantastic place for Working Holiday Visa holders, offering a comfortable and welcoming environment. One of the highlights of my stay was meeting so many wonderful people and making lifelong friends. The homestay is well-maintained, and the atmosphere is perfect for both relaxing and connecting with others. If you’re looking for a place to stay in Christchurch, I couldn’t recommend White House Homestay enough—it’s more than just accommodation; it’s a community!"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-brand-50 text-brand-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-600 mb-4">
            Guest Reviews
          </h3>
          <h2 className="text-4xl font-serif text-brand-900">
            What Our Guests Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-brand-100 relative"
            >
              <div className="flex text-brand-500 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-brand-700 italic mb-8 leading-relaxed">
                "{testimonial.review}"
              </p>
              <div className="flex items-center mt-auto">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-brand-100"
                />
                <div>
                  <h4 className="font-semibold text-brand-900">{testimonial.name}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
