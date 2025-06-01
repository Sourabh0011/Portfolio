// Create Stars for Background
        function createStars() {
            const starsContainer = document.querySelector('.stars');
            const numStars = 100;
            for (let i = 0; i < numStars; i++) {
                const star = document.createElement('div');
                star.classList.add('star');
                star.style.width = `${Math.random() * 3 + 1}px`;
                star.style.height = star.style.width;
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 100}%`;
                star.style.animationDelay = `${Math.random() * 3}s`;
                starsContainer.appendChild(star);
            }
        }
        createStars();

        // Particles.js Initialization
        particlesJS('particles', {
            particles: {
                number: { value: 60, density: { enable: true, value_area: 800 } },
                color: { value: '#00ff88' },
                shape: { type: 'circle' },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: '#00ff88', opacity: 0.4, width: 1 },
                move: { enable: true, speed: 2, direction: 'none', random: true }
            },
            interactivity: {
                detect_on: 'canvas',
                events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, ontouchstart: { enable: true, mode: 'repulse' } },
                modes: { repulse: { distance: 100 }, push: { particles_nb: 4 } }
            },
            retina_detect: true
        });

        // Typing Animation
        const texts = ['Full Stack Web Developer', 'UI/UX Enthusiast', 'Creative Coder'];
        let index = 0;
        let charIndex = 0;
        let currentText = '';
        let isDeleting = false;
        const typingElement = document.querySelector('.typing');

        function type() {
            if (index >= texts.length) index = 0;
            currentText = texts[index];

            if (!isDeleting) {
                typingElement.textContent = currentText.slice(0, charIndex++);
                if (charIndex > currentText.length) {
                    isDeleting = true;
                    setTimeout(type, 1000);
                } else {
                    setTimeout(type, 100);
                }
            } else {
                typingElement.textContent = currentText.slice(0, charIndex--);
                if (charIndex < 0) {
                    isDeleting = false;
                    index++;
                    setTimeout(type, 500);
                } else {
                    setTimeout(type, 50);
                }
            }
        }

        type();

        // Scroll Animation Trigger
        const fadeElements = document.querySelectorAll('.fade-in');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationDelay = '0.2s';
                    entry.target.style.opacity = '1';
                }
            });
        }, { threshold: 0.2 });

        fadeElements.forEach(el => observer.observe(el));

        // Form Submission (Placeholder)
        document.querySelector('.contact-form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Form submitted! (This is a placeholder action)');
        });

        // Touch Support for Qualification Cards
        document.querySelectorAll('.qualification-card').forEach(card => {
            card.addEventListener('touchstart', () => {
                card.querySelector('.qualification-inner').style.transform = 'rotateY(180deg)';
            });
            card.addEventListener('touchend', () => {
                setTimeout(() => {
                    card.querySelector('.qualification-inner').style.transform = 'rotateY(0deg)';
                }, 1000);
            });
        });

        // Hamburger Menu Toggle
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
        });

        // Close menu when a link is clicked
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.textContent = '☰';
            });
        });

        // Popup Functionality
        const projectCards = document.querySelectorAll('.project-card');
        const popupOverlay = document.querySelector('.popup-overlay');
        const popup = document.querySelector('.popup');
        const popupImage = document.querySelector('.popup-image');
        const popupTitle = document.querySelector('.popup-title');
        const popupDescription = document.querySelector('.popup-description');
        const popupLink = document.querySelector('.view-project');
        const popupClose = document.querySelector('.popup-close');

        projectCards.forEach(card => {
            card.addEventListener('click', () => {
                popupImage.src = card.dataset.image;
                popupTitle.textContent = card.dataset.title;
                popupDescription.textContent = card.dataset.description;
                popupLink.href = card.dataset.link;
                popupOverlay.style.display = 'flex';
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            });
        });

        popupClose.addEventListener('click', () => {
            popupOverlay.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        });

        popupOverlay.addEventListener('click', (e) => {
            if (e.target === popupOverlay) {
                popupOverlay.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });