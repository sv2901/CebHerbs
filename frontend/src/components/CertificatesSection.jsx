import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { SealCheck, Medal, Certificate, ShieldCheck, Leaf, Globe } from '@phosphor-icons/react';

const certificates = [
  {
    icon: SealCheck,
    name: 'ISO 22000',
    description: 'Food Safety Management',
    year: '2023',
  },
  {
    icon: Leaf,
    name: 'USDA Organic',
    description: 'Certified Organic Products',
    year: '2023',
  },
  {
    icon: Certificate,
    name: 'FSSAI',
    description: 'Food Safety Standards',
    year: '2024',
  },
  {
    icon: Medal,
    name: 'GMP Certified',
    description: 'Good Manufacturing Practice',
    year: '2023',
  },
  {
    icon: ShieldCheck,
    name: 'HACCP',
    description: 'Hazard Analysis Critical Control',
    year: '2024',
  },
  {
    icon: Globe,
    name: 'Export License',
    description: 'International Trade Certified',
    year: '2024',
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
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export const CertificatesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="certificates"
      data-testid="certificates-section"
      className="relative py-24 lg:py-32 bg-bone overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-body text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Quality Assurance
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
            Our Certifications
          </h2>
          <p className="font-body text-base lg:text-lg text-gray-500 max-w-2xl mx-auto">
            We maintain the highest international standards with globally recognized certifications.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              data-testid={`certificate-${index}`}
              className="group relative p-6 bg-white rounded-2xl border-2 border-accent/30 hover:border-accent transition-all duration-300 text-center"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Icon Container */}
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <cert.icon size={32} className="text-accent" weight="duotone" />
              </div>

              {/* Certificate Info */}
              <h3 className="font-heading text-base text-gray-900 mb-1">
                {cert.name}
              </h3>
              <p className="font-body text-xs text-gray-500 mb-2">
                {cert.description}
              </p>
              <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-body font-semibold rounded-full">
                {cert.year}
              </span>

              {/* Decorative corner */}
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-accent/30 rounded-tr-lg" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-accent/30 rounded-bl-lg" />
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-card border border-gray-100">
            <ShieldCheck size={24} className="text-primary" weight="fill" />
            <span className="font-body text-sm text-gray-600">
              All certifications verified and up-to-date
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatesSection;
