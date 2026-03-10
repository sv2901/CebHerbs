import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, WhatsappLogo } from '@phosphor-icons/react';

const HERO_BG = "https://images.unsplash.com/photo-1692296112607-a504764fbc3a?crop=entropy&cs=srgb&fm=jpg&q=85";
const WHATSAPP_URL = "https://wa.me/919711058451?text=Hey,%20I%20am%20interest%20in%20some%20of%20your%20products";

export const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToProducts = () => {
    const element = document.querySelector('#products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={ref}
      data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 via-primary-900/50 to-primary-900/70" />
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-primary-100/20 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
        >
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-white/90 font-body text-sm font-medium">Premium Export Quality</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl lg:text-7xl text-white leading-tight mb-6"
        >
          We Provide Premium Quality
          <br />
          <span className="text-accent">Herbs & Spices</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-body text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10"
        >
          Experience the Essence of Nature with CEB Herbs. Pure, potent, and premium botanical products sourced directly from nature.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            data-testid="hero-explore-btn"
            onClick={scrollToProducts}
            className="group flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-body font-semibold text-base shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.03, y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Products
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-whatsapp-btn"
            className="flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-body font-semibold text-base shadow-lg hover:shadow-xl hover:bg-green-600 transition-all"
            whileHover={{ scale: 1.03, y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <WhatsappLogo size={20} weight="fill" />
            WhatsApp for Bulk Orders
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-8 lg:gap-16 mt-16 pt-16 border-t border-white/10"
        >
          {[
            { value: '100+', label: 'Products' },
            { value: '50+', label: 'Countries' },
            { value: '15+', label: 'Years Experience' },
            { value: '1000+', label: 'Happy Clients' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-heading text-3xl lg:text-4xl text-white font-bold">{stat.value}</div>
              <div className="font-body text-sm text-white/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
