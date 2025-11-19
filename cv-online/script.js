// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('.section').forEach((section) => {
  observer.observe(section);
});

// Add hover effects to skill tags
document.querySelectorAll('.skill-tag').forEach((tag) => {
  tag.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-3px) scale(1.05)';
  });

  tag.addEventListener('mouseleave', function () {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Add click animation to contact items
document.querySelectorAll('.contact-item').forEach((item) => {
  item.addEventListener('click', function (e) {
    // Create ripple effect
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Add ripple effect styles
const style = document.createElement('style');
style.textContent = `
    .contact-item {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(37, 99, 235, 0.3);
        pointer-events: none;
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add typing effect to the name
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
  const nameElement = document.querySelector('.name');
  const originalText = nameElement.textContent;

  // Add cursor for typing effect
  nameElement.style.borderRight = '2px solid var(--primary-color)';
  nameElement.style.animation = 'blink 1s infinite';

  // Start typing effect after a short delay
  setTimeout(() => {
    typeWriter(nameElement, originalText, 80);

    // Remove cursor after typing is complete
    setTimeout(() => {
      nameElement.style.borderRight = 'none';
      nameElement.style.animation = 'none';
    }, originalText.length * 80 + 1000);
  }, 500);
});

// Add blinking cursor animation
const cursorStyle = document.createElement('style');
cursorStyle.textContent = `
    @keyframes blink {
        0%, 50% { border-color: var(--primary-color); }
        51%, 100% { border-color: transparent; }
    }
`;
document.head.appendChild(cursorStyle);

// Add smooth reveal animation for sections
function revealSections() {
  const sections = document.querySelectorAll('.section');

  sections.forEach((section, index) => {
    setTimeout(() => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(30px)';
      section.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';

      setTimeout(() => {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      }, 100);
    }, index * 150);
  });
}

// Add progressive skill tag reveals
function revealSkillTags() {
  const skillTags = document.querySelectorAll('.skill-tag');

  skillTags.forEach((tag, index) => {
    tag.style.opacity = '0';
    tag.style.transform = 'scale(0.8)';
    tag.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';

    setTimeout(() => {
      tag.style.opacity = '1';
      tag.style.transform = 'scale(1)';
    }, index * 50 + 1000);
  });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
  revealSections();
  revealSkillTags();
});

// Add scroll-based parallax effect for header
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const header = document.querySelector('.header');
  const rate = scrolled * -0.5;

  header.style.transform = `translateY(${rate}px)`;
});

// Add dark mode toggle (optional feature)
function addDarkModeToggle() {
  const toggle = document.createElement('button');
  toggle.innerHTML = '<i class="fas fa-moon"></i>';
  toggle.className = 'dark-mode-toggle';
  toggle.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: var(--primary-color);
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        z-index: 1000;
        box-shadow: var(--shadow-medium);
        transition: var(--transition);
    `;

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = toggle.querySelector('i');
    icon.className = document.body.classList.contains('dark-mode')
      ? 'fas fa-sun'
      : 'fas fa-moon';
  });

  document.body.appendChild(toggle);
}

// Initialize dark mode toggle
addDarkModeToggle();

// Add dark mode styles
const darkModeStyles = document.createElement('style');
darkModeStyles.textContent = `
    body.dark-mode {
        --text-primary: #f1f5f9;
        --text-secondary: #cbd5e1;
        --text-light: #94a3b8;
        --bg-primary: #1e293b;
        --bg-secondary: #334155;
        --bg-accent: #475569;
        --border-color: #475569;
        background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    }
    
    .dark-mode-toggle:hover {
        transform: scale(1.1);
        box-shadow: var(--shadow-large);
    }
`;
document.head.appendChild(darkModeStyles);

// Add print functionality
function addPrintButton() {
  const printBtn = document.createElement('button');
  printBtn.innerHTML = '<i class="fas fa-print"></i>';
  printBtn.className = 'print-button';
  printBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: var(--accent-color);
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        z-index: 1000;
        box-shadow: var(--shadow-medium);
        transition: var(--transition);
    `;

  printBtn.addEventListener('click', () => {
    window.print();
  });

  printBtn.addEventListener('mouseenter', () => {
    printBtn.style.transform = 'scale(1.1)';
    printBtn.style.boxShadow = 'var(--shadow-large)';
  });

  printBtn.addEventListener('mouseleave', () => {
    printBtn.style.transform = 'scale(1)';
    printBtn.style.boxShadow = 'var(--shadow-medium)';
  });

  document.body.appendChild(printBtn);
}

// Initialize print button
addPrintButton();

// ===== BOOTSTRAP & CAROUSEL INITIALIZATION =====

// Initialize WOW.js for scroll animations
$(document).ready(function () {
  // Initialize WOW.js
  if (typeof WOW !== 'undefined') {
    new WOW({
      boxClass: 'wow',
      animateClass: 'animate__animated',
      offset: 0,
      mobile: true,
      live: true,
    }).init();
  }

  // Initialize Owl Carousel for Projects
  $('.projects-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      768: {
        items: 1,
        nav: true,
      },
      1200: {
        items: 2,
        nav: true,
      },
    },
  });

  // Enhanced hover effects for project cards
  $('.project-card').hover(
    function () {
      $(this).addClass('shadow-lg').removeClass('shadow-sm');
    },
    function () {
      $(this).removeClass('shadow-lg').addClass('shadow-sm');
    }
  );

  // Smooth scroll to projects section when navigation clicked
  $('.nav-link[href*="projects"]').click(function (e) {
    e.preventDefault();
    $('html, body').animate(
      {
        scrollTop: $('.freelance-projects').offset().top - 100,
      },
      800
    );
  });

  // Add loading animation for project images
  $('.project-thumbnail img').on('load', function () {
    $(this).parent().addClass('loaded');
  });

  // Lazy loading for project images (if not using native lazy loading)
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img.lazy').forEach((img) => {
      imageObserver.observe(img);
    });
  }

  // Add click tracking for project links (for analytics)
  $('.project-link').click(function (e) {
    const projectTitle = $(this)
      .closest('.project-card')
      .find('.project-title')
      .text();
    const linkType = $(this).text().trim().toLowerCase().includes('demo')
      ? 'demo'
      : 'github';

    // You can add analytics tracking here
    console.log(`Project clicked: ${projectTitle} - ${linkType}`);
  });

  // Carousel auto-pause on hover
  $('.projects-carousel').hover(
    function () {
      $(this).trigger('stop.owl.autoplay');
    },
    function () {
      $(this).trigger('play.owl.autoplay');
    }
  );
});

// Fallback initialization if jQuery is not loaded
if (typeof $ === 'undefined') {
  document.addEventListener('DOMContentLoaded', function () {
    console.log('jQuery not loaded, using vanilla JS fallbacks');

    // Simple WOW.js initialization
    if (typeof WOW !== 'undefined') {
      new WOW().init();
    }

    // Add warning for carousel
    console.warn(
      'Owl Carousel requires jQuery. Please ensure jQuery is loaded.'
    );
  });
}
