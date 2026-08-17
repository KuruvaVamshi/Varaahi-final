// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

let lenis;

// 1. Initialize Lenis (Smooth Scrolling)
function initLenis() {
    if (lenis) lenis.destroy();
    
    lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0, 0);
}

// 2. Initialize All Animations & Interactions
function initAnimations() {
    // A. Navbar Scroll Reaction
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.removeEventListener('scroll', handleNavScroll);
        window.addEventListener('scroll', handleNavScroll);
        handleNavScroll(); // Trigger immediately
    }

    function handleNavScroll() {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // B. Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (mobileToggle && navLinks) {
        mobileToggle.onclick = () => {
            navLinks.classList.toggle('open');
        };
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.onclick = () => navLinks.classList.remove('open');
        });
    }

    // C. Hero Animations
    if (document.querySelector('.hero-content')) {
        const tlHero = gsap.timeline({ delay: 0.3 });
        tlHero.fromTo('.hero-eyebrow', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' })
              .fromTo('.hero-heading', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out' }, '-=0.6')
              .fromTo('.hero-subheading', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, '-=0.7')
              .fromTo('.hero-actions', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6');
    }

    // D. Generic Staggered Reveals (.gs-reveal)
    gsap.utils.toArray('.gs-reveal').forEach(elem => {
        gsap.fromTo(elem, 
            { opacity: 0, y: 35 },
            {
                scrollTrigger: {
                    trigger: elem,
                    start: 'top 88%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.9,
                ease: 'power3.out'
            }
        );
    });

    // E. Curtain Zoom-Through
    const zoomFrame = document.querySelector('.zoom-window-frame');
    const zoomImg = document.querySelector('.zoom-inner-img');
    if (zoomFrame && zoomImg) {
        gsap.to(zoomFrame, {
            width: '100%',
            height: '90vh',
            borderRadius: '0px',
            ease: 'none',
            scrollTrigger: {
                trigger: '.curtain-zoom-section',
                start: 'top 80%',
                end: 'center center',
                scrub: true
            }
        });

        gsap.to(zoomImg, {
            scale: 1.0,
            ease: 'none',
            scrollTrigger: {
                trigger: '.curtain-zoom-section',
                start: 'top 80%',
                end: 'bottom top',
                scrub: true
            }
        });
    }

    // F. Greensiri Stacking Project Cards Animation
    const stackCards = gsap.utils.toArray('.stack-card');
    if (stackCards.length > 0) {
        stackCards.forEach((card, i) => {
            if (i < stackCards.length - 1) {
                gsap.to(card, {
                    scale: 0.95,
                    opacity: 0.7,
                    scrollTrigger: {
                        trigger: stackCards[i + 1],
                        start: 'top 200px',
                        end: 'top 100px',
                        scrub: true
                    }
                });
            }
        });
    }

    // G. Interactive Masterplan Hotspots
    const hotspotPins = document.querySelectorAll('.hotspot-pin');
    hotspotPins.forEach(pin => {
        pin.addEventListener('click', (e) => {
            e.stopPropagation();
            hotspotPins.forEach(p => { if (p !== pin) p.classList.remove('active'); });
            pin.classList.toggle('active');
        });
    });
    document.addEventListener('click', () => {
        hotspotPins.forEach(p => p.classList.remove('active'));
    });

    // H. INNOVATIVE 5-PILLAR ARCHITECTURAL CONSOLE
    const pillarButtons = document.querySelectorAll('.pillar-tab-btn');
    const pillarPanels = document.querySelectorAll('.pillar-stage-panel');
    
    if (pillarButtons.length > 0 && pillarPanels.length > 0) {
        pillarButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetTabId = btn.getAttribute('data-tab');
                
                // Set active states on buttons
                pillarButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Crossfade to target panel
                pillarPanels.forEach(panel => {
                    if (panel.id === targetTabId) {
                        panel.classList.add('active');
                        gsap.fromTo(panel, 
                            { opacity: 0, y: 12 },
                            { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }
                        );
                    } else {
                        panel.classList.remove('active');
                    }
                });
            });
        });
    }

    // I. 3D PERSPECTIVE TILT FOR SPECIFICATION CARDS
    const tiltCards = document.querySelectorAll('.standard-card-3d');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });

    // J. Panoramic Parallax Shift (all instances)
    gsap.utils.toArray('.panoramic-bg-img').forEach(panoImg => {
        gsap.to(panoImg, {
            y: '10%',
            ease: 'none',
            scrollTrigger: {
                trigger: panoImg.closest('.panoramic-break'),
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });

    // K. Numerical Stats Counter
    gsap.utils.toArray('.stat-num-val').forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target') || '0', 10);
        gsap.to(stat, {
            innerHTML: target,
            duration: 2.2,
            snap: { innerHTML: 1 },
            ease: 'power2.out',
            scrollTrigger: {
                trigger: stat,
                start: 'top 90%',
                toggleActions: 'play none none none'
            }
        });
    });

    // L. FAQ Accordion Interaction
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        if (question && answer) {
            question.onclick = () => {
                const isActive = item.classList.contains('active');
                
                // Close other items
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                    const otherAns = otherItem.querySelector('.faq-answer');
                    if (otherAns) otherAns.style.maxHeight = null;
                });

                if (!isActive) {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                }
            };
        }
    });

    // M. HEAVY SCROLL ANIMATIONS - Staggered reveals on office cards
    gsap.utils.toArray('.contact-office-card').forEach((card, i) => {
        gsap.fromTo(card,
            { opacity: 0, x: -40 },
            {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                x: 0,
                duration: 0.8,
                delay: i * 0.15,
                ease: 'power3.out'
            }
        );
    });

    // N. Social icons stagger
    gsap.utils.toArray('.social-icon-link').forEach((icon, i) => {
        gsap.fromTo(icon,
            { opacity: 0, y: 20, scale: 0.8 },
            {
                scrollTrigger: {
                    trigger: icon.parentElement,
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.5,
                delay: i * 0.08,
                ease: 'back.out(1.7)'
            }
        );
    });

    // O. Split-story images parallax
    gsap.utils.toArray('.main-story-img').forEach(img => {
        gsap.fromTo(img,
            { scale: 1.08 },
            {
                scale: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: img.closest('.split-story-section'),
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            }
        );
    });

    // P. Stats boxes stagger bounce
    gsap.utils.toArray('.stat-box').forEach((box, i) => {
        gsap.fromTo(box,
            { opacity: 0, y: 40, scale: 0.9 },
            {
                scrollTrigger: {
                    trigger: box.parentElement,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.7,
                delay: i * 0.1,
                ease: 'back.out(1.4)'
            }
        );
    });

    // Q. Contact form elements stagger
    gsap.utils.toArray('.form-group').forEach((fg, i) => {
        gsap.fromTo(fg,
            { opacity: 0, y: 20 },
            {
                scrollTrigger: {
                    trigger: fg.closest('.contact-form-box') || fg,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.5,
                delay: i * 0.07,
                ease: 'power2.out'
            }
        );
    });

    // R. CTA banner background parallax
    gsap.utils.toArray('.cta-bg').forEach(ctaBg => {
        gsap.to(ctaBg, {
            y: '8%',
            ease: 'none',
            scrollTrigger: {
                trigger: ctaBg.closest('.cta-banner'),
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });

    // S. Hero background slow zoom on load
    gsap.utils.toArray('.hero-bg-img').forEach(heroImg => {
        gsap.to(heroImg, {
            scale: 1,
            duration: 6,
            ease: 'power1.out'
        });
    });

    // T. Scroll indicator fade out on scroll
    const scrollIndicator = document.querySelector('.hero-scroll-indicator');
    if (scrollIndicator) {
        gsap.to(scrollIndicator, {
            opacity: 0,
            y: -10,
            scrollTrigger: {
                trigger: 'body',
                start: '80px top',
                end: '200px top',
                scrub: true
            }
        });
    }
}

// 3. Barba.js Page Transitions
function initBarba() {
    barba.init({
        sync: true,
        transitions: [{
            name: 'luxury-fade-wipe',
            leave(data) {
                return gsap.to('.transition-wipe', {
                    duration: 0.5,
                    height: '100%',
                    top: '0%',
                    ease: 'power3.inOut'
                });
            },
            enter(data) {
                if (lenis) lenis.scrollTo(0, { immediate: true });
                else window.scrollTo(0, 0);

                return gsap.to('.transition-wipe', {
                    duration: 0.5,
                    height: '0%',
                    top: '100%',
                    ease: 'power3.inOut',
                    onComplete: () => {
                        gsap.set('.transition-wipe', { height: '0%', top: '0%' });
                    }
                });
            }
        }],
        views: [
            { namespace: 'home', afterEnter() { reinitAll(); } },
            { namespace: 'projects', afterEnter() { reinitAll(); } },
            { namespace: 'about', afterEnter() { reinitAll(); } },
            { namespace: 'quality', afterEnter() { reinitAll(); } },
            { namespace: 'approvals', afterEnter() { reinitAll(); } },
            { namespace: 'contact', afterEnter() { reinitAll(); } }
        ]
    });

    barba.hooks.before(() => {
        ScrollTrigger.getAll().forEach(t => t.kill());
    });
}

function reinitAll() {
    initAnimations();
    setTimeout(() => {
        ScrollTrigger.refresh();
    }, 150);
}

// 4. Initial Launch
document.addEventListener('DOMContentLoaded', () => {
    initLenis();
    reinitAll();
    initBarba();
});

window.addEventListener('load', () => {
    ScrollTrigger.refresh();
});
