import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { WhatsappLogo, ChatCircleDots, Lightning } from '@phosphor-icons/react';

const WHATSAPP_URL = "https://wa.me/919711058451?text=Hey,%20I%20am%20interest%20in%20some%20of%20your%20products";

export const EnquirySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="contact"
      data-testid="enquiry-section"
      className="relative py-24 lg:py-32 bg-bone overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
            className="w-20 h-20 mx-auto mb-8 bg-white rounded-2xl shadow-card flex items-center justify-center"
          >
            <ChatCircleDots size={40} className="text-primary" weight="duotone" />
          </motion.div>

          {/* Heading */}
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
            Looking for Bulk
            <br />
            <span className="text-primary">Herbs or Spices?</span>
          </h2>

          <p className="font-body text-base lg:text-lg text-gray-500 max-w-xl mx-auto mb-10">
            Skip the forms! Connect directly with our team on WhatsApp for instant responses, 
            personalized quotes, and faster service.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              'Instant Response',
              'Personalized Quotes',
              'Direct Communication',
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100"
              >
                <Lightning size={16} className="text-accent" weight="fill" />
                <span className="font-body text-sm text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="enquiry-whatsapp-btn"
            className="inline-flex items-center gap-3 bg-green-500 text-white px-12 py-5 rounded-full font-body font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-green-600 transition-all"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <WhatsappLogo size={28} weight="fill" />
            Chat on WhatsApp
          </motion.a>

          {/* Contact Info */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 font-body text-sm text-gray-500"
          >
            Or call us directly at{' '}
            <a href="tel:+919711058451" className="text-primary font-semibold hover:underline">
              +91 9711058451
            </a>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default EnquirySection;
