// ============================================
// APPLE-AUTHENTIC PORTFOLIO - JAVASCRIPT
// Subtle Animations & Refined Interactions
// ============================================

document.addEventListener('DOMContentLoaded', function () {

    // ============================================
    // STICKY NAVIGATION WITH BLUR
    // ============================================

    const navbar = document.getElementById('navbar');

    function handleNavScroll() {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 44) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleNavScroll, { passive: true });


    // ============================================
    // SMOOTH SCROLL FOR NAVIGATION LINKS
    // ============================================

    const navLinks = document.querySelectorAll('.nav-links a, .hero-scroll');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (!targetId || !targetId.startsWith('#')) return;

            e.preventDefault();
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const navHeight = navbar.offsetHeight;
                const offsetTop = targetSection.offsetTop - navHeight;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });


    // ============================================
    // SCROLL-TRIGGERED FADE-IN ANIMATIONS (SUBTLE)
    // ============================================

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -80px 0px'
    };

    const fadeInElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Subtle staggered delay - barely noticeable
                const delay = (index % 3) * 60;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeInElements.forEach(element => {
        observer.observe(element);
    });


    // ============================================
    // PROJECT CARDS - GENTLE HOVER (NO 3D TILT)
    // ============================================

    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transition = 'transform 0.5s cubic-bezier(0.28, 0.11, 0.32, 1)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    });


    // ============================================
    // EXPERIENCE CARDS - MINIMAL ANIMATION
    // ============================================

    const experienceCards = document.querySelectorAll('.experience-card');

    const experienceObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 120);

                experienceObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    experienceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(8px)';
        card.style.transition = 'all 1.2s cubic-bezier(0.28, 0.11, 0.32, 1)';
        experienceObserver.observe(card);
    });


    // ============================================
    // SKILL ITEMS - GENTLE CASCADE
    // ============================================

    const skillCategories = document.querySelectorAll('.skill-category');

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillItems = entry.target.querySelectorAll('.skill-item');

                skillItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                    }, index * 50);
                });

                skillObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    skillCategories.forEach(category => {
        const skillItems = category.querySelectorAll('.skill-item');
        skillItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-8px)';
            item.style.transition = 'all 0.8s cubic-bezier(0.28, 0.11, 0.32, 1)';
        });
        skillObserver.observe(category);
    });


    // ============================================
    // ACTIVE NAVIGATION LINK (SUBTLE)
    // ============================================

    const sections = document.querySelectorAll('section[id]');

    function highlightNavigation() {
        const scrollY = window.scrollY + 120;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                if (navLink) {
                    document.querySelectorAll('.nav-links a').forEach(link => {
                        link.style.opacity = '0.8';
                        link.style.fontWeight = '400';
                    });
                    navLink.style.opacity = '1';
                    navLink.style.fontWeight = '500';
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation, { passive: true });


    // ============================================
    // SMOOTH PAGE LOAD
    // ============================================

    console.log('%c✨ Designed with precision',
        'color: #0066CC; font-size: 14px; font-weight: 500; padding: 8px;');
    console.log('%cVishnupriyan — iOS Engineer',
        'color: #86868B; font-size: 12px; padding: 4px;');

});

// ============================================
// FADE IN BODY ON LOAD
// ============================================

window.addEventListener('load', function () {
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.4s ease-in';
