import { motion } from 'framer-motion';

export const MarqueeRibbon = () => {
  const text = "Cutting Edge Botanical Pvt. Ltd.   •   A Traditional Herbs and Spices Company   •   ";
  
  return (
    <div 
      data-testid="marquee-ribbon"
      className="fixed top-0 left-0 right-0 z-50 bg-primary py-2.5 overflow-hidden"
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {/* Repeat the text multiple times for seamless loop */}
        {[...Array(10)].map((_, index) => (
          <span
            key={index}
            className="font-body text-sm text-white/90 tracking-wide mx-4"
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeRibbon;
