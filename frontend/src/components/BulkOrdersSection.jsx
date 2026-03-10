import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { WhatsappLogo, Package, Truck, Handshake } from '@phosphor-icons/react';

const WHATSAPP_URL = "https://wa.me/919711058451?text=Hey,%20I%20am%20interest%20in%20some%20of%20your%20products";

const benefits = [
  { icon: Package, text: 'Custom Packaging' },
  { icon: Truck, text: 'Global Shipping' },
  { icon: Handshake, text: 'Flexible Terms' },
];

export const BulkOrdersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      data-testid="bulk-orders-section"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?crop=entropy&cs=srgb&fm=jpg&q=85"
          alt="Export containers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 border border-white/10 rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border border-white/10 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-accent/20 rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="font-body text-sm font-medium text-white">For Businesses</span>
          </motion.div>

          {/* Main Heading */}
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-6xl text-white leading-tight mb-6">
            To Serve Your
            <br />
            <span className="text-accent">Wholesale Business</span>
          </h2>

          <p className="font-body text-lg text-white/80 max-w-2xl mx-auto mb-10">
            Partner with us for reliable, premium quality botanical products at competitive wholesale prices. 
            We support businesses of all sizes with flexible order quantities.
          </p>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
              >
                <benefit.icon size={20} className="text-accent" />
                <span className="font-body text-sm text-white font-medium">{benefit.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="bulk-orders-whatsapp-btn"
            className="inline-flex items-center gap-3 bg-green-500 text-white px-10 py-5 rounded-full font-body font-semibold text-lg shadow-xl hover:shadow-2xl hover:bg-green-600 transition-all"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <WhatsappLogo size={24} weight="fill" />
            Contact on WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default BulkOrdersSection;
