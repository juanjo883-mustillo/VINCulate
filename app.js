// Carousel
let currentSlide = 0;
const totalSlides = 3;

function updateCarousel() {
    const track = document.getElementById('stepsTrack');
    if (!track) return;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    document.querySelectorAll('.dot').forEach((d, i) => {
        d.classList.toggle('active', i === currentSlide);
    });
}

function changeSlide(dir) {
    currentSlide = (currentSlide + dir + totalSlides) % totalSlides;
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

// Auto-advance carousel
setInterval(() => changeSlide(1), 4000);

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (header) {
        header.classList.toggle('scrolled', window.scrollY > 50);
    }
});

// Animate elements on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
    const animTargets = document.querySelectorAll('.feature-card, .testimonial-card, .step-slide, .preview-item');
    animTargets.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
});
