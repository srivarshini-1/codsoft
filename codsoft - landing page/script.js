// Booking and Learn More buttons
document.getElementById('cta-book').addEventListener('click', () => {
  alert('Redirecting to program booking page...');
});

document.getElementById('cta-learn').addEventListener('click', () => {
  alert('Learn more about Isha Yoga Centre!');
});

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for reaching out! We will get back to you soon.');
});
