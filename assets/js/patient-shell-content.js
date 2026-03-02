(function () {
  const PAGE_CONTENT = {
    dashboard: {
      title: 'Patient Dashboard',
      tagline: 'Welcome back. Manage your complete healthcare journey from one place.',
      cards: [
        { title: 'Appointments', desc: 'Book, reschedule, and track consultations.' },
        { title: 'Lab Tests', desc: 'Search tests, add to cart, and track history.' },
        { title: 'Emergency', desc: 'Quick actions, contacts, and nearby hospitals.' },
        { title: 'Doctors', desc: 'Find specialists and review availability.' },
        { title: 'Reports', desc: 'View and download diagnostic reports.' },
        { title: 'Video Consultation', desc: 'Join secure virtual sessions with doctors.' }
      ],
      facilityTitle: 'Health Services Hub',
      facilityDesc: 'Access integrated patient services and trusted healthcare resources.'
    },
    appointments: {
      title: 'Appointment Booking',
      tagline: 'Select doctor, specialty, preferred time slot, and confirm your appointment.',
      cards: [
        { title: 'Doctor Selection', desc: 'Choose from verified specialists by department.' },
        { title: 'Specialty Filter', desc: 'Quickly filter by cardiology, dermatology, and more.' },
        { title: 'Date & Slot', desc: 'Pick your preferred date and available consultation window.' },
        { title: 'Reason for Visit', desc: 'Add symptoms and context for better consultation.' },
        { title: 'Upcoming Visits', desc: 'Track confirmed, pending, and follow-up appointments.' },
        { title: 'Instant Booking', desc: 'Finalize and receive appointment confirmation.' }
      ],
      facilityTitle: 'Appointment Desk',
      facilityDesc: 'All booking and appointment tracking tools in one structured workflow.'
    },
    lab: {
      title: 'Lab Test Services',
      tagline: 'Search test packages, manage cart, and review your test history.',
      cards: [
        { title: 'Test Search', desc: 'Find tests by name, package, or condition.' },
        { title: 'Price Transparency', desc: 'View rates clearly before adding to cart.' },
        { title: 'Add to Cart', desc: 'Build your test basket with one-click actions.' },
        { title: 'Cart Summary', desc: 'Review selected tests, charges, and total amount.' },
        { title: 'History Table', desc: 'Access previous lab bookings and report status.' },
        { title: 'Report Access', desc: 'Open completed reports directly from your dashboard.' }
      ],
      facilityTitle: 'Diagnostic Services',
      facilityDesc: 'Organized pathology and diagnostic flow with complete history visibility.'
    },
    emergency: {
      title: 'Emergency Support',
      tagline: 'Reach emergency contacts instantly and locate nearby hospitals quickly.',
      cards: [
        { title: 'Call Ambulance', desc: 'One-click emergency response trigger.' },
        { title: 'Emergency Numbers', desc: 'Essential national and personal contact list.' },
        { title: 'Nearby Hospitals', desc: 'Quick access to emergency-ready facilities.' },
        { title: 'Share Location', desc: 'Use location sharing placeholder for rapid help.' },
        { title: 'Critical Alerts', desc: 'Guided action-first emergency awareness prompts.' },
        { title: 'Rapid Access', desc: 'Fast navigation to support services under stress.' }
      ],
      facilityTitle: 'Emergency Response Center',
      facilityDesc: 'Immediate care resources and urgent-contact workflows for critical moments.'
    },
    doctors: {
      title: 'Doctors Directory',
      tagline: 'Search by specialization and connect with trusted doctors.',
      cards: [
        { title: 'Search Doctors', desc: 'Find doctors by name, specialty, or expertise.' },
        { title: 'Specialization Filter', desc: 'Narrow to the right department instantly.' },
        { title: 'Doctor Profiles', desc: 'View experience, ratings, and availability.' },
        { title: 'Book Now', desc: 'Directly schedule consultations from doctor cards.' },
        { title: 'Verified Ratings', desc: 'Review patient feedback before booking.' },
        { title: 'Availability View', desc: 'Check active consultation windows by doctor.' }
      ],
      facilityTitle: 'Specialist Network',
      facilityDesc: 'Curated doctor discovery flow for confident and faster appointment decisions.'
    },
    reports: {
      title: 'Medical Reports',
      tagline: 'Browse all reports in one table with quick view and download actions.',
      cards: [
        { title: 'Report Table', desc: 'Structured list of all clinical and diagnostic reports.' },
        { title: 'Type Classification', desc: 'Separate pathology, imaging, and consultation reports.' },
        { title: 'Date Tracking', desc: 'Review records chronologically with clear timestamps.' },
        { title: 'View Action', desc: 'Open report details instantly for review.' },
        { title: 'Download Action', desc: 'Download report files for sharing or storage.' },
        { title: 'Doctor Ready', desc: 'Keep reports organized before consultations.' }
      ],
      facilityTitle: 'Report Management',
      facilityDesc: 'Centralized records access built for quick review and clinical sharing.'
    },
    prescription: {
      title: 'Prescription Manager',
      tagline: 'Track medicines, dosage, and duration from your latest consultations.',
      cards: [
        { title: 'Appointment Mapping', desc: 'Link prescriptions to consultation events.' },
        { title: 'Medicine List', desc: 'View all prescribed medicines in a single table.' },
        { title: 'Dosage Clarity', desc: 'Check timing and tablet quantity per medicine.' },
        { title: 'Duration Tracking', desc: 'Follow treatment timelines with start-to-end context.' },
        { title: 'Instruction Notes', desc: 'Read specific intake guidance from doctor.' },
        { title: 'Download Copy', desc: 'Export prescription for pharmacy or records.' }
      ],
      facilityTitle: 'Treatment Guidance',
      facilityDesc: 'Clear prescription visibility to support accurate medicine adherence.'
    },
    medicines: {
      title: 'Medicine Store',
      tagline: 'Search medicines, add items to cart, and proceed to checkout.',
      cards: [
        { title: 'Medicine Search', desc: 'Locate medicines by brand or composition.' },
        { title: 'Product Cards', desc: 'Review usage and pricing at a glance.' },
        { title: 'Add to Cart', desc: 'Build your order with quick add actions.' },
        { title: 'Cart Summary', desc: 'Check items, delivery charges, and totals.' },
        { title: 'Checkout', desc: 'Proceed with order confirmation workflow.' },
        { title: 'Prescription Sync', desc: 'Align purchases with your active prescriptions.' }
      ],
      facilityTitle: 'Pharmacy Services',
      facilityDesc: 'End-to-end medicine ordering experience integrated into patient dashboard.'
    },
    bills: {
      title: 'Billing & Payments',
      tagline: 'Monitor paid and pending invoices with invoice download and payment actions.',
      cards: [
        { title: 'Billing History', desc: 'View complete invoice chronology in one place.' },
        { title: 'Status Tags', desc: 'Track paid, pending, and due payment states.' },
        { title: 'Invoice Download', desc: 'Download invoice documents for records.' },
        { title: 'Make Payment', desc: 'UI payment action for pending invoices.' },
        { title: 'Service Mapping', desc: 'Know which visit or test generated each bill.' },
        { title: 'Financial Clarity', desc: 'Maintain transparent healthcare expense tracking.' }
      ],
      facilityTitle: 'Payment Center',
      facilityDesc: 'Structured billing overview for clear payment planning and documentation.'
    },
    documents: {
      title: 'Documents Vault',
      tagline: 'Upload and manage identity, insurance, and consent documents.',
      cards: [
        { title: 'Upload Action', desc: 'Add new documents with a single action button.' },
        { title: 'Category Labels', desc: 'Classify files by identity, insurance, and consent.' },
        { title: 'Document List', desc: 'View all uploaded files in a managed repository.' },
        { title: 'View File', desc: 'Open document preview directly from list item.' },
        { title: 'Delete File', desc: 'Remove outdated or duplicate documents quickly.' },
        { title: 'Record Hygiene', desc: 'Keep legal and clinical files organized and current.' }
      ],
      facilityTitle: 'Document Management',
      facilityDesc: 'Securely structured patient record repository for routine healthcare processes.'
    },
    video: {
      title: 'Video Consultation',
      tagline: 'Join upcoming sessions and review your teleconsultation history.',
      cards: [
        { title: 'Upcoming Sessions', desc: 'Track scheduled virtual consultations.' },
        { title: 'Join Meeting', desc: 'Quick launch button for active sessions.' },
        { title: 'Doctor Info Card', desc: 'Review doctor details before call start.' },
        { title: 'Consultation History', desc: 'Access previous telehealth interactions.' },
        { title: 'Session Notes', desc: 'Reference outcomes and follow-up notes.' },
        { title: 'Remote Care', desc: 'Maintain continuity of care through virtual visits.' }
      ],
      facilityTitle: 'Telehealth Hub',
      facilityDesc: 'Complete virtual consultation workflow integrated with patient records.'
    },
    profile: {
      title: 'Patient Profile',
      tagline: 'Review personal details and medical snapshot in a unified profile view.',
      cards: [
        { title: 'Personal Details', desc: 'Manage basic contact and identity information.' },
        { title: 'Medical Snapshot', desc: 'Track allergies, conditions, and physician info.' },
        { title: 'Health Summary', desc: 'Keep essential profile data ready for consultations.' },
        { title: 'Care Continuity', desc: 'Ensure doctors access updated patient context.' },
        { title: 'Record Accuracy', desc: 'Maintain complete and correct profile records.' },
        { title: 'Patient Identity', desc: 'Single source of truth for your dashboard account.' }
      ],
      facilityTitle: 'Profile Center',
      facilityDesc: 'Central patient identity and health baseline for personalized care.'
    },
    settings: {
      title: 'Account Settings',
      tagline: 'Control preferences, privacy, and security settings in one place.',
      cards: [
        { title: 'Notification Settings', desc: 'Manage email and SMS health alerts.' },
        { title: 'Language & Region', desc: 'Set preferred language and timezone options.' },
        { title: 'Privacy Controls', desc: 'Adjust health-data sharing preferences.' },
        { title: 'Security Overview', desc: 'Review authentication and session details.' },
        { title: 'Access Preferences', desc: 'Tune patient experience to your workflow.' },
        { title: 'Account Governance', desc: 'Keep settings aligned with your care needs.' }
      ],
      facilityTitle: 'Preference Management',
      facilityDesc: 'Unified controls for account behavior, privacy, and operational security.'
    }
  };

  function setText(el, value) {
    if (el && typeof value === 'string') {
      el.textContent = value;
    }
  }

  function inPatientContext() {
    const path = (window.top.location && window.top.location.pathname) || '';
    return /\/patient\//i.test(path) || /\\patient\\/i.test(path);
  }

  function absoluteFromTop(relativePath) {
    try {
      return new URL(relativePath, window.top.location.href).toString();
    } catch (_err) {
      return relativePath;
    }
  }

  function patientRoute(fileName) {
    const relativePath = inPatientContext() ? fileName : `patient/${fileName}`;
    return absoluteFromTop(relativePath);
  }

  function loginRoute() {
    const relativePath = inPatientContext() ? '../login.html' : 'login.html';
    return absoluteFromTop(relativePath);
  }

  function pageForLabel(labelText) {
    const label = (labelText || '').toLowerCase().replace(/\s+/g, ' ').trim();
    if (!label) return null;

    const labelMap = [
      { key: 'appointment booking', page: 'appointments.html' },
      { key: 'appointments', page: 'appointments.html' },
      { key: 'emergency', page: 'emergency.html' },
      { key: 'lab test', page: 'lab.html' },
      { key: 'lab tests', page: 'lab.html' },
      { key: 'doctors', page: 'doctors.html' },
      { key: 'reports', page: 'reports.html' },
      { key: 'prescription', page: 'prescription.html' },
      { key: 'prescriptions', page: 'prescription.html' },
      { key: 'medicines', page: 'medicines.html' },
      { key: 'bills', page: 'bills.html' },
      { key: 'documents', page: 'documents.html' },
      { key: 'video consultation', page: 'video.html' },
      { key: 'video consultations', page: 'video.html' }
    ];

    const match = labelMap.find((item) => label.includes(item.key));
    return match ? patientRoute(match.page) : null;
  }

  function makeClickable(el, targetUrl) {
    if (!el || !targetUrl) return;

    const anchor = el.closest('a');
    if (anchor) {
      anchor.setAttribute('href', targetUrl);
      anchor.setAttribute('target', '_top');
      return;
    }

    el.style.cursor = 'pointer';
    el.setAttribute('role', 'link');
    el.setAttribute('tabindex', '0');

    const navigate = () => {
      window.top.location.href = targetUrl;
    };

    el.addEventListener('click', navigate);
    el.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        navigate();
      }
    });
  }

  function patchServiceButtons(doc) {
    const candidates = doc.querySelectorAll(
      '.navbar7-container2 > a, .navbar7-menu-item1, .navbar7-menu-item2, .navbar7-menu-item3, .navbar7-menu-item4, .features23-container3, .features23-container4, .features23-container5, .features23-container6, .features23-container7, .features23-container8'
    );

    candidates.forEach((el) => {
      const labelSource = el.textContent || '';
      const targetUrl = pageForLabel(labelSource);
      makeClickable(el, targetUrl);
    });
  }

  function patchQuickLinks(doc) {
    const quickLinks = doc.querySelectorAll('.navbar7-container2 > a');
    const routes = [
      patientRoute('appointments.html'),
      patientRoute('emergency.html'),
      patientRoute('lab.html'),
      patientRoute('doctors.html')
    ];

    quickLinks.forEach((anchor, index) => {
      if (routes[index]) {
        anchor.setAttribute('href', routes[index]);
        anchor.setAttribute('target', '_top');
      }
    });

    const desktopLinks = doc.querySelectorAll('.navbar7-links1 a');
    desktopLinks.forEach((anchor) => {
      const label = (anchor.textContent || '').trim().toLowerCase();
      if (label === 'profile') {
        anchor.setAttribute('href', patientRoute('profile.html'));
        anchor.setAttribute('target', '_top');
      }
      if (label === 'log out') {
        anchor.setAttribute('href', loginRoute());
        anchor.setAttribute('target', '_top');
      }
    });
  }

  function patchCards(doc, cards) {
    const containers = [
      '.features23-container3',
      '.features23-container4',
      '.features23-container5',
      '.features23-container6',
      '.features23-container7',
      '.features23-container8'
    ];

    containers.forEach((selector, index) => {
      const block = doc.querySelector(selector);
      if (!block || !cards[index]) return;

      const titleEl = block.querySelector('h2 span');
      const descEl = block.querySelector('span.thq-body-small span');

      setText(titleEl, cards[index].title);
      setText(descEl, cards[index].desc);
    });
  }

  function patchDashboardPlaceholders(doc, pageKey) {
    if (pageKey !== 'dashboard') return;

    const containers = [
      '.features23-container3',
      '.features23-container4',
      '.features23-container5',
      '.features23-container6',
      '.features23-container7',
      '.features23-container8'
    ];

    const routes = [
      patientRoute('appointments.html'),
      patientRoute('lab.html'),
      patientRoute('emergency.html'),
      patientRoute('doctors.html'),
      patientRoute('reports.html'),
      patientRoute('video.html')
    ];

    containers.forEach((selector, index) => {
      const block = doc.querySelector(selector);
      const target = routes[index];
      if (!block || !target) return;

      block.style.cursor = 'pointer';
      block.setAttribute('role', 'link');
      block.setAttribute('tabindex', '0');

      const navigate = () => {
        window.top.location.href = target;
      };

      block.addEventListener('click', navigate);
      block.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          navigate();
        }
      });
    });
  }

  function patchPage() {
    const frame = document.getElementById('patientDesignFrame');
    if (!frame) return;

    const pageKey = document.body.dataset.patientPage || 'dashboard';
    const config = PAGE_CONTENT[pageKey] || PAGE_CONTENT.dashboard;

    frame.addEventListener('load', () => {
      const doc = frame.contentDocument;
      if (!doc) return;

      doc.title = `HealthNest - ${config.title}`;
      setText(doc.querySelector('.middle-text'), config.tagline);
      setText(doc.querySelector('.features23-container1 .home-text38'), config.facilityTitle);
      setText(doc.querySelector('.features23-container1 .home-text29'), config.facilityDesc);

      patchCards(doc, config.cards);
      patchQuickLinks(doc);
      patchDashboardPlaceholders(doc, pageKey);
      patchServiceButtons(doc);
    });
  }

  document.addEventListener('DOMContentLoaded', patchPage);
})();
