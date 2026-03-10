import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Leaf, Drop, Star, Airplane } from '@phosphor-icons/react';

const trustIndicators = [
  {
    icon: Leaf,
    title: 'Pure Botanical Products',
    description: 'Sourced directly from nature',
  },
  {
    icon: Drop,
    title: 'No Artificial Colour',
    description: '100% natural ingredients only',
  },
  {
    icon: Star,
    title: 'Premium Quality Standards',
    description: 'Rigorous quality control',
  },
  {
    icon: Airplane,
    title: 'Export Ready',
    description: 'International shipping certified',
  },
];

export const TrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      data-testid="trust-section"
      className="relative py-20 bg-primary overflow-hidden"
    >
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {trustIndicators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              data-testid={`trust-indicator-${index}`}
              className="text-center"
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <item.icon size={32} className="text-accent" weight="duotone" />
              </motion.div>
              <h3 className="font-heading text-lg text-white mb-2">
                {item.title}
              </h3>
              <p className="font-body text-sm text-white/70">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
