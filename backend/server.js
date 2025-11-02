import express from 'express'
import cors from 'cors'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

// Middleware
app.use(cors())
app.use(express.json())

// In-memory storage (replace with database in production)
let users = []
let appointments = []

// Register endpoint
app.post('/api/auth/register', async (req, res) => {
  try {
    const { email, password, name } = req.body

    // Validation
    if (!email || !password || !name) {
      return res.status(400).json({
        success: false,
        message: 'Please provide email, password, and name'
      })
    }

    // Check if user already exists
    const existingUser = users.find(user => user.email === email)
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User already exists'
      })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create user
    const newUser = {
      id: users.length + 1,
      name,
      email,
      password: hashedPassword,
      createdAt: new Date()
    }

    users.push(newUser)

    // Generate JWT token
    const token = jwt.sign(
      { userId: newUser.id, email: newUser.email },
      JWT_SECRET,
      { expiresIn: '24h' }
    )

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      token,
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email
      }
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    })
  }
})

// Login endpoint
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body

    // Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide email and password'
      })
    }

    // Find user
    const user = users.find(user => user.email === email)
    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'Invalid credentials'
      })
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return res.status(400).json({
        success: false,
        message: 'Invalid credentials'
      })
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: '24h' }
    )

    res.json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    })
  }
})

// Get all users (for testing purposes)
app.get('/api/users', (req, res) => {
  const usersWithoutPasswords = users.map(user => ({
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt
  }))

  res.json({
    success: true,
    users: usersWithoutPasswords
  })
})

// Appointment endpoints
app.post('/api/appointments', (req, res) => {
  try {
    const {
      patientName,
      email,
      phone,
      specialization,
      doctor,
      appointmentDate,
      timeSlot,
      symptoms
    } = req.body

    // Validation
    if (!patientName || !email || !phone || !specialization || !doctor || !appointmentDate || !timeSlot || !symptoms) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields'
      })
    }

    // Create appointment
    const newAppointment = {
      id: appointments.length + 1,
      patientName,
      email,
      phone,
      specialization,
      doctor,
      appointmentDate,
      timeSlot,
      symptoms,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date()
    }

    appointments.push(newAppointment)

    res.status(201).json({
      success: true,
      message: 'Appointment booked successfully',
      appointment: newAppointment
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    })
  }
})

// Get all appointments
app.get('/api/appointments', (req, res) => {
  res.json({
    success: true,
    appointments: appointments
  })
})

// Get appointment by ID
app.get('/api/appointments/:id', (req, res) => {
  const appointmentId = parseInt(req.params.id)
  const appointment = appointments.find(apt => apt.id === appointmentId)

  if (!appointment) {
    return res.status(404).json({
      success: false,
      message: 'Appointment not found'
    })
  }

  res.json({
    success: true,
    appointment: appointment
  })
})

// Update appointment status
app.put('/api/appointments/:id', (req, res) => {
  const appointmentId = parseInt(req.params.id)
  const { status } = req.body

  const appointmentIndex = appointments.findIndex(apt => apt.id === appointmentId)

  if (appointmentIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'Appointment not found'
    })
  }

  appointments[appointmentIndex].status = status
  appointments[appointmentIndex].updatedAt = new Date()

  res.json({
    success: true,
    message: 'Appointment updated successfully',
    appointment: appointments[appointmentIndex]
  })
})

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running!',
    timestamp: new Date()
  })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})