"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-9xl font-display font-bold text-gradient mb-4">
            404
          </h1>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-white">
            Oldal nem található
          </h2>
          <p className="text-lg text-dark-300 mb-8">
            Úgy tűnik, az általad keresett oldal nem létezik vagy áthelyezésre került.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-lg font-medium transition-all duration-200 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40"
          >
            <Home className="mr-2" size={20} />
            Vissza a kezdőlapra
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 glass-hover rounded-lg font-medium text-white inline-flex items-center space-x-2"
          >
            <ArrowLeft size={20} />
            <span>Vissza</span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <p className="text-sm text-dark-500">
            Ha úgy gondolod, hogy ez egy hiba, kérlek{" "}
            <Link href="/contact" className="text-primary-400 hover:text-primary-300 transition-colors">
              vedd fel velünk a kapcsolatot
            </Link>
            .
          </p>
        </motion.div>
      </div>
    </div>
  );
}
