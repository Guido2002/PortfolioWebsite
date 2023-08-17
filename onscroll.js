window.onload = function() {
    var animatableElements = document.querySelectorAll('.animatable');

    function isElementInViewport(element) {
        var offset = window.scrollY + window.innerHeight;
        return element.offsetTop + (element.offsetHeight / 3) < offset;
    }

    function animateElement(element) {
        element.classList.remove('animatable');
        element.classList.add('animated');
    }

    function handleScroll() {
        animatableElements.forEach(function(element) {
            if (isElementInViewport(element)) {
                animateElement(element);
            }
        });

        if (animatableElements.length === 0) {
            window.removeEventListener('scroll', handleScroll);
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
};
