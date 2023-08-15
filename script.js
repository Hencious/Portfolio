document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetSectionId = link.getAttribute("href");
            const targetSection = document.querySelector(targetSectionId);
            const offset = targetSection.getBoundingClientRect().top;
            const headerHeight = document.querySelector("header").offsetHeight;
            const scrollPosition = offset + window.scrollY - headerHeight;
            
            window.scrollTo({
                top: scrollPosition,
                behavior: "smooth"
            });
        });
    });
});
