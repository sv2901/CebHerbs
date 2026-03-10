import { motion } from 'framer-motion';
import { WhatsappLogo } from '@phosphor-icons/react';

const WHATSAPP_URL = "https://wa.me/919711058451?text=Hey,%20I%20am%20interest%20in%20some%20of%20your%20products";

export const WhatsAppButton = () => {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="floating-whatsapp-btn"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-xl hover:shadow-2xl hover:bg-green-600 transition-all whatsapp-pulse"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <WhatsappLogo size={32} weight="fill" className="text-white" />
      
      {/* Tooltip */}
      <motion.div
        className="absolute right-full mr-3 px-3 py-2 bg-white rounded-lg shadow-lg whitespace-nowrap opacity-0 pointer-events-none"
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
      >
        <span className="font-body text-sm text-gray-700">Chat with us!</span>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1 w-2 h-2 bg-white rotate-45" />
      </motion.div>
    </motion.a>
  );
};

export default WhatsAppButton;
