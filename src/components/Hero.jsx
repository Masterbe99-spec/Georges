import { motion } from 'framer-motion'
import { WEDDING_CONFIG } from '../config'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  const scrollVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 1.2, duration: 0.6 }
    },
    animate: {
      y: [0, 8, 0],
      transition: { duration: 2, repeat: Infinity }
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-cream via-blush to-cream flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-2xl">
        {/* Decorative ring at top */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl mb-8"
        >
          💍
        </motion.div>

        {/* Main content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Couple names */}
          <motion.h1
            variants={itemVariants}
            className="elegant-header text-5xl md:text-7xl mb-4 text-gray-900"
          >
            {WEDDING_CONFIG.couple.name1}
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center gap-4 mb-6"
          >
            <div className="w-12 h-0.5 bg-gradient-to-r from-gold to-champagne"></div>
            <span className="text-2xl text-gold">&</span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-champagne to-gold"></div>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="elegant-header text-5xl md:text-7xl mb-8 text-gray-900"
          >
            {WEDDING_CONFIG.couple.name2}
          </motion.h2>

          {/* Date and time */}
          <motion.div
            variants={itemVariants}
            className="mb-8 space-y-2"
          >
            <p className="text-xl md:text-2xl text-gray-700 font-light">
              {WEDDING_CONFIG.date.day}
            </p>
            <p className="text-2xl md:text-3xl text-gold font-semibold">
              {WEDDING_CONFIG.date.date}
            </p>
            <p className="text-xl md:text-2xl text-gray-700 font-light">
              at {WEDDING_CONFIG.date.time}
            </p>
          </motion.div>

          {/* Decorative divider */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center gap-2 mb-12"
          >
            <div className="w-8 h-0.5 bg-gold"></div>
            <div className="text-gold text-sm">✦</div>
            <div className="w-8 h-0.5 bg-gold"></div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-gray-600 font-light text-lg italic"
          >
            Together, with love and gratitude
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={scrollVariants}
          initial="hidden"
          animate={['visible', 'animate']}
          className="mt-16 flex flex-col items-center"
        >
          <p className="text-gray-500 font-light text-sm mb-2">Scroll to explore</p>
          <svg
            className="w-6 h-6 text-gold"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
