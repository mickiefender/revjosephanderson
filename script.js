document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');
  
    menuToggle.addEventListener('click', function () {
      navUl.classList.toggle('active');
    });
  
    // Smooth Scrolling for Anchor Links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach((link) => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70, // Adjust offset as needed
            behavior: 'smooth',
          });
        }
        // Close mobile menu after selection
        if (navUl.classList.contains('active')) {
          navUl.classList.remove('active');
        }
      });
    });
  
    // Additional JS for forms and interactive features can be added here
  });

  let slideIndex = 0;
  const slides = document.querySelectorAll('.slide');

  // Function to show a specific slide
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });
  }

  // Change slide on button click
  function changeSlide(n) {
    slideIndex += n;
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    showSlide(slideIndex);
  }

  // Auto-slide functionality (every 5 seconds)
  setInterval(() => {
    changeSlide(1);
  }, 5000);

  // Initialize the first slide
  showSlide(slideIndex);

  document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".animated");
    let lastScrollTop = window.scrollY || document.documentElement.scrollTop; // Track last scroll position

    const observer = new IntersectionObserver(
        (entries) => {
            let currentScrollTop = window.scrollY || document.documentElement.scrollTop;
            let scrollingDown = currentScrollTop > lastScrollTop; // Check if user is scrolling down

            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    entry.target.classList.remove("hidden");
                } else {
                    if (scrollingDown) {
                        entry.target.classList.remove("visible");
                        entry.target.classList.add("hidden"); // Move up when scrolling up
                    } else {
                        entry.target.classList.remove("hidden");
                    }
                }
            });

            lastScrollTop = currentScrollTop; // Update last scroll position
        },
        { threshold: 0.2 } // Trigger animation when 20% of element is visible
    );

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
