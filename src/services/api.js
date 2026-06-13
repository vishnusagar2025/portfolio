import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || '/api',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
})

export const sendContactMessage = (data) => api.post('/contact', data)
export const downloadResume     = ()     => api.get('/resume/download', { responseType: 'blob' })

export default api
