/* ===================PORTFOLIO JAVASCRIPT ================= */

document.addEventListener("DOMContentLoaded", function () {

    /* ======================= SCROLL ANIMATION ============================ */

    const animatedElements =
        document.querySelectorAll(".fade-in-up");

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );


    animatedElements.forEach(function (element) {

        observer.observe(element);

    });


    /* ========================== HEADER SCROLL EFFECT =================== */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {

            header.style.background =
                "rgba(9, 13, 20, 0.95)";

        } else {

            header.style.background =
                "rgba(9, 13, 20, 0.7)";

        }

    });


    

    /* ======================== MOBILE MENU BUTTON ========================= */

    const menuButton = document.getElementById("menuButton");
    const navMenu = document.getElementById("navMenu");

    menuButton.addEventListener("click", function () {

        navMenu.classList.toggle("active");

});
    /* ============================  SMOOTH SCROLL =================== */

    const navigationLinks =
        document.querySelectorAll('a[href^="#"]');

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (
                targetId &&
                targetId !== "#"
            ) {

                const target =
                    document.querySelector(targetId);

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }

        });

    });

});
