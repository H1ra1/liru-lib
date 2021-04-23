class Liru {
    observerAnimate(init, options) {
        if(init) {
            const elements = document.querySelectorAll('[observerAnimate]');
    
            const intersectionObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if(entry.isIntersecting) {
                        const target = $(entry.target);
                        const attr = target.attr('observerAnimate');
                        
                        // add class on element target when intersecting
                        target.addClass(attr);

                        // stop observing
                        intersectionObserver.unobserve(entry.target);
                    }
                });
            }, options);
    
            elements.forEach((element) => {
                intersectionObserver.observe(element);
            });
        }
    }
}
