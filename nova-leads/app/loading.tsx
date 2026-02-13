"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        className="flex flex-col items-center space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="relative w-20 h-20">
          <motion.div
            className="absolute inset-0 border-4 border-primary-500/30 rounded-full"
          />
          <motion.div
            className="absolute inset-0 border-4 border-primary-500 rounded-full border-t-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <p className="text-dark-400 text-sm">Betöltés...</p>
      </motion.div>
    </div>
  );
}
