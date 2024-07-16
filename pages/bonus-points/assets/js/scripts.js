let currentIndex = 0;

function showImage(index) {
    const images = document.querySelectorAll('.carousel-item');
    if (index >= images.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function showNextImage() {
    showImage(currentIndex + 1);
}

function showPrevImage() {
    showImage(currentIndex - 1);
}

// Initial display
showImage(currentIndex);