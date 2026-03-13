document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 2; // Commence avec la 3e image au centre
    const slides = document.querySelectorAll(".carousel-item");
    const totalSlides = slides.length;
    const container = document.querySelector(".carousel-container");

    function moveSlide(n) {
        let newIndex = slideIndex + n;

        // Empêche de dépasser les limites
        if (newIndex < 0 || newIndex >= totalSlides) {
            return;
        }

        slideIndex = newIndex;
        updateCarousel();
    }

    function updateCarousel() {
        const itemWidth = slides[0].offsetWidth + 50; // Largeur + gap
        const offset = -(slideIndex * itemWidth) + (container.offsetWidth / 2 - itemWidth / 2);

        container.style.transform = `translateX(${offset}px)`;

        const prevBtn = document.querySelector(".prev-btn");
        prevBtn.style.visibility = (slideIndex === 0) ? "hidden" : "visible";

        const nextBtn = document.querySelector(".next-btn");
        nextBtn.style.visibility = (slideIndex === totalSlides - 1) ? "hidden" : "visible";

        slides.forEach((slide, i) => {
            slide.classList.remove("active", "prev", "next");
            slide.style.opacity = "0.5";
            slide.style.transform = "scale(0.9)";
        });

        slides[slideIndex].classList.add("active");
        slides[slideIndex].style.opacity = "1";
        slides[slideIndex].style.transform = "scale(1)";

        if (slideIndex > 0) {
            slides[slideIndex - 1].classList.add("prev");
            slides[slideIndex - 1].style.opacity = "0.8";
        }

        if (slideIndex < totalSlides - 1) {
            slides[slideIndex + 1].classList.add("next");
            slides[slideIndex + 1].style.opacity = "0.8";
        }

        updateDots();
    }

    function updateDots() {
        const dots = document.querySelectorAll(".dot");
        dots.forEach(dot => dot.classList.remove("active-dot"));
        dots[slideIndex].classList.add("active-dot");
    }

    document.querySelector(".prev-btn").addEventListener("click", () => moveSlide(-1));
    document.querySelector(".next-btn").addEventListener("click", () => moveSlide(1));

    document.querySelectorAll(".dot").forEach((dot, index) => {
        dot.addEventListener("click", () => {
            slideIndex = index;
            updateCarousel();
        });
    });

    updateCarousel();
});

