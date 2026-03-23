import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Yuen Mae",
    photo: "https://scontent.fakl2-1.fna.fbcdn.net/v/t39.30808-6/481286808_9301879769865247_4782445388670362584_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=53a332&_nc_ohc=5RePP1Upa10Q7kNvwHv53oT&_nc_oc=AdpQ-97podjD-3hOgrbjm-enLgKertDcNzlQhUdDWGpmVZRysYvqxocyNytsf0NshSk&_nc_zt=23&_nc_ht=scontent.fakl2-1.fna&_nc_gid=5fcYM8qEkyr8J75rO6biyw&_nc_ss=7a32e&oh=00_Afyo9VdRaDUKjJsj4zKVSOGZ6LeunRXWiZdbDR6zSfg21w&oe=69C65919",
    review: "We were really grateful for accommodating us on such short notice. My friend and I shared a comfortable room, and the place was well-equipped with everything we needed — a washing machine, dryer, a cozy living room with a TV, a kitchen and most importantly, an electric blanket (it was winter). Everything was very clean, and there was plenty of space for parking. A great stay overall!"
  },
  {
    name: "Evol Wong",
    photo: "https://scontent.fakl2-1.fna.fbcdn.net/v/t1.6435-9/119601391_3584625751569605_7315470566445264096_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=dZylU49np1IQ7kNvwG2CkRQ&_nc_oc=AdlOi3whv9oxxv2eEN1YYUA3L37zphJucPUbY9S_n03WnVWk5SsRdYowOAUEIwOpJAw&_nc_zt=23&_nc_ht=scontent.fakl2-1.fna&_nc_gid=ckvhI_uoFA13O-X0V0Cgrg&oh=00_Afvw7n3Ed9o5E9lrFMxcSMv3XSjBjQkk0D8HoBHa8s4rcQ&oe=69C5E83F",
    review: "A perfect base for exploring Christchurch. The location is very convenient, close to the airport and easy to get to the city center. The kitchen had everything we needed."
  },
  {
    name: "Calvin Leong",
    photo: "https://scontent.fakl2-1.fna.fbcdn.net/v/t39.30808-6/348601963_790979759020181_8522215712113447391_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=WljNZPs5fvwQ7kNvwHnO1kq&_nc_oc=Adp7rjLMmHKdZcH_adCYLVzKBEG-zgLX-7rfAiUg5CCWV2ym8e4u88Tz4PQzZ7V1XYo&_nc_zt=23&_nc_ht=scontent.fakl2-1.fna&_nc_gid=CePIMIiYjBIsd8MQexXgbw&_nc_ss=7a32e&oh=00_AfwoGFrSWM5O8k9WL9uYDeCyIe4gLYjH5SdesXZL2Wp_PQ&oe=69C65EA6",
    review: "I had a lovely stay here. Cosy and well equipped place. It’s very convenient and there are eateries and a supermarket within 5-10 mins walk, and it’s around 10 mins drive from the airport. I would stay again when I’m back in Christchurch next time!"
  },
  {
    name: "Chang Judy",
    photo: "https://scontent.fakl2-1.fna.fbcdn.net/v/t1.6435-9/43732134_1851713954882742_7118871012803870720_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=nuuNSYPnXpAQ7kNvwGiUnxl&_nc_oc=AdlcodrhHedYTteYhZYryulw2qvVlFT9CfCurfOTLEjLnGigOcpLVSu1n2LBiQlgUss&_nc_zt=23&_nc_ht=scontent.fakl2-1.fna&_nc_gid=gOjrat0vARZCzxJ6g7csew&oh=00_AfttpCjGcG7SX_crK3vlNYZsch7hfJ7Z4vtJIOnv8jFJNA&oe=69C5F7FB",
    review: "環境維持得很好，租金合理，地理位置也很便利，附近很多公車路線。生活機能佳，離各種賣場超市開車或搭公車都不遠；走路就能到的距離，也有當地人經營的蔬果店和規模比較小的超市。房東很友善也很樂於提供協助，房客多半是港台馬的打工度假背包客，大家可以互相交流資訊和經驗～是很溫馨友善的住所，對於新落地或是即將返國的包包都是很理想的選擇，也是會想要長期續住的地方～非常推薦!"
  },
  {
    name: "Eunice Lim",
    photo: "https://scontent.fakl2-1.fna.fbcdn.net/v/t39.30808-6/555727963_10231226450029477_5550895513324077471_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=53a332&_nc_ohc=AvkaSUJCuXEQ7kNvwGT8nHW&_nc_oc=Adq-XywDUSe_cLsaFX5jU2QDwJxxgJMAOSqTDlHGnyqX5KNtTKvVOnOGEmc6hvPOS60&_nc_zt=23&_nc_ht=scontent.fakl2-1.fna&_nc_gid=fJ7wqC8q0xm8ndGvtAmPSQ&_nc_ss=7a32e&oh=00_AfylnOJzBXXN8ymu9VrefZ99HxwVoXtkblMrgyupVMjiIg&oe=69C647B2",
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
