function myMenuFuction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += "responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/*---Dark mode----- */
const body = document.querySelector("body"),
  toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
});

/*--Typing effect---*/

var typingEffect = new Typed(".typedText", {
  strings: ["Designer", "Coder", "Developer"],

  loop: true,
  typeSpeed: 100,
  backspeed: 80,
  backDelay: 2000,
});

/*-----Scroll animaton---*/

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

sr.revel(".featured-name", { delay: 100 });
sr.revel(".text-info", { delay: 200 });
sr.revel(".text-btn", { delay: 200 });
sr.revel(".social_icons", { delay: 200 });
sr.revel(".featured-image", { delay: 320 });

sr.reveal(".project-box", { interval: 200 });

sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.revel(".about-info", { delay: 100 });
srLeft.revel(".contact-info", { delay: 100 });

const srRight = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.revel(".skill", { delay: 100 });
srRight.revel(".skill-box", { delay: 100 });

/*-----------Active Link---- */

const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeiht = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);
