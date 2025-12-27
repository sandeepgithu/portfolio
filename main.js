// Main Application JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Portfolio loading...');
    
    // Initialize all components
    initPortfolio();
    
    function initPortfolio() {
        // 1. Initialize Loading Screen
        initLoadingScreen();
        
        // 2. Initialize Custom Cursor
        initCustomCursor();
        
        // 3. Initialize Typing Animation
        initTypingAnimation();
        
        // 4. Initialize Navigation
        initNavigation();
        
        // 5. Initialize Projects Section
        initProjectsSection();
        
        // 6. Initialize Skills Animation
        initSkillsAnimation();
        
        // 7. Initialize Contact Form
        initContactForm();
        
        // 8. Initialize Theme Toggle
        initThemeToggle();
        
        // 9. Initialize Back to Top
        initBackToTop();
        
        // 10. Initialize Scroll Animations
        initScrollAnimations();
        
        // 11. Initialize Counter Animations
        initCounterAnimations();
        
        // 12. Initialize Three.js Background
        initThreeJSBackground();
        
        // 13. Set Current Year
        document.getElementById('currentYear').textContent = new Date().getFullYear();
        
        console.log('✅ Portfolio initialized successfully!');
    }
    
    // ===== 1. LOADING SCREEN =====
    function initLoadingScreen() {
        const loadingTexts = [
            'Initializing systems...',
            'Loading components...',
            'Rendering graphics...',
            'Starting engines...',
            'Almost ready...'
        ];
        
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                
                // Hide loading screen after completion
                setTimeout(() => {
                    const loadingScreen = document.getElementById('loadingScreen');
                    loadingScreen.style.opacity = '0';
                    loadingScreen.style.pointerEvents = 'none';
                    
                    // Fire confetti
                    fireConfetti();
                }, 500);
            }
            
            document.getElementById('loadingProgress').style.width = `${progress}%`;
            
            // Update loading text
            const textIndex = Math.floor(progress / 20);
            if (textIndex < loadingTexts.length) {
                document.getElementById('loadingText').textContent = loadingTexts[textIndex];
            }
        }, 200);
    }
    
    // ===== 2. CUSTOM CURSOR =====
    function initCustomCursor() {
        const cursor = document.querySelector('.cursor');
        const follower = document.querySelector('.cursor-follower');
        
        if (!cursor || !follower) return;
        
        let mouseX = 0, mouseY = 0;
        let followerX = 0, followerY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            cursor.style.left = mouseX + 'px';
            cursor.style.top = mouseY + 'px';
        });
        
        function animate() {
            // Smooth follow for cursor follower
            followerX += (mouseX - followerX) * 0.1;
            followerY += (mouseY - followerY) * 0.1;
            
            follower.style.left = followerX + 'px';
            follower.style.top = followerY + 'px';
            
            requestAnimationFrame(animate);
        }
        
        animate();
        
        // Hover effects
        const hoverElements = document.querySelectorAll('a, button, .project-card, .skill-tag');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(1.5)';
                follower.style.transform = 'scale(1.2)';
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                follower.style.transform = 'scale(1)';
            });
        });
    }
    
    // ===== 3. TYPING ANIMATION =====
    function initTypingAnimation() {
        const typingElement = document.getElementById('typingText');
        if (!typingElement) return;
        
        const texts = [
            'Full-Stack Developer',
            'React.js Expert',
            'Node.js Specialist',
            'Cloud Engineer',
            'Problem Solver',
            'Tech Innovator'
        ];
        
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;
        
        function type() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                typingElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }
            
            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                typingSpeed = 1500; // Pause at end
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typingSpeed = 500; // Pause before typing next
            }
            
            setTimeout(type, typingSpeed);
        }
        
        // Start typing animation
        setTimeout(type, 1000);
    }
    
    // ===== 4. NAVIGATION =====
    function initNavigation() {
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const navItems = document.querySelectorAll('.nav-item, .mobile-nav-item');
        
        if (!mobileMenuBtn || !mobileMenu) return;
        
        // Mobile menu toggle
        mobileMenuBtn.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.contains('opacity-100');
            
            if (isOpen) {
                mobileMenu.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
                mobileMenu.classList.add('opacity-0', 'pointer-events-none', '-translate-y-2');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars text-primary text-xl"></i>';
            } else {
                mobileMenu.classList.remove('opacity-0', 'pointer-events-none', '-translate-y-2');
                mobileMenu.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
                mobileMenuBtn.innerHTML = '<i class="fas fa-times text-primary text-xl"></i>';
            }
        });
        
        // Smooth scroll for nav items
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = item.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Close mobile menu if open
                    mobileMenu.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
                    mobileMenu.classList.add('opacity-0', 'pointer-events-none', '-translate-y-2');
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars text-primary text-xl"></i>';
                    
                    // Smooth scroll
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Navbar background on scroll
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (navbar) {
                if (window.scrollY > 100) {
                    navbar.classList.add('bg-dark/90', 'shadow-lg');
                } else {
                    navbar.classList.remove('bg-dark/90', 'shadow-lg');
                }
            }
        });
        
        // Download CV buttons
        document.querySelectorAll('#downloadCV, #downloadCVMobile').forEach(btn => {
            btn.addEventListener('click', () => {
                downloadCV();
            });
        });
    }
    
    // ===== 5. PROJECTS SECTION =====
    function initProjectsSection() {
        const projectsGrid = document.getElementById('projectsGrid');
        const filterButtons = document.querySelectorAll('.project-filter-btn');
        
        if (!projectsGrid) return;
        
        // Render all projects initially
        renderProjects('all');
        
        // Filter functionality
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Filter projects
                const filter = button.dataset.filter;
                renderProjects(filter);
                
                // Update project counter
                updateProjectCounter(filter);
            });
        });
        
        function renderProjects(filter) {
            let projectsToRender = PROJECTS_DATA.projects;
            
            if (filter !== 'all') {
                projectsToRender = PROJECTS_DATA.projects.filter(project => 
                    project.category.includes(filter)
                );
            }
            
            projectsGrid.innerHTML = projectsToRender.map(project => 
                PROJECTS_DATA.createProjectCard(project)
            ).join('');
            
            // Add hover effects to new project cards
            addProjectHoverEffects();
        }
        
        function addProjectHoverEffects() {
            const projectCards = document.querySelectorAll('.project-card');
            projectCards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    card.style.transform = 'translateY(-10px)';
                });
                
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'translateY(0)';
                });
            });
        }
        
        function updateProjectCounter(filter) {
            const counter = document.querySelector('.project-counter');
            if (!counter) return;
            
            const count = filter === 'all' ? 15 : 
                PROJECTS_DATA.projects.filter(p => p.category.includes(filter)).length;
            
            animateCounter(counter, count);
        }
    }
    
    // ===== 6. SKILLS ANIMATION =====
    function initSkillsAnimation() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        // Create Intersection Observer for skill bars
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const width = bar.style.width || '0%';
                    
                    // Animate from 0 to target width
                    bar.style.width = '0%';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                    
                    observer.unobserve(bar);
                }
            });
        }, { threshold: 0.5 });
        
        skillBars.forEach(bar => observer.observe(bar));
        
        // Skill tags interaction
        const skillTags = document.querySelectorAll('.skill-tag');
        skillTags.forEach(tag => {
            tag.addEventListener('click', () => {
                const skill = tag.textContent;
                filterProjectsBySkill(skill);
            });
        });
        
        function filterProjectsBySkill(skill) {
            const matchingProjects = PROJECTS_DATA.projects.filter(project =>
                project.technologies.some(tech => 
                    tech.toLowerCase().includes(skill.toLowerCase())
                )
            );
            
            if (matchingProjects.length > 0) {
                // Show notification
                showNotification(`Found ${matchingProjects.length} projects with ${skill}`, 'info');
                
                // Filter projects
                const projectsGrid = document.getElementById('projectsGrid');
                projectsGrid.innerHTML = matchingProjects.map(project => 
                    PROJECTS_DATA.createProjectCard(project)
                ).join('');
                
                // Update filter buttons
                document.querySelectorAll('.project-filter-btn').forEach(btn => {
                    btn.classList.remove('active');
                    if (btn.dataset.filter === 'all') {
                        btn.classList.add('active');
                    }
                });
            }
        }
    }
    
    // ===== 7. CONTACT FORM =====
    function initContactForm() {
        const form = document.getElementById('contactForm');
        if (!form) return;
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = form.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            
            // Show loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                // Show success
                submitBtn.innerHTML = '<i class="fas fa-check mr-2"></i>Message Sent!';
                submitBtn.classList.remove('from-primary', 'to-secondary');
                submitBtn.classList.add('from-green-500', 'to-green-600');
                
                // Fire confetti
                fireConfetti();
                
                // Show success notification
                showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                
                // Reset form after 3 seconds
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.classList.remove('from-green-500', 'to-green-600');
                    submitBtn.classList.add('from-primary', 'to-secondary');
                    submitBtn.disabled = false;
                    form.reset();
                }, 3000);
            }, 1500);
        });
    }
    
    // ===== 8. THEME TOGGLE =====
    function initThemeToggle() {
        const themeToggles = document.querySelectorAll('#themeToggle, #themeToggleMobile');
        
        // Load saved theme
        const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
        if (savedTheme === 'light') {
            document.body.classList.add('light-theme');
            themeToggles.forEach(toggle => {
                const icon = toggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-moon');
                    icon.classList.add('fa-sun');
                }
            });
        }
        
        themeToggles.forEach(toggle => {
            toggle.addEventListener('click', () => {
                document.body.classList.toggle('light-theme');
                
                // Update icon
                const icons = document.querySelectorAll('#themeToggle i, #themeToggleMobile i');
                icons.forEach(icon => {
                    icon.classList.toggle('fa-moon');
                    icon.classList.toggle('fa-sun');
                });
                
                // Save theme preference
                const currentTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
                localStorage.setItem('portfolio-theme', currentTheme);
            });
        });
    }
    
    // ===== 9. BACK TO TOP =====
    function initBackToTop() {
        const backToTopBtn = document.getElementById('backToTop');
        
        if (!backToTopBtn) return;
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
                backToTopBtn.classList.add('opacity-100', 'pointer-events-auto');
            } else {
                backToTopBtn.classList.remove('opacity-100', 'pointer-events-auto');
                backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
            }
        });
        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // ===== 10. SCROLL ANIMATIONS =====
    function initScrollAnimations() {
        // Initialize GSAP ScrollTrigger
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
            
            // Animate elements on scroll
            gsap.utils.toArray('.animate-fade-in-up').forEach(el => {
                gsap.from(el, {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                });
            });
        }
        
        // Update active nav item on scroll
        const sections = document.querySelectorAll('section[id]');
        const navItems = document.querySelectorAll('.nav-item, .mobile-nav-item');
        
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (scrollY >= (sectionTop - 100)) {
                    current = section.getAttribute('id');
                }
            });
            
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${current}`) {
                    item.classList.add('active');
                }
            });
        });
    }
    
    // ===== 11. COUNTER ANIMATIONS =====
    function initCounterAnimations() {
        // Animate stats counters
        const statCounters = document.querySelectorAll('.stat-card div[data-count]');
        statCounters.forEach(counter => {
            animateCounter(counter, parseInt(counter.dataset.count));
        });
        
        // Animate project counter
        const projectCounter = document.querySelector('.project-counter');
        if (projectCounter) {
            animateCounter(projectCounter, parseInt(projectCounter.dataset.count));
        }
    }
    
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + (element.classList.contains('project-counter') ? '+' : '');
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 20);
    }
    
    // ===== 12. THREE.JS BACKGROUND =====
    function initThreeJSBackground() {
        try {
            const canvas = document.getElementById('three-bg');
            if (!canvas) return;
            
            // Check if Three.js is loaded
            if (typeof THREE === 'undefined') {
                console.warn('Three.js not loaded, skipping background animation');
                return;
            }
            
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ 
                canvas, 
                alpha: true, 
                antialias: true 
            });
            
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            
            // Create particles
            const particlesGeometry = new THREE.BufferGeometry();
            const particlesCount = 500;
            const posArray = new Float32Array(particlesCount * 3);
            
            for (let i = 0; i < particlesCount * 3; i++) {
                posArray[i] = (Math.random() - 0.5) * 10;
            }
            
            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
            
            const particlesMaterial = new THREE.PointsMaterial({
                size: 0.02,
                color: 0x3b82f6,
                transparent: true,
                opacity: 0.6
            });
            
            const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
            scene.add(particlesMesh);
            
            camera.position.z = 5;
            
            // Animation
            function animate() {
                requestAnimationFrame(animate);
                
                particlesMesh.rotation.x += 0.0005;
                particlesMesh.rotation.y += 0.001;
                
                renderer.render(scene, camera);
            }
            
            animate();
            
            // Handle resize
            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });
        } catch (error) {
            console.warn('Three.js background failed to initialize:', error);
        }
    }
    
    // ===== UTILITY FUNCTIONS =====
    function fireConfetti() {
        if (typeof confetti === 'function') {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }
    }
    
    function showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 px-6 py-3 rounded-lg glass-effect border-l-4 ${
            type === 'success' ? 'border-green-500' : 'border-blue-500'
        } z-50 transform translate-x-full transition-transform duration-300`;
        notification.innerHTML = `
            <div class="flex items-center">
                <i class="fas fa-${type === 'success' ? 'check' : 'info'} mr-3 ${
            type === 'success' ? 'text-green-500' : 'text-blue-500'
        }"></i>
                <span>${message}</span>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
    
    function downloadCV() {
        // Create download modal
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/70';
        modal.innerHTML = `
            <div class="bg-gray-900 rounded-2xl p-8 max-w-md w-full mx-4">
                <h3 class="text-2xl font-bold mb-6">Download Resume</h3>
                <div class="space-y-4 mb-8">
                    <button class="cv-format-btn w-full p-4 rounded-xl bg-primary/20 text-primary font-bold hover:bg-primary/30 transition-colors">
                        <i class="fas fa-file-pdf text-2xl mb-2"></i>
                        <div>PDF Format (Recommended)</div>
                    </button>
                    <button class="cv-format-btn w-full p-4 rounded-xl bg-secondary/20 text-secondary font-bold hover:bg-secondary/30 transition-colors">
                        <i class="fas fa-file-word text-2xl mb-2"></i>
                        <div>DOC Format</div>
                    </button>
                </div>
                <button class="close-modal w-full py-3 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors">
                    Cancel
                </button>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Event listeners for modal
        modal.querySelector('.close-modal').addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        
        modal.querySelectorAll('.cv-format-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                // Create a fake download link
                const link = document.createElement('a');
                link.href = '#';
                link.download = 'Sandeep-Singh-Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                // Close modal
                document.body.removeChild(modal);
                
                // Show success message
                showNotification('Resume downloaded successfully!', 'success');
            });
        });
        
        // Close modal on outside click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
    }
});
