// Content Configuration
// Doctor Appointment Booking System Configuration

export const siteConfig = {
  // Site Information
  siteName: "MediCare Plus",
  siteDescription: "Your trusted healthcare partner. Book appointments with qualified doctors, manage your health records, and get expert medical care.",
  
  // Hero Section
  heroTitle: "Your Health, Our Priority",
  heroSubtitle: "Book appointments with top-rated doctors, access your medical records, and receive quality healthcare from the comfort of your home. Available 24/7 for your convenience.",
  
  // Contact Information
  contactEmail: "support@medicareplus.com",
  contactPhone: "(555) MEDICARE",
  emergencyPhone: "(911) EMERGENCY",
  
  // Features (easily customizable)
  features: [
    {
      title: "Easy Appointment Booking",
      description: "Schedule appointments with your preferred doctors in just a few clicks. Choose from available time slots that fit your schedule.",
      icon: "Calendar",
      color: "bg-blue-500"
    },
    {
      title: "Qualified Doctors", 
      description: "Access a network of certified and experienced healthcare professionals across various specializations and medical fields.",
      icon: "UserCheck",
      color: "bg-green-500"
    },
    {
      title: "Secure Health Records",
      description: "Your medical history and personal information are protected with industry-standard security and privacy measures.",
      icon: "Shield",
      color: "bg-purple-500"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support and emergency assistance to help you with any healthcare needs or concerns.",
      icon: "Clock",
      color: "bg-orange-500"
    }
  ],
  
  // Appointment Booking Configuration
  appointmentConfig: {
    title: "Book Your Appointment",
    description: "Schedule a consultation with our qualified healthcare professionals. Choose your preferred doctor, date, and time slot.",
    specializations: [
      { value: "general", label: "General Medicine" },
      { value: "cardiology", label: "Cardiology" },
      { value: "dermatology", label: "Dermatology" },
      { value: "pediatrics", label: "Pediatrics" },
      { value: "orthopedics", label: "Orthopedics" },
      { value: "gynecology", label: "Gynecology" },
      { value: "neurology", label: "Neurology" },
      { value: "psychiatry", label: "Psychiatry" }
    ],
    appointmentTypes: [
      { value: "consultation", label: "General Consultation" },
      { value: "followup", label: "Follow-up Visit" },
      { value: "emergency", label: "Emergency" },
      { value: "checkup", label: "Regular Check-up" }
    ],
    timeSlots: [
      "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
      "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
      "05:00 PM", "05:30 PM", "06:00 PM"
    ]
  },
  
  // User Roles
  userRoles: [
    { value: "patient", label: "Patient" },
    { value: "doctor", label: "Doctor" },
    { value: "admin", label: "Administrator" }
  ],

  // Doctors Database
  doctors: [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialization: "cardiology",
      experience: "15 years",
      rating: 4.9,
      image: "/api/placeholder/150/150",
      availability: ["Monday", "Wednesday", "Friday"],
      consultationFee: 150
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialization: "general",
      experience: "12 years",
      rating: 4.8,
      image: "/api/placeholder/150/150",
      availability: ["Tuesday", "Thursday", "Saturday"],
      consultationFee: 120
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialization: "pediatrics",
      experience: "10 years",
      rating: 4.9,
      image: "/api/placeholder/150/150",
      availability: ["Monday", "Tuesday", "Wednesday", "Friday"],
      consultationFee: 130
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialization: "dermatology",
      experience: "8 years",
      rating: 4.7,
      image: "/api/placeholder/150/150",
      availability: ["Wednesday", "Thursday", "Friday", "Saturday"],
      consultationFee: 140
    }
  ]
}

// Theme Configuration
export const themeConfig = {
  // You can add custom color schemes here
  colors: {
    primary: "blue",
    secondary: "purple",
    accent: "green"
  }
}

// Animation Configuration
export const animationConfig = {
  // Hover effects
  cardHover: "transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl",
  buttonHover: "transition-all duration-300 transform hover:scale-105",
  iconHover: "transition-transform duration-300 hover:scale-110",
  
  // Loading states
  pulse: "animate-pulse",
  bounce: "animate-bounce-slow",
  float: "animate-float",
  
  // Gradients
  primaryGradient: "bg-gradient-to-r from-blue-600 to-purple-600",
  hoverGradient: "hover:from-blue-700 hover:to-purple-700"
}