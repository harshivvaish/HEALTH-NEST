/* ============================================
   PATIENT PORTAL HELPER FUNCTIONS
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
  console.log('Patient portal initialized');
  setActivePatientNav();
});

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

function bookAppointment(formData) {
  console.log('Booking appointment:', formData);
  return { success: true, message: 'Appointment booked successfully! You will receive a confirmation email shortly.' };
}

function logHealthMetrics(metrics) {
  console.log('Logging health metrics:', metrics);
  return { success: true, message: 'Health metrics saved successfully!' };
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
