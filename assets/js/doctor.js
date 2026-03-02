/* ============================================
   DOCTOR PORTAL HELPER FUNCTIONS
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
  console.log('Doctor portal initialized');
});

function addConsultationNote(patientId, noteData) {
  console.log('Adding consultation note for patient:', patientId, noteData);
  return { success: true, message: 'Consultation note saved successfully!' };
}

function writePrescription(prescriptionData) {
  console.log('Writing prescription:', prescriptionData);
  return { success: true, message: 'Prescription created successfully!' };
}

function approveAppointment(appointmentId) {
  console.log('Approving appointment:', appointmentId);
  return { success: true, message: 'Appointment approved!' };
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
