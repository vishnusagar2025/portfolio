# Vishnu SA – Portfolio

A professional portfolio built with **React + Tailwind CSS** (frontend) and **Node.js + Express** (backend).

---

## Project Structure

```
portfolio/
├── src/                     # React frontend
│   ├── components/          # Reusable UI sections
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Experience/
│   │   ├── Projects/
│   │   ├── Research/
│   │   ├── Certifications/
│   │   ├── Patent/
│   │   ├── Achievements/
│   │   └── Contact/
│   ├── pages/               # Route-level pages
│   ├── data/                # Static data (projects, research, certs)
│   ├── hooks/               # Custom React hooks
│   ├── services/            # Axios API client
│   ├── styles/              # Global CSS + Tailwind
│   └── utils/               # Helper functions
├── backend/                 # Express API
│   ├── routes/
│   │   ├── contact.js       # Contact form → email
│   │   └── resume.js        # Resume PDF download
│   └── app.js
├── docs/                    # PDFs (papers, resume, patents)
└── public/                  # Static assets
```

---

## Getting Started

### 1. Frontend

```bash
npm install
npm run dev          # http://localhost:5173
```

### 2. Backend

```bash
cd backend
npm install
cp .env.example .env  # Fill in SMTP credentials
npm run dev           # http://localhost:5000
```

### 3. Configure Email

In `backend/.env`:
```
SMTP_USER=your_gmail@gmail.com
SMTP_PASS=your_google_app_password
CONTACT_EMAIL=where_you_receive_messages@gmail.com
```
> Use a **Gmail App Password** (not your account password).  
> Enable 2FA → Google Account → Security → App Passwords.

---

## Personalisation Checklist

- [ ] Update `src/data/projects.js` with your real projects
- [ ] Update `src/data/research.js` with your papers
- [ ] Update `src/data/certifications.js` with your credentials
- [ ] Replace patent details in `src/components/Patent/index.jsx`
- [ ] Update experience in `src/components/Experience/index.jsx`
- [ ] Add `public/profile-photo.jpg`
- [ ] Add `public/resume.pdf`
- [ ] Update GitHub / LinkedIn links in `Navbar`, `Footer`, `Hero`
- [ ] Set `CLIENT_ORIGIN` in backend `.env` for production domain

---

## Build for Production

```bash
# Frontend
npm run build          # Output in dist/

# Backend — use PM2 or any Node host
cd backend && node app.js
```
