document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. THEME MANAGEMENT (DARK / LIGHT)
  // ==========================================
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle.querySelector('i');

  // Load preferred theme from localStorage
  const savedTheme = localStorage.getItem('cv-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.body.classList.add('dark-mode');
    themeIcon.className = 'fas fa-sun';
  } else {
    document.body.classList.remove('dark-mode');
    themeIcon.className = 'fas fa-moon';
  }

  // Toggle theme action
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    
    // Save preference
    localStorage.setItem('cv-theme', isDark ? 'dark' : 'light');
    
    // Update icon
    themeIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    
    // Tiny micro-interaction effect
    themeToggle.style.transform = 'scale(0.9)';
    setTimeout(() => {
      themeToggle.style.transform = '';
    }, 150);
  });

  // ==========================================
  // 2. VIEW MORPH TOGGLE (STANDARD UI <-> JAVA IDE)
  // ==========================================
  const viewToggle = document.getElementById('view-toggle');
  const uiLayout = document.getElementById('ui-layout');
  const codeLayout = document.getElementById('code-layout');

  viewToggle.addEventListener('click', () => {
    const isUIActive = uiLayout.classList.contains('active');
    
    if (isUIActive) {
      // Switch to Code View
      uiLayout.classList.remove('active');
      setTimeout(() => {
        codeLayout.classList.add('active');
        viewToggle.innerHTML = '<i class="fas fa-desktop"></i> <span>UI View</span>';
      }, 300);
    } else {
      // Switch to UI View
      codeLayout.classList.remove('active');
      setTimeout(() => {
        uiLayout.classList.add('active');
        viewToggle.innerHTML = '<i class="fas fa-code"></i> <span>Java View</span>';
      }, 300);
    }

    // Micro-interaction bounce
    viewToggle.style.transform = 'scale(0.95)';
    setTimeout(() => {
      viewToggle.style.transform = '';
    }, 150);
  });

  // ==========================================
  // 3. PRINT CONTROLS
  // ==========================================
  const printBtn = document.getElementById('print-btn');
  printBtn.addEventListener('click', () => {
    // If in code view, switch back to UI view before printing to ensure CV layout prints
    const isCodeActive = codeLayout.classList.contains('active');
    if (isCodeActive) {
      codeLayout.classList.remove('active');
      uiLayout.classList.add('active');
      viewToggle.innerHTML = '<i class="fas fa-code"></i> <span>Java View</span>';
    }
    
    window.print();
  });

  // ==========================================
  // 4. SCROLL REVEAL INTERSECTION OBSERVER
  // ==========================================
  const revealCards = document.querySelectorAll('.cv-card, .cv-header');
  
  // Set initial styles for reveal
  revealCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(15px)';
    card.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
  });

  const observerOptions = {
    threshold: 0.05,
    rootMargin: '0px 0px -40px 0px'
  };

  const cardObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        target.style.opacity = '1';
        target.style.transform = 'translateY(0)';
        observer.unobserve(target); // Only reveal once
      }
    });
  }, observerOptions);

  revealCards.forEach(card => {
    cardObserver.observe(card);
  });
});
