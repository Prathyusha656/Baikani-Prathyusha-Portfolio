// Add smooth scrolling animation for sections
window.addEventListener('scroll', () => {
    let sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        let sectionTop = section.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add('in-view');
        } else {
            section.classList.remove('in-view');
        }
    });
});
