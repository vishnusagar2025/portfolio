const express = require('express')
const path    = require('path')
const fs      = require('fs')

const router = express.Router()

// GET /api/resume/download — serves resume PDF from docs/resume/
router.get('/download', (req, res) => {
  const filePath = path.join(__dirname, '../../docs/resume/resume.pdf')

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'Resume file not found.' })
  }

  res.setHeader('Content-Type', 'application/pdf')
  res.setHeader('Content-Disposition', 'attachment; filename="Vishnu_SA_Resume.pdf"')
  res.sendFile(filePath)
})

module.exports = router
