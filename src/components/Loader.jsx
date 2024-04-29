import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        className="w-12 h-12 rounded-full bg-blue-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, yoyo: Infinity }}
      />
    </div>
  );
};

export default Loader;
