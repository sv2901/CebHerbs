import { motion } from 'framer-motion';
import { WhatsappLogo, EnvelopeSimple, Phone, MapPin, ArrowUp } from '@phosphor-icons/react';

const LOGO_URL = "https://customer-assets.emergentagent.com/job_4a3e8e8d-95cc-44d6-bee2-dd4f6dc12cb2/artifacts/mxjd7dyk_Ns%20Logo%202%20-%202.png";
const WHATSAPP_URL = "https://wa.me/919711058451?text=Hey,%20I%20am%20interest%20in%20some%20of%20your%20products";

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Products', href: '#products' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

const products = [
  'Herbs',
  'Spices',
  'Dried Flowers',
  'Oil Seeds',
  'Oleoresins',
  'Extracts',
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer data-testid="footer" className="relative bg-primary text-white">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-bone" />

      {/* Main Footer Content */}
      <div className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-12 border-b border-white/10">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <img
                src={LOGO_URL}
                alt="CEB Herbs Logo"
                className="h-16 w-auto mb-6 brightness-0 invert"
              />
              <p className="font-body text-sm text-white/70 leading-relaxed mb-6">
                Premium botanical herbs and spices supplier. Delivering pure, potent, and 
                premium products to global markets since 2010.
              </p>
              {/* Social/Contact Icons */}
              <div className="flex items-center gap-3">
                <motion.a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="footer-whatsapp"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <WhatsappLogo size={20} />
                </motion.a>
                <motion.a
                  href="mailto:info@cebherbs.com"
                  data-testid="footer-email"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <EnvelopeSimple size={20} />
                </motion.a>
                <motion.a
                  href="tel:+919711058451"
                  data-testid="footer-phone"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone size={20} />
                </motion.a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                      data-testid={`footer-link-${link.name.toLowerCase().replace(' ', '-')}`}
                      className="font-body text-sm text-white/70 hover:text-white hover:pl-2 transition-all"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-heading text-lg mb-6">Products</h4>
              <ul className="space-y-3">
                {products.map((product) => (
                  <li key={product}>
                    <a
                      href="#products"
                      onClick={(e) => { e.preventDefault(); scrollToSection('#products'); }}
                      className="font-body text-sm text-white/70 hover:text-white hover:pl-2 transition-all"
                    >
                      {product}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-heading text-lg mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone size={18} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-body text-sm text-white/70">Phone</p>
                    <a href="tel:+919711058451" className="font-body text-sm text-white hover:text-accent transition-colors">
                      +91 9711058451
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <WhatsappLogo size={18} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-body text-sm text-white/70">WhatsApp</p>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-body text-sm text-white hover:text-accent transition-colors">
                      +91 9711058451
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <EnvelopeSimple size={18} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-body text-sm text-white/70">Email</p>
                    <a href="mailto:info@cebherbs.com" className="font-body text-sm text-white hover:text-accent transition-colors">
                      info@cebherbs.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-body text-sm text-white/70">Address</p>
                    <p className="font-body text-sm text-white">
                      New Delhi, India
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-white/60">
              © {new Date().getFullYear()} Cutting Edge Botanical Pvt. Ltd. All rights reserved.
            </p>
            
            {/* Back to top */}
            <motion.button
              onClick={scrollToTop}
              data-testid="back-to-top-btn"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full font-body text-sm hover:bg-white/20 transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <ArrowUp size={16} />
              Back to top
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
