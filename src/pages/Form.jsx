import { useState } from 'react'
import { Calendar, User } from 'lucide-react'
import { siteConfig } from '../config/content'

const Form = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    email: '',
    phone: '',
    specialization: '',
    doctor: '',
    appointmentDate: '',
    timeSlot: '',
    symptoms: ''
  })
  const [success, setSuccess] = useState('')
  const [selectedDoctor, setSelectedDoctor] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })

    // Update selected doctor when specialization changes
    if (name === 'specialization') {
      const availableDoctors = siteConfig.doctors.filter(doc => doc.specialization === value)
      setSelectedDoctor(null)
      setFormData(prev => ({ ...prev, doctor: '' }))
    }

    // Set selected doctor details when doctor is chosen
    if (name === 'doctor') {
      const doctor = siteConfig.doctors.find(doc => doc.id === parseInt(value))
      setSelectedDoctor(doctor)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Save appointment data to localStorage
    const appointments = JSON.parse(localStorage.getItem('appointments')) || []
    const newAppointment = {
      ...formData,
      id: Date.now(),
      status: 'pending',
      bookedAt: new Date().toISOString(),
      doctorDetails: selectedDoctor
    }
    
    appointments.push(newAppointment)
    localStorage.setItem('appointments', JSON.stringify(appointments))
    
    setSuccess('Appointment booked successfully! You will receive a confirmation email shortly.')
    
    // Reset form
    setFormData({
      patientName: '',
      email: '',
      phone: '',
      specialization: '',
      doctor: '',
      appointmentDate: '',
      timeSlot: '',
      symptoms: ''
    })
    setSelectedDoctor(null)
    
    // Clear success message after 5 seconds
    setTimeout(() => setSuccess(''), 5000)
  }

  const getAvailableDoctors = () => {
    if (!formData.specialization) return []
    return siteConfig.doctors.filter(doc => doc.specialization === formData.specialization)
  }

  const getTomorrowDate = () => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split('T')[0]
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 transition-colors duration-300">
          <div className="flex items-center mb-6">
            <Calendar className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {siteConfig.appointmentConfig.title}
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            {siteConfig.appointmentConfig.description}
          </p>

          {success && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="patientName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="patientName"
                    name="patientName"
                    required
                    value={formData.patientName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            {/* Appointment Details */}
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Appointment Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="specialization" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Specialization *
                  </label>
                  <select
                    id="specialization"
                    name="specialization"
                    required
                    value={formData.specialization}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select specialization</option>
                    {siteConfig.appointmentConfig.specializations.map((spec) => (
                      <option key={spec.value} value={spec.value}>{spec.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="doctor" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Preferred Doctor *
                  </label>
                  <select
                    id="doctor"
                    name="doctor"
                    required
                    value={formData.doctor}
                    onChange={handleChange}
                    disabled={!formData.specialization}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50"
                  >
                    <option value="">Select doctor</option>
                    {getAvailableDoctors().map((doctor) => (
                      <option key={doctor.id} value={doctor.id}>
                        {doctor.name} - ${doctor.consultationFee}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Appointment Date *
                  </label>
                  <input
                    type="date"
                    id="appointmentDate"
                    name="appointmentDate"
                    required
                    min={getTomorrowDate()}
                    value={formData.appointmentDate}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="timeSlot" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Time Slot *
                  </label>
                  <select
                    id="timeSlot"
                    name="timeSlot"
                    required
                    value={formData.timeSlot}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select time slot</option>
                    {siteConfig.appointmentConfig.timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Reason for Visit *
                </label>
                <textarea
                  id="symptoms"
                  name="symptoms"
                  required
                  rows={3}
                  value={formData.symptoms}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Briefly describe your symptoms or reason for visit"
                />
              </div>
            </div>

            {/* Selected Doctor Info */}
            {selectedDoctor && (
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Selected Doctor Information
                </h3>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                    <User className="h-8 w-8 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{selectedDoctor.name}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{selectedDoctor.experience} experience</p>
                    <p className="text-gray-600 dark:text-gray-300">Rating: ⭐ {selectedDoctor.rating}/5</p>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">Consultation Fee: ${selectedDoctor.consultationFee}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                type="button"
                onClick={() => {
                  setFormData({
                    patientName: '',
                    email: '',
                    phone: '',
                    specialization: '',
                    doctor: '',
                    appointmentDate: '',
                    timeSlot: '',
                    symptoms: ''
                  })
                  setSelectedDoctor(null)
                }}
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                Reset Form
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
              >
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form