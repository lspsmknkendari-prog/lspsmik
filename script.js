    // Toggle Mobile Menu
    function toggleMenu() {
        const menu = document.getElementById('navMenu');
        menu.classList.toggle('active');
    }

    // Login Modal
    function openLogin() {
        document.getElementById('loginOverlay').classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLogin() {
        document.getElementById('loginOverlay').classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Close login on overlay click
    document.getElementById('loginOverlay').addEventListener('click', function(e) {
        if (e.target === this) {
            closeLogin();
        }
    });

    // Scroll to Top
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        const btn = document.getElementById('scrollTop');
        if (window.scrollY > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    // Active nav link on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-menu a:not(.btn-login)');

        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('navMenu').classList.remove('active');
        });
    });