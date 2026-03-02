/* ============================================
   AUTHENTICATION SYSTEM - Health Nest
   Centralized Login & Registration Logic
   ============================================ */

const DEMO_USERS = {
  patient: {
    email: 'patient@demo.com',
    password: 'patient123',
    role: 'patient',
    name: 'Krishna Kumar',
    redirectUrl: 'patient/dashboard.html'
  },
  doctor: {
    email: 'doctor@demo.com',
    password: 'doctor123',
    role: 'doctor',
    name: 'Dr. Ravi Sharma',
    redirectUrl: 'doctor/dashboard.html'
  }
};

const DEMO_DATA_KEYS = [
  'hn_doctor_settings',
  'hn_patient_appointments',
  'hn_patient_bill_status',
  'hn_patient_documents',
  'hn_patient_lab_cart',
  'hn_patient_medicine_cart',
  'hn_patient_video_state'
];

function showInlineAuthMessage(formElement, type, text) {
  const container = formElement?.closest('.auth-container') || document.querySelector('.auth-container') || document.body;
  let messageEl = container.querySelector('[data-auth-message]');

  if (!messageEl) {
    messageEl = document.createElement('div');
    messageEl.setAttribute('data-auth-message', 'true');
    if (formElement?.parentNode) {
      formElement.parentNode.insertBefore(messageEl, formElement);
    } else {
      container.insertBefore(messageEl, container.firstChild);
    }
  }

  messageEl.className = type === 'error' ? 'alert alert-error' : 'alert alert-success';
  messageEl.textContent = text;
}

function resetDemoData(options = {}) {
  const keepSession = options.keepSession !== false;
  const sessionKeys = ['isLoggedIn', 'userRole', 'user'];

  Object.keys(localStorage).forEach((key) => {
    if (key.startsWith('hn_') || DEMO_DATA_KEYS.includes(key)) {
      localStorage.removeItem(key);
    }
  });

  if (!keepSession) {
    sessionKeys.forEach((key) => localStorage.removeItem(key));
  }
}

function getLoginPath() {
  const path = window.location.pathname.replace(/\\/g, '/');
  if (path.includes('/patient/') || path.includes('/doctor/')) {
    return '../login.html';
  }
  return 'login.html';
}

function handleLogin(email, password) {
  if (!email || !password) {
    return { success: false, message: 'Email and password are required.' };
  }

  let authenticatedUser = null;
  if (email === DEMO_USERS.patient.email && password === DEMO_USERS.patient.password) {
    authenticatedUser = DEMO_USERS.patient;
  } else if (email === DEMO_USERS.doctor.email && password === DEMO_USERS.doctor.password) {
    authenticatedUser = DEMO_USERS.doctor;
  }

  if (!authenticatedUser) {
    return { success: false, message: 'Invalid email or password. Please try again.' };
  }

  localStorage.setItem('isLoggedIn', 'true');
  localStorage.setItem('userRole', authenticatedUser.role);
  localStorage.setItem('user', JSON.stringify({
    email: authenticatedUser.email,
    name: authenticatedUser.name,
    role: authenticatedUser.role
  }));

  return {
    success: true,
    message: 'Login successful!',
    redirectUrl: authenticatedUser.redirectUrl,
    user: authenticatedUser
  };
}

function handleRegister(userData) {
  const { fullName, email, password, confirmPassword, role } = userData;

  if (!fullName || !email || !password || !confirmPassword || !role) {
    return { success: false, message: 'All fields are required.' };
  }

  if (password !== confirmPassword) {
    return { success: false, message: 'Passwords do not match.' };
  }

  if (password.length < 6) {
    return { success: false, message: 'Password must be at least 6 characters long.' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: 'Please enter a valid email address.' };
  }

  return {
    success: true,
    message: 'Registration successful! Please login with your credentials.',
    redirectUrl: 'login.html'
  };
}

function isAuthenticated() {
  return localStorage.getItem('isLoggedIn') === 'true';
}

function getCurrentUser() {
  const userString = localStorage.getItem('user');
  return userString ? JSON.parse(userString) : null;
}

function logout() {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('userRole');
  localStorage.removeItem('user');
  window.location.href = getLoginPath();
}

function protectRoute(requiredRole = null) {
  if (!isAuthenticated()) {
    window.location.href = getLoginPath();
    return;
  }

  if (requiredRole) {
    const role = localStorage.getItem('userRole');
    if (role !== requiredRole) {
      sessionStorage.setItem('auth_message', 'Unauthorized access. Please login with the correct account role.');
      logout();
    }
  }
}

function initLoginForm() {
  const loginForm = document.getElementById('loginForm');
  if (!loginForm) return;

  const queuedMessage = sessionStorage.getItem('auth_message');
  if (queuedMessage) {
    showInlineAuthMessage(loginForm, 'error', queuedMessage);
    sessionStorage.removeItem('auth_message');
  }

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    const submitBtn = loginForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Logging in...';
    submitBtn.disabled = true;

    setTimeout(() => {
      const result = handleLogin(email, password);
      if (result.success) {
        window.location.href = result.redirectUrl;
      } else {
        showInlineAuthMessage(loginForm, 'error', result.message);
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    }, 500);
  });
}

function initRegisterForm() {
  const registerForm = document.getElementById('registerForm');
  if (!registerForm) return;

  registerForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const userData = {
      fullName: document.getElementById('fullName').value.trim(),
      email: document.getElementById('email').value.trim(),
      password: document.getElementById('password').value.trim(),
      confirmPassword: document.getElementById('confirmPassword').value.trim(),
      role: document.getElementById('role').value
    };

    const submitBtn = registerForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Registering...';
    submitBtn.disabled = true;

    setTimeout(() => {
      const result = handleRegister(userData);
      if (result.success) {
        sessionStorage.setItem('auth_message', 'Registration successful. Please login with your credentials.');
        window.location.href = result.redirectUrl;
      } else {
        showInlineAuthMessage(registerForm, 'error', result.message);
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    }, 500);
  });
}

function displayUserName() {
  const user = getCurrentUser();
  const userNameElement = document.getElementById('userName');
  if (user && userNameElement) {
    userNameElement.textContent = user.name;
  }
}

function setActivePatientNav() {
  const navLinks = document.querySelectorAll('.sidebar-nav a');
  if (!navLinks.length) return;

  const currentFile = window.location.pathname.split('/').pop();
  navLinks.forEach((link) => {
    const linkFile = link.getAttribute('href');
    if (linkFile === currentFile) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function removeSidebarEmojis() {
  const sidebarLinks = document.querySelectorAll('.sidebar-nav a, .sidebar-logout a');
  if (!sidebarLinks.length) return;

  sidebarLinks.forEach((link) => {
    const text = (link.textContent || '').trim();
    if (!text) return;

    const cleanedText = text
      .replace(/^[\u{1F300}-\u{1FAFF}\u2600-\u27BF\uFE0F\s]+/gu, '')
      .trim();

    if (cleanedText) {
      link.textContent = cleanedText;
    }
  });
}

function ensurePatientProfileSidebarItem() {
  const path = (window.location.pathname || '').replace(/\\/g, '/').toLowerCase();
  if (!path.includes('/patient/')) return;

  const sidebarNav = document.querySelector('.sidebar-nav');
  if (!sidebarNav) return;

  const existing = sidebarNav.querySelector('a[href="patient-profile.html"]');
  if (existing) return;

  const navItems = sidebarNav.querySelectorAll('li');
  if (!navItems.length) return;

  const profileItem = document.createElement('li');
  profileItem.innerHTML = '<a href="patient-profile.html">My Profile</a>';

  if (navItems.length >= 6) {
    sidebarNav.insertBefore(profileItem, navItems[6]);
  } else {
    sidebarNav.appendChild(profileItem);
  }
}

function ensureHomeSidebarItem() {
  const sidebarNav = document.querySelector('.sidebar-nav');
  if (!sidebarNav) return;

  const path = (window.location.pathname || '').replace(/\\/g, '/').toLowerCase();
  const homeHref = path.includes('/patient/') || path.includes('/doctor/') ? 'dashboard.html' : 'index.html';

  const existing = Array.from(sidebarNav.querySelectorAll('a')).find((link) => {
    return (link.textContent || '').trim().toLowerCase() === 'home';
  });
  if (existing) {
    existing.setAttribute('href', homeHref);
    return;
  }

  const homeItem = document.createElement('li');
  homeItem.innerHTML = `<a href="${homeHref}">Home</a>`;
  sidebarNav.insertBefore(homeItem, sidebarNav.firstChild);
}

function ensureTopNavbarHomeLink() {
  const patientNavbarLinks = document.querySelector('.patient-navbar-links');
  if (!patientNavbarLinks) return;

  const path = (window.location.pathname || '').replace(/\\/g, '/').toLowerCase();
  const homeHref = path.includes('/patient/') || path.includes('/doctor/') ? 'dashboard.html' : 'index.html';

  const existing = Array.from(patientNavbarLinks.querySelectorAll('a')).find((link) => {
    return (link.textContent || '').trim().toLowerCase() === 'home';
  });
  if (existing) {
    existing.setAttribute('href', homeHref);
    return;
  }

  const homeLink = document.createElement('a');
  homeLink.href = homeHref;
  homeLink.textContent = 'Home';
  patientNavbarLinks.insertBefore(homeLink, patientNavbarLinks.firstChild);
}

document.addEventListener('DOMContentLoaded', function() {
  initLoginForm();
  initRegisterForm();
  displayUserName();
  ensureHomeSidebarItem();
  ensureTopNavbarHomeLink();
  ensurePatientProfileSidebarItem();
  removeSidebarEmojis();
  setActivePatientNav();

  const resetButtons = document.querySelectorAll('[data-reset-demo]');
  resetButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const keepSession = button.getAttribute('data-keep-session') !== 'false';
      resetDemoData({ keepSession });
      const form = document.getElementById('loginForm') || document.getElementById('registerForm');
      if (form) {
        showInlineAuthMessage(form, 'success', 'Demo data reset completed.');
      }
    });
  });
});

window.resetDemoData = resetDemoData;

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    handleLogin,
    handleRegister,
    isAuthenticated,
    getCurrentUser,
    logout,
    protectRoute,
    resetDemoData
  };
}
