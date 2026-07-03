document.addEventListener('DOMContentLoaded', () => {
  // Use data from projects.js (globally available on window.portfolioData)
  const data = window.portfolioData;
  if (!data) {
    console.error("Portfolio data not found. Please ensure projects.js is loaded correctly.");
    return;
  }

  // Initialize all elements and logic
  initTheme();
  renderContent(data);
  initTypingEffect(data.profile.words);
  initPortfolioFilters(data.projects);
  initScrollAnimations();
  initContactForm();
  initMobileMenu();
});

/* ==========================================================================
   1. Theme Toggle & Local Storage
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme');

  // Apply saved theme or system preference
  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  }

  // Toggle button event listener
  themeToggleBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    let newTheme = theme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
}

/* ==========================================================================
   2. Dynamic Content Rendering
   ========================================================================== */
function renderContent(data) {
  // --- Profile Info ---
  document.getElementById('profile-name').textContent = data.profile.name;
  document.getElementById('profile-bio').textContent = data.profile.bio;
  document.getElementById('hero-name').textContent = data.profile.name;
  document.getElementById('about-img').src = data.profile.avatar;
  
  if (data.profile.resumeUrl && data.profile.resumeUrl !== '#') {
    document.getElementById('cv-btn').setAttribute('href', data.profile.resumeUrl);
  }

  // --- Social Links ---
  const socialContainers = document.querySelectorAll('.social-links-render');
  socialContainers.forEach(container => {
    container.innerHTML = `
      <a href="${data.profile.socials.github}" target="_blank" aria-label="GitHub" class="social-icon"><i class="ri-github-fill"></i></a>
      <a href="${data.profile.socials.linkedin}" target="_blank" aria-label="LinkedIn" class="social-icon"><i class="ri-linkedin-box-fill"></i></a>
      <a href="${data.profile.socials.instagram}" target="_blank" aria-label="Instagram" class="social-icon"><i class="ri-instagram-line"></i></a>
      <a href="mailto:${data.profile.socials.email}" aria-label="Email" class="social-icon"><i class="ri-mail-line"></i></a>
    `;
  });

  // --- Skills ---
  const skillsContainer = document.getElementById('skills-container');
  skillsContainer.innerHTML = '';
  data.skills.forEach(skillCat => {
    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add('skill-category', 'reveal');
    
    let skillsListHTML = '';
    skillCat.items.forEach(skill => {
      skillsListHTML += `
        <div class="skill-item">
          <div class="skill-info">
            <div class="skill-name-container">
              <i class="${skill.icon || 'ri-code-line'}"></i>
              <span>${skill.name}</span>
            </div>
            <span class="skill-percentage">${skill.level}%</span>
          </div>
          <div class="skill-bar">
            <div class="skill-progress" data-level="${skill.level}"></div>
          </div>
        </div>
      `;
    });

    categoryDiv.innerHTML = `
      <h3 class="skill-category-title">${skillCat.category}</h3>
      <div class="skill-items">
        ${skillsListHTML}
      </div>
    `;
    skillsContainer.appendChild(categoryDiv);
  });

  // --- Services ---
  const servicesContainer = document.getElementById('services-container');
  servicesContainer.innerHTML = '';
  data.services.forEach((service, index) => {
    const serviceCard = document.createElement('div');
    serviceCard.classList.add('service-card', 'reveal');
    if (index > 0) {
      serviceCard.classList.add(`reveal-delay-${index % 3}`);
    }
    serviceCard.innerHTML = `
      <div class="service-icon-box">
        <i class="${service.icon || 'ri-computer-line'}"></i>
      </div>
      <h3>${service.title}</h3>
      <p>${service.description}</p>
    `;
    servicesContainer.appendChild(serviceCard);
  });

  // --- Timeline (Experience & Education) ---
  const timelineContainer = document.getElementById('timeline-container');
  timelineContainer.innerHTML = '';
  data.experience.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('timeline-item', 'reveal');
    if (index > 0) itemDiv.classList.add(`reveal-delay-${index % 3}`);
    
    const badgeClass = item.type === 'education' ? 'education' : 'work';
    const badgeLabel = item.type === 'education' ? 'Education' : 'Experience';

    itemDiv.innerHTML = `
      <div class="timeline-dot"></div>
      <span class="timeline-badge ${badgeClass}">${badgeLabel}</span>
      <div class="timeline-card">
        <div class="timeline-date">${item.duration}</div>
        <h3 class="timeline-role">${item.role}</h3>
        <div class="timeline-company">${item.company}</div>
        <p class="timeline-desc">${item.description}</p>
      </div>
    `;
    timelineContainer.appendChild(itemDiv);
  });

  // --- Initial Render of Projects ---
  renderProjects(data.projects);
}

/* ==========================================================================
   3. Typing Animation Effect
   ========================================================================== */
function initTypingEffect(words) {
  const typingSpan = document.getElementById('typed-text');
  if (!typingSpan || !words || words.length === 0) return;

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;

  function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      typingSpan.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 50; // Speed up when deleting
    } else {
      typingSpan.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 150; // Standard typing speed
    }

    if (!isDeleting && charIndex === currentWord.length) {
      typeSpeed = 2000; // Wait at the end of word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 500; // Small delay before typing next word
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

/* ==========================================================================
   4. Portfolio Filtering & Rendering
   ========================================================================== */
function renderProjects(projectsList) {
  const portfolioGrid = document.getElementById('portfolio-grid');
  portfolioGrid.innerHTML = '';

  if (projectsList.length === 0) {
    portfolioGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 3rem;">
        <i class="ri-inbox-line" style="font-size: 3rem; display: block; margin-bottom: 1rem; color: var(--primary);"></i>
        <p>No projects found in this category.</p>
      </div>
    `;
    return;
  }

  projectsList.forEach((project, index) => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card', 'reveal');
    projectCard.classList.add(`reveal-delay-${index % 3}`);
    
    const tagsHTML = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');

    projectCard.innerHTML = `
      <div class="project-img-box">
        <img src="${project.image}" alt="${project.title}">
        <div class="project-overlay">
          <div class="project-overlay-icon">
            <i class="ri-eye-line"></i>
          </div>
        </div>
      </div>
      <div class="project-content">
        <div class="project-tags">${tagsHTML}</div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc-short">${project.description}</p>
      </div>
    `;

    // Click event to open project modal
    projectCard.addEventListener('click', () => openProjectModal(project));
    
    portfolioGrid.appendChild(projectCard);
  });
}

function initPortfolioFilters(allProjects) {
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons and add to current
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');
      
      let filteredProjects;
      if (filterValue === 'all') {
        filteredProjects = allProjects;
      } else {
        filteredProjects = allProjects.filter(project => 
          project.category.toLowerCase().replace(' ', '-') === filterValue.toLowerCase()
        );
      }
      
      renderProjects(filteredProjects);
      // Re-trigger scroll animations for the newly added card items
      initScrollAnimations();
    });
  });
}

/* ==========================================================================
   5. Project Modal System
   ========================================================================== */
function openProjectModal(project) {
  const modal = document.getElementById('project-modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalTags = document.getElementById('modal-tags');
  const modalDesc = document.getElementById('modal-desc');
  const modalDemo = document.getElementById('modal-demo-btn');
  const modalGithub = document.getElementById('modal-github-btn');

  // Fill in content
  modalImg.src = project.image;
  modalTitle.textContent = project.title;
  modalDesc.textContent = project.description;
  
  modalTags.innerHTML = '';
  project.tags.forEach(tag => {
    const span = document.createElement('span');
    span.classList.add('project-tag');
    span.textContent = tag;
    modalTags.appendChild(span);
  });

  // Action links
  if (project.demoUrl && project.demoUrl !== '#') {
    modalDemo.style.display = 'inline-flex';
    modalDemo.setAttribute('href', project.demoUrl);
  } else {
    modalDemo.style.display = 'none';
  }

  if (project.githubUrl && project.githubUrl !== '#') {
    modalGithub.style.display = 'inline-flex';
    modalGithub.setAttribute('href', project.githubUrl);
  } else {
    modalGithub.style.display = 'none';
  }

  // Open modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Stop background scrolling

  // Setup close events
  const closeBtn = modal.querySelector('.modal-close-btn');
  const overlay = modal.querySelector('.modal-overlay');

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scroll
    // Cleanup event listeners
    closeBtn.removeEventListener('click', closeModal);
    overlay.removeEventListener('click', closeModal);
    document.removeEventListener('keydown', handleEscape);
  };

  const handleEscape = (e) => {
    if (e.key === 'Escape') closeModal();
  };

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
  document.addEventListener('keydown', handleEscape);
}

/* ==========================================================================
   6. Navigation Scroll & Scroll Reveal
   ========================================================================== */
function initScrollAnimations() {
  const reveals = document.querySelectorAll('.reveal');

  // Observer for fade-in animations on scroll
  const observerOptions = {
    root: null,
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        
        // Custom behavior: if it has skill bars, animate them
        const skillBars = entry.target.querySelectorAll('.skill-progress');
        if (skillBars.length > 0) {
          skillBars.forEach(bar => {
            const level = bar.getAttribute('data-level');
            bar.style.width = level + '%';
          });
        }
        
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  reveals.forEach(el => observer.observe(el));

  // Handle sticky header scroll class
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // Highlight Nav Link on Scroll
    highlightNavLink();
  });
}

function highlightNavLink() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  let currentSecId = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.scrollY >= (sectionTop - 150)) {
      currentSecId = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSecId}`) {
      link.classList.add('active');
    }
  });
}

/* ==========================================================================
   7. Contact Form Handling
   ========================================================================== */
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('form-name').value;
    const email = document.getElementById('form-email').value;
    const message = document.getElementById('form-message').value;

    // Show dynamic success modal response
    const modal = document.getElementById('project-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalTags = document.getElementById('modal-tags');
    const modalDesc = document.getElementById('modal-desc');
    const modalDemo = document.getElementById('modal-demo-btn');
    const modalGithub = document.getElementById('modal-github-btn');

    // Fill with Success Feedback
    modalImg.src = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800&h=300"; // success image
    modalTitle.textContent = "Thank you, " + name + "!";
    modalTags.innerHTML = '<span class="project-tag">Message Sent</span>';
    modalDesc.innerHTML = `Your message has been successfully logged.<br><br><strong>Details sent:</strong><br>Email: ${email}<br>Message: "${message}"<br><br>Candra will get back to you shortly!`;
    
    modalDemo.style.display = 'none';
    modalGithub.style.display = 'none';

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Clear Form inputs
    contactForm.reset();

    // Close Handler
    const closeBtn = modal.querySelector('.modal-close-btn');
    const overlay = modal.querySelector('.modal-overlay');
    
    const closeModal = () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      closeBtn.removeEventListener('click', closeModal);
      overlay.removeEventListener('click', closeModal);
    };
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
  });
}

/* ==========================================================================
   8. Mobile Navigation Hamburger Menu
   ========================================================================== */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  hamburger.addEventListener('click', () => {
    const isActive = navMenu.classList.toggle('active');
    
    // Toggle hamburger icon
    const icon = hamburger.querySelector('i');
    if (isActive) {
      icon.className = 'ri-close-line';
    } else {
      icon.className = 'ri-menu-line';
    }
  });

  // Close mobile menu when a nav link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      hamburger.querySelector('i').className = 'ri-menu-line';
    });
  });
}
