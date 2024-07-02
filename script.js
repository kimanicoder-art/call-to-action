let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        let button = slides[i].querySelector('.cta-button');
        button.style.animation = 'none'; // Reset animation
        button.offsetHeight; // Trigger reflow
        button.style.animation = ''; // Reapply animation
    }
    slides[slideIndex-1].style.display = "block";
}

// Optional: Auto play the slideshow
setInterval(() => {
    plusSlides(1);
}, 15000); // Change image every 15 seconds
