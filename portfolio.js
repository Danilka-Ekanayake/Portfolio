document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".animate-on-scroll");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-visible");
            } else {
                entry.target.classList.remove("animate-visible");
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
});
const hamburger = document.createElement('div');
hamburger.classList.add('hamburger');
hamburger.innerHTML = '<span></span><span></span><span></span>';

document.querySelector('.header').appendChild(hamburger);

const nav = document.querySelector('.nav');
hamburger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
  hamburger.classList.toggle('toggle');
});

  const navLinks = document.querySelectorAll('.nav a');
  const currentUrl = window.location.pathname.split('/').pop();

  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentUrl || linkHref === '') {
      link.classList.add('active');
    }
  });


const typedText = document.querySelector(".typed-text");
  const phrases = [
    "Building Clean, Scalable Solutions",
    "Building Websites",
    "Full Stack Projects",
    "Front-end Development"
  ];
  let phraseIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      letterIndex--;
    } else {
      letterIndex++;
    }

    typedText.textContent = currentPhrase.substring(0, letterIndex);

    if (!isDeleting && letterIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(type, 1000); // wait before deleting
    } else if (isDeleting && letterIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(type, 500); // wait before typing next
    } else {
      const typingSpeed = isDeleting ? 50 : 100;
      setTimeout(type, typingSpeed);
    }
  }

  document.addEventListener("DOMContentLoaded", type);
  document.addEventListener("DOMContentLoaded", type);
document.addEventListener("DOMContentLoaded", () => {
  const greetingElement = document.getElementById("greeting");
  const dateElement = document.getElementById("date");
  const greetingContainer = document.getElementById("greeting-container");

  const now = new Date();
  const hours = now.getHours();

  // Greeting logic
  if (hours >= 0 && hours < 12) {
    greetingElement.textContent = "Good Morning!";
  } else if (hours >= 12 && hours < 18) {
    greetingElement.textContent = "Good Afternoon!";
  } else {
    greetingElement.textContent = "Good Evening!";
  }

  // Date display
  const formattedDate = now.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  dateElement.textContent = formattedDate;
});


AOS.init({
  duration: 700, // animation duration in ms
  once: false     // animate every time on scroll
});



// Show/hide back to top
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 1500) {
    backToTopBtn.style.display = "block";
  } 
  else {
    backToTopBtn.style.display = "none";
  }
});

// Scroll to top smoothly
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


//project page

  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.getAttribute("data-filter");

      portfolioItems.forEach(item => {
        const category = item.getAttribute("data-category");
        if (filter === "all" || category.includes(filter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  

