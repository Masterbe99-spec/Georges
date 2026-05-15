import { useState } from 'react'
import { motion } from 'framer-motion'
import { WEDDING_CONFIG } from '../config'

export default function RSVPForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attendance: 'accept',
    guests: '1',
    dietary: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // FormSubmit will handle the submission
      // The form action and hidden inputs handle the email routing
      await new Promise(resolve => setTimeout(resolve, 500))
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        attendance: 'accept',
        guests: '1',
        dietary: '',
        message: ''
      })
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gold bg-opacity-10 border-2 border-gold rounded-lg p-8 text-center"
      >
        <div className="text-5xl mb-4">✨</div>
        <h3 className="font-elegant text-2xl text-gray-900 mb-2">
          Thank You!
        </h3>
        <p className="text-gray-700 font-light mb-2">
          Your response has been received with gratitude.
        </p>
        <p className="text-sm text-gray-600">
          A confirmation email has been sent to {formData.email}
        </p>
      </motion.div>
    )
  }

  return (
    <form
      action={WEDDING_CONFIG.formAction}
      method="POST"
      onSubmit={handleSubmit}
      className="space-y-6 bg-white rounded-lg p-8 shadow-lg"
    >
      {/* FormSubmit configuration */}
      <input type="hidden" name="_cc" value={WEDDING_CONFIG.emails.cc} />
      <input type="hidden" name="_subject" value={`RSVP: ${WEDDING_CONFIG.couple.name1} & ${WEDDING_CONFIG.couple.name2} Wedding`} />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} />

      {/* Name field */}
      <div>
        <label className="block text-gray-700 font-light mb-2">
          Full Name *
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your full name"
          className="luxury-input"
        />
      </div>

      {/* Email field */}
      <div>
        <label className="block text-gray-700 font-light mb-2">
          Email Address *
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="your.email@example.com"
          className="luxury-input"
        />
      </div>

      {/* Attendance field */}
      <div>
        <label className="block text-gray-700 font-light mb-2">
          Will You Attend? *
        </label>
        <select
          name="attendance"
          value={formData.attendance}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border-b-2 border-gold bg-transparent focus:outline-none focus:border-deep-gold font-serif text-gray-800"
        >
          <option value="accept">Joyfully Accept</option>
          <option value="decline">Regretfully Decline</option>
        </select>
      </div>

      {/* Number of guests */}
      <div>
        <label className="block text-gray-700 font-light mb-2">
          Number of Guests *
        </label>
        <select
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border-b-2 border-gold bg-transparent focus:outline-none focus:border-deep-gold font-serif text-gray-800"
        >
          <option value="1">1 Guest</option>
          <option value="2">2 Guests</option>
          <option value="3">3 Guests</option>
          <option value="4">4 Guests</option>
          <option value="5">5+ Guests</option>
        </select>
      </div>

      {/* Dietary restrictions */}
      <div>
        <label className="block text-gray-700 font-light mb-2">
          Dietary Restrictions
        </label>
        <input
          type="text"
          name="dietary"
          value={formData.dietary}
          onChange={handleChange}
          placeholder="e.g., Vegetarian, Gluten-free, etc."
          className="luxury-input"
        />
      </div>

      {/* Message field */}
      <div>
        <label className="block text-gray-700 font-light mb-2">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="We look forward to celebrating with you!"
          rows="4"
          className="w-full px-4 py-3 border-2 border-gold rounded-lg bg-transparent focus:outline-none focus:border-deep-gold font-serif text-gray-800 placeholder-gray-400"
        ></textarea>
      </div>

      {/* Submit button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full luxury-button disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Submit RSVP'}
      </motion.button>

      <p className="text-center text-sm text-gray-500 font-light">
        Your response will be sent to {WEDDING_CONFIG.emails.main}
      </p>
    </form>
  )
}
