import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, ArrowRight, Clock } from '@phosphor-icons/react';

const blogPosts = [
  {
    title: 'The Health Benefits of Turmeric in Daily Life',
    excerpt: 'Discover how this golden spice can transform your wellness routine with its powerful anti-inflammatory properties.',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?crop=entropy&cs=srgb&fm=jpg&q=85&w=600',
    date: 'Dec 15, 2024',
    readTime: '5 min read',
    category: 'Wellness',
  },
  {
    title: 'Understanding Quality Standards in Herb Export',
    excerpt: 'Learn about the international certifications and quality benchmarks that define premium botanical exports.',
    image: 'https://images.unsplash.com/photo-1552256028-2c58c3cbfa7a?crop=entropy&cs=srgb&fm=jpg&q=85&w=600',
    date: 'Dec 10, 2024',
    readTime: '7 min read',
    category: 'Industry',
  },
  {
    title: 'Traditional Herbs: From Farm to Global Markets',
    excerpt: 'Explore the journey of traditional herbs from sustainable farms to wellness brands worldwide.',
    image: 'https://images.unsplash.com/photo-1628088037513-14c88ec36997?crop=entropy&cs=srgb&fm=jpg&q=85&w=600',
    date: 'Dec 5, 2024',
    readTime: '6 min read',
    category: 'Supply Chain',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="blog"
      data-testid="blog-section"
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-body text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Latest Updates
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
            From Our Blog
          </h2>
          <p className="font-body text-base lg:text-lg text-gray-500 max-w-2xl mx-auto">
            Stay informed with the latest insights on botanicals, industry trends, and wellness tips.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              data-testid={`blog-post-${index}`}
              className="group bg-bone rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-500"
              whileHover={{ y: -8 }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-white text-xs font-body font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <Calendar size={14} />
                    <span className="font-body text-xs">{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <Clock size={14} />
                    <span className="font-body text-xs">{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="font-body text-sm text-gray-500 line-clamp-2 mb-4">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <motion.button
                  className="flex items-center gap-2 font-body text-sm font-semibold text-primary group-hover:gap-3 transition-all"
                  whileHover={{ x: 5 }}
                >
                  Read More
                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
