import { Mail, Phone, Github, Twitter, Linkedin, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 mr-2 text-red-500" />
              <h3 className="text-xl font-bold text-white">
                MediCare Plus
              </h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted healthcare partner, providing quality medical services with compassion and excellence. 
              We're committed to improving lives and building healthier communities.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-gray-700 hover:bg-blue-600 rounded">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-700 hover:bg-blue-500 rounded">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-700 hover:bg-blue-700 rounded">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/form", label: "Book Appointment" },
                { href: "/about", label: "About Us" },
                { href: "/login", label: "Patient Login" },
                { href: "/register", label: "New Patient Registration" }
              ].map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300 group">
                <Mail className="h-5 w-5 mr-3 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="group-hover:text-blue-400 transition-colors duration-300">
                  support@medicareplus.com
                </span>
              </div>
              <div className="flex items-center text-gray-300 group">
                <Phone className="h-5 w-5 mr-3 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="group-hover:text-green-400 transition-colors duration-300">
                  (555) MEDICARE
                </span>
              </div>
              <div className="flex items-center text-gray-300 group">
                <Phone className="h-5 w-5 mr-3 text-red-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="group-hover:text-red-400 transition-colors duration-300">
                  Emergency: (911) EMERGENCY
                </span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2 text-gray-400">Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-700 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg transition-colors duration-300">
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 MediCare Plus. All rights reserved. | Privacy Policy | Terms of Service
            </p>
            <div className="flex items-center text-gray-400 text-sm">
              <span>Caring for your health with</span>
              <Heart className="h-4 w-4 mx-1 text-red-500 animate-pulse" />
              <span>compassion and excellence</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer