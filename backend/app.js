require('dotenv').config()
const express = require('express')
const cors    = require('cors')
const helmet  = require('helmet')
const rateLimit = require('express-rate-limit')

const contactRoutes = require('./routes/contact')
const resumeRoutes  = require('./routes/resume')

const app  = express()
const PORT = process.env.PORT || 5000

// ── Security & middleware ──────────────────────────────────────────────────
app.use(helmet())
app.use(cors({
  origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
  credentials: true,
}))
app.use(express.json({ limit: '10kb' }))

// Global rate limiter
app.use(rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests, please try again later.' },
}))

// ── Routes ────────────────────────────────────────────────────────────────
app.use('/api/contact', contactRoutes)
app.use('/api/resume',  resumeRoutes)

app.get('/api/health', (_req, res) => res.json({ status: 'ok', time: new Date() }))

// 404 handler
app.use((_req, res) => res.status(404).json({ error: 'Route not found' }))

// Global error handler
app.use((err, _req, res, _next) => {
  console.error(err.stack)
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' })
})

app.listen(PORT, () => console.log(`🚀  Server running on http://localhost:${PORT}`))
