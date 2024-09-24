'use client';

import { motion } from 'framer-motion';

const Features: React.FC = () => {
  return (
    <motion.div
      id="features"
      className="bg-white py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            className="text-base font-semibold tracking-wide text-blue-600 uppercase"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Features
          </motion.h2>
          <motion.p
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Everything you need
          </motion.p>
        </div>

        <div className="mt-10 space-y-8">
          <div className="flex justify-between">
            {[1, 2, 3].map((feature, index) => (
              <motion.div
                key={feature}
                className="w-1/3 p-4 border border-gray-200 rounded-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.8 }}
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  Feature {feature}
                </h3>
                <p className="mt-2 text-gray-500">Description of feature {feature}.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Features;
