import RSVPForm from './RSVPForm'
import { motion } from 'framer-motion'

export default function RSVP() {
  return (
    <section id="rsvp" className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-cream to-blush">
      <div className="max-w-2xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="elegant-header text-4xl md:text-5xl mb-4">
            Reserve Your Seat
          </h2>
          <div className="section-divider"></div>
          <p className="text-gray-600 font-light text-lg mt-6">
            Please respond by June 15, 2026
          </p>
        </motion.div>

        {/* Form container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <RSVPForm />
        </motion.div>
      </div>
    </section>
  )
}
