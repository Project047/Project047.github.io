// Toggle Navigation Menu
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  // Add or remove 'responsive' class based on current class
  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/*--- Dark Mode Toggle ---*/
const body = document.querySelector("body"),
  toggleSwitch = document.getElementById("toggle-switch");

// Toggle 'dark' class on body when switch is clicked
toggleSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
});

/*--- Typing Effect ---*/
var typingEffect = new Typed(".typedText", {
  strings: ["Designer", "Coder", "Developer"], // Text to display
  loop: true, // Repeat typing effect
  typeSpeed: 100, // Speed of typing
  backSpeed: 80, // Speed of backspacing
  backDelay: 2000, // Delay before starting to backspace
});

/*--- Scroll Animation with ScrollReveal ---*/
const sr = ScrollReveal({
  origin: "top", // Animation starts from the top
  distance: "80px", // Distance of the reveal effect
  duration: 2000, // Duration of the animation
  reset: true, // Reset animation on scroll up
});

// Reveal elements with specific delays
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".text-info", { delay: 200 });
sr.reveal(".text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 320 });
sr.reveal(".project-box", { interval: 200 });
sr.reveal(".top-header", {});

// ScrollReveal for elements coming from the left
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

// ScrollReveal for elements coming from the right
const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skill", { delay: 100 });
srRight.reveal(".skill-box", { delay: 100 });

/*--- Active Link Highlighting ---*/
const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    // Highlight link based on scroll position
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.nav-menu a[href*='${sectionId}']`)
        .classList.add("active-link");
    } else {
      document
        .querySelector(`.nav-menu a[href*='${sectionId}']`)
        .classList.remove("active-link");
    }
  });
}

// Add event listener to update active link on scroll
window.addEventListener("scroll", scrollActive);

/*My custom script */

document.addEventListener("DOMContentLoaded", () => {
  // Function to scroll to the contact section
  function scrollToContactSection() {
    const contactSection = document.querySelector("#contact");
    contactSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  // Select and add event listener to the "Hire Me" button in the main section
  const hireMeButtonMain = document.querySelector(".text-btn .btn");
  if (hireMeButtonMain) {
    hireMeButtonMain.addEventListener("click", (event) => {
      event.preventDefault();
      scrollToContactSection();
    });
  }

  // Select and add event listener to the "Hire Me" button in the "About Me" section
  const hireMeButtonAbout = document.querySelector(".about-me-btn");
  if (hireMeButtonAbout) {
    hireMeButtonAbout.addEventListener("click", (event) => {
      event.preventDefault();
      scrollToContactSection();
    });
  }
});
