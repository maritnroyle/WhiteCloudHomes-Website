import React from 'react';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

interface FooterProps {
  onBookNow: (e: React.MouseEvent) => void;
}

export default function Footer({ onBookNow }: FooterProps) {
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
              <a href="https://www.instagram.com/whitecloud_homes?igsh=MWpyZndrazc1bjY4aA==" target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://wa.me/64226919410" target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:text-white transition-colors">
                <span className="sr-only">WhatsApp</span>
                <WhatsAppIcon className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white mb-6">Explore</h3>
            <ul className="space-y-4">
              <li><a href="#home" className="text-brand-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#overview" className="text-brand-300 hover:text-white transition-colors">Overview</a></li>
              <li><a href="#gallery" className="text-brand-300 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#faqs" className="text-brand-300 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#testimonials" className="text-brand-300 hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#" onClick={onBookNow} className="text-brand-300 hover:text-white transition-colors">Book Now</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white mb-6">Contact</h3>
            <ul className="space-y-4 text-brand-300">
              <li>
                <a href="mailto:whitecloudhomes@gmail.com" className="hover:text-white transition-colors flex items-center gap-3">
                  <Mail className="h-5 w-5" />
                  whitecloudhomes@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+64226919410" className="hover:text-white transition-colors flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  +64 22 691 9410
                </a>
              </li>
              <li>
                <a href="https://wa.me/64226919410" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-3">
                  <WhatsAppIcon className="h-5 w-5" />
                  WhatsApp Us
                </a>
              </li>
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
