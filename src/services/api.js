import axios from 'axios'

const BACKEND = import.meta.env.VITE_API_BASE
const BASE = (BACKEND && !BACKEND.includes('example.com')) ? BACKEND : 'https://portfolio-pxmf.onrender.com/api'

const api = axios.create({
  baseURL: BASE,
  timeout: 60000,
  headers: { 'Content-Type': 'application/json' },
})

export const sendContactMessage = (data) => api.post('/contact', data)
export const downloadResume     = ()     => api.get('/resume/download', { responseType: 'blob' })

export default api
