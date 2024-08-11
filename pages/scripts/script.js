



function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function expand(previous_section, current_section) {
    var section1 = document.getElementById(previous_section)

    var section1Height = section1.offsetHeight;

    current_section.style.marginTop = section1Height + "px";
}

// Get all the image elements
const images = document.querySelectorAll('img:not(.icon)');
const fullscreen = document.getElementById('fullscreen');
const fullscreenImage = document.getElementById('fullscreen-image');

// Attach click event listener to each image
images.forEach(function (image) {
    image.addEventListener('click', function () {
        openFullscreen(image.src);
    });
});

// Function to open the image in fullscreen
function openFullscreen(src) {
    // Set the src of the fullscreen image to the clicked image
    fullscreenImage.src = src;

    // Show the fullscreen element
    fullscreen.style.display = 'flex';
}

// Close the fullscreen when clicking outside the image
fullscreen.addEventListener('click', function (event) {
    if (event.target === fullscreen) {
        fullscreen.style.display = 'none';
    }
});