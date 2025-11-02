import { Heart, Users, Phone, Mail, MapPin } from 'lucide-react'

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            About Us
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We're here to make healthcare simple and accessible for everyone.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg mb-8 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <Heart className="h-6 w-6 mr-2 text-red-500" />
            What We Do
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            MediCare Plus is a healthcare platform that connects patients with qualified doctors. 
            We believe that booking a doctor's appointment shouldn't be complicated or stressful.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Our team of experienced doctors covers various specializations, and we're committed 
            to providing quality care that fits your schedule and needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <Users className="h-5 w-5 mr-2 text-blue-600" />
              Our Services
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                General consultations
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Specialist appointments
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Emergency care
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Health checkups
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <Heart className="h-5 w-5 mr-2 text-green-600" />
              Why Choose Us
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                Easy online booking
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                Qualified doctors
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                Flexible scheduling
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                Affordable rates
              </li>
            </ul>
          </div>
        </div>

        {/* Simple Stats */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-lg mb-8 text-center shadow-lg">
          <div className="grid grid-cols-3 gap-6">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold mb-1">500+</div>
              <div className="text-blue-100">Happy Patients</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold mb-1">25+</div>
              <div className="text-blue-100">Doctors</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold mb-1">24/7</div>
              <div className="text-blue-100">Support</div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Get In Touch
          </h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-300">
            <div className="flex items-center p-3 bg-white dark:bg-gray-700 rounded-lg hover:shadow-sm transition-shadow duration-300">
              <Phone className="h-5 w-5 mr-4 text-green-600" />
              <span className="font-medium">(555) MEDICARE</span>
            </div>
            <div className="flex items-center p-3 bg-white dark:bg-gray-700 rounded-lg hover:shadow-sm transition-shadow duration-300">
              <Mail className="h-5 w-5 mr-4 text-blue-600" />
              <span className="font-medium">support@medicareplus.com</span>
            </div>
            <div className="flex items-center p-3 bg-white dark:bg-gray-700 rounded-lg hover:shadow-sm transition-shadow duration-300">
              <MapPin className="h-5 w-5 mr-4 text-purple-600" />
              <span className="font-medium">123 Healthcare Ave, Medical District</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About