import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  isAuthenticated: !!localStorage.getItem('user'),
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload
      state.isAuthenticated = true
      localStorage.setItem('user', JSON.stringify(action.payload))
    },
    logout: (state) => {
      state.user = null
      state.isAuthenticated = false
      localStorage.removeItem('user')
    },
    register: (state, action) => {
      const users = JSON.parse(localStorage.getItem('users')) || []
      users.push(action.payload)
      localStorage.setItem('users', JSON.stringify(users))
    },
  },
})

export const { login, logout, register } = authSlice.actions
export default authSlice.reducer