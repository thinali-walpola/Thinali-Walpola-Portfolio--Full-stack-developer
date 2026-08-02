// ===========================
// MOBILE MENU
// ===========================

const menuBtn = document.querySelector("#menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.onclick = () => {
    navbar.classList.toggle("active");

    menuBtn.innerHTML = navbar.classList.contains("active")
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
};

// ===========================
// CLOSE MENU WHEN LINK CLICKED
// ===========================

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

    });

});

// ===========================
// STICKY HEADER
// ===========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(15,23,42,.95)";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.25)";

    } else {

        header.style.background = "rgba(15,23,42,.75)";
        header.style.boxShadow = "none";

    }

});

// ===========================
// ACTIVE NAV LINK
// ===========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;
        const height = section.offsetHeight;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===========================
// TYPING EFFECT
// ===========================

const typingElement = document.querySelector(".typing");

const words = [

    "Web Designer",
    "Front-End Developer",
    "UI Designer",
    "Freelancer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typingEffect, 1500);

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typingEffect, deleting ? 60 : 120);

}

typingEffect();

// ===========================
// SCROLL REVEAL
// ===========================

const reveals = document.querySelectorAll(

    ".about, .services, .skills, .portfolio, .contact"

);

function revealSections() {

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        const visible = window.innerHeight - 120;

        if (top < visible) {

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);
revealSections();

// ===========================
// SMOOTH BUTTON SCROLL
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(

            this.getAttribute("href")

        );

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ===========================
// BACK TO TOP BUTTON
// ===========================

const topButton = document.createElement("button");

topButton.innerHTML = '<i class="fas fa-arrow-up"></i>';

topButton.className = "top-btn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.right = "25px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#3b82f6";
topButton.style.color = "#fff";
topButton.style.cursor = "pointer";
topButton.style.fontSize = "18px";
topButton.style.display = "none";
topButton.style.zIndex = "999";
topButton.style.boxShadow = "0 10px 25px rgba(0,0,0,.3)";
topButton.style.transition = ".3s";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ===========================
// PORTFOLIO IMAGE HOVER
// ===========================

document.querySelectorAll(".portfolio-box").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

// ===========================
// PRELOADER (OPTIONAL)
// ===========================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

console.log("Portfolio Loaded Successfully 🚀");
