function scrollToFooter() {
    const page = document.getElementById('page');
    page.scrollIntoView({ behavior: 'smooth' });
}

// JavaScript (master.js)
// JavaScript (master.js)
document.addEventListener("DOMContentLoaded", function() {
    // Array of image URLs for the carousel
    const carouselImages = [
        "Homepagina.png",
        "Afbeelding1.png",
        "quest2.png",
    ];

    const imageElement = document.querySelector(".fullscreen-bg__image");
    let currentIndex = 0;
    let transitioning = false;

    // Function to update the background image with a smooth slide transition
    function updateBackgroundImage() {
        if (transitioning) {
            return;
        }

        transitioning = true;

        // Slide out to the left
        imageElement.style.transition = "transform 0.4s ease-in-out";
        imageElement.style.transform = "translateX(-100%)";

        // Wait for the slide-out transition to complete
        setTimeout(function() {
            // Change the background image URL
            imageElement.style.transition = "none"; // Disable transition for a moment
            imageElement.style.backgroundImage = `url('${carouselImages[currentIndex]}')`;

            // Trigger a layout update
            imageElement.offsetHeight;

            // Slide in from the right
            imageElement.style.transition = "transform 0.4s ease-in-out";
            imageElement.style.transform = "translateX(0)";

            // Allow the next transition
            transitioning = false;

            // Move to the next image
            currentIndex = (currentIndex + 1) % carouselImages.length;
        }, 400); // This time (500ms) should match the transition duration
    }

    // Initial image
    updateBackgroundImage();

    // Change the background image every 3 seconds
    setInterval(updateBackgroundImage, 5000);
});

function progressBarScroll() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
        height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
        scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
  }
  
  window.onscroll = function () {
    progressBarScroll();
  };



