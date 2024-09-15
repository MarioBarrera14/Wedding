import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Mail, User, Calendar } from 'lucide-react'

export default function ElegantRSVPForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [attendance, setAttendance] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ name, email, attendance })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto bg-white bg-opacity-80 p-8 rounded-lg shadow-lg text-center"
      >
        <Heart className="w-16 h-16 mx-auto text-pink-500 mb-4" />
        <h2 className="text-3xl font-serif mb-4">¡Gracias por tu respuesta!</h2>
        <p className="text-gray-600">Estamos emocionados de celebrar contigo.</p>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-purple-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white bg-opacity-80 p-8 rounded-lg shadow-lg"
      >
        <h1 className="text-4xl font-serif text-center mb-2">¿Nos acompañas?</h1>
        <h2 className="text-xl text-center text-gray-600 mb-6">Carlo & Sofia</h2>
        <p className="text-center text-sm text-gray-500 mb-8">Por favor, responde antes del 1 de octubre</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <User className="absolute top-3 left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border-b-2 border-gray-300 focus:border-pink-500 transition-colors bg-transparent"
              required
            />
          </div>
          
          <div className="relative">
            <Mail className="absolute top-3 left-3 text-gray-400" />
            <input
              type="email"
              placeholder="Tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border-b-2 border-gray-300 focus:border-pink-500 transition-colors bg-transparent"
              required
            />
          </div>
          
          <div className="relative">
            <Calendar className="absolute top-3 left-3 text-gray-400" />
            <select
              value={attendance}
              onChange={(e) => setAttendance(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border-b-2 border-gray-300 focus:border-pink-500 transition-colors bg-transparent appearance-none"
              required
            >
              <option value="">¿Asistirás?</option>
              <option value="yes">Felizmente asistiré</option>
              <option value="no">Lamentablemente no podré asistir</option>
              <option value="maybe">Tal vez pueda asistir</option>
            </select>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300"
          >
            Confirmar Asistencia
          </motion.button>
        </form>
      </motion.div>
    </div>
  )
}