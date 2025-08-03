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

/* Simple Carousel */
const images = [
    'assets/images/TLP/ref8TLP.png',
    'assets/images/TLP/ref9TLP.png',
    'assets/images/TLP/ref10TLP.png',
    'assets/images/TLP/ref11TLP.png',
    'assets/images/TLP/ref12TLP.png',
    'assets/images/TLP/ref13TLP.png',
    'assets/images/TLP/ref14TLP.png',
    'assets/images/TLP/ref15TLP.png'
];
let currentIndex = 0;
const carouselImage = document.getElementById('carousel-image');
function showImage(index) {
    currentIndex = (index + images.length) % images.length;
    carouselImage.src = images[currentIndex];
}
function nextImage() { showImage(currentIndex + 1); }
function prevImage() { showImage(currentIndex - 1); }

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
