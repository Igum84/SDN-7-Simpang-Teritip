// Simple JS to toggle the mobile hamburger menu and handle the contact form
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('btn-hamburger');
  const nav = document.getElementById('main-nav');
  const yearEl = document.getElementById('year');
  const overlay = document.getElementById('nav-overlay');
  const form = document.getElementById('contact-form');

  yearEl.textContent = new Date().getFullYear();

  if (btn && nav) {
    btn.addEventListener('click', function () {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      nav.setAttribute('aria-hidden', String(expanded));
      if (overlay) overlay.setAttribute('aria-hidden', String(expanded));
      // simple body lock
      if (!expanded) document.body.style.overflow = 'hidden'; else document.body.style.overflow = '';
    });

    // close nav when a link is clicked (mobile)
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if (window.innerWidth <= 900) {
          btn.setAttribute('aria-expanded', 'false');
          nav.setAttribute('aria-hidden', 'true');
          if (overlay) overlay.setAttribute('aria-hidden', 'true');
          document.body.style.overflow = '';
        }
      });
    });

  if (overlay) {
    // initialize
    overlay.setAttribute('aria-hidden', 'true');
    overlay.addEventListener('click', function () {
      // close menu when clicking overlay
      btn.setAttribute('aria-expanded', 'false');
      nav.setAttribute('aria-hidden', 'true');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  }

    // initialize state
    nav.setAttribute('aria-hidden', 'true');
    btn.setAttribute('aria-expanded', 'false');
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // For now just show a friendly message
      alert('Terima kasih! Pesan Anda telah dikirim (demo).');
      form.reset();
    });
  }

  // Hero Carousel
  const carousel = document.getElementById('hero-carousel');
  if (carousel) {
    const track = carousel.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    let currentIndex = 0;

    const moveToSlide = (index) => {
      track.style.transform = 'translateX(-' + 100 * index + '%)';
      currentIndex = index;
    };

    setInterval(() => {
      const nextIndex = (currentIndex + 1) % slides.length;
      moveToSlide(nextIndex);
    }, 5000); // Ganti gambar setiap 5 detik
  }

  // Gallery Carousel
  const galleryWrapper = document.getElementById('gallery-carousel-wrapper');
  if (galleryWrapper) {
    const track = galleryWrapper.querySelector('.gallery-track');
    const slides = Array.from(track.children);
    const nextButton = galleryWrapper.querySelector('#gallery-next');
    const prevButton = galleryWrapper.querySelector('#gallery-prev');
    let currentIndex = 0;

    const updateButtons = () => {
      const slideWidth = slides[0].getBoundingClientRect().width + 16; // 16 is the gap
      const trackWidth = track.scrollWidth;
      const listWidth = galleryWrapper.querySelector('.gallery-carousel').clientWidth;

      prevButton.disabled = currentIndex === 0;
      // Disable next when the end of the track is visible
      nextButton.disabled = (currentIndex * slideWidth) >= (trackWidth - listWidth - slideWidth / 2);
    };

    const moveToSlide = (index) => {
      const slideWidth = slides[0].getBoundingClientRect().width + 16; // 16 is the gap
      track.style.transform = 'translateX(-' + slideWidth * index + 'px)';
      currentIndex = index;
      updateButtons();
    };

    nextButton.addEventListener('click', () => {
      moveToSlide(currentIndex + 1);
    });

    prevButton.addEventListener('click', () => {
      moveToSlide(currentIndex - 1);
    });

    // Recalculate on resize
    window.addEventListener('resize', () => moveToSlide(currentIndex));

    // Initial setup
    moveToSlide(0);
  }

});
