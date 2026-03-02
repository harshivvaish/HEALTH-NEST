# Health Nest - Healthcare Management System

## 🏥 Production-Ready Healthcare Platform

A complete, professional healthcare management system built with **HTML, CSS, and Vanilla JavaScript**. Designed for easy demonstration to judges with full static navigation and backend-ready architecture.

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Login Credentials](#login-credentials)
- [Navigation Guide](#navigation-guide)
- [Backend Integration](#backend-integration)
- [Technology Stack](#technology-stack)

---

## 🎯 Project Overview

Health Nest is a comprehensive digital healthcare platform that connects patients with expert doctors. The system includes:

- **Centralized Authentication System** with role-based routing
- **Patient Portal** with complete health management features
- **Doctor Portal** with practice management capabilities
- **Responsive Design** optimized for all devices
- **Clean Architecture** ready for Django/Flask integration

---

## ✨ Features

### Patient Portal
- 📊 Health Dashboard with vitals tracking
- 📅 Appointment booking and management
- 💊 Digital prescriptions
- 🧪 Lab reports access
- 📈 Health tracking with AI insights
- 💬 Secure messaging with doctors
- 👤 Profile and medical history management

### Doctor Portal
- 🏠 Practice overview dashboard
- 📅 Appointment scheduling
- 👥 Patient management
- 📋 Medical records access
- 💊 Prescription writing
- 📊 Practice analytics
- 💬 Patient communication
- ⚙️ Practice settings

### Authentication System
- Single login/register page
- Role-based automatic routing
- Predefined demo credentials
- Session management
- Backend-ready structure

---

## 📁 Project Structure

```
Health Nest/
│
├── index.html                 # Landing page
├── login.html                 # Centralized login
├── register.html              # Centralized registration
├── about_us.html              # About us page
├── intro_page.html            # Intro / home page
│
├── /assets
│   ├── /css
│   │   ├── global.css        # Global styles, variables & shared components
│   │   ├── patient.css       # Patient portal styles
│   │   └── doctor.css        # Doctor portal styles
│   ├── /js
│   │   ├── auth.js           # Authentication & session management
│   │   ├── patient.js        # Patient portal logic
│   │   └── doctor.js         # Doctor portal logic
│   └── /images               # (placeholder — images currently in /Images)
│
├── /patient
│   ├── dashboard.html         # Patient dashboard
│   ├── appointments.html      # Appointment booking
│   ├── lab.html               # Lab test booking
│   ├── emergency.html         # Emergency support
│   ├── doctors.html           # Find doctors
│   ├── reports.html           # Medical reports
│   ├── prescription.html      # Prescriptions
│   ├── medicines.html         # Medicine orders
│   ├── bills.html             # Billing
│   ├── documents.html         # Medical documents
│   ├── video.html             # Video consultation
│   ├── profile.html           # Patient profile
│   └── settings.html          # Account settings
│
├── /doctor
│   ├── dashboard.html         # Doctor dashboard
│   ├── appointments.html      # Appointment management
│   ├── analytics.html         # Practice analytics
│   └── settings.html          # Practice settings
│
└── /Images                    # Image assets
```

---

## 🚀 Getting Started

### Option 1: Direct Browser Access
1. Navigate to project folder
2. Open `index.html` in any modern browser
3. Click "Login" or "Register"
4. Use demo credentials to access portals

### Option 2: Local Server (Recommended)
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Then open: http://localhost:8000
```

---

## 🔐 Login Credentials

### Patient Account
- **Email:** `patient@demo.com`
- **Password:** `patient123`
- **Redirects to:** Patient Dashboard

### Doctor Account
- **Email:** `doctor@demo.com`
- **Password:** `doctor123`
- **Redirects to:** Doctor Dashboard

> **Note:** These credentials are clearly displayed on the login page for easy demonstration.

---

## 🧭 Navigation Guide

### Patient Portal Navigation
All sidebar buttons are functional and linked:
- **Dashboard** - Overview and quick stats
- **Appointments** - Book and manage appointments
- **Lab Tests** - Lab test booking and results
- **Emergency** - Emergency support and contacts
- **Doctors** - Find and connect with doctors
- **Reports** - Test results and medical reports
- **Prescription** - Active and past prescriptions
- **Medicines** - Medicine orders
- **Bills** - Billing and payments
- **Documents** - Medical documents
- **Video Consultation** - Telemedicine
- **Profile** - Personal and medical information
- **Settings** - Account preferences

### Doctor Portal Navigation
All sidebar buttons are functional and linked:
- **Dashboard** - Practice overview
- **Appointments** - Schedule management
- **Analytics** - Practice insights
- **Settings** - Practice preferences

---

## 🔌 Backend Integration

The project is structured for seamless backend integration with Django or Flask.

### Authentication API Endpoints Needed

```javascript
// In js/auth.js - Replace these sections:

// Login
POST /api/auth/login
{
  "email": "user@example.com",
  "password": "password123"
}
Response: {
  "success": true,
  "token": "jwt_token_here",
  "user": { "name": "...", "role": "patient|doctor" }
}

// Register
POST /api/auth/register
{
  "fullName": "...",
  "email": "...",
  "password": "...",
  "role": "patient|doctor"
}

// Logout
POST /api/auth/logout
```

### Data API Endpoints

All TODO comments in the code indicate where backend integration is needed:

```javascript
// TODO: Replace with Django/Flask authentication API endpoint
// TODO: Replace static content with dynamic data
```

**Example locations:**
- `patient/dashboard.html` - Dashboard data
- `doctor/dashboard.html` - Practice stats
- All list/table views need dynamic data

---

## 💻 Technology Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Variables
- **Vanilla JavaScript** - No frameworks/libraries
- **Responsive Design** - Mobile-first approach

### Design System
- **CSS Variables** - Consistent theming
- **Component Library** - Reusable UI elements
- **Grid & Flexbox** - Modern layouts
- **No External Dependencies** - Pure vanilla code

### Backend Ready For
- **Django** - Python web framework
- **Flask** - Lightweight Python framework
- **JWT Authentication** - Token-based auth
- **RESTful APIs** - Standard API structure

---

## 🎨 Design Features

### Consistent Styling
- Uniform color palette across all pages
- Consistent component styling
- Same navbar/sidebar design
- Matching typography and spacing

### Responsive Layout
- 100% viewport width/height utilization
- Mobile-friendly navigation
- Flexible grid system
- No horizontal scrolling

### Accessibility
- Semantic HTML structure
- Clear visual hierarchy
- Readable font sizes
- Proper color contrast

---

## 📝 Key Files Explained

### `assets/css/global.css`
- CSS custom properties (variables)
- Base reset styles
- Typography system
- Utility classes
- Reusable components (buttons, cards, forms, tables, nav, alerts, badges)
- Responsive breakpoints
- Shared page styles (about, intro)

### `assets/css/patient.css`
- Patient portal layout
- Patient-specific component styling

### `assets/css/doctor.css`
- Doctor portal layout
- Doctor-specific component styling

### `assets/js/auth.js`
- Login handler
- Registration handler
- Session management
- Route protection
- User state management

---

## 🔍 For Judges

### Quick Demo Path
1. **Home** → Click "Login"
2. **Login** → Use `patient@demo.com` / `patient123`
3. **Patient Dashboard** → Explore all sidebar links
4. **Logout** → Login as doctor
5. **Doctor Dashboard** → Explore all sidebar links

### All Links Work
✅ Every sidebar button leads to a functional page  
✅ No dead links or 404 errors  
✅ Consistent design across entire project  
✅ Professional UI/UX throughout  

### Backend-Ready
✅ Clear API integration points marked with TODO  
✅ Structured for easy Django/Flask connection  
✅ Authentication system in place  
✅ Session management implemented  

---

## 🛠️ Development Notes

### Adding New Pages
1. Copy template from existing page
2. Update sidebar active state
3. Add route protection script
4. Maintain consistent styling

### Customization
- Colors: Edit CSS variables in `assets/css/global.css`
- Components: Modify component styles in `assets/css/global.css`
- Layout: Adjust grid/flex in individual pages or portal CSS files

---

## 📧 Contact & Support

For questions or support regarding this project, please refer to the about_us.html page.

---

## 📜 License

© 2026 Health Nest. All rights reserved.

---

**Built with ❤️ for SPIRIT BHU Hackathon**
