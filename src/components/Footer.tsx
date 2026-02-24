import { Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-950 text-brand-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 rounded-xl overflow-hidden shadow-2xl border border-brand-800/50">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.4777517655693!2d172.58175261309606!3d-43.49236817928388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d318bcac413820b%3A0x867ffeade9a82ed8!2sWhiteCloud%20Homestay!5e0!3m2!1sen!2snz!4v1771809303981!5m2!1sen!2snz" 
            className="w-full h-64 md:h-96"
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          <div className="col-span-1 md:col-span-2">
            <p className="text-brand-300 max-w-sm mb-8 leading-relaxed">
              Our home is your home in Christchurch. It's the kind of place that stays with you long after you've left.
            </p>
            <div className="flex space-x-6">
              <a href="https://www.facebook.com/profile.php?id=61551048270198" target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-brand-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white mb-6">Explore</h3>
            <ul className="space-y-4">
              <li><a href="#home" className="text-brand-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#overview" className="text-brand-300 hover:text-white transition-colors">Overview</a></li>
              <li><a href="#gallery" className="text-brand-300 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="https://wa.me/64226919410?text=Hi%2C%20I%20would%20like%20to%20book%20a%20stay" target="_blank" rel="noopener noreferrer" className="text-brand-300 hover:text-white transition-colors">Book Now</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white mb-6">Contact</h3>
            <ul className="space-y-4 text-brand-300">
              <li><a href="mailto:whitecloudhomes@gmail.com" className="hover:text-white transition-colors">whitecloudhomes@gmail.com</a></li>
              <li><a href="tel:+64226919410" className="hover:text-white transition-colors">+64 22 691 9410</a></li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-brand-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-brand-500">
          <p>&copy; {new Date().getFullYear()} WhiteCloud Homestay. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
