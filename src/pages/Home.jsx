import { Calendar, UserCheck, Shield, Clock, CheckCircle, Heart, Users, Award, User, Star } from 'lucide-react'
import { siteConfig } from '../config/content'

const Home = () => {
  const iconMap = {
    Calendar,
    UserCheck,
    Shield,
    Clock
  }

  const features = siteConfig.features.map(feature => ({
    ...feature,
    icon: iconMap[feature.icon]
  }))

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-blue-600 dark:bg-blue-800 text-white py-16 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Heart className="h-12 w-12 mx-auto mb-4 text-red-300 dark:text-red-400" />
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            {siteConfig.heroTitle}
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-blue-100 dark:text-blue-200">
            {siteConfig.heroSubtitle}
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="bg-white dark:bg-gray-200 text-blue-600 dark:text-blue-800 px-6 py-3 rounded font-semibold hover:bg-gray-100 dark:hover:bg-gray-300 transition-colors duration-300">
              Book Appointment
            </button>
            <button className="border-2 border-white dark:border-gray-300 text-white dark:text-gray-200 px-6 py-3 rounded font-semibold hover:bg-white hover:text-blue-600 dark:hover:bg-gray-200 dark:hover:text-blue-800 transition-colors duration-300">
              Emergency: {siteConfig.emergencyPhone}
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Quality healthcare services for you and your family
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300">
                  <div className={`w-12 h-12 ${feature.color} dark:opacity-90 rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className="text-white h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-800 text-white transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="transition-transform duration-300 hover:scale-105">
              <Users className="h-8 w-8 mx-auto mb-2 text-blue-200 dark:text-blue-300" />
              <div className="text-3xl font-bold mb-2 text-white">10,000+</div>
              <div className="text-blue-100 dark:text-blue-200">Happy Patients</div>
            </div>
            <div className="transition-transform duration-300 hover:scale-105">
              <UserCheck className="h-8 w-8 mx-auto mb-2 text-blue-200 dark:text-blue-300" />
              <div className="text-3xl font-bold mb-2 text-white">150+</div>
              <div className="text-blue-100 dark:text-blue-200">Qualified Doctors</div>
            </div>
            <div className="transition-transform duration-300 hover:scale-105">
              <Award className="h-8 w-8 mx-auto mb-2 text-blue-200 dark:text-blue-300" />
              <div className="text-3xl font-bold mb-2 text-white">15+</div>
              <div className="text-blue-100 dark:text-blue-200">Years Experience</div>
            </div>
            <div className="transition-transform duration-300 hover:scale-105">
              <Clock className="h-8 w-8 mx-auto mb-2 text-blue-200 dark:text-blue-300" />
              <div className="text-3xl font-bold mb-2 text-white">24/7</div>
              <div className="text-blue-100 dark:text-blue-200">Emergency Care</div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Doctors
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Meet our qualified healthcare professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.doctors.map((doctor) => (
              <div key={doctor.id} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center transition-all duration-300 hover:shadow-lg">
                <div className="w-16 h-16 bg-blue-500 dark:bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">{doctor.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 capitalize mb-2">
                  {siteConfig.appointmentConfig.specializations.find(s => s.value === doctor.specialization)?.label}
                </p>
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-4 w-4 text-yellow-500 dark:text-yellow-400 mr-1" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">{doctor.rating}/5</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{doctor.experience}</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">${doctor.consultationFee}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose MediCare Plus?
              </h2>
              <div className="space-y-4">
                {[
                  "Board-certified doctors",
                  "Easy online booking",
                  "24/7 emergency support",
                  "Secure medical records",
                  "Insurance accepted"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg transition-colors duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                How to Book
              </h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-500 dark:bg-blue-600 text-white rounded-full flex items-center justify-center text-sm mr-3">1</div>
                  Choose your doctor
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-500 dark:bg-blue-600 text-white rounded-full flex items-center justify-center text-sm mr-3">2</div>
                  Select date & time
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-500 dark:bg-blue-600 text-white rounded-full flex items-center justify-center text-sm mr-3">3</div>
                  Fill your details
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-500 dark:bg-blue-600 text-white rounded-full flex items-center justify-center text-sm mr-3">4</div>
                  Confirm appointment
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Book Your Appointment?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Join thousands of patients who trust MediCare Plus for their healthcare needs.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-800 text-white px-8 py-3 rounded font-semibold transition-colors duration-300">
              Book Appointment Now
            </button>
            <button className="border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 px-8 py-3 rounded font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-colors duration-300">
              Call {siteConfig.contactPhone}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home