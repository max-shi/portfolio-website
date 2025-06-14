// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Modal functionality
    const modalOverlay = document.getElementById('modal-overlay');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const closeModal = document.getElementById('close-modal');
    const viewDetailsButtons = document.querySelectorAll('.view-details');
    
    // Fullscreen image functionality
    const fullscreenOverlay = document.getElementById('fullscreen-overlay');
    const fullscreenImage = document.getElementById('fullscreen-image');
    const closeFullscreen = document.getElementById('close-fullscreen');
    
    // Project titles mapping
    const projectTitles = {
        'ai-helper': 'Ai Helper Application',
        'portfolio': 'Portfolio Website',
        'application-tracker': 'Application Tracker',
        'opengl-conveyor-simulator': 'OpenGL Conveyor Simulator',
        'placeholder1': 'Placeholder Project 1',
        'placeholder2': 'Placeholder Project 2',
        'placeholder3': 'Placeholder Project 3',
        'placeholder4': 'Placeholder Project 4',
        'placeholder5': 'Placeholder Project 5',
        'placeholder6': 'Placeholder Project 6',
        'placeholder7': 'Placeholder Project 7',
        'uncorked': 'UnCorked',
        'ucfk4-pong': 'UCFK4 Pong',
        'api-server' : 'Game Review Site Backend',
        'api-server-frontend' : 'Game Review Site Frontend',
        'treasure-thieves' : 'Treasure Thieves'
    };
    
    function openModal(projectId) {
        const templateId = `project-template-${projectId}`;
        const template = document.getElementById(templateId);
        
        if (template) {
            modalTitle.textContent = projectTitles[projectId] || projectId;
            modalContent.innerHTML = '';
            
            // Clone the template content and append it to the modal
            const content = template.content.cloneNode(true);
            modalContent.appendChild(content);
            
            // Show the modal
            modalOverlay.classList.remove('hidden');
            modalOverlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            
            // Add click event listeners to all images in the modal
            setTimeout(() => {
                document.querySelectorAll('#modal-content .project-gallery img').forEach(img => {
                    img.style.cursor = 'zoom-in';
                    img.addEventListener('click', function() {
                        openFullscreenImage(this.src);
                    });
                });
            }, 100); // Small timeout to ensure DOM is updated
        } else {
            console.error('No template found for project:', projectId);
        }
    }

    function openFullscreenImage(imageSrc) {
        fullscreenImage.src = imageSrc;
        fullscreenOverlay.classList.remove('hidden');
        fullscreenOverlay.style.display = 'flex';
    }

    function closeFullscreenFunc() {
        fullscreenOverlay.classList.add('hidden');
        fullscreenOverlay.style.display = 'none';
    }

    function closeModalFunc() {
        modalOverlay.classList.add('hidden');
        modalOverlay.style.display = 'none';
        document.body.style.overflow = '';
    }

    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const projectId = this.closest('.project-card').getAttribute('data-project-id');
            openModal(projectId);
        });
    });

    document.querySelectorAll('.project-card img').forEach(image => {
        image.style.cursor = 'pointer';
        image.addEventListener('click', function() {
            const projectId = this.closest('.project-card').getAttribute('data-project-id');
            openModal(projectId);
        });
    });

    if (closeModal) {
        closeModal.addEventListener('click', (e) => {
            e.preventDefault();
            closeModalFunc();
        });
    }

    if (closeFullscreen) {
        closeFullscreen.addEventListener('click', (e) => {
            e.preventDefault();
            closeFullscreenFunc();
        });
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModalFunc();
        });
    }

    if (fullscreenOverlay) {
        fullscreenOverlay.addEventListener('click', (e) => {
            if (e.target === fullscreenOverlay) closeFullscreenFunc();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (!fullscreenOverlay.classList.contains('hidden')) {
                closeFullscreenFunc();
            } else if (!modalOverlay.classList.contains('hidden')) {
                closeModalFunc();
            }
        }
    });

    // Navigation active state
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
        });
    });

    // Contact form
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Basic validation
    const name    = this.name.value.trim();
    const email   = this.email.value.trim();
    const subject = this.subject.value.trim();
    const message = this.message.value.trim();
    if (!name || !email || !subject || !message) {
      alert('Please fill in all fields');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Send the form via EmailJS
    emailjs.sendForm('service_2zih2zg', 'template_8tzl9se', this)
      .then(() => {
        alert('Message sent successfully!');
        contactForm.reset();
      }, (err) => {
        console.error('EmailJS error:', err);
        alert('Oops—something went wrong. Please try again later.');
      });
  });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
        });
    });

    // Animate on scroll
    const animateOnScroll = () => {
        document.querySelectorAll('.tech-item, .project-card').forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight / 1.2) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };
    document.querySelectorAll('.tech-item, .project-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
});

// 3D tilt & pop for tech items
document.querySelectorAll('.tech-item').forEach(item => {
    // ensure smooth transitions
    item.style.transformStyle = 'preserve-3d';
    item.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
  
    item.addEventListener('pointermove', e => {
      const { left, top, width, height } = item.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;   // −0.5 → 0.5
      const y = (e.clientY - top) / height - 0.5;   // −0.5 → 0.5
      const tiltX = y * 15;  // adjust for more/less tilt
      const tiltY = x * -15;
      item.style.transform = `
        perspective(600px)
        rotateX(${tiltX}deg)
        rotateY(${tiltY}deg)
        scale(1.1)
      `;
    });
  
    item.addEventListener('pointerenter', () => {
      // pop in quickly
      item.style.transition = 'transform 0.1s ease-out, box-shadow 0.1s ease-out';
    });
  
    item.addEventListener('pointerleave', () => {
      // reset back
      item.style.transition = 'transform 0.5s cubic-bezier(0.22,1,0.36,1), box-shadow 0.5s ease-out';
      item.style.transform = 'perspective(600px) rotateX(0) rotateY(0) scale(1)';
      item.style.boxShadow = '';
    });
  });
  
