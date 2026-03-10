import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { WhatsappLogo, ArrowRight } from '@phosphor-icons/react';

const WHATSAPP_URL = "https://wa.me/919711058451?text=Hey,%20I%20am%20interest%20in%20some%20of%20your%20products";

const products = [
  {
    name: 'Herbs',
    description: 'Premium quality medicinal and culinary herbs',
    image: 'https://images.unsplash.com/photo-1628088037513-14c88ec36997?crop=entropy&cs=srgb&fm=jpg&q=85&w=600',
  },
  {
    name: 'Spices',
    description: 'Aromatic spices sourced from finest regions',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?crop=entropy&cs=srgb&fm=jpg&q=85&w=600',
  },
  {
    name: 'Culinary & Seasoning',
    description: 'Perfect blends for culinary excellence',
    image: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?crop=entropy&cs=srgb&fm=jpg&q=85&w=600',
  },
  {
    name: 'Dried Flowers',
    description: 'Beautiful preserved botanical flowers',
    image: 'https://images.unsplash.com/photo-1553499944-3cea7081e412?crop=entropy&cs=srgb&fm=jpg&q=85&w=600',
  },
  {
    name: 'Gums & Minerals',
    description: 'Natural gums and mineral extracts',
    image: 'https://images.unsplash.com/photo-1658315216383-0981970a596b?crop=entropy&cs=srgb&fm=jpg&q=85&w=600',
  },
  {
    name: 'Oil Seeds',
    description: 'High-quality seeds for oil extraction',
    image: 'https://images.unsplash.com/photo-1687472238829-59855ebda1f8?crop=entropy&cs=srgb&fm=jpg&q=85&w=600',
  },
  {
    name: 'Sea Shells',
    description: 'Natural sea shells for various uses',
    image: 'https://images.unsplash.com/photo-1564844692289-c250f04bc5ab?crop=entropy&cs=srgb&fm=jpg&q=85&w=600',
  },
  {
    name: 'Oleoresins',
    description: 'Concentrated natural flavor extracts',
    image: 'https://images.pexels.com/photos/8450222/pexels-photo-8450222.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    name: 'Herb Extract Powder',
    description: 'Potent powdered botanical extracts',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?crop=entropy&cs=srgb&fm=jpg&q=85&w=600',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section
      id="products"
      data-testid="products-section"
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 border border-primary rounded-full" />
        <div className="absolute bottom-40 right-20 w-60 h-60 border border-primary rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-20 h-20 border border-primary rounded-full" />
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
            Our Collection
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
            Premium Products
          </h2>
          <p className="font-body text-base lg:text-lg text-gray-500 max-w-2xl mx-auto">
            Discover our carefully curated selection of botanical products, sourced from the finest regions worldwide.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              data-testid={`product-card-${index}`}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-500"
              whileHover={{ y: -8 }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* WhatsApp Button - appears on hover */}
                <motion.a
                  href={`${WHATSAPP_URL}&text=Hi,%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`product-enquire-${index}`}
                  className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-xl font-body font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-green-600"
                >
                  <WhatsappLogo size={18} weight="fill" />
                  Enquire on WhatsApp
                </motion.a>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading text-xl text-gray-900 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <ArrowRight size={18} className="text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <p className="font-body text-sm text-gray-500">
                  {product.description}
                </p>
              </div>

              {/* Accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
