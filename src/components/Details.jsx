import { motion } from 'framer-motion'
import { WEDDING_CONFIG } from '../config'

export default function Details() {
  const details = [
    {
      title: 'Ceremony',
      time: WEDDING_CONFIG.date.time,
      description: 'Join us as we exchange our vows'
    },
    {
      title: 'Reception',
      time: 'Following Ceremony',
      description: 'Celebration, dinner, and dancing'
    },
    {
      title: 'Dress Code',
      description: 'Black Tie Optional'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="details" className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="elegant-header text-4xl md:text-5xl mb-4">
            Wedding Details
          </h2>
          <div className="section-divider"></div>
        </motion.div>

        {/* Details grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {details.map((detail, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="text-center"
            >
              <h3 className="elegant-header text-2xl text-gold mb-3">
                {detail.title}
              </h3>
              {detail.time && (
                <p className="text-lg text-gray-700 font-light mb-2">
                  {detail.time}
                </p>
              )}
              <p className="text-gray-600 font-light">
                {detail.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* RSVP deadline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-blush bg-opacity-50 rounded-lg p-8 text-center border-2 border-gold border-opacity-30"
        >
          <p className="text-gray-700 font-light text-lg">
            Please RSVP by <span className="font-semibold text-gold">June 15, 2026</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
