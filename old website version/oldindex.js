const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.portfolio-item');
    const totalSlides = slides.length;
    const prevBtn = document.querySelector('.nav-prev');
    const nextBtn = document.querySelector('.nav-next');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalImageContainer = document.querySelector('.modal-image-container');
    const closeBtn = document.querySelector('.btn-close');

    // Function to show the current slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${100 * (i - index)}%)`;
        });
    }

    // Previous slide
    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide === 0) ? totalSlides - 1 : currentSlide - 1;
        showSlide(currentSlide);
    });

    // Next slide
    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide === totalSlides - 1) ? 0 : currentSlide + 1;
        showSlide(currentSlide);
    });

    // Show modal with larger image
    function openModal(imageSrc) {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = "Project Image";
        modalImageContainer.innerHTML = ''; // Clear previous content
        modalImageContainer.appendChild(img);
        modalOverlay.style.display = 'flex';
    }

    // Add click event to each portfolio thumbnail
    const portfolioThumbs = document.querySelectorAll('.portfolio-thumb img');
    portfolioThumbs.forEach(img => {
        img.addEventListener('click', () => {
            openModal(img.src);
        });
    });

    // Close the modal when the overlay is clicked
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.style.display = 'none';
        }
    });

    // Initialize the slideshow
    showSlide(currentSlide);
});
