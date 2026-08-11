// Theme toggle
const toggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Load saved preference
const saved = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', saved);

toggle?.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// Intersection Observer — scroll reveal
const reveals = document.querySelectorAll('.card, .value-item, .stack-group, .experiment, .principle, .reading-list');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });
reveals.forEach(el => observer.observe(el));

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});