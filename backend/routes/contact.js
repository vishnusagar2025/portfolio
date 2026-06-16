const express   = require('express')
const rateLimit = require('express-rate-limit')
const { body, validationResult } = require('express-validator')
const { Resend } = require('resend')

const router = express.Router()
const resend = new Resend(process.env.RESEND_API_KEY)

// Stricter limit for contact form
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: { error: 'Too many messages sent from this IP. Try again in an hour.' },
})

// Validation rules
const validate = [
  body('name').trim().notEmpty().withMessage('Name is required').isLength({ max: 100 }),
  body('email').isEmail().normalizeEmail().withMessage('Valid email required'),
  body('subject').trim().notEmpty().withMessage('Subject is required').isLength({ max: 200 }),
  body('message').trim().notEmpty().withMessage('Message is required').isLength({ max: 2000 }),
]

// POST /api/contact
router.post('/', contactLimiter, validate, async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { name, email, subject, message } = req.body
  const to = (process.env.CONTACT_EMAIL || 'vishnusagarv3@gmail.com').split(',').map(e => e.trim())

  try {
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to,
      replyTo: email,
      subject: `[Portfolio Contact] ${subject}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:24px;background:#f9fafb;border-radius:8px;">
          <h2 style="color:#0f172a;margin-bottom:4px;">New Contact Message</h2>
          <p style="color:#6b7280;font-size:14px;margin-bottom:24px;">Via your portfolio contact form</p>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;font-weight:600;color:#374151;width:100px;">Name:</td><td style="color:#111827;">${name}</td></tr>
            <tr><td style="padding:8px 0;font-weight:600;color:#374151;">Email:</td><td style="color:#111827;">${email}</td></tr>
            <tr><td style="padding:8px 0;font-weight:600;color:#374151;">Subject:</td><td style="color:#111827;">${subject}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0;"/>
          <p style="white-space:pre-line;color:#1f2937;line-height:1.6;">${message}</p>
        </div>
      `,
    })
    return res.status(200).json({ message: 'Message sent successfully!' })
  } catch (err) {
    console.error('Email error:', err)
    return res.status(500).json({ error: 'Failed to send message. Please try again later.' })
  }
})

module.exports = router
