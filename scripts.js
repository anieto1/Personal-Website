document.addEventListener('scroll', function() {
    const backgroundImage = document.querySelector('.background-image');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > window.innerHeight / 2) {
        backgroundImage.style.opacity = '0';
    } else {
        backgroundImage.style.opacity = '1';
    }
});
