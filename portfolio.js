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
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const pageWrapper = document.querySelector("#page-wrapper, .page-wrapper");

  setTimeout(() => {
    if (loader) {
      loader.style.opacity = "0";
      loader.style.pointerEvents = "none";
      loader.style.visibility = "hidden";
    }

    if (pageWrapper) {
      pageWrapper.classList.add("show");
    }

    document.body.classList.remove("no-scroll");
  }, 700);
});

function applyTheme(theme) {
  document.body.classList.toggle('dark-mode', theme === 'dark');
  const themeButton = document.querySelector('.theme-toggle');
  if (themeButton) {
    themeButton.innerHTML = theme === 'dark'
      ? '<i class="fas fa-sun"></i>Light'
      : '<i class="fas fa-moon"></i>Dark';
  }
}

function toggleTheme() {
  const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('site-theme', nextTheme);
  applyTheme(nextTheme);
}

function initThemeToggle() {
  const header = document.querySelector('.header');
  if (!header) {
    return;
  }

  const themeButton = document.createElement('button');
  themeButton.type = 'button';
  themeButton.className = 'theme-toggle';
  themeButton.setAttribute('aria-label', 'Toggle dark mode');
  themeButton.addEventListener('click', toggleTheme);

  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.alignItems = 'center';
  wrapper.appendChild(themeButton);
  header.appendChild(wrapper);

  const savedTheme = localStorage.getItem('site-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyTheme(savedTheme);
}

document.addEventListener('DOMContentLoaded', initThemeToggle);

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
  if (!typedText) {
    return;
  }

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

if (typedText) {
  document.addEventListener("DOMContentLoaded", type);
}

document.addEventListener("DOMContentLoaded", () => {
  const greetingElement = document.getElementById("greeting");
  const dateElement = document.getElementById("date");

  if (!greetingElement || !dateElement) {
    return;
  }

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
  if (!backToTopBtn) {
    return;
  }

  if (window.scrollY > 1000) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

if (backToTopBtn) {
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}


//Skills section 
 window.addEventListener("load", () => {
      const progresses = document.querySelectorAll(".progress");
      progresses.forEach(bar => {
        const value = bar.getAttribute("data-progress");
        bar.style.width = value + "%";
      });
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

  

