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
        const navMenu = document.querySelector('.nav-menu'); // Keep for desktop, though its 'active' state is CSS-driven by screen size
        const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');

        hamburger.addEventListener('click', () => {
            mobileNavOverlay.classList.toggle('active');
            hamburger.textContent = mobileNavOverlay.classList.contains('active') ? '✕' : '☰';
            if (mobileNavOverlay.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });

        // Close mobile menu when a link is clicked
        document.querySelectorAll('.mobile-nav-items a').forEach(link => {
            link.addEventListener('click', () => {
                mobileNavOverlay.classList.remove('active');
                hamburger.textContent = '☰';
                document.body.style.overflow = 'auto';
            });
        });

        // Original desktop menu link click listener (if it's still needed for any specific desktop behavior)
        // For this task, we are primarily concerned with the mobile menu.
        // If the '.nav-menu a' listener caused issues or was purely for a mobile-like dropdown on desktop,
        // it might need adjustment. Assuming it's fine or handled by CSS for desktop.
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                // This code originally closed the '.nav-menu' (desktop menu).
                // If '.nav-menu' is always visible on desktop and not a dropdown,
                // this specific part might not have a visible effect on desktop anymore.
                // However, if it's for SPA navigation or similar, it might still be relevant.
                // For now, let's ensure it doesn't interfere with the mobile overlay.
                // If navMenu can also be 'active' on desktop for some reason, ensure it's closed.
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    // Only reset hamburger if mobile is not also active (edge case)
                    if (!mobileNavOverlay.classList.contains('active')) {
                        hamburger.textContent = '☰';
                    }
                }
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