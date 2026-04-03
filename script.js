// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function () {

    const mobileMenu = document.querySelector(".mobile-menu");
    const navMenu = document.querySelector(".nav-menu");

    if (mobileMenu) {
        mobileMenu.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }

    // Smooth Scroll
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const target = document.querySelector(targetId);

            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: "smooth"
                });
            }
        });
    });

});
