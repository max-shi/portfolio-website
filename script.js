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
    
    // Project data
    const projectData = {
        'ecommerce': {
            title: 'E-commerce Platform',
            images: [
                'images/projects/project1.png',
                'images/projects/ecommerce/dashboard.png',
                'images/projects/ecommerce/checkout.png'
            ],
            description: `
                <div class="mb-6 project-gallery">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <img src="images/projects/project1.png" alt="Main" class="w-full h-auto rounded-lg">
                        <img src="images/projects/ecommerce/dashboard.png" alt="Dashboard" class="w-full h-auto rounded-lg">
                        <img src="images/projects/ecommerce/checkout.png" alt="Checkout" class="w-full h-auto rounded-lg">
                    </div>
                </div>
                <p class="mb-4">A comprehensive e-commerce solution built with modern web technologies.</p>
                <ul class="list-disc pl-5 mb-4 space-y-2">
                    <li>User authentication and profile management</li>
                    <li>Product catalog with filtering and search</li>
                    <li>Secure checkout process with multiple payment options</li>
                </ul>
                <div class="mt-6 flex space-x-4">
                    <a href="#" class="text-accent hover:text-accent-light transition duration-300">
                        <i class="fas fa-external-link-alt mr-1"></i> Live Demo
                    </a>
                    <a href="#" class="text-accent hover:text-accent-light transition duration-300">
                        <i class="fab fa-github mr-1"></i> Source Code
                    </a>
                </div>
            `
        },
        'portfolio': {
            title: 'Portfolio Website',
            images: [
                'images/projects/portfolio/main.png',
                'images/projects/portfolio/projects.png',
                'images/projects/portfolio/contact.png'
            ],
            description: `
                <div class="mb-6 project-gallery">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <img src="images/projects/portfolio/main.png" alt="Main" class="w-full h-auto rounded-lg">
                        <img src="images/projects/portfolio/projects.png" alt="Projects" class="w-full h-auto rounded-lg">
                        <img src="images/projects/portfolio/contact.png" alt="Contact" class="w-full h-auto rounded-lg">
                    </div>
                </div>
                <p class="mb-4">A modern, responsive portfolio designed to showcase projects and skills.</p>
                <div class="mt-6 flex space-x-4">
                    <a href="#" class="text-accent hover:text-accent-light transition duration-300">
                        <i class="fas fa-external-link-alt mr-1"></i> Live Demo
                    </a>
                    <a href="#" class="text-accent hover:text-accent-light transition duration-300">
                        <i class="fab fa-github mr-1"></i> Source Code
                    </a>
                </div>
            `
        },
        'weather': {
            title: 'Weather Dashboard',
            images: [
                'images/projects/weather/main.png',
                'images/projects/weather/forecast.png',
                'images/projects/weather/map.png'
            ],
            description: `
                <div class="mb-6 project-gallery">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <img src="images/projects/weather/main.png" alt="Main" class="w-full h-auto rounded-lg">
                        <img src="images/projects/weather/forecast.png" alt="Forecast" class="w-full h-auto rounded-lg">
                        <img src="images/projects/weather/map.png" alt="Map" class="w-full h-auto rounded-lg">
                    </div>
                </div>
                <p class="mb-4">Interactive weather app with 5-day forecasts and maps.</p>
                <div class="mt-6 flex space-x-4">
                    <a href="#" class="text-accent hover:text-accent-light transition duration-300">
                        <i class="fas fa-external-link-alt mr-1"></i> Live Demo
                    </a>
                    <a href="#" class="text-accent hover:text-accent-light transition duration-300">
                        <i class="fab fa-github mr-1"></i> Source Code
                    </a>
                </div>
            `
        },
        'task': {
            title: 'Task Manager',
            images: [
                'images/projects/task/main.png',
                'images/projects/task/board.png',
                'images/projects/task/settings.png'
            ],
            description: `
                <div class="mb-6 project-gallery">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <img src="images/projects/task/main.png" alt="Main" class="w-full h-auto rounded-lg">
                        <img src="images/projects/task/board.png" alt="Board" class="w-full h-auto rounded-lg">
                        <img src="images/projects/task/settings.png" alt="Settings" class="w-full h-auto rounded-lg">
                    </div>
                </div>
                <p class="mb-4">A productivity app for managing tasks with drag-and-drop and theming.</p>
                <div class="mt-6 flex space-x-4">
                    <a href="#" class="text-accent hover:text-accent-light transition duration-300">
                        <i class="fas fa-external-link-alt mr-1"></i> Live Demo
                    </a>
                    <a href="#" class="text-accent hover:text-accent-light transition duration-300">
                        <i class="fab fa-github mr-1"></i> Source Code
                    </a>
                </div>
            `
        },
        // Placeholder entries
        'placeholder1': {
            title: 'Placeholder Project 1',
            images: [
                'images/projects/placeholder.png',
                'images/projects/placeholder.png',
                'images/projects/placeholder.png'
            ],
            description: `
                <p class="mb-4">Description for placeholder project 1.</p>
                <div class="mt-6 flex space-x-4">
                    <a href="#" class="text-accent hover:text-accent-light transition duration-300">
                        <i class="fas fa-external-link-alt mr-1"></i> Live Demo
                    </a>
                    <a href="#" class="text-accent hover:text-accent-light transition duration-300">
                        <i class="fab fa-github mr-1"></i> Source Code
                    </a>
                </div>
            `
        },
        'placeholder2': {
            title: 'Placeholder Project 2',
            images: [
                'images/projects/placeholder.png',
                'images/projects/placeholder.png',
                'images/projects/placeholder.png'
            ],
            description: `
                <p class="mb-4">Description for placeholder project 2.</p>
                <div class="mt-6 flex space-x-4">
                    <a href="#" class="text-accent hover:text-accent-light transition duration-300">
                        <i class="fas fa-external-link-alt mr-1"></i> Live Demo
                    </a>
                    <a href="#" class="text-accent hover:text-accent-light transition duration-300">
                        <i class="fab fa-github mr-1"></i> Source Code
                    </a>
                </div>
            `
        },
        'placeholder3': {
            title: 'Placeholder Project 3',
            images: [
                'images/projects/placeholder.png',
                'images/projects/placeholder.png',
                'images/projects/placeholder.png'
            ],
            description: `
                <p class="mb-4">Description for placeholder project 3.</p>
                <div class="mt-6 flex space-x-4">
                    <a href="#" class="text-accent hover:text-accent-light transition duration-300">
                        <i class="fas fa-external-link-alt mr-1"></i> Live Demo
                    </a>
                    <a href="#" class="text-accent hover:text-accent-light transition duration-300">
                        <i class="fab fa-github mr-1"></i> Source Code
                    </a>
                </div>
            `
        },
        'placeholder4': {
            title: 'Placeholder Project 4',
            images: [
                'images/projects/placeholder.png',
                'images/projects/placeholder.png',
                'images/projects/placeholder.png'
            ],
            description: `
                <p class="mb-4">Description for placeholder project 4.</p>
                <div class="mt-6 flex space-x-4">
                    <a href="#" class="text-accent hover:text-accent-light transition duration-300">
                        <i class="fas fa-external-link-alt mr-1"></i> Live Demo
                    </a>
                    <a href="#" class="text-accent hover:text-accent-light transition duration-300">
                        <i class="fab fa-github mr-1"></i> Source Code
                    </a>
                </div>
            `
        },
        'placeholder5': {
            title: 'Placeholder Project 5',
            images: [
                'images/projects/placeholder.png',
                'images/projects/placeholder.png',
                'images/projects/placeholder.png'
            ],
            description: `
                <p class="mb-4">Description for placeholder project 5.</p>
                <div class="mt-6 flex space-x-4">
                    <a href="#" class="text-accent hover:text-accent-light transition duration-300">
                        <i class="fas fa-external-link-alt mr-1"></i> Live Demo
                    </a>
                    <a href="#" class="text-accent hover:text-accent-light transition duration-300">
                        <i class="fab fa-github mr-1"></i> Source Code
                    </a>
                </div>
            `
        },
        'placeholder6': {
            title: 'Placeholder Project 6',
            images: [
                'images/projects/placeholder.png',
                'images/projects/placeholder.png',
                'images/projects/placeholder.png'
            ],
            description: `
                <p class="mb-4">Description for placeholder project 6.</p>
                <div class="mt-6 flex space-x-4">
                    <a href="#" class="text-accent hover:text-accent-light transition duration-300">
                        <i class="fas fa-external-link-alt mr-1"></i> Live Demo
                    </a>
                    <a href="#" class="text-accent hover:text-accent-light transition duration-300">
                        <i class="fab fa-github mr-1"></i> Source Code
                    </a>
                </div>
            `
        },
        'placeholder7': {
            title: 'Placeholder Project 7',
            images: [
                'images/projects/placeholder.png',
                'images/projects/placeholder.png',
                'images/projects/placeholder.png'
            ],
            description: `
                <p class="mb-4">Description for placeholder project 7.</p>
                <div class="mt-6 flex space-x-4">
                    <a href="#" class="text-accent hover:text-accent-light transition duration-300">
                        <i class="fas fa-external-link-alt mr-1"></i> Live Demo
                    </a>
                    <a href="#" class="text-accent hover:text-accent-light transition duration-300">
                        <i class="fab fa-github mr-1"></i> Source Code
                    </a>
                </div>
            `
        }
    };
    
    function openModal(projectId) {
        if (projectData[projectId]) {
            modalTitle.textContent = projectData[projectId].title;
            modalContent.innerHTML = projectData[projectId].description;
            modalOverlay.classList.remove('hidden');
            modalOverlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        } else {
            console.error('No project data for:', projectId);
        }
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

    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModalFunc();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modalOverlay.classList.contains('hidden')) {
            closeModalFunc();
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
