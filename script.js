// typing animation
var typed = new Typed(".typing", {
    strings: ["", "Digital Designer", "Web Developer", "Coder"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// expanding image
function expandImage(img) {
    const expandedImageContainer = document.getElementById("expandedImageContainer");
    const expandedImage = document.getElementById("expandedImage");

    expandedImage.src = img.src;
    expandedImage.alt = img.alt;

    expandedImageContainer.style.display = "block";

    expandedImage.onclick = function () {
        expandedImageContainer.style.display = "none";
    };
}