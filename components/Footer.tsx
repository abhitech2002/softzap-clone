'use client';

import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="bg-black py-8"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-white">© 2024 Softzap. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
