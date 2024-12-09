document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelector(".slides");
    const slidesCount = document.querySelectorAll(".slide").length;
    const dots = document.querySelectorAll(".dot");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    let currentIndex = 0;

    function updateSlider() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
    }

    next.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slidesCount;
        updateSlider();
    });

    prev.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slidesCount) % slidesCount;
        updateSlider();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentIndex = index;
            updateSlider();
        });
    });
});
