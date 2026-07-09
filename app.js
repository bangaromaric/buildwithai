document.addEventListener('DOMContentLoaded', () => {
  // Sticky Header on Scroll
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Navigation Active Link highlight on Scroll
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 150) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Modal Control
  const modal = document.getElementById('registrationModal');
  const openModalBtns = document.querySelectorAll('.open-modal-btn');
  const closeModalBtn = document.getElementById('closeModalBtn');

  const openModal = () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Disable scroll
  };

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'initial'; // Enable scroll
  };

  openModalBtns.forEach(btn => btn.addEventListener('click', openModal));
  closeModalBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Schedule Tab Switcher
  const tabBtns = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.schedule-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active states
      tabBtns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      // Add active state to selected
      btn.classList.add('active');
      const targetPanel = document.getElementById(btn.getAttribute('data-tab'));
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  // Toast Notifications Helper
  const toast = document.getElementById('successToast');
  const toastMsg = document.getElementById('toastMessage');

  const showToast = (message) => {
    toastMsg.textContent = message;
    toast.classList.add('active');
    setTimeout(() => {
      toast.classList.remove('active');
    }, 4000);
  };

  // Form Submissions
  const registrationForm = document.getElementById('registrationForm');
  const newsletterForm = document.getElementById('newsletterForm');

  if (registrationForm) {
    registrationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('regName').value;
      const email = document.getElementById('regEmail').value;
      const pass = document.getElementById('regPassType').value;

      closeModal();
      showToast(`Merci ${name} ! Votre inscription en mode ${pass.toUpperCase()} a été enregistrée. Un e-mail de confirmation a été envoyé à ${email}.`);
      
      // Redirige vers la page merci.html après un délai de 1.5 seconde
      setTimeout(() => {
        window.location.href = `merci.html?name=${encodeURIComponent(name)}&pass=${encodeURIComponent(pass)}`;
      }, 1500);

      registrationForm.reset();
    });
  }

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('newsletterEmail').value;
      showToast(`Succès ! L'adresse ${email} a été ajoutée à la liste de diffusion.`);
      newsletterForm.reset();
    });
  }

  // Compte à rebours GDG Libreville (Cible: 11 Juillet 2026, 19:00, UTC+1)
  const countdownTarget = new Date("2026-07-11T19:00:00+01:00").getTime();
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');
  const countdownTitle = document.querySelector('.countdown-title');

  function updateCountdown() {
    const now = Date.now();
    const distance = countdownTarget - now;

    if (distance < 0) {
      if (daysEl) daysEl.textContent = '00';
      if (hoursEl) hoursEl.textContent = '00';
      if (minutesEl) minutesEl.textContent = '00';
      if (secondsEl) secondsEl.textContent = '00';
      if (countdownTitle) {
        countdownTitle.textContent = "L'événement Build with AI a commencé !";
        countdownTitle.style.color = "var(--google-green)";
        countdownTitle.style.fontWeight = "700";
      }
      return;
    }

    const days = Math.floor(distance / 86400000);
    const hours = Math.floor((distance % 86400000) / 3600000);
    const minutes = Math.floor((distance % 3600000) / 60000);
    const seconds = Math.floor((distance % 60000) / 1000);

    if (daysEl) daysEl.textContent = days.toString().padStart(2, '0');
    if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
    if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
    if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');
  }

  updateCountdown();
  const countdownInterval = setInterval(updateCountdown, 1000);
});

