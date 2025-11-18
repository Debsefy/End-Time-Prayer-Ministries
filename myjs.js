// this is for the harmbugger


const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navbar.classList.toggle('active');
});

// HERO SLIDER SCRIPT ----------
let slides = document.querySelectorAll(".hero-slide");
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

// Change image every 6 seconds (6000 ms)
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 6000);

// Show the first slide initially
showSlide(currentIndex);



  // Counter animation
const counters = document.querySelectorAll('.count');
const speed = 80; 

const animateCounters = () => {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const inc = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };
    updateCount();
  });
};

// Animate when section is visible
const statsSection = document.querySelector('#stats');
const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    animateCounters();
    observer.unobserve(statsSection);
  }
}, { threshold: 0.5 });

observer.observe(statsSection);




// view moree for the update

function openModal(id) {
  document.getElementById(id).style.display = 'flex';
}
function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}