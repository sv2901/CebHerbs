import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X, WhatsappLogo } from '@phosphor-icons/react';

const LOGO_URL = "https://customer-assets.emergentagent.com/job_4a3e8e8d-95cc-44d6-bee2-dd4f6dc12cb2/artifacts/mxjd7dyk_Ns%20Logo%202%20-%202.png";
const WHATSAPP_URL = "https://wa.me/919711058451?text=Hey,%20I%20am%20interest%20in%20some%20of%20your%20products";

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Products', href: '#products' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        data-testid="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'top-0 bg-white/90 backdrop-blur-md shadow-sm py-3'
            : 'top-10 bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              data-testid="navbar-logo"
              onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src={LOGO_URL}
                alt="CEB Herbs Logo"
                className="h-12 w-auto"
              />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  data-testid={`nav-link-${link.name.toLowerCase().replace(' ', '-')}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className={`font-body text-sm font-medium transition-colors ${
                    isScrolled ? 'text-gray-700 hover:text-primary' : 'text-gray-800 hover:text-primary'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* WhatsApp CTA - Desktop */}
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="navbar-whatsapp-btn"
              className="hidden lg:flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full font-body text-sm font-medium hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <WhatsappLogo size={18} weight="fill" />
              <span>Bulk Orders</span>
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              data-testid="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X size={24} className="text-primary" />
              ) : (
                <List size={24} className={isScrolled ? 'text-gray-800' : 'text-gray-800'} />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute right-0 top-0 h-full w-72 bg-white shadow-2xl"
            >
              <div className="p-6 pt-20">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      data-testid={`mobile-nav-link-${link.name.toLowerCase().replace(' ', '-')}`}
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="font-body text-base font-medium text-gray-700 hover:text-primary py-2 border-b border-gray-100"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                  <motion.a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="mobile-whatsapp-btn"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-full font-body text-sm font-medium mt-4"
                  >
                    <WhatsappLogo size={20} weight="fill" />
                    <span>WhatsApp for Bulk Orders</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
