import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Yuen Mae",
    photo: "https://scontent.fakl2-1.fna.fbcdn.net/v/t39.30808-6/621833632_25826910870268876_5835329340013658991_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=SjuJ082Ho9AQ7kNvwEGMu0Q&_nc_oc=Adk5CIO4Cl3-7C_FgRJF6ftIaQqVP0Map_DyapAnHabd_HAJfwr2_Vp2lF7emI7C248&_nc_zt=23&_nc_ht=scontent.fakl2-1.fna&_nc_gid=AhSlb83sSSzkzcmSIkNxAQ&oh=00_AftTfXd-s0tNO2UNzl_8EhzwWhW-LeR7EQk5JueM9Ybwjg&oe=69A41B1A",
    review: "We were really grateful for accommodating us on such short notice. My friend and I shared a comfortable room, and the place was well-equipped with everything we needed — a washing machine, dryer, a cozy living room with a TV, a kitchen and most importantly, an electric blanket (it was winter). Everything was very clean, and there was plenty of space for parking. A great stay overall!"
  },
  {
    name: "Evol Wong",
    photo: "https://scontent.fakl2-1.fna.fbcdn.net/v/t1.6435-9/119601391_3584625751569605_7315470566445264096_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=dZylU49np1IQ7kNvwG2CkRQ&_nc_oc=AdlOi3whv9oxxv2eEN1YYUA3L37zphJucPUbY9S_n03WnVWk5SsRdYowOAUEIwOpJAw&_nc_zt=23&_nc_ht=scontent.fakl2-1.fna&_nc_gid=ckvhI_uoFA13O-X0V0Cgrg&oh=00_Afvw7n3Ed9o5E9lrFMxcSMv3XSjBjQkk0D8HoBHa8s4rcQ&oe=69C5E83F",
    review: "A perfect base for exploring Christchurch. The location is very convenient, close to the airport and easy to get to the city center. The kitchen had everything we needed."
  },
  {
    name: "Calvin Leong",
    photo: "https://scontent.fakl2-1.fna.fbcdn.net/v/t39.30808-6/348601963_790979759020181_8522215712113447391_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=bu3PTvxcYIgQ7kNvwFybc6b&_nc_oc=AdmutVbbhzscaBixvxWcCocvqKBDqD_qhv1K4EpH5rd3L22vTBHaFjmux-6tMkPyp2o&_nc_zt=23&_nc_ht=scontent.fakl2-1.fna&_nc_gid=e1F_fR0-ZiXFd5tLZ7naiw&oh=00_Aft0mVthmb4_EovRqWwtkV2-SOGIZob_t-6Lh6SPVQn_Lg&oe=69A44FE6",
    review: "I had a lovely stay here. Cosy and well equipped place. It’s very convenient and there are eateries and a supermarket within 5-10 mins walk, and it’s around 10 mins drive from the airport. I would stay again when I’m back in Christchurch next time!"
  },
  {
    name: "Chang Judy",
    photo: "https://scontent.fakl2-1.fna.fbcdn.net/v/t1.6435-9/43732134_1851713954882742_7118871012803870720_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=nuuNSYPnXpAQ7kNvwGiUnxl&_nc_oc=AdlcodrhHedYTteYhZYryulw2qvVlFT9CfCurfOTLEjLnGigOcpLVSu1n2LBiQlgUss&_nc_zt=23&_nc_ht=scontent.fakl2-1.fna&_nc_gid=gOjrat0vARZCzxJ6g7csew&oh=00_AfttpCjGcG7SX_crK3vlNYZsch7hfJ7Z4vtJIOnv8jFJNA&oe=69C5F7FB",
    review: "環境維持得很好，租金合理，地理位置也很便利，附近很多公車路線。生活機能佳，離各種賣場超市開車或搭公車都不遠；走路就能到的距離，也有當地人經營的蔬果店和規模比較小的超市。房東很友善也很樂於提供協助，房客多半是港台馬的打工度假背包客，大家可以互相交流資訊和經驗～是很溫馨友善的住所，對於新落地或是即將返國的包包都是很理想的選擇，也是會想要長期續住的地方～非常推薦!"
  },
  {
    name: "Eunice Lim",
    photo: "https://scontent.fakl2-1.fna.fbcdn.net/v/t51.82787-15/608550270_18546968011050122_1648875529392549852_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_ohc=topg5uRI6_MQ7kNvwFG9YQy&_nc_oc=AdkvBZOFoReYZP-_2HfdTiuneJtmBEwJTvPnV_JSn7qG5A6Ffg4E6iosGvT6Y3bAVy4&_nc_zt=23&_nc_ht=scontent.fakl2-1.fna&_nc_gid=PDZh3WnBtIhmEmtZ6Is84Q&oh=00_AfsCha3nVYx0EWl_SkO60MYfIsAlo7b2dKtlMfySgMOR6A&oe=69A44808",
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
