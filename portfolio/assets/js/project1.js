/* project1.js */

/* Tabs switching */
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");
tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        tabButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const tabId = btn.getAttribute("data-tab");
        tabContents.forEach(c => c.classList.remove("active"));
        document.getElementById(tabId).classList.add("active");
    });
});

/* ----- Dynamic Carousel ----- */
document.querySelectorAll('.carousel').forEach(carousel => {
    const images = carousel.querySelectorAll('.carousel-images img');
    let currentIndex = 0;

    function showImage(index) {
        currentIndex = (index + images.length) % images.length; // wrap first
        images.forEach((img, i) => {
            img.style.display = i === currentIndex ? 'block' : 'none';
        });
    }

    carousel.querySelector('.next-btn').addEventListener('click', () => {
        showImage(currentIndex + 1);
    });

    carousel.querySelector('.prev-btn').addEventListener('click', () => {
        showImage(currentIndex - 1);
    });

    // Initialize
    showImage(0);
});


/* Lightbox */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const clickableImages = document.querySelectorAll('.image.featured, .image-pair img');
clickableImages.forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.style.display = 'flex';
    });
});
lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) lightbox.style.display = 'none';
});
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") lightbox.style.display = 'none';
});

/* Back to Top Button */
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});
backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
