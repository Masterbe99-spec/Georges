import { motion } from 'framer-motion'
import { WEDDING_CONFIG } from '../config'

export default function Footer() {
  return (
    <footer className="bg-deep-gold text-cream py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="elegant-header text-2xl md:text-3xl mb-4">
            {WEDDING_CONFIG.couple.name1} & {WEDDING_CONFIG.couple.name2}
          </h3>
          <p className="font-light text-lg mb-2">
            {WEDDING_CONFIG.date.day}, {WEDDING_CONFIG.date.date}
          </p>
          <p className="font-light text-lg mb-6">
            {WEDDING_CONFIG.date.time}
          </p>

          {/* Decorative divider */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="w-12 h-0.5 bg-champagne"></div>
            <div className="text-2xl">💍</div>
            <div className="w-12 h-0.5 bg-champagne"></div>
          </div>

          {/* Contact info */}
          <div className="space-y-2 mb-8">
            <p className="font-light">Questions?</p>
            <a
              href={`mailto:${WEDDING_CONFIG.emails.main}`}
              className="inline-block hover:text-champagne transition-colors font-light"
            >
              {WEDDING_CONFIG.emails.main}
            </a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-champagne border-opacity-30 pt-8 text-center">
          <p className="font-light text-sm text-cream text-opacity-80">
            Made with love for a special celebration
          </p>
          <p className="font-light text-xs text-cream text-opacity-60 mt-2">
            © 2026 {WEDDING_CONFIG.couple.name1} & {WEDDING_CONFIG.couple.name2}
          </p>
        </div>
      </div>
    </footer>
  )
}
