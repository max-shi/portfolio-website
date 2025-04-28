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
    const projectModal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const closeModal = document.getElementById('close-modal');
    const viewDetailsButtons = document.querySelectorAll('.view-details');
    
    // Project data - this could be moved to a separate JSON file in a real project
    const projectData = {
        'ecommerce': {
            title: 'E-commerce Platform',
            description: `
                <p class="mb-4">A comprehensive e-commerce solution built with modern web technologies. This platform offers a seamless shopping experience with features like:</p>
                <ul class="list-disc pl-5 mb-4 space-y-2">
                    <li>User authentication and profile management</li>
                    <li>Product catalog with filtering and search capabilities</li>
                    <li>Shopping cart and wishlist functionality</li>
                    <li>Secure checkout process with multiple payment options</li>
                    <li>Order tracking and history</li>
                    <li>Admin dashboard for inventory and order management</li>
                </ul>
                <p class="mb-4">The frontend is built with React and styled with Tailwind CSS, while the backend uses Node.js with Express and MongoDB for data storage.</p>
                <div class="mt-6">
                    <h3 class="text-xl font-semibold mb-3">Technologies Used</h3>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="bg-dark px-3 py-1 rounded-full text-sm">React</span>
                        <span class="bg-dark px-3 py-1 rounded-full text-sm">Redux</span>
                        <span class="bg-dark px-3 py-1 rounded-full text-sm">Node.js</span>
                        <span class="bg-dark px-3 py-1 rounded-full text-sm">Express</span>
                        <span class="bg-dark px-3 py-1 rounded-full text-sm">MongoDB</span>
                        <span class="bg-dark px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                        <span class="bg-dark px-3 py-1 rounded-full text-sm">Stripe API</span>
                    </div>
                </div>
                <div class="mt-4 flex space-x-4">
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
            description: `
                <p class="mb-4">A modern, responsive portfolio website designed to showcase my projects and skills. Key features include:</p>
                <ul class="list-disc pl-5 mb-4 space-y-2">
                    <li>Responsive design that works on all devices</li>
                    <li>Smooth scrolling and animations</li>
                    <li>Project showcase with modal details</li>
                    <li>Skills and technologies section</li>
                    <li>Contact form with validation</li>
                </ul>
                <p class="mb-4">Built with HTML, CSS, and JavaScript, with Tailwind CSS for styling and a touch of custom CSS for animations.</p>
                <div class="mt-6">
                    <h3 class="text-xl font-semibold mb-3">Technologies Used</h3>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="bg-dark px-3 py-1 rounded-full text-sm">HTML</span>
                        <span class="bg-dark px-3 py-1 rounded-full text-sm">CSS</span>
                        <span class="bg-dark px-3 py-1 rounded-full text-sm">JavaScript</span>
                        <span class="bg-dark px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                    </div>
                </div>
                <div class="mt-4 flex space-x-4">
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
            description: `
                <p class="mb-4">An interactive weather application that provides current conditions and forecasts for locations worldwide. Features include:</p>
                <ul class="list-disc pl-5 mb-4 space-y-2">
                    <li>Current weather conditions with visual indicators</li>
                    <li>5-day forecast with hourly breakdowns</li>
                    <li>Interactive maps showing weather patterns</li>
                    <li>Location search with autocomplete</li>
                    <li>Save favorite locations for quick access</li>
                    <li>Historical weather data visualization</li>
                </ul>
                <p class="mb-4">The app uses JavaScript to fetch data from a weather API and Chart.js to visualize temperature and precipitation trends.</p>
                <div class="mt-6">
                    <h3 class="text-xl font-semibold mb-3">Technologies Used</h3>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="bg-dark px-3 py-1 rounded-full text-sm">JavaScript</span>
                        <span class="bg-dark px-3 py-1 rounded-full text-sm">OpenWeather API</span>
                        <span class="bg-dark px-3 py-1 rounded-full text-sm">Chart.js</span>
                        <span class="bg-dark px-3 py-1 rounded-full text-sm">Mapbox API</span>
                        <span class="bg-dark px-3 py-1 rounded-full text-sm">Local Storage</span>
                    </div>
                </div>
                <div class="mt-4 flex space-x-4">
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
            description: `
                <p class="mb-4">A productivity application for managing tasks and projects with a focus on simplicity and user experience. Key features:</p>
                <ul class="list-disc pl-5 mb-4 space-y-2">
                    <li>Drag-and-drop interface for organizing tasks</li>
                    <li>Project categorization and filtering</li>
                    <li>Task prioritization and deadline management</li>
                    <li>Progress tracking with visual indicators</li>
                    <li>User authentication and data synchronization</li>
                    <li>Dark/light theme toggle</li>
                </ul>
                <p class="mb-4">Built with React for the frontend, Firebase for authentication and real-time database, and styled with Tailwind CSS.</p>
                <div class="mt-6">
                    <h3 class="text-xl font-semibold mb-3">Technologies Used</h3>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="bg-dark px-3 py-1 rounded-full text-sm">React</span>
                        <span class="bg-dark px-3 py-1 rounded-full text-sm">Firebase</span>
                        <span class="bg-dark px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                        <span class="bg-dark px-3 py-1 rounded-full text-sm">React DnD</span>
                        <span class="bg-dark px-3 py-1 rounded-full text-sm">Context API</span>
                    </div>
                </div>
                <div class="mt-4 flex space-x-4">
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
    
    // Open modal with project details
    function openModal(projectId) {
        if (projectData[projectId]) {
            modalTitle.textContent = projectData[projectId].title;
            modalContent.innerHTML = projectData[projectId].description;
            modalOverlay.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        }
    }
    
    // Close modal
    function closeModalFunc() {
        modalOverlay.classList.add('hidden');
        document.body.style.overflow = ''; // Re-enable scrolling
    }
    
    // Add event listeners to view details buttons
    if (viewDetailsButtons && modalOverlay) {
        viewDetailsButtons.forEach(button => {
            button.addEventListener('click', function() {
                const projectCard = this.closest('.project-card');
                if (projectCard) {
                    const projectId = projectCard.getAttribute('data-project-id');
                    openModal(projectId);
                }
            });
        });
    }
    
    // Close modal when clicking the close button
    if (closeModal) {
        closeModal.addEventListener('click', closeModalFunc);
    }
    
    // Close modal when clicking outside the modal content
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                closeModalFunc();
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
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
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// Contact Form Validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Simple validation
    if (name === '' || email === '' || subject === '' || message === '') {
        alert('Please fill in all fields');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // If validation passes, you would typically send the form data to a server
    // For this demo, we'll just show a success message
    alert('Message sent successfully!');
    contactForm.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Offset for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Add animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.tech-item, .project-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial styles for animation
document.querySelectorAll('.tech-item, .project-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Run animation on page load and scroll
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);