import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Leaf, Users, Medal, GridFour } from '@phosphor-icons/react';

const features = [
  {
    icon: Leaf,
    title: '100% Pure & Natural',
    description: 'No additives. No preservatives. Just nature at its finest.',
  },
  {
    icon: Users,
    title: 'Wholesale & Retail',
    description: 'Serving bulk buyers, wellness brands, and businesses worldwide.',
  },
  {
    icon: Medal,
    title: 'Carefully Sourced',
    description: 'Hand-selected botanicals maintained at highest quality standards.',
  },
  {
    icon: GridFour,
    title: 'Wide Range',
    description: 'From traditional herbs to powerful plant-based extracts.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-24 lg:py-32 bg-bone overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={containerVariants}
          >
            <motion.span
              variants={itemVariants}
              className="inline-block font-body text-sm font-semibold text-accent uppercase tracking-wider mb-4"
            >
              About Us
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="font-heading text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight mb-6"
            >
              Who We Are
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="w-20 h-1 bg-primary rounded-full mb-8"
            />

            <motion.p
              variants={itemVariants}
              className="font-body text-base lg:text-lg text-gray-600 leading-relaxed mb-6"
            >
              <span className="font-semibold text-primary">Cutting Edge Botanical Pvt. Ltd.</span> is dedicated to delivering pure, potent, and premium botanical products sourced directly from nature.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="font-body text-base lg:text-lg text-gray-600 leading-relaxed"
            >
              We work with trusted growers and suppliers to ensure the highest quality herbs, spices, and botanical extracts for global markets. Our commitment to excellence has made us a trusted partner for businesses worldwide.
            </motion.p>

            {/* Brand Tagline */}
            <motion.div
              variants={itemVariants}
              className="mt-8 p-6 bg-white rounded-2xl shadow-card border border-gray-100"
            >
              <p className="font-accent text-2xl text-primary italic">
                "Pure. Potent. Premium."
              </p>
              <p className="font-body text-sm text-gray-500 mt-2">— CEB Herbs Philosophy</p>
            </motion.div>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                data-testid={`feature-card-${index}`}
                className="group p-6 bg-white rounded-2xl shadow-card hover:shadow-hover border border-gray-100 hover:border-primary/20 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <feature.icon size={28} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading text-lg text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-sm text-gray-500">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
