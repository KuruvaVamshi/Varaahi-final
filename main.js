/**
 * VAARAAHI GROUP — MASTER LUXURY INTERACTION & ANIMATION ENGINE
 * Powered by Lenis, GSAP, Barba.js, and Spring Motion Physics
 */

// ================= 0. LUXURY WEB AUDIO SYNTHESIZER (DISABLED / MUTED) =================
class LuxuryAudioEngine {
    constructor() {
        this.ctx = null;
        this.enabled = false;
    }

    init() {}
    toggle() { return false; }
    playTap() {}
    playChime() {}
    playSolarShift() {}
    playCompassTick() {}
}
const SoundFX = new LuxuryAudioEngine();

// ================= 1. CENTRALIZED BLOG DATA STORE =================
const DEFAULT_BLOGS = [
    {
        id: 'blog-1',
        title: 'The Future of Sustainable Luxury Villas in South India',
        category: 'Sustainability',
        author: 'Ar. Rajesh Varma, Chief Design Strategist',
        date: 'August 12, 2026',
        readTime: '5 min read',
        status: 'Published',
        views: 1420,
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        excerpt: 'How Vaaraahi Group merges bioclimatic architecture, rainwater recharging, and solar micro-grids into luxury residential developments.',
        content: `
            <p>Modern luxury is undergoing a profound philosophical shift. Today's discerning homebuyers in Hyderabad and the Rayalaseema region no longer measure opulence solely by imported marble or expansive square footage—they look for longevity, ecological harmony, and thermal comfort.</p>
            <h3>Bioclimatic Orientation & Natural Ventilation</h3>
            <p>At Vaaraahi Group, every gated community masterplan begins with solar path and wind aerodynamic analysis. By orienting villas along the prevailing southwest-northeast wind corridors and utilizing high-thermal-mass terracotta cavity blocks, indoor temperatures remain 4°C to 6°C cooler than ambient outside temperatures.</p>
            <blockquote>"True luxury is not about isolating oneself from nature with artificial air conditioning; it is about designing architecture that breathes in harmony with its surroundings."</blockquote>
            <h3>Water Autonomy: Zero Waste Hydrology</h3>
            <p>Our developments incorporate deep subterranean percolation wells that capture 100% of rainwater runoff from rooftops and paved avenues. Dual-plumbing infrastructure channels treated greywater to lush native bio-gardens, ensuring lush landscapes even in peak summer months without depleting local aquifers.</p>
        `
    },
    {
        id: 'blog-2',
        title: 'Vaaraahi Grandeur: Milestone Handover & Engineering Inspection Report',
        category: 'Construction Updates',
        author: 'K. S. Rao, VP Engineering & Quality',
        date: 'July 28, 2026',
        readTime: '4 min read',
        status: 'Published',
        views: 2180,
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
        excerpt: 'Phase 1 duplex villas at Rayachoty achieve 100% zero-snag certification ahead of scheduled delivery.',
        content: `
            <p>We are thrilled to announce that Phase 1 at Vaaraahi Grandeur, Rayachoty has successfully completed its rigorous 300-point third-party structural audit. Over 45 families are preparing for their housewarming celebrations this quarter.</p>
            <h3>German Non-Destructive Concrete Testing</h3>
            <p>Every structural column and suspended slab was verified using ultrasonic pulse velocity (UPV) and rebound hammer tests. The concrete achieved an average compressive strength of M35, surpassing Indian Standard structural safety benchmarks by 18%.</p>
            <h3>Clear Title Governance & RERA Transparency</h3>
            <p>In accordance with our core commitment to complete transparency, all occupancy certificates, APF bank clearances, and individual unit survey records are available for instant review via our online customer portal.</p>
        `
    },
    {
        id: 'blog-3',
        title: 'Why Rayachoty and Proddatur are Emerging as South India’s Prime Growth Corridors',
        category: 'Industry Insights',
        author: 'Vaaraahi Research & Investment Desk',
        date: 'June 19, 2026',
        readTime: '6 min read',
        status: 'Published',
        views: 3490,
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
        excerpt: 'Infrastructure upgrades, multi-lane expressways, and high rental yields are driving unprecedented residential capital appreciation.',
        content: `
            <p>While metro tier-1 property prices have hit saturation plateaus, regional growth epicenters across Andhra Pradesh—particularly Proddatur, Jammalamadugu, and Rayachoty—are witnessing an unprecedented surge in demand for organized, luxury gated communities.</p>
            <h3>National Highway Connectivity & Industrial Corridors</h3>
            <p>The expansion of multi-lane arterial expressways connecting Kadapa, Bangalore, and Chennai has slashed logistics transit times by nearly 40%. Families and business owners are choosing to invest in spacious 4 BHK luxury duplex villas with resort-style clubhouse amenities rather than congested city apartments.</p>
            <h3>18.5% YoY Historical Appreciation</h3>
            <p>Data from local sub-registrar offices highlights consistent 15% to 22% annual land value increases along active bypass corridors. Early investors in organized gated projects like Vaaraahi Grandeur and Vaaraahi Elite Vistas enjoy dual advantages: secure capital appreciation and buoyant rental yields from regional medical and business professionals.</p>
        `
    },
    {
        id: 'blog-4',
        title: 'The Modern Vastu Matrix: Reconciling Vedic Directions with Contemporary Villa Geometry',
        category: 'Sustainability',
        author: 'Dr. S. N. Murthy, Vedic Architectural Consultant',
        date: 'May 30, 2026',
        readTime: '5 min read',
        status: 'Published',
        views: 1980,
        image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
        excerpt: 'How scientific geomancy, solar orientation, and spatial proportions enhance positive bio-rhythms in luxury duplex homes.',
        content: `
            <p>For centuries, Vastu Shastra has been misunderstood as a rigid set of superstitions. In reality, authentic Vedic geomancy is an empirical science that harmonizes solar azimuths, magnetic fields, and prevailing wind vectors to optimize human well-being.</p>
            <h3>Brahmasthan: The Heart of the Villa</h3>
            <p>In all Vaaraahi villa configurations, the central core (Brahmasthan) is kept open with double-height atriums or skylit clerestory glass, allowing unhindered air circulation and natural daylight to permeate every corner.</p>
            <h3>Master Bedroom & Northeast Water Sanctuaries</h3>
            <p>By positioning master suites in the Southwest (Earth quadrant) for psychological grounding and grounding water elements in the Northeast (Water/Ether quadrant), residents experience reduced acoustic stress and harmonious rest cycles.</p>
        `
    },
    {
        id: 'blog-5',
        title: 'Subterranean Aquifer Engineering: Achieving 100% Water Autonomy in Gated Communities',
        category: 'Construction Updates',
        author: 'Er. Vivek Chandran, Lead Hydrologist',
        date: 'May 14, 2026',
        readTime: '4 min read',
        status: 'Published',
        views: 2450,
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
        excerpt: 'Zero-discharge rainwater harvesting and dual-plumbing grids ensure perpetual water independence even in peak summer.',
        content: `
            <p>Water security is no longer an afterthought—it is the single most critical sustainability benchmark for modern real estate developments. At Vaaraahi Green Meadows and Grandeur, we implement self-sustaining closed-loop hydrological matrices.</p>
            <h3>Percolation Wells & Bio-Retention Swales</h3>
            <p>Every acre of community road and villa rooftop feeds into engineered gravel filtration shafts that recharge underlying water tables, replenishing over 80 million liters of pure groundwater annually.</p>
            <h3>Dual-Network Water Recycling</h3>
            <p>Advanced on-site STP units treat 100% of greywater to zero-odor tertiary standards, feeding automatic drip irrigation networks across 15,000+ native plants and avenue trees.</p>
        `
    },
    {
        id: 'blog-6',
        title: 'The NRI Homebuyer’s Due-Diligence Guide: 40-Year Legal Verification & APF Clearances',
        category: 'Industry Insights',
        author: 'Vaaraahi Legal & Compliance Cell',
        date: 'April 22, 2026',
        readTime: '7 min read',
        status: 'Published',
        views: 5210,
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
        excerpt: 'An exhaustive due-diligence master checklist for overseas buyers investing in Telangana and Andhra Pradesh real estate.',
        content: `
            <p>Investing in ancestral homeland real estate from the USA, UK, or GCC requires absolute peace of mind. Non-Resident Indians (NRIs) often struggle with opaque documentation, disputed survey numbers, and unauthorized layouts.</p>
            <h3>The 40-Year Title Search Protocol</h3>
            <p>Before breaking ground on any Vaaraahi enclave, our legal advocates conduct an unbroken 40-year pedigree search tracing genealogical descent, land conversion (NALA) orders, and registered sale deeds to ensure zero dispute vulnerability.</p>
            <h3>National Bank APF Certifications</h3>
            <p>Every Vaaraahi project holds pre-approved financial clearances (APF) from SBI, HDFC, and ICICI Bank, meaning institutional legal teams have independently vetted and approved every survey parcel.</p>
        `
    }
];

const BlogStore = {
    KEY: 'vaaraahi_blogs_v3',
    getAll() {
        try {
            const raw = localStorage.getItem(this.KEY);
            if (!raw) {
                this.saveAll(DEFAULT_BLOGS);
                return DEFAULT_BLOGS;
            }
            return JSON.parse(raw);
        } catch (e) {
            console.error('Error reading blog store:', e);
            return DEFAULT_BLOGS;
        }
    },
    saveAll(posts) {
        localStorage.setItem(this.KEY, JSON.stringify(posts));
    },
    getById(id) {
        return this.getAll().find(p => p.id === id);
    },
    add(post) {
        const posts = this.getAll();
        const newPost = {
            id: 'blog-' + Date.now(),
            views: 0,
            date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
            readTime: '4 min read',
            ...post
        };
        posts.unshift(newPost);
        this.saveAll(posts);
        return newPost;
    },
    update(id, updatedFields) {
        const posts = this.getAll();
        const index = posts.findIndex(p => p.id === id);
        if (index !== -1) {
            posts[index] = { ...posts[index], ...updatedFields };
            this.saveAll(posts);
            return posts[index];
        }
        return null;
    },
    delete(id) {
        let posts = this.getAll();
        posts = posts.filter(p => p.id !== id);
        this.saveAll(posts);
        return true;
    }
};

// ================= 2. TOAST NOTIFICATION ENGINE =================
function showToast(message) {
    let toast = document.getElementById('globalToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'globalToast';
        toast.className = 'toast-notice';
        document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fas fa-check-circle" style="color: var(--color-gold);"></i> ${message}`;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

// ================= 3. LENIS SMOOTH SCROLL & PROGRESS BAR =================
let lenisInstance = null;

function initSmoothScroll() {
    // Top Scroll Progress Bar
    let progressBar = document.querySelector('.scroll-progress-bar');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress-bar';
        document.body.appendChild(progressBar);
    }

    const updateProgress = () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight > 0) {
            const progress = (window.scrollY / totalHeight) * 100;
            progressBar.style.width = `${progress}%`;
        }
    };
    window.addEventListener('scroll', updateProgress, { passive: true });

    if (typeof Lenis !== 'undefined') {
        try {
            if (lenisInstance) lenisInstance.destroy();
            lenisInstance = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                direction: 'vertical',
                smooth: true,
                smoothTouch: false,
                touchMultiplier: 1.8
            });

            function raf(time) {
                lenisInstance.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);

            if (typeof ScrollTrigger !== 'undefined' && typeof gsap !== 'undefined') {
                lenisInstance.on('scroll', ScrollTrigger.update);
                gsap.ticker.lagSmoothing(0, 0);
            }
        } catch (err) {
            console.warn('Lenis initialization note:', err);
        }
    }

    // Smooth Anchor Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    if (lenisInstance) {
                        lenisInstance.scrollTo(target, { offset: -80 });
                    } else {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            }
        });
    });
}

// ================= 4. LUXURY CUSTOM CURSOR & FOLLOWER =================
function initCustomCursor() {
    // Only initialize on devices with mouse pointer
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let dot = document.querySelector('.lux-cursor');
    let follower = document.querySelector('.lux-follower');

    if (!dot) {
        dot = document.createElement('div');
        dot.className = 'lux-cursor';
        document.body.appendChild(dot);
    }
    if (!follower) {
        follower = document.createElement('div');
        follower.className = 'lux-follower';
        document.body.appendChild(follower);
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let followerX = mouseX;
    let followerY = mouseY;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    });

    const renderFollower = () => {
        // Spring lerp interpolation
        followerX += (mouseX - followerX) * 0.15;
        followerY += (mouseY - followerY) * 0.15;
        follower.style.transform = `translate(${followerX}px, ${followerY}px) translate(-50%, -50%)`;
        requestAnimationFrame(renderFollower);
    };
    requestAnimationFrame(renderFollower);

    // Interactive Hover States
    const attachHoverEvents = () => {
        // Action targets
        document.querySelectorAll('a, button, .filter-select, .calc-range-slider, .before-after-handle, .bioclimatic-hotspot-pin, .radar-dest-card, .floorplan-tab-btn').forEach(elem => {
            elem.addEventListener('mouseenter', () => {
                const actionLabel = elem.getAttribute('data-cursor-action');
                if (actionLabel) {
                    follower.classList.add('hover-action');
                    follower.textContent = actionLabel;
                } else {
                    follower.classList.add('hover-link');
                    follower.textContent = '';
                }
            });
            elem.addEventListener('mouseleave', () => {
                follower.classList.remove('hover-action', 'hover-link');
                follower.textContent = '';
            });
        });
    };
    attachHoverEvents();
}

// ================= 5. GSAP ANIMATIONS, SPLIT TYPOGRAPHY & SPECULAR TILT =================
function initGSAPAnimations() {
    if (typeof gsap === 'undefined') return;
    if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);

    // Staggered Scroll Reveals
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

    // Numerical Stat Counters
    gsap.utils.toArray('.stat-num-val').forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target') || '0', 10);
        gsap.to(stat, {
            innerHTML: target,
            duration: 2.2,
            snap: { innerHTML: 1 },
            ease: 'power2.out',
            scrollTrigger: {
                trigger: stat,
                start: 'top 92%',
                toggleActions: 'play none none none'
            }
        });
    });

    // 3D Specular Light Card Tilt
    document.querySelectorAll('.specular-card, .amenity-card-3d, .standard-card-3d, .value-box-3d').forEach(card => {
        let glare = card.querySelector('.specular-glare');
        if (!glare) {
            glare = document.createElement('div');
            glare.className = 'specular-glare';
            card.appendChild(glare);
        }

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotX = ((y - centerY) / centerY) * -10;
            const rotY = ((x - centerX) / centerX) * 10;

            card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`;
            if (glare) {
                glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.25), transparent 70%)`;
            }
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });

    // Magnetic CTA Button Spring Physics
    document.querySelectorAll('.btn-luxury, .btn-luxury-outline, .nav-cta').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            gsap.to(btn, {
                x: x * 0.35,
                y: y * 0.35,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                x: 0,
                y: 0,
                duration: 0.6,
                ease: 'elastic.out(1, 0.4)'
            });
        });
    });
}

// ================= 6. INTERACTIVE REAL ESTATE ROI & MORTGAGE ARCHITECT =================
function initRoiMortgageCalculator() {
    const propSlider = document.getElementById('calcPropValue');
    const downSlider = document.getElementById('calcDownPayment');
    const tenureSlider = document.getElementById('calcTenure');
    const apprecSlider = document.getElementById('calcAppreciation');

    const propValDisplay = document.getElementById('dispPropValue');
    const downValDisplay = document.getElementById('dispDownPayment');
    const tenureValDisplay = document.getElementById('dispTenure');
    const apprecValDisplay = document.getElementById('dispAppreciation');

    const emiHeroVal = document.getElementById('calcHeroEmiVal');
    const heroLabel = document.getElementById('calcHeroStatLabel');
    const principalDisplay = document.getElementById('calcBreakdownPrincipal');
    const interestDisplay = document.getElementById('calcBreakdownInterest');
    const wealth5YrDisplay = document.getElementById('calcBreakdown5YrWealth');
    const wealth10YrDisplay = document.getElementById('calcBreakdown10YrWealth');

    const modeEmiBtn = document.getElementById('calcModeEmi');
    const modeRoiBtn = document.getElementById('calcModeRoi');

    if (!propSlider || !emiHeroVal) return;

    let currentMode = 'emi'; // 'emi' or 'roi'

    function calculate() {
        const propPrice = parseFloat(propSlider.value) * 100000; // in Lakhs to Rupees
        const downPercent = parseFloat(downSlider.value);
        const tenureYrs = parseFloat(tenureSlider.value);
        const apprecRate = parseFloat(apprecSlider ? apprecSlider.value : 9);

        const downPaymentAmt = (propPrice * downPercent) / 100;
        const loanAmt = propPrice - downPaymentAmt;
        const annualInterestRate = 8.5; // Benchmark home loan interest
        const monthlyRate = (annualInterestRate / 12) / 100;
        const totalMonths = tenureYrs * 12;

        // Standard EMI Formula: P * r * (1+r)^n / ((1+r)^n - 1)
        const emi = (loanAmt * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
        const totalPayable = emi * totalMonths;
        const totalInterest = totalPayable - loanAmt;

        // 5-Year & 10-Year Future Asset Value: P * (1 + r)^t
        const value5Yr = propPrice * Math.pow(1 + (apprecRate / 100), 5);
        const value10Yr = propPrice * Math.pow(1 + (apprecRate / 100), 10);

        // Update Slider Display Labels
        if (propValDisplay) propValDisplay.textContent = `₹${(propPrice / 100000).toFixed(0)} Lakhs`;
        if (downValDisplay) downValDisplay.textContent = `${downPercent}% (₹${(downPaymentAmt / 100000).toFixed(1)} L)`;
        if (tenureValDisplay) tenureValDisplay.textContent = `${tenureYrs} Years`;
        if (apprecValDisplay) apprecValDisplay.textContent = `${apprecRate}% p.a.`;

        // Update Calculated Stats
        if (currentMode === 'emi') {
            if (heroLabel) heroLabel.textContent = 'Estimated Monthly EMI';
            emiHeroVal.textContent = `₹${Math.round(emi).toLocaleString('en-IN')}`;
        } else {
            if (heroLabel) heroLabel.textContent = 'Projected 10-Year Asset Value';
            emiHeroVal.textContent = `₹${(value10Yr / 10000000).toFixed(2)} Crores`;
        }

        if (principalDisplay) principalDisplay.textContent = `₹${(loanAmt / 100000).toFixed(1)} Lakhs`;
        if (interestDisplay) interestDisplay.textContent = `₹${(totalInterest / 100000).toFixed(1)} Lakhs`;
        if (wealth5YrDisplay) wealth5YrDisplay.textContent = `₹${(value5Yr / 10000000).toFixed(2)} Cr (+₹${((value5Yr - propPrice) / 100000).toFixed(0)}L)`;
        if (wealth10YrDisplay) wealth10YrDisplay.textContent = `₹${(value10Yr / 10000000).toFixed(2)} Cr (+₹${((value10Yr - propPrice) / 100000).toFixed(0)}L)`;
    }

    [propSlider, downSlider, tenureSlider, apprecSlider].forEach(slider => {
        if (slider) slider.addEventListener('input', calculate);
    });

    if (modeEmiBtn && modeRoiBtn) {
        modeEmiBtn.addEventListener('click', () => {
            currentMode = 'emi';
            modeEmiBtn.classList.add('active');
            modeRoiBtn.classList.remove('active');
            calculate();
        });
        modeRoiBtn.addEventListener('click', () => {
            currentMode = 'roi';
            modeRoiBtn.classList.add('active');
            modeEmiBtn.classList.remove('active');
            calculate();
        });
    }

    calculate();
}

// ================= 7. INTERACTIVE 3D BIOCLIMATIC MATERIAL INSPECTOR =================
function initBioclimaticInspector() {
    const pins = document.querySelectorAll('.bioclimatic-hotspot-pin');
    const titleElem = document.getElementById('bioSpecTitle');
    const badgeElem = document.getElementById('bioSpecBadge');
    const descElem = document.getElementById('bioSpecDesc');
    const gaugeFill = document.getElementById('bioSpecGaugeFill');
    const gaugeLabel = document.getElementById('bioSpecGaugeLabel');
    const stat1Val = document.getElementById('bioStat1Val');
    const stat1Label = document.getElementById('bioStat1Label');
    const stat2Val = document.getElementById('bioStat2Val');
    const stat2Label = document.getElementById('bioStat2Label');
    const imgElem = document.getElementById('bioSpecImg');
    const certElem = document.getElementById('bioSpecCertTag');

    const SPECS_DATA = {
        'porotherm': {
            badge: 'Thermal Mass Cavity',
            title: 'Porotherm Terracotta Insulated Blocks',
            desc: 'Multi-chambered natural clay masonry creates thermal dead-air pockets, lowering indoor ambient temperatures by 5°C to 6°C without mechanical cooling.',
            img: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80',
            cert: 'ISO 9001 • IS 3952 Certified',
            gauge: '92%',
            gaugeText: 'Thermal Efficiency: 92% (U-Value: 0.8 W/m²K)',
            stat1: '5°C-6°C',
            stat1Label: 'Cooler Interiors',
            stat2: '45% Less',
            stat2Label: 'HVAC Energy Cost'
        },
        'steel': {
            badge: 'Earthquake Resilient',
            title: 'Fe-550D High-Ductility TMT Rebars',
            desc: 'Thermex-treated anti-corrosive steel with minimum 16% uniform elongation, designed to absorb high seismic flex and provide 100+ years of structural life.',
            img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
            cert: 'IS 1786:2008 • Fe-550D TMT',
            gauge: '98%',
            gaugeText: 'Yield Strength: 550 MPa (Seismic Zone III/IV Compliant)',
            stat1: 'Fe-550D',
            stat1Label: 'TMT Grade',
            stat2: '100+ Yrs',
            stat2Label: 'Corrosion Shield'
        },
        'concrete': {
            badge: 'Ultrasonic Verified',
            title: 'M35 Computerized Ready-Mix Concrete',
            desc: 'Every pour undergoes on-site Ultrasonic Pulse Velocity (UPV) and rebound hammer tests, guaranteeing zero voids and M35 compressive strength.',
            img: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
            cert: 'IS 456:2000 • M35 UPV Tested',
            gauge: '96%',
            gaugeText: 'Compressive Load: 35 N/mm² (Surpasses IS 456 by 18%)',
            stat1: 'M35 Grade',
            stat1Label: 'Lab Certified',
            stat2: '0.00%',
            stat2Label: 'Structural Voids'
        },
        'glazing': {
            badge: 'Acoustic & Solar Control',
            title: 'Double-Glazed Low-E UPVC Fenestration',
            desc: 'Argon-filled hermetically sealed double glazing blocks 82% of external acoustic traffic decibels and reflects infrared thermal solar radiation.',
            img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
            cert: 'EN 1279 • Low-E Argon Glazed',
            gauge: '88%',
            gaugeText: 'Acoustic Dampening: 38 dB (Low-E Solar Factor 0.32)',
            stat1: '38 dB',
            stat1Label: 'Noise Reduction',
            stat2: '82% Block',
            stat2Label: 'Solar Heat Gain'
        },
        'aquifer': {
            badge: 'Zero-Runoff Hydrology',
            title: 'Subterranean Percolation Recharging Wells',
            desc: 'Recharges 100% of rainwater runoff directly into deep underground aquifers through multi-stage silica and charcoal filtration beds.',
            img: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80',
            cert: 'CGWA Compliant • Silica Filtration',
            gauge: '100%',
            gaugeText: 'Recharging Capacity: 1.2M Litres / Household Annually',
            stat1: '100%',
            stat1Label: 'Zero Runoff',
            stat2: '1.2M Litres',
            stat2Label: 'Annual Aquifer Recharge'
        },
        'solar': {
            badge: 'Clean Renewable Microgrid',
            title: 'Rooftop Solar PV Micro-Generation',
            desc: 'High-efficiency monocrystalline solar panels with hybrid net-metering powering common area streetlights, clubhouse, and EV charging bays.',
            img: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
            cert: 'IEC 61215 • 5.5kW Tier-1 PV',
            gauge: '90%',
            gaugeText: 'Solar Autonomy: 85% - 95% Common Grid Independence',
            stat1: '5.5 kW',
            stat1Label: 'Micro-Grid Capacity',
            stat2: '3.8 Tons',
            stat2Label: 'CO2 Offset/Year'
        }
    };

    pins.forEach(pin => {
        pin.addEventListener('click', () => {
            pins.forEach(p => p.classList.remove('active'));
            pin.classList.add('active');

            const key = pin.getAttribute('data-spec');
            const data = SPECS_DATA[key];
            if (data && titleElem) {
                if (badgeElem) badgeElem.textContent = data.badge;
                titleElem.textContent = data.title;
                if (descElem) descElem.textContent = data.desc;
                if (imgElem && data.img) {
                    imgElem.style.opacity = '0';
                    setTimeout(() => {
                        imgElem.src = data.img;
                        imgElem.style.opacity = '1';
                    }, 150);
                }
                if (certElem && data.cert) {
                    certElem.innerHTML = `<i class="fas fa-certificate"></i> ${data.cert}`;
                }
                if (gaugeFill) gaugeFill.style.width = data.gauge;
                if (gaugeLabel) gaugeLabel.textContent = data.gaugeText;
                if (stat1Val) stat1Val.textContent = data.stat1;
                if (stat1Label) stat1Label.textContent = data.stat1Label;
                if (stat2Val) stat2Val.textContent = data.stat2;
                if (stat2Label) stat2Label.textContent = data.stat2Label;

                if (typeof gsap !== 'undefined') {
                    gsap.fromTo('#bioSpecPanel', { opacity: 0.7, y: 10 }, { opacity: 1, y: 0, duration: 0.3 });
                }
            }
        });
    });
}

// ================= 8. INTERACTIVE BEFORE / AFTER ARCHITECTURAL SLIDER =================
function initBeforeAfterSlider() {
    const containers = document.querySelectorAll('.before-after-container');
    containers.forEach(container => {
        const afterWrap = container.querySelector('.after-wrap');
        const handle = container.querySelector('.before-after-handle');
        if (!afterWrap || !handle) return;

        let isDragging = false;

        const updatePosition = (clientX) => {
            const rect = container.getBoundingClientRect();
            let x = clientX - rect.left;
            x = Math.max(0, Math.min(x, rect.width));
            const percentage = (x / rect.width) * 100;
            afterWrap.style.width = `${percentage}%`;
            handle.style.left = `${percentage}%`;
        };

        const onPointerDown = (e) => {
            isDragging = true;
            updatePosition(e.clientX || (e.touches && e.touches[0].clientX));
        };

        const onPointerMove = (e) => {
            if (!isDragging) return;
            updatePosition(e.clientX || (e.touches && e.touches[0].clientX));
        };

        const onPointerUp = () => {
            isDragging = false;
        };

        container.addEventListener('mousedown', onPointerDown);
        window.addEventListener('mousemove', onPointerMove);
        window.addEventListener('mouseup', onPointerUp);

        container.addEventListener('touchstart', onPointerDown, { passive: true });
        window.addEventListener('touchmove', onPointerMove, { passive: true });
        window.addEventListener('touchend', onPointerUp);
    });
}

// ================= 9. INTERACTIVE TRANSIT ROUTE & PROXIMITY HIGHWAY NAVIGATOR =================
function initTransitNavigator() {
    const hubPills = document.querySelectorAll('.transit-hub-pill');
    const waypoints = document.querySelectorAll('.transit-waypoint-marker');
    const quickPills = document.querySelectorAll('.dest-quick-pill');
    const movingBeacon = document.getElementById('transitMovingBeacon');

    const destImg = document.getElementById('transitDestImg');
    const destTimeBadge = document.getElementById('transitDestTimeBadge');
    const destDistBadge = document.getElementById('transitDestDistBadge');
    const destCategoryTag = document.getElementById('transitDestCategoryTag');
    const destTitle = document.getElementById('transitDestTitle');
    const destDesc = document.getElementById('transitDestDesc');
    const speedSpec = document.getElementById('transitSpeedSpec');
    const trafficSpec = document.getElementById('transitTrafficSpec');
    const coordReadout = document.getElementById('transitActiveCoordReadout');

    const DEST_DATA = {
        'origin': {
            title: 'Vaaraahi Residential Sanctuary',
            cat: 'Origin Sanctuary',
            time: '0 Mins (Home Base)',
            dist: '0 KM',
            speed: 'Community Speed: 20 km/h',
            traffic: 'Private Gated Enclave',
            desc: '40-Acre masterplanned bioclimatic sanctuary with 40% open green parks, underground utilities, and 24/7 security perimeter.',
            img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
            cx: 60, cy: 280,
            coords: 'GPS: 14.0153° N, 78.7554° E'
        },
        'expressway': {
            title: 'NH-44 4/6-Lane Super-Highway',
            cat: 'National Transit Corridor',
            time: '8 Mins Drive by Car',
            dist: '5.2 KM',
            speed: '90-110 km/h Design Speed',
            traffic: 'Zero-Congestion Interchange',
            desc: 'Direct grade-separated cloverleaf interchange connecting Vaaraahi Enclaves to the primary North-South Indian economic artery.',
            img: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80',
            cx: 224, cy: 165,
            coords: 'GPS: 14.0520° N, 78.7910° E'
        },
        'airport': {
            title: 'Rajiv Gandhi / Regional Kadapa Airport',
            cat: 'Aviation Gateway',
            time: '35 Mins Drive by Car',
            dist: '38 KM',
            speed: '80-100 km/h Expressway',
            traffic: 'Dedicated VIP Bypass Corridor',
            desc: 'Seamless direct airport access corridor with 0 toll delays, connecting frequent flyers to Mumbai, Bengaluru, and Chennai in under 60 minutes.',
            img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
            cx: 380, cy: 120,
            coords: 'GPS: 14.5090° N, 78.7725° E'
        },
        'itpark': {
            title: 'IT & FinTech Regional Tech Zone',
            cat: 'Employment Core',
            time: '22 Mins Drive by Car',
            dist: '19 KM',
            speed: '60-80 km/h Boulevard',
            traffic: 'Synchronized Smart Signals',
            desc: 'Fast commute to multinational tech campuses, research parks, and corporate office parks without city center traffic bottlenecks.',
            img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
            cx: 544, cy: 208,
            coords: 'GPS: 14.1840° N, 78.6920° E'
        },
        'hospital': {
            title: 'Multi-Specialty Health & Medical City',
            cat: 'Emergency Care',
            time: '12 Mins Drive by Car',
            dist: '9.4 KM',
            speed: '60-70 km/h Green Corridor',
            traffic: 'Priority Emergency Access',
            desc: 'Direct ambulance-priority boulevard to 500-bed super-specialty hospitals, trauma centers, and diagnostic institutes.',
            img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
            cx: 460, cy: 160,
            coords: 'GPS: 14.1200° N, 78.7100° E'
        },
        'metropolis': {
            title: 'Bengaluru / Tirupati Express Corridor',
            cat: 'Intercity Expressway',
            time: '60 Mins Drive by Car',
            dist: '72 KM',
            speed: '100-120 km/h High-Speed',
            traffic: 'Access-Controlled Expressway',
            desc: 'Scenic high-speed 6-lane expressway linking directly to Bangalore International Airport and Tirupati Pilgrimage hub.',
            img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80',
            cx: 740, cy: 160,
            coords: 'GPS: 13.9100° N, 78.8900° E'
        }
    };

    function selectDestination(key) {
        const data = DEST_DATA[key];
        if (!data) return;

        SoundFX.playTap();

        // Update waypoint pins
        waypoints.forEach(wp => {
            if (wp.getAttribute('data-dest') === key) {
                wp.classList.add('active');
            } else {
                wp.classList.remove('active');
            }
        });

        // Update quick pills
        quickPills.forEach(qp => {
            if (qp.getAttribute('data-dest') === key) {
                qp.classList.add('active');
            } else {
                qp.classList.remove('active');
            }
        });

        // Animate moving vehicle beacon
        if (movingBeacon) {
            if (typeof gsap !== 'undefined') {
                gsap.to(movingBeacon, {
                    attr: { cx: data.cx, cy: data.cy },
                    duration: 0.8,
                    ease: 'power2.out'
                });
            } else {
                movingBeacon.setAttribute('cx', data.cx);
                movingBeacon.setAttribute('cy', data.cy);
            }
        }

        // Update HUD Card Content with Smooth Fade
        const previewCard = document.getElementById('transitDestPreviewCard');
        if (previewCard && typeof gsap !== 'undefined') {
            gsap.fromTo(previewCard, { opacity: 0.7, y: 6 }, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' });
        }

        if (destImg) destImg.src = data.img;
        if (destTimeBadge) destTimeBadge.innerHTML = `<i class="fas fa-clock"></i> ${data.time}`;
        if (destDistBadge) destDistBadge.innerHTML = `<i class="fas fa-route"></i> ${data.dist}`;
        if (destCategoryTag) destCategoryTag.textContent = data.cat;
        if (destTitle) destTitle.textContent = data.title;
        if (destDesc) destDesc.textContent = data.desc;
        if (speedSpec) speedSpec.textContent = data.speed;
        if (trafficSpec) trafficSpec.textContent = data.traffic;
        if (coordReadout) coordReadout.textContent = data.coords;
    }

    // Attach click events
    waypoints.forEach(wp => {
        wp.addEventListener('click', () => {
            const destKey = wp.getAttribute('data-dest');
            selectDestination(destKey);
        });
    });

    quickPills.forEach(qp => {
        qp.addEventListener('click', () => {
            const destKey = qp.getAttribute('data-dest');
            selectDestination(destKey);
        });
    });

    hubPills.forEach(pill => {
        pill.addEventListener('click', () => {
            hubPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            SoundFX.playChime();
            const hubName = pill.textContent.trim();
            showToast(`Active Route Hub: ${hubName}`);
        });
    });
}

// ================= 10. INTERACTIVE 300-POINT ZERO-SNAG VERIFIER =================
function initZeroSnagVerifier() {
    const catBtns = document.querySelectorAll('.verifier-cat-btn');
    const checkGrid = document.getElementById('verifierChecksGrid');

    const AUDIT_CATEGORIES = {
        'structural': [
            { icon: 'fa-shield-alt', title: 'UPV Concrete Homogeneity', desc: 'Ultrasonic pulse velocity > 4.2 km/s across all load-bearing columns.' },
            { icon: 'fa-cubes', title: 'Fe-550D TMT Yield Strength', desc: 'Certified elongation and tensile tests against Indian Standard IS 1786.' },
            { icon: 'fa-layer-group', title: 'Sub-Soil Compaction Audit', desc: 'Standard penetration test (SPT) N-value verified by geotech engineers.' },
            { icon: 'fa-ruler-combined', title: '3D BIM Dimension Check', desc: 'Millimeter-precise room dimension and vertical plumb-line audit.' }
        ],
        'waterproofing': [
            { icon: 'fa-water', title: '72-Hour Terrace Ponding Test', desc: 'Terrace and sunken slabs submerged under 75mm water with 0% moisture seepage.' },
            { icon: 'fa-tint-slash', title: 'Elastomeric Polymer Membrane', desc: 'Dual-coat crystalline waterproofing over all wet areas and external balconies.' },
            { icon: 'fa-shower', title: 'High-Pressure Hydrostatic Line Test', desc: 'Plumbing lines tested at 10 bar pressure for 24 continuous hours.' },
            { icon: 'fa-umbrella', title: 'Rainwater Downpipe Flow Rate', desc: 'Full gradient velocity check ensuring zero pooling during heavy monsoon rains.' }
        ],
        'electrical': [
            { icon: 'fa-bolt', title: 'Thermal Imaging Switchgear Audit', desc: 'FLIR infrared thermography on all MCB distribution boards under peak load.' },
            { icon: 'fa-plug', title: 'Double Earth Pit Resistance', desc: 'Chemical copper-bonded earth electrode resistance strictly < 1.0 Ohm.' },
            { icon: 'fa-solar-panel', title: 'Solar Inverter Sync & Load', desc: 'Automated solar grid transfer switch and surge protection device (SPD) audit.' },
            { icon: 'fa-fire-extinguisher', title: 'FR Grade Copper Wiring', desc: '100% Flame-Retardant Low-Smoke (FRLS) copper conductors throughout.' }
        ],
        'legal': [
            { icon: 'fa-file-signature', title: '100% RERA Registered Title', desc: 'Clear marketable title backed by 40-year uninterrupted legal search report.' },
            { icon: 'fa-university', title: 'Nationalized Bank APF Clearances', desc: 'Pre-approved home loan project files with SBI, HDFC, and ICICI.' },
            { icon: 'fa-stamp', title: 'Local Authority DTCP/HMDA Approval', desc: 'Master layout and individual villa building sanction certificates verified.' },
            { icon: 'fa-certificate', title: 'RERA Occupancy Certificate (OC)', desc: 'Final governmental completion and occupancy clearances prior to handover.' }
        ]
    };

    if (catBtns.length && checkGrid) {
        catBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                catBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const cat = btn.getAttribute('data-category');
                const checks = AUDIT_CATEGORIES[cat] || AUDIT_CATEGORIES['structural'];

                checkGrid.innerHTML = checks.map(c => `
                    <div class="verifier-check-item gs-reveal">
                        <i class="fas ${c.icon}"></i>
                        <div>
                            <strong style="color: var(--color-forest); font-size: 14px;">${c.title}</strong>
                            <p style="font-size: 12px; color: var(--color-text-muted); margin-top: 4px; line-height: 1.5;">${c.desc}</p>
                        </div>
                    </div>
                `).join('');

                if (typeof gsap !== 'undefined') {
                    gsap.fromTo('.verifier-check-item', { opacity: 0, y: 15 }, { opacity: 1, y: 0, stagger: 0.08, duration: 0.4 });
                }
            });
        });
    }
}

// ================= 10. 3D EXPLODED VILLA ARCHITECTURAL BIM INSPECTOR =================
function init3DExplodedVilla() {
    const rig = document.getElementById('villaModelRig');
    const explodeBtn = document.getElementById('btnToggleExplode');
    const floorLayers = document.querySelectorAll('.villa-3d-floor-layer');
    const layerPills = document.querySelectorAll('.layer-pill-btn');
    const viewport = document.querySelector('.villa-3d-spatial-viewport');

    const tagElem = document.getElementById('villa3dTag');
    const titleElem = document.getElementById('villa3dFloorTitle');
    const areaElem = document.getElementById('villa3dFloorArea');
    const descElem = document.getElementById('villa3dFloorDesc');
    const specsElem = document.getElementById('villa3dFloorSpecs');

    if (!rig) return;

    const VILLA_LAYERS_DATA = {
        'roof': {
            img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
            badge: 'Level 03: Rooftop Solar Sky Lounge',
            tag: 'Level 03 • Rooftop Solar Pavilion & Sky Lounge',
            title: 'Level 03: Rooftop Solar Sky Lounge & Stargazing Deck',
            area: '850 Sq.Ft Built-Up Area • 5.5kW Microgrid',
            desc: 'Open-air entertainer lounge featuring 5.5kW monocrystalline photovoltaic solar array, heat-reflective SRI cool roof tiling, and structural pre-wiring for private heated jacuzzi and outdoor barbecue pavilion.',
            specs: [
                'Monocrystalline High-Yield Solar Microgrid with Net-Metering',
                'Solar Reflective Index (SRI) > 95 Thermal Barrier Coating',
                'Acoustic Toughened Glass Safety Balustrades & Wind Deflectors',
                'Pre-wired Structural Foundation for 6-Seater Heated Jacuzzi'
            ]
        },
        'first': {
            img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
            badge: 'Level 02: Royal Master Suites',
            tag: 'Level 02 • Private Sanctuary Suites',
            title: 'Level 02: Royal Master Suites & Cantilever Balconies',
            area: '1,650 Sq.Ft Built-Up Area • 3 Master Ensuites',
            desc: 'Positioned in the southwest Nairutya power quadrant for peace and leadership energy. Features European hardwood flooring, private panoramic sunrise balconies, and 5-fixture ensuite master bath.',
            specs: [
                'German Engineered Hardwood Flooring with Acoustic Underlay',
                'Walk-In Master Dresser Lounge with Integrated Safe Conduits',
                'Cantilever Shaded Balconies with Teakwood Ceiling Cladding',
                'Concealed VRV/VRF Multi-Split HVAC Pre-Piping Infrastructure'
            ]
        },
        'ground': {
            img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
            badge: 'Level 01: Double-Height Living & Foyer',
            tag: 'Level 01 • Grand Civic & Living Pavilion',
            title: 'Level 01: Double-Height Living, Teakwood Foyer & Island Kitchen',
            area: '1,950 Sq.Ft Built-Up Area • 18-Foot Ceiling Height',
            desc: 'Expansive living pavilion featuring floor-to-ceiling double-glazed acoustic UPVC facades, book-matched Italian Botticino marble flooring, East-facing Vastu foyer, and landscaped water court.',
            specs: [
                'Book-Matched Italian Botticino Marble (20mm Heavy Slab)',
                '18-Foot Double-Height Architectural Light Well',
                'East-Facing Burma Teakwood Grand Foyer (8-Foot Height)',
                'Gourmet Island Kitchen with Blum Soft-Close Fittings'
            ]
        },
        'foundation': {
            img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
            badge: 'Sub-Level: Percolation Vault & Seismic Core',
            tag: 'Sub-Level • Deep Aquifer Vault & Seismic Core',
            title: 'Sub-Level: Subterranean Percolation Aquifer & Seismic Foundation',
            area: 'Engineered M35 Concrete Core • Fe-550D TMT Reinforcement',
            desc: 'Earthquake-resilient structural footing designed for 100+ year durability, featuring integrated multi-stage rainwater percolation filtration chambers recharging regional groundwater aquifers.',
            specs: [
                'M35 Computer-Batched Ready-Mix Concrete with Ultrasonic Auditing',
                'Primary Fe-550D Corrosion-Resistant Rebar (IS 1786 Certified)',
                '100% Zero-Runoff Silica-Bed Aquifer Recharge Conduits',
                'Heavy-Duty Crystalline Anti-Termite & Moisture Membrane'
            ]
        }
    };

    function selectFloor(floorKey) {
        floorLayers.forEach(l => {
            if (l.getAttribute('data-floor') === floorKey) l.classList.add('active');
            else l.classList.remove('active');
        });

        layerPills.forEach(p => {
            if (p.getAttribute('data-target-floor') === floorKey) p.classList.add('active');
            else p.classList.remove('active');
        });

        const data = VILLA_LAYERS_DATA[floorKey];
        if (data) {
            const mainImg = document.getElementById('villaFloorMainImg');
            const canvasBadge = document.getElementById('bimCanvasBadge');

            if (mainImg && data.img) {
                mainImg.style.opacity = '0.3';
                setTimeout(() => {
                    mainImg.src = data.img;
                    mainImg.style.opacity = '1';
                }, 150);
            }
            if (canvasBadge && data.badge) {
                canvasBadge.innerHTML = `<i class="fas fa-layer-group"></i> ${data.badge}`;
            }

            if (titleElem) {
                if (tagElem) tagElem.textContent = data.tag;
                titleElem.textContent = data.title;
                if (areaElem) areaElem.textContent = data.area;
                if (descElem) descElem.textContent = data.desc;
                if (specsElem) {
                    specsElem.innerHTML = data.specs.map(s => `
                        <li style="display: flex; align-items: center; gap: 10px; color: rgba(255,255,255,0.9); font-size: 13px; margin-bottom: 8px;">
                            <i class="fas fa-check-circle" style="color: var(--color-gold);"></i> ${s}
                        </li>
                    `).join('');
                }

                if (typeof gsap !== 'undefined') {
                    gsap.fromTo('#villaSpecDetailBox', { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 0.35 });
                }
            }
        }
    }

    if (explodeBtn) {
        explodeBtn.addEventListener('click', () => {
            const isExploded = rig.classList.toggle('is-exploded');
            explodeBtn.innerHTML = isExploded 
                ? '<i class="fas fa-compress-arrows-alt"></i> Assemble 3D Model'
                : '<i class="fas fa-layer-group"></i> Explode 3D Floors';

            if (typeof gsap !== 'undefined') {
                gsap.fromTo('.villa-3d-floor-layer', { scale: 0.98 }, { scale: 1, duration: 0.3, stagger: 0.05 });
            }
        });
    }

    floorLayers.forEach(layer => {
        layer.addEventListener('click', () => {
            const floor = layer.getAttribute('data-floor');
            selectFloor(floor);
        });
    });

    layerPills.forEach(pill => {
        pill.addEventListener('click', () => {
            const floor = pill.getAttribute('data-target-floor');
            selectFloor(floor);
        });
    });
}

// ================= 11. CORE INTERACTIVE WIDGETS =================
function initCoreInteractions() {
    // Navbar Scroll Reaction & Mobile Hamburger
    const navbar = document.getElementById('navbar');
    if (navbar) {
        const handleScroll = () => {
            if (window.scrollY > 30) navbar.classList.add('scrolled');
            else navbar.classList.remove('scrolled');
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
    }

    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (mobileToggle && navLinks) {
        mobileToggle.onclick = () => {
            mobileToggle.classList.toggle('active');
            navLinks.classList.toggle('open');
        };
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.onclick = () => {
                mobileToggle.classList.remove('active');
                navLinks.classList.remove('open');
            };
        });
    }

    // Rotating Hero Imagery
    const heroSlides = document.querySelectorAll('.hero-slide-img');
    if (heroSlides.length > 1) {
        let currentSlide = 0;
        setInterval(() => {
            heroSlides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % heroSlides.length;
            heroSlides[currentSlide].classList.add('active');
        }, 5000);
    }

    // 5-Pillar Architectural Console Tabs
    const pillarButtons = document.querySelectorAll('.pillar-tab-btn');
    const pillarPanels = document.querySelectorAll('.pillar-stage-panel');
    if (pillarButtons.length && pillarPanels.length) {
        pillarButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetId = btn.getAttribute('data-tab');
                pillarButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                pillarPanels.forEach(panel => {
                    if (panel.id === targetId) {
                        panel.classList.add('active');
                        if (typeof gsap !== 'undefined') {
                            gsap.fromTo(panel, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.4 });
                        }
                    } else {
                        panel.classList.remove('active');
                    }
                });
            });
        });
    }

    // 6-Stop Process Timeline Stepper
    const stepNodes = document.querySelectorAll('.process-step-node');
    const processTitle = document.getElementById('processDisplayTitle');
    const processDesc = document.getElementById('processDisplayDesc');
    const processImg = document.getElementById('processDisplayImg');
    const processSpecs = document.getElementById('processDisplaySpecs');

    const PROCESS_DATA = [
        {
            title: '01. Discover & Land Due-Diligence',
            desc: 'Every acquisition undergoes a rigorous 40-year clear title audit, forensic legal vetting, and groundwater hydrological assessment before master-planning begins.',
            img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
            specs: ['100% Litigation-Free Clear Titles', 'Sub-Soil Compaction Analysis', 'Strategic Growth Corridor Selection']
        },
        {
            title: '02. Bioclimatic Master Planning',
            desc: 'Master layouts are aligned precisely to natural sun path and cross-ventilation contours, reserving a minimum of 30% to 40% dedicated green open spaces.',
            img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
            specs: ['30-40% Green Landscape Corridors', '100% Vastu-Compliant Geometry', 'Underground Utilities Grid Design']
        },
        {
            title: '03. Architectural Engineering & BIM',
            desc: 'Detailed 3D Building Information Modeling (BIM) coordinates architectural, structural, and MEP designs down to millimeter precision before excavation.',
            img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
            specs: ['Full BIM 3D Clash-Detection', 'Custom Villa Floorplan Customization', 'High-Thermal Mass Envelope Specs']
        },
        {
            title: '04. Precision Construction & Quality Audit',
            desc: 'Constructed using Fe-550D TMT corrosion-resistant steel and computerized concrete batching with continuous on-site laboratory testing at every pour.',
            img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
            specs: ['M30/M35 Certified Concrete', 'German Non-Destructive Testing', 'Daily Digital Quality Logbooks']
        },
        {
            title: '05. Zero-Snag Handover & Delivery',
            desc: 'Before key handover, each villa undergoes a 300-point inspection covering waterproofing, plumbing pressure tests, electrical loads, and finish perfection.',
            img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
            specs: ['300-Point Pre-Delivery Audit', 'RERA Occupancy Certificate', 'Formal Family Key Presentation']
        },
        {
            title: '06. Generational Relationship & Maintenance',
            desc: 'We manage community upkeep with dedicated facility managers, solar power grid management, and transparent resident association handovers.',
            img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
            specs: ['10-Year Structural Warranty', '24/7 Facility Management App', 'Active Community Events & Club']
        }
    ];

    if (stepNodes.length && processTitle) {
        stepNodes.forEach((node, index) => {
            node.addEventListener('click', () => {
                stepNodes.forEach(n => n.classList.remove('active'));
                node.classList.add('active');

                const data = PROCESS_DATA[index];
                if (data) {
                    processTitle.textContent = data.title;
                    processDesc.textContent = data.desc;
                    if (processImg) processImg.src = data.img;
                    if (processSpecs) {
                        processSpecs.innerHTML = data.specs.map(s => `<li><i class="fas fa-check-circle"></i> ${s}</li>`).join('');
                    }
                }
            });
        });
    }

    // Testimonials Carousel
    const testSlides = document.querySelectorAll('.testimonial-card-slide');
    const testDots = document.querySelectorAll('.testimonial-dot');
    if (testSlides.length && testDots.length) {
        let currentTest = 0;
        let testTimer;

        const showSlide = (idx) => {
            testSlides.forEach((s, i) => {
                s.classList.toggle('active', i === idx);
            });
            testDots.forEach((d, i) => {
                d.classList.toggle('active', i === idx);
            });
            currentTest = idx;
        };

        testDots.forEach((dot, idx) => {
            dot.addEventListener('click', () => {
                showSlide(idx);
                clearInterval(testTimer);
                testTimer = setInterval(() => {
                    const next = (currentTest + 1) % testSlides.length;
                    showSlide(next);
                }, 6000);
            });
        });

        testTimer = setInterval(() => {
            const next = (currentTest + 1) % testSlides.length;
            showSlide(next);
        }, 6000);
    }

    // Floor Plan Selector (Project Detail)
    const planButtons = document.querySelectorAll('.floorplan-tab-btn');
    const planDrawing = document.getElementById('planDrawingImg');
    const planConfig = document.getElementById('planConfigTitle');
    const planArea = document.getElementById('planAreaText');

    const PLANS = {
        '2bhk': {
            title: '2 BHK Luxury Smart Suite',
            area: '1,420 Sq.Ft. Built-up Area (East / West Facing)',
            img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80'
        },
        '3bhk': {
            title: '3 BHK Royal Duplex Villa',
            area: '2,650 Sq.Ft. Built-up Area with Private Garden',
            img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80'
        },
        '4bhk': {
            title: '4 BHK Grand Imperial Villa',
            area: '3,800 Sq.Ft. Triplex with Rooftop Terrace Lounge',
            img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80'
        }
    };

    if (planButtons.length && planConfig) {
        planButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const planKey = btn.getAttribute('data-plan');
                planButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const data = PLANS[planKey];
                if (data) {
                    planConfig.textContent = data.title;
                    planArea.textContent = data.area;
                    if (planDrawing) planDrawing.src = data.img;
                }
            });
        });
    }

    // Form Submissions
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn ? btn.innerHTML : '';
            if (btn) btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';

            setTimeout(() => {
                if (btn) btn.innerHTML = '<i class="fas fa-check"></i> Success!';
                showToast('Thank you! Your enquiry has been received. Our advisory team will contact you shortly.');
                form.reset();
                setTimeout(() => {
                    if (btn) btn.innerHTML = originalText;
                }, 3000);
            }, 800);
        });
    });
}

// ================= 12. PROJECTS LISTING & INTERACTIVE MAP =================
function initProjectsFilterAndMap() {
    const searchInput = document.getElementById('projectSearchInput');
    const projectCards = document.querySelectorAll('.project-grid-card');
    const gridViewBtn = document.getElementById('gridViewBtn');
    const mapViewBtn = document.getElementById('mapViewBtn');
    const gridContainer = document.getElementById('projectsGridContainer');
    const mapContainer = document.getElementById('projectsMapContainer');

    function applySearchFilter() {
        const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

        let visibleCount = 0;
        projectCards.forEach(card => {
            const cardText = (card.textContent || '').toLowerCase();
            const cardCity = (card.getAttribute('data-city') || '').toLowerCase();
            const cardType = (card.getAttribute('data-type') || '').toLowerCase();
            const cardStatus = (card.getAttribute('data-status') || '').toLowerCase();
            const cardBhk = (card.getAttribute('data-bhk') || '').toLowerCase();

            const isMatch = !query || 
                cardText.includes(query) || 
                cardCity.includes(query) || 
                cardType.includes(query) || 
                cardStatus.includes(query) || 
                cardBhk.includes(query);

            if (isMatch) {
                card.style.display = 'flex';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        const noResults = document.getElementById('noProjectsMessage');
        if (noResults) {
            noResults.style.display = visibleCount === 0 ? 'block' : 'none';
        }
    }

    if (searchInput) {
        searchInput.addEventListener('input', applySearchFilter);
    }

    if (gridViewBtn && mapViewBtn && gridContainer && mapContainer) {
        gridViewBtn.addEventListener('click', () => {
            gridViewBtn.classList.add('active');
            mapViewBtn.classList.remove('active');
            gridContainer.style.display = 'grid';
            mapContainer.classList.remove('active');
        });

        mapViewBtn.addEventListener('click', () => {
            mapViewBtn.classList.add('active');
            gridViewBtn.classList.remove('active');
            gridContainer.style.display = 'none';
            mapContainer.classList.add('active');
        });
    }

    // Map Hotspot Pins
    const mapPins = document.querySelectorAll('.map-hotspot-pin');
    const popup = document.getElementById('mapPreviewPopup');
    const popupImg = document.getElementById('mapPopupImg');
    const popupTitle = document.getElementById('mapPopupTitle');
    const popupLocation = document.getElementById('mapPopupLocation');
    const popupLink = document.getElementById('mapPopupLink');

    const MAP_DATA = {
        'hyderabad': {
            title: 'Vaaraahi Corporate Tower',
            loc: 'Financial District, Hyderabad',
            img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
            link: 'project-detail.html'
        },
        'rayachoty': {
            title: 'Vaaraahi Grandeur Luxury Villas',
            loc: 'Gated Villa Enclave, Rayachoty',
            img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=600&q=80',
            link: 'project-detail.html'
        },
        'proddatur': {
            title: 'Vaaraahi Elite Vistas',
            loc: 'Prime Highway Hub, Proddatur',
            img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80',
            link: 'project-detail.html'
        },
        'jammalamadugu': {
            title: 'Vaaraahi Green Meadows',
            loc: 'Eco-Living Township, Jammalamadugu',
            img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
            link: 'project-detail.html'
        }
    };

    mapPins.forEach(pin => {
        pin.addEventListener('click', (e) => {
            e.stopPropagation();
            const cityKey = pin.getAttribute('data-city');
            const data = MAP_DATA[cityKey];
            if (data && popup) {
                if (popupImg) popupImg.src = data.img;
                if (popupTitle) popupTitle.textContent = data.title;
                if (popupLocation) popupLocation.textContent = data.loc;
                if (popupLink) popupLink.href = data.link;
                popup.classList.add('active');
            }
        });
    });

    document.addEventListener('click', () => {
        if (popup) popup.classList.remove('active');
    });
}

// ================= 13. PUBLIC BLOGS & ARTICLE READER =================
function initPublicBlogs() {
    const blogsGrid = document.getElementById('publicBlogsGrid');
    const searchInput = document.getElementById('blogSearchInput');
    const catPills = document.querySelectorAll('.cat-pill');

    if (!blogsGrid) return;

    let currentCategory = 'All';
    let currentSearch = '';

    function renderBlogs() {
        const allPosts = BlogStore.getAll().filter(p => p.status === 'Published');
        const filtered = allPosts.filter(post => {
            const matchCat = currentCategory === 'All' || post.category === currentCategory;
            const matchQuery = !currentSearch ||
                post.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(currentSearch.toLowerCase());
            return matchCat && matchQuery;
        });

        if (filtered.length === 0) {
            blogsGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
                    <i class="fas fa-search" style="font-size: 32px; color: var(--color-gold); margin-bottom: 16px;"></i>
                    <h3 style="font-family: var(--font-serif); color: var(--color-forest);">No articles found</h3>
                    <p style="color: var(--color-text-muted);">Try adjusting your category filter or search keywords.</p>
                </div>
            `;
            return;
        }

        blogsGrid.innerHTML = filtered.map(post => `
            <article class="blog-card gs-reveal specular-card">
                <div class="blog-card-img-wrap">
                    <span class="blog-card-badge">${post.category}</span>
                    <img src="${post.image}" alt="${post.title}" loading="lazy">
                </div>
                <div class="blog-card-content">
                    <div>
                        <div class="blog-meta-date">
                            <i class="far fa-calendar-alt"></i> ${post.date} • ${post.readTime}
                        </div>
                        <h3 class="blog-card-title">${post.title}</h3>
                        <p class="blog-card-excerpt">${post.excerpt}</p>
                    </div>
                    <button class="btn-card-link" onclick="openArticleReader('${post.id}')" style="background: none; border: none; padding: 0; cursor: pointer;" data-cursor-action="READ">
                        Read Full Article <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            </article>
        `).join('');
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value;
            renderBlogs();
        });
    }

    catPills.forEach(pill => {
        pill.addEventListener('click', () => {
            catPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            currentCategory = pill.getAttribute('data-cat') || 'All';
            renderBlogs();
        });
    });

    renderBlogs();
}

window.openArticleReader = function(postId) {
    const post = BlogStore.getById(postId);
    if (!post) return;

    const modal = document.getElementById('blogReaderModal');
    const modalBody = document.getElementById('blogReaderContent');
    if (modal && modalBody) {
        modalBody.innerHTML = `
            <span class="section-tag">${post.category}</span>
            <h1 class="quote-serif" style="font-size: clamp(26px, 3.5vw, 38px); margin: 12px 0 16px;">${post.title}</h1>
            <div style="display: flex; gap: 16px; font-size: 13px; color: var(--color-text-muted); margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--color-border); align-items: center; flex-wrap: wrap;">
                <span><i class="fas fa-user-edit" style="color: var(--color-gold);"></i> ${post.author}</span>
                <span><i class="far fa-calendar-alt"></i> ${post.date}</span>
                <span><i class="far fa-clock"></i> ${post.readTime}</span>
            </div>
            <div style="border-radius: var(--radius-md); overflow: hidden; margin-bottom: 28px; max-height: 420px;">
                <img src="${post.image}" alt="${post.title}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div style="font-size: 16px; line-height: 1.85; color: var(--color-text-main); margin-bottom: 36px;">
                ${post.content}
            </div>
            <div style="padding-top: 24px; border-top: 1px solid var(--color-border); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
                <span style="font-weight: 700; font-size: 13px; text-transform: uppercase; color: var(--color-forest);">Share This Article:</span>
                <div style="display: flex; gap: 10px;">
                    <a href="https://api.whatsapp.com/send?text=${encodeURIComponent(post.title)}" target="_blank" class="social-icon-link" title="Share on WhatsApp"><i class="fab fa-whatsapp"></i></a>
                    <a href="https://www.linkedin.com" target="_blank" class="social-icon-link" title="Share on LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                    <button onclick="navigator.clipboard.writeText(window.location.href); showToast('Link copied to clipboard!');" class="social-icon-link" style="border: 1px solid var(--color-gold); cursor: pointer;" title="Copy Link"><i class="fas fa-link"></i></button>
                </div>
            </div>
        `;
        modal.classList.add('active');
    }
};

window.closeArticleReader = function() {
    const modal = document.getElementById('blogReaderModal');
    if (modal) modal.classList.remove('active');
};

// ================= 14. BLOGS ADMIN CMS ENGINE =================
function initBlogsAdmin() {
    const adminGate = document.getElementById('adminGateOverlay');
    const adminPassword = document.getElementById('adminPasswordInput');
    const loginBtn = document.getElementById('adminLoginBtn');
    const quickLoginBtn = document.getElementById('quickLoginDemoBtn');
    const adminTableBody = document.getElementById('adminPostsTableBody');
    const postModal = document.getElementById('adminPostModal');
    const postForm = document.getElementById('adminPostForm');
    const deleteModal = document.getElementById('adminDeleteModal');
    const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');

    if (!adminTableBody) return;

    let authenticated = sessionStorage.getItem('vaaraahi_admin_auth') === 'true';
    let editingPostId = null;
    let pendingDeleteId = null;

    function checkAuth() {
        if (authenticated) {
            if (adminGate) adminGate.style.display = 'none';
            renderAdminView();
        } else {
            if (adminGate) adminGate.style.display = 'flex';
        }
    }

    if (loginBtn && adminPassword) {
        loginBtn.addEventListener('click', () => {
            if (adminPassword.value === 'vaaraahi2026' || adminPassword.value === 'admin') {
                authenticated = true;
                sessionStorage.setItem('vaaraahi_admin_auth', 'true');
                checkAuth();
                showToast('Welcome to Vaaraahi Blogs Admin Portal.');
            } else {
                showToast('Invalid passcode. Use demo passcode: vaaraahi2026');
            }
        });
    }

    if (quickLoginBtn) {
        quickLoginBtn.addEventListener('click', () => {
            authenticated = true;
            sessionStorage.setItem('vaaraahi_admin_auth', 'true');
            checkAuth();
            showToast('Authenticated in 1-click Demo Mode.');
        });
    }

    function renderAdminView() {
        const posts = BlogStore.getAll();
        
        const totalStat = document.getElementById('adminStatTotal');
        const pubStat = document.getElementById('adminStatPublished');
        const draftStat = document.getElementById('adminStatDrafts');
        const viewsStat = document.getElementById('adminStatViews');

        if (totalStat) totalStat.textContent = posts.length;
        if (pubStat) pubStat.textContent = posts.filter(p => p.status === 'Published').length;
        if (draftStat) draftStat.textContent = posts.filter(p => p.status === 'Draft').length;
        if (viewsStat) viewsStat.textContent = posts.reduce((acc, p) => acc + (p.views || 0), 0).toLocaleString();

        adminTableBody.innerHTML = posts.map(post => `
            <tr>
                <td><img src="${post.image}" class="admin-post-thumb" alt="${post.title}"></td>
                <td>
                    <strong style="color: var(--color-forest); font-size: 14px;">${post.title}</strong>
                    <div style="font-size: 11px; color: var(--color-text-muted);">${post.author}</div>
                </td>
                <td><span class="badge-role">${post.category}</span></td>
                <td>${post.date}</td>
                <td>
                    <span class="${post.status === 'Published' ? 'status-badge-published' : 'status-badge-draft'}">
                        ${post.status}
                    </span>
                </td>
                <td>
                    <div class="action-btn-group">
                        <button class="btn-action-edit" onclick="openEditPost('${post.id}')" title="Edit Post"><i class="fas fa-edit"></i> Edit</button>
                        <button class="btn-action-delete" onclick="promptDeletePost('${post.id}')" title="Delete Post"><i class="fas fa-trash-alt"></i></button>
                    </div>
                </td>
            </tr>
        `).join('');
    }

    window.openNewPostModal = function() {
        editingPostId = null;
        if (postForm) postForm.reset();
        const modalTitle = document.getElementById('postModalTitle');
        if (modalTitle) modalTitle.textContent = 'Add New Blog Post';
        if (postModal) postModal.classList.add('active');
    };

    window.openEditPost = function(id) {
        const post = BlogStore.getById(id);
        if (!post) return;
        editingPostId = id;
        
        document.getElementById('postModalTitle').textContent = 'Edit Blog Post';
        document.getElementById('postTitleInput').value = post.title;
        document.getElementById('postCategoryInput').value = post.category;
        document.getElementById('postAuthorInput').value = post.author;
        document.getElementById('postStatusInput').value = post.status;
        document.getElementById('postImageInput').value = post.image;
        document.getElementById('postExcerptInput').value = post.excerpt;
        document.getElementById('postContentInput').value = post.content;
        
        if (postModal) postModal.classList.add('active');
    };

    window.closePostModal = function() {
        if (postModal) postModal.classList.remove('active');
    };

    window.promptDeletePost = function(id) {
        pendingDeleteId = id;
        if (deleteModal) deleteModal.classList.add('active');
    };

    window.closeDeleteModal = function() {
        pendingDeleteId = null;
        if (deleteModal) deleteModal.classList.remove('active');
    };

    if (confirmDeleteBtn) {
        confirmDeleteBtn.addEventListener('click', () => {
            if (pendingDeleteId) {
                BlogStore.delete(pendingDeleteId);
                showToast('Blog post deleted successfully.');
                closeDeleteModal();
                renderAdminView();
            }
        });
    }

    if (postForm) {
        postForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const postPayload = {
                title: document.getElementById('postTitleInput').value,
                category: document.getElementById('postCategoryInput').value,
                author: document.getElementById('postAuthorInput').value,
                status: document.getElementById('postStatusInput').value,
                image: document.getElementById('postImageInput').value || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
                excerpt: document.getElementById('postExcerptInput').value,
                content: document.getElementById('postContentInput').value
            };

            if (editingPostId) {
                BlogStore.update(editingPostId, postPayload);
                showToast('Blog post updated successfully.');
            } else {
                BlogStore.add(postPayload);
                showToast('New blog post published successfully.');
            }

            closePostModal();
            renderAdminView();
        });
    }

    checkAuth();
}

// ================= 15. CAREERS APPLICATION DRAWER =================
function initCareersPortal() {
    const applyButtons = document.querySelectorAll('.btn-apply-role');
    const modal = document.getElementById('careerModal');
    const roleSelect = document.getElementById('applicationRoleSelect');

    if (applyButtons.length && modal) {
        applyButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const roleName = btn.getAttribute('data-role');
                if (roleSelect && roleName) {
                    roleSelect.value = roleName;
                }
                modal.classList.add('active');
            });
        });
    }

    window.closeCareerModal = function() {
        if (modal) modal.classList.remove('active');
    };
}

// ================= 16. HOME PAGE LIVE BLOG STRIP INJECTOR =================
function initHomeBlogStrip() {
    const homeStrip = document.getElementById('homeBlogStripContainer');
    if (!homeStrip) return;

    const tabs = document.querySelectorAll('#homeBlogTabs .h-tab-btn');
    let currentCategory = 'All';

    function attachTilt(cards) {
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                const rotX = (y / (rect.height / 2)) * -6;
                const rotY = (x / (rect.width / 2)) * 6;
                card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-8px)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
            });
        });
    }

    function renderStrip(animate = false) {
        let allPosts = BlogStore.getAll();
        if (!allPosts || !allPosts.length) {
            allPosts = DEFAULT_BLOGS;
        }
        allPosts = allPosts.filter(p => p.status !== 'Draft');
        const filtered = allPosts.filter(p => currentCategory === 'All' || p.category.toLowerCase().includes(currentCategory.toLowerCase())).slice(0, 3);

        homeStrip.innerHTML = filtered.map((post) => `
            <article class="home-blog-card specular-card" onclick="window.location.href='blogs.html'" data-cursor-action="EXPLORE">
                <div class="home-blog-card-media">
                    <img src="${post.image}" alt="${post.title}" class="home-blog-card-img" loading="lazy">
                    <span class="home-blog-badge">${post.category}</span>
                    <span class="home-blog-readtime"><i class="far fa-clock"></i> ${post.readTime}</span>
                </div>
                <div class="home-blog-card-body">
                    <div>
                        <div class="home-blog-meta">
                            <span><i class="far fa-calendar-alt"></i> ${post.date}</span>
                            <span><i class="far fa-eye"></i> ${post.views || 1400}</span>
                        </div>
                        <h3 class="home-blog-title">${post.title}</h3>
                        <p class="home-blog-excerpt">${post.excerpt}</p>
                    </div>
                    <div class="home-blog-footer">
                        <span class="home-blog-author"><i class="fas fa-pen-nib text-gold"></i> ${post.author ? post.author.split(',')[0] : 'Vaaraahi'}</span>
                        <span class="btn-home-read">
                            <span>Read Whitepaper</span> <i class="fas fa-arrow-right"></i>
                        </span>
                    </div>
                </div>
            </article>
        `).join('');

        const cards = homeStrip.querySelectorAll('.home-blog-card');
        attachTilt(cards);

        if (animate && typeof gsap !== 'undefined') {
            gsap.fromTo(cards, 
                { opacity: 0, y: 25, scale: 0.96 }, 
                { opacity: 1, y: 0, scale: 1, duration: 0.45, stagger: 0.08, ease: 'power2.out' }
            );
        }
    }

    // Attach tilt to existing DOM cards on initial load
    attachTilt(homeStrip.querySelectorAll('.home-blog-card'));

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentCategory = tab.getAttribute('data-cat') || 'All';
            renderStrip(true);
        });
    });

    renderStrip(false);
}

// ================= 17. BARBA.JS ARCHITECTURAL MULTI-PAGE ROUTING =================
function initBarbaTransitions() {
    // Disable Barba on local file:// protocol or if Barba is not loaded
    if (typeof barba === 'undefined' || window.location.protocol === 'file:') return;

    // Create Architectural Transition Curtain Overlay if not present
    let curtainWrap = document.querySelector('.barba-curtain-wrap');
    if (!curtainWrap) {
        curtainWrap = document.createElement('div');
        curtainWrap.className = 'barba-curtain-wrap';
        curtainWrap.innerHTML = `
            <div class="barba-curtain-col"></div>
            <div class="barba-curtain-col"></div>
            <div class="barba-curtain-col"></div>
            <div class="barba-curtain-col"></div>
            <div class="barba-curtain-col"></div>
            <div class="barba-logo-badge">
                <img src="assets/vaaraahi-logo-horizontal.png" alt="Vaaraahi Logo" class="barba-logo-img">
                <div class="badge-text">VAARAAHI</div>
                <div class="badge-sub">COMMITTED TO DELIVER</div>
            </div>
        `;
        document.body.appendChild(curtainWrap);
    }

    try {
        barba.init({
            prevent: ({ el }) => {
                // Prevent Barba from intercepting anchor jumps or external/admin links
                return el.classList.contains('no-barba') || 
                       el.getAttribute('href')?.startsWith('#') ||
                       el.getAttribute('href')?.startsWith('mailto:') ||
                       el.getAttribute('href')?.startsWith('tel:') ||
                       el.getAttribute('href')?.includes('api.whatsapp.com');
            },
            transitions: [{
                name: 'architectural-shutter-transition',
                async leave(data) {
                    const cols = document.querySelectorAll('.barba-curtain-col');
                    const badge = document.querySelector('.barba-logo-badge');
                    
                    if (typeof gsap !== 'undefined') {
                        const tl = gsap.timeline();
                        await tl.set(cols, { transformOrigin: 'top center' })
                          .to(cols, {
                              scaleY: 1,
                              stagger: 0.08,
                              duration: 0.5,
                              ease: 'power3.inOut'
                          })
                          .to(badge, {
                              opacity: 1,
                              scale: 1,
                              duration: 0.35,
                              ease: 'back.out(1.7)'
                          }, '-=0.2');
                    }
                    data.current.container.remove();
                },
                async enter(data) {
                    // Update Page Title
                    const parser = new DOMParser();
                    const nextDoc = parser.parseFromString(data.next.html, 'text/html');
                    document.title = nextDoc.title;

                    // Update Active Nav Link State
                    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
                    document.querySelectorAll('.nav-links a').forEach(link => {
                        const linkHref = link.getAttribute('href');
                        if (linkHref === currentPath || (currentPath === '' && linkHref === 'index.html')) {
                            link.classList.add('active');
                        } else {
                            link.classList.remove('active');
                        }
                    });

                    // Scroll to top
                    if (lenisInstance) lenisInstance.scrollTo(0, { immediate: true });
                    else window.scrollTo(0, 0);

                    const cols = document.querySelectorAll('.barba-curtain-col');
                    const badge = document.querySelector('.barba-logo-badge');

                    if (typeof gsap !== 'undefined') {
                        const tl = gsap.timeline();
                        await tl.to(badge, {
                            opacity: 0,
                            scale: 0.8,
                            duration: 0.25,
                            ease: 'power2.in'
                        })
                        .set(cols, { transformOrigin: 'bottom center' })
                        .to(cols, {
                            scaleY: 0,
                            stagger: 0.08,
                            duration: 0.5,
                            ease: 'power3.inOut'
                        });
                    }
                },
                afterEnter() {
                    // Reinitialize all page interactions
                    initAllPageFeatures();
                    if (typeof ScrollTrigger !== 'undefined') {
                        ScrollTrigger.refresh();
                    }
                    if (lenisInstance) {
                        lenisInstance.resize();
                    }
                }
            }]
        });
    } catch (err) {
        console.warn('Barba transition initialization note:', err);
    }
}

// ================= 18. EXTREME 3D SPATIAL ENGINES =================

// (Duplicate init3DExplodedVilla removed - handled by primary BIM inspector engine at line 962)

// 18.2 3D Curved Cylindrical Carousel
function init3DCurvedCarousel() {
    const ring = document.querySelector('.cylinder-3d-carousel-ring');
    const cards = document.querySelectorAll('.cylinder-3d-card');
    const prevBtn = document.getElementById('cylinderPrevBtn');
    const nextBtn = document.getElementById('cylinderNextBtn');

    if (!ring || !cards.length) return;

    const count = cards.length;
    const stepAngle = 360 / count;
    const radius = 460;
    let currentAngle = 0;

    cards.forEach((card, index) => {
        const cardAngle = index * stepAngle;
        card.style.transform = `rotateY(${cardAngle}deg) translateZ(${radius}px)`;
    });

    const updateRing = () => {
        ring.style.transform = `rotateY(${currentAngle}deg)`;
    };

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentAngle += stepAngle;
            updateRing();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentAngle -= stepAngle;
            updateRing();
        });
    }

    // Touch & Mouse Drag on Carousel Ring
    let isDragging = false;
    let startX = 0;
    let baseAngle = 0;

    ring.parentElement.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        baseAngle = currentAngle;
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const dx = e.clientX - startX;
        currentAngle = baseAngle + dx * 0.3;
        updateRing();
    });

    window.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            // Snap to nearest card
            currentAngle = Math.round(currentAngle / stepAngle) * stepAngle;
            updateRing();
        }
    });
}

// 18.3 3D Day / Dusk / Night Solar Simulator
function initDayNightSimulator() {
    const modeBtns = document.querySelectorAll('.solar-mode-btn');
    const baseImg = document.querySelector('.solar-base-villa');
    const timeLabel = document.getElementById('solarCurrentTimeLabel');
    const descLabel = document.getElementById('solarSunlightDesc');

    if (!modeBtns.length || !baseImg) return;

    const MODES = {
        'dawn': {
            time: '06:30 AM — First Light (Dawn)',
            desc: 'Gentle morning sunlight washes through eastern double-height glazing, maximizing natural ambient light and cool dewy breezes.',
            img: 'assets/villa_dawn.jpg',
            filter: 'brightness(1.0) contrast(1.04) saturate(1.02)'
        },
        'noon': {
            time: '12:00 PM — Solar Zenith (High Noon)',
            desc: 'Sun at peak elevation. Overhanging cantilevers and Porotherm cavity walls block 82% direct radiant heat while flooding courtyards with clean daylight.',
            img: 'assets/villa_noon.jpg',
            filter: 'brightness(1.0) contrast(1.05) saturate(1.05)'
        },
        'golden': {
            time: '05:30 PM — Golden Hour Sunset',
            desc: 'Warm sunset casting radiant amber hues. Western timber louvers provide natural shading while cross-ventilation pulls cool evening air across private terraces.',
            img: 'assets/villa_golden.jpg',
            filter: 'brightness(1.0) contrast(1.04) saturate(1.08)'
        },
        'night': {
            time: '09:00 PM — Resort Night & Architectural Illumination',
            desc: 'Illuminated architectural facade with warm 2700K LED garden bollards, glowing infinity reflection pool, and ambient double-height living suites.',
            img: 'assets/villa_night.jpg',
            filter: 'brightness(1.0) contrast(1.05) saturate(1.05)'
        }
    };

    // Preload images for instant, seamless transitions
    Object.values(MODES).forEach(m => {
        const preloader = new Image();
        preloader.src = m.img;
    });

    modeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const modeKey = btn.getAttribute('data-solar-mode');
            const data = MODES[modeKey];
            if (data) {
                baseImg.style.opacity = '0.3';
                baseImg.style.transform = 'scale(1.015)';

                setTimeout(() => {
                    baseImg.src = data.img;
                    baseImg.style.filter = data.filter;
                    baseImg.style.opacity = '1';
                    baseImg.style.transform = 'scale(1.0)';
                }, 180);

                if (timeLabel) timeLabel.innerHTML = `<i class="far fa-clock"></i> ${data.time}`;
                if (descLabel) descLabel.textContent = data.desc;

                if (typeof SoundFX !== 'undefined' && typeof SoundFX.playSolarShift === 'function') {
                    SoundFX.playSolarShift();
                }
            }
        });
    });
}

// 18.4 3D Isometric Masterplan Navigator
function init3DMasterplanNavigator() {
    const hotspots = document.querySelectorAll('.iso-layer-hotspot');
    const plane = document.querySelector('.masterplan-iso-plane');
    const infoTitle = document.getElementById('isoFeatureTitle');
    const infoDesc = document.getElementById('isoFeatureDesc');
    const infoBadge = document.getElementById('isoFeatureBadge');

    if (!hotspots.length) return;

    const ISO_DATA = {
        'clubhouse': {
            badge: 'Civic Hub',
            title: '15,000 Sq.Ft Grand Clubhouse & Infinity Pool',
            desc: 'Central social and wellness nexus featuring temperature-controlled swimming pool, indoor badminton, state-of-the-art gym, and private screening theater.'
        },
        'park': {
            badge: '40% Green Space',
            title: 'Native Botanical Garden & Zen Walking Trail',
            desc: 'Over 1,200 native trees, herbal wellness zones, senior reflexology walkways, and organic fruit orchards.'
        },
        'avenue': {
            badge: 'Infrastructure',
            title: '40-Foot Interlocking Permeable Boulevard',
            desc: 'Underground cabling for electricity, optical fiber, and storm drainage with solar-powered smart streetlamps.'
        },
        'gate': {
            badge: '24/7 Security',
            title: 'Architectural Gateway & Multi-Tier Surveillance',
            desc: 'RFID boom barriers, biometric visitor logging, continuous CCTV monitoring, and rapid emergency response protocols.'
        }
    };

    hotspots.forEach(spot => {
        spot.addEventListener('click', () => {
            const key = spot.getAttribute('data-iso-target');
            const data = ISO_DATA[key];
            if (data && infoTitle) {
                infoTitle.textContent = data.title;
                if (infoDesc) infoDesc.textContent = data.desc;
                if (infoBadge) infoBadge.textContent = data.badge;

                if (typeof gsap !== 'undefined') {
                    gsap.fromTo('#isoFeaturePanel', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.4 });
                }
            }
        });
    });
}

// ================= 20. BESPOKE INTERACTIVE UI MECHANISMS =================

// 1. Hero Atmosphere Switcher
function initHeroAtmosphereSwitcher() {
    const atmoBtns = document.querySelectorAll('.atmo-pill');
    const heroSlides = document.querySelectorAll('.hero-slide-img');
    const heroBgImg = document.querySelector('.hero-bg-img');
    const heroOverlay = document.querySelector('.hero-overlay');

    if (!atmoBtns.length) return;

    const ATMO_PRESETS = [
        {
            img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80',
            overlay: 'linear-gradient(135deg, rgba(10, 28, 20, 0.7) 0%, rgba(197, 160, 89, 0.4) 100%)'
        },
        {
            img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80',
            overlay: 'linear-gradient(135deg, rgba(10, 28, 20, 0.6) 0%, rgba(26, 77, 46, 0.6) 100%)'
        },
        {
            img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80',
            overlay: 'linear-gradient(135deg, rgba(5, 15, 10, 0.85) 0%, rgba(10, 28, 20, 0.95) 100%)'
        }
    ];

    atmoBtns.forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            atmoBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const indexAttr = btn.getAttribute('data-atmo-index');
            const targetIdx = indexAttr !== null ? parseInt(indexAttr, 10) : idx;

            if (heroSlides.length) {
                heroSlides.forEach((slide, sIdx) => {
                    if (sIdx === targetIdx) {
                        slide.classList.add('active');
                    } else {
                        slide.classList.remove('active');
                    }
                });
                const preset = ATMO_PRESETS[targetIdx];
                if (preset && heroOverlay) {
                    heroOverlay.style.background = preset.overlay;
                }
            } else if (heroBgImg) {
                const preset = ATMO_PRESETS[targetIdx] || ATMO_PRESETS[0];
                if (preset) {
                    if (typeof gsap !== 'undefined') {
                        gsap.to(heroBgImg, {
                            opacity: 0,
                            duration: 0.3,
                            onComplete: () => {
                                heroBgImg.src = preset.img;
                                if (heroOverlay) heroOverlay.style.background = preset.overlay;
                                gsap.to(heroBgImg, { opacity: 1, duration: 0.5 });
                            }
                        });
                    } else {
                        heroBgImg.src = preset.img;
                        if (heroOverlay) heroOverlay.style.background = preset.overlay;
                    }
                }
            }
        });
    });
}

// 2. City & Regional Impact Explorer
function initCityImpactExplorer() {
    const cityBtns = document.querySelectorAll('.impact-city-btn, .impact-tab-btn');
    const metricSqft = document.getElementById('impactStatSqft') || document.getElementById('impactMetricYears');
    const metricFamilies = document.getElementById('impactStatFamilies') || document.getElementById('impactMetricUnits');
    const metricAcres = document.getElementById('impactStatAcres') || document.getElementById('impactMetricFamilies');
    const metricApf = document.getElementById('impactStatApf') || document.getElementById('impactMetricGreen');
    const footnote = document.getElementById('impactCityFootnote');

    if (!cityBtns.length) return;

    const IMPACT_DATA = {
        'all': { sqft: '15+', families: '5+', acres: '1,000+', apf: '40%', note: '<strong>All Regions:</strong> Over 1.5 Million Sq.Ft developed with 100% RERA & APF clearances from SBI, HDFC, and ICICI Bank.' },
        'rayachoty': { sqft: '7+', families: '2+', acres: '380+', apf: '45%', note: '<strong>Rayachoty Hub:</strong> Home to Vaaraahi Grandeur — 35+ acres under active masterplanned villa development.' },
        'proddatur': { sqft: '10+', families: '3+', acres: '450+', apf: '35%', note: '<strong>Proddatur Hub:</strong> Vaaraahi Elite Vistas — fully handed over with 100% occupancy certificates issued.' },
        'jammalamadugu': { sqft: '4+', families: '1+', acres: '170+', apf: '50%', note: '<strong>Jammalamadugu Hub:</strong> Vaaraahi Green Meadows — dedicated eco-township with 50% open green sanctuary.' },
        'hyderabad': { sqft: '15+', families: 'HQ', acres: 'Global', apf: '100%', note: '<strong>Hyderabad HQ:</strong> Central architectural, structural BIM design, and legal due-diligence governance tower.' }
    };

    cityBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            cityBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const city = btn.getAttribute('data-impact-city') || 'all';
            const data = IMPACT_DATA[city];
            if (data) {
                if (typeof gsap !== 'undefined') {
                    gsap.fromTo('.impact-metric-card', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.3, stagger: 0.05 });
                }
                if (metricSqft) metricSqft.textContent = data.sqft;
                if (metricFamilies) metricFamilies.textContent = data.families;
                if (metricAcres) metricAcres.textContent = data.acres;
                if (metricApf) metricApf.textContent = data.apf;
                if (footnote) footnote.innerHTML = `<i class="fas fa-info-circle" style="color: var(--color-gold);"></i> ${data.note}`;
            }
        });
    });
}

// 3. Interactive Vastu & Bioclimatic Alignment Compass
function initVastuCompass() {
    const compassNodes = document.querySelectorAll('.compass-node');
    const needle = document.getElementById('compassNeedle');
    const zoneBadge = document.getElementById('vastuZoneBadge') || document.getElementById('compassDirectionBadge');
    const zoneTitle = document.getElementById('vastuZoneTitle') || document.getElementById('compassTitle');
    const zoneElement = document.getElementById('vastuZoneElement') || document.getElementById('compassElementTag');
    const zoneDesc = document.getElementById('vastuZoneDesc') || document.getElementById('compassDesc');
    const zoneRules = document.getElementById('vastuZoneRules') || document.getElementById('compassFeaturesList');

    if (!compassNodes.length || !needle) return;

    const VASTU_DATA = {
        'NE': {
            angle: 45,
            badge: 'North-East • Ishanya Corner',
            title: 'Main Grand Entrance, Pooja & Subterranean Water Vault',
            element: 'Water & Divine Energy',
            desc: 'The North-East quadrant brings clarity, spiritual peace, and abundant prosperity. In Vaaraahi villas, this zone features unobstructed light wells, crystal-clear entrance porticos, and rainwater aquifer recharge conduits.',
            rules: [
                'Low-mass cantilevered portico for maximum morning ultraviolet solar penetration',
                'Underground pure rainwater storage tanks placed strictly in Ishanya',
                '100% East-facing Grand Teakwood foyer entrance'
            ]
        },
        'E': {
            angle: 90,
            badge: 'East • Purva Corridor',
            title: 'East: Morning Sunlight & Living Vitality',
            element: 'Solar Light (Surya)',
            desc: 'Maximizes early morning ultraviolet daylight, ideal for prayer rooms, meditation pavilions, and family dining courtyards.',
            rules: [
                'Expansive floor-to-ceiling glass fenestrations for dawn illumination',
                'Bioclimatic cross-ventilation breeze corridors',
                'Zero heavy load-bearing structural clutter'
            ]
        },
        'SE': {
            angle: 135,
            badge: 'South-East • Agni Corner',
            title: 'Southeast (Agni): Culinary Island & Energy Hub',
            element: 'Fire Energy (Agni)',
            desc: 'The auspicious quadrant for gourmet island kitchens, solar thermal conduits, and rapid EV charging battery hubs.',
            rules: [
                'East-facing gourmet modular cooking quartz counters',
                'Isolated dedicated fire-rated electrical conduits',
                'High-capacity ventilation exhausts and natural airflow'
            ]
        },
        'S': {
            angle: 180,
            badge: 'South • Dakshina Zone',
            title: 'South: Heavy Structural Foundations & Shading',
            element: 'Earth & Stability (Prithvi)',
            desc: 'Ideal for thick thermal cavity masonry, cantilever shading eaves, and guest master suites shielded from midday heat.',
            rules: [
                'Porotherm multi-chamber thermal cavity walls',
                'Deep overhangs to block direct radiant sun',
                'High-load civil structural core columns'
            ]
        },
        'SW': {
            angle: 225,
            badge: 'South-West • Nairuthi Corner',
            title: 'Southwest (Nairutya): Royal Master Suite of the Sanctuary',
            element: 'Earth & Density (Prithvi)',
            desc: 'The ultimate power quadrant designated exclusively for the Royal Master Suite and private cantilever balconies.',
            rules: [
                'Royal Master Suite with private walk-in dressing lounge',
                'Maximum solid wall thickness and thermal mass',
                'Heaviest load-bearing foundation columns'
            ]
        },
        'W': {
            angle: 270,
            badge: 'West • Pashchima Zone',
            title: 'West: Sunset Aesthetics & Family Lounges',
            element: 'Water & Wind (Varuna)',
            desc: 'Reserved for family entertainment suites, children study zones, and sunset viewing balconies.',
            rules: [
                'Acoustic double-glazed terrace decks',
                'Reflective cool-tinted architectural glass',
                'Children bedrooms and study pavilions'
            ]
        },
        'NW': {
            angle: 315,
            badge: 'North-West • Vayavya Corner',
            title: 'Northwest (Vayavya): Movement & Social Warmth',
            element: 'Air Circulation (Vayu)',
            desc: 'The circulation quadrant for guest duplex suites, indoor sports halls, and vehicular car porches.',
            rules: [
                'Dual covered car parking with EV rapid ports',
                'Guest bedrooms with ensuite dressers',
                'Continuous airflow air wells'
            ]
        },
        'N': {
            angle: 0,
            badge: 'North • Uttara (Kubera) Zone',
            title: 'North: Flow of Abundance & Financial Power',
            element: 'Magnetic & Water Energy',
            desc: 'Governed by Lord Kubera; prioritized for executive home offices, master treasuries, and central green courts.',
            rules: [
                'Home office / executive library pavilions',
                'Expansive step-free entrance avenues',
                'Zero clutter or heavy storage overhead'
            ]
        }
    };

    compassNodes.forEach(node => {
        node.addEventListener('click', () => {
            compassNodes.forEach(n => n.classList.remove('active'));
            node.classList.add('active');

            const dir = (node.getAttribute('data-dir') || 'ne').toUpperCase();
            const data = VASTU_DATA[dir];
            if (data) {
                needle.style.transform = `rotate(${data.angle}deg)`;

                if (zoneBadge) zoneBadge.textContent = data.badge;
                if (zoneTitle) zoneTitle.textContent = data.title;
                if (zoneElement) zoneElement.innerHTML = `<i class="fas fa-water"></i> ${data.element}`;
                if (zoneDesc) zoneDesc.textContent = data.desc;

                if (zoneRules) {
                    zoneRules.innerHTML = data.rules.map(r => `<li><i class="fas fa-check-circle" style="color: var(--color-gold);"></i> ${r}</li>`).join('');
                }

                if (typeof gsap !== 'undefined') {
                    gsap.fromTo('#compassDetailPanel, .vastu-zone-card', { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 0.4 });
                }
            }
        });
    });
}

// 4. Multi-Perspective Featured Landmark Cards
function initMultiPerspectiveCards() {
    const cardPanes = document.querySelectorAll('.project-carousel-card, .landmark-viewable-card');
    if (!cardPanes.length) return;

    cardPanes.forEach(card => {
        const tabBtns = card.querySelectorAll('.card-tab-btn, .view-tab-btn');
        const panes = card.querySelectorAll('.card-view-pane');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                SoundFX.playTap();

                const targetView = btn.getAttribute('data-view');
                panes.forEach(p => {
                    if (p.getAttribute('data-pane') === targetView) {
                        p.classList.add('active');
                        if (typeof gsap !== 'undefined') {
                            gsap.fromTo(p, { opacity: 0, scale: 0.98 }, { opacity: 1, scale: 1, duration: 0.3 });
                        }
                    } else {
                        p.classList.remove('active');
                    }
                });
            });
        });
    });
}

// 5. Pillar Proof & Certificate Vault Console
function initPillarProofConsole() {
    const tabBtns = document.querySelectorAll('.pillar-tabs-nav .pillar-tab-btn, .pillar-tab-buttons .pillar-tab-btn');
    const panels = document.querySelectorAll('.pillar-stage-panel');

    if (!tabBtns.length || !panels.length) return;

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            SoundFX.playTap();

            const targetId = btn.getAttribute('data-tab');
            panels.forEach(panel => {
                if (panel.id === targetId) {
                    panel.classList.add('active');
                    if (typeof gsap !== 'undefined') {
                        gsap.fromTo(panel, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.35 });
                    }
                } else {
                    panel.classList.remove('active');
                }
            });
        });
    });
}

// 6. Voice Waveform Audio Player Hub & Community Filter
function initVoiceTestimonialHub() {
    const filterBtns = document.querySelectorAll('.testimonial-filter-tabs .t-filter-btn');
    const cards = document.querySelectorAll('.testimonial-cards-deck .t-story-card');

    if (filterBtns.length && cards.length) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                SoundFX.playTap();

                const filterKey = btn.getAttribute('data-t-filter');
                cards.forEach(card => {
                    const cardProject = card.getAttribute('data-t-project');
                    if (filterKey === 'all' || cardProject === filterKey) {
                        card.style.display = 'flex';
                        if (typeof gsap !== 'undefined') {
                            gsap.fromTo(card, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.35 });
                        }
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    const voicePlayers = document.querySelectorAll('.voice-note-player');
    if (!voicePlayers.length) return;

    voicePlayers.forEach(player => {
        const playBtn = player.querySelector('.btn-voice-play');
        const icon = playBtn ? playBtn.querySelector('i') : null;

        if (playBtn) {
            playBtn.addEventListener('click', () => {
                const isPlaying = player.classList.contains('playing');

                // Stop any other active player
                voicePlayers.forEach(p => {
                    p.classList.remove('playing');
                    const b = p.querySelector('.btn-voice-play i');
                    if (b) {
                        b.classList.remove('fa-pause');
                        b.classList.add('fa-play');
                    }
                });

                if (!isPlaying) {
                    player.classList.add('playing');
                    SoundFX.playSolarShift();
                    if (icon) {
                        icon.classList.remove('fa-play');
                        icon.classList.add('fa-pause');
                    }
                    showToast('Playing verified resident audio note...');
                } else {
                    player.classList.remove('playing');
                    if (icon) {
                        icon.classList.remove('fa-pause');
                        icon.classList.add('fa-play');
                    }
                }
            });
        }
    });
}

// 7. VIP Scheduler Desk
function initVipSchedulerDesk() {
    const slotBtns = document.querySelectorAll('.vip-slot-btn');
    const bookBtn = document.getElementById('btnConfirmVipBooking');
    const dateInput = document.getElementById('vipDateInput');
    const vipForm = document.getElementById('vipBookingForm');

    if (!slotBtns.length && !vipForm) return;

    slotBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            slotBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    if (vipForm) {
        vipForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const activeSlot = document.querySelector('.vip-slot-btn.active');
            const slotText = activeSlot ? activeSlot.getAttribute('data-slot') || activeSlot.textContent : 'Selected Slot';
            const nameInput = document.getElementById('vipNameInput');
            const name = nameInput && nameInput.value ? nameInput.value.trim() : 'Guest';
            showToast(`VIP Site Tour confirmed for ${name} (${slotText})! Our advisory director will call shortly with your luxury chauffer details.`);
            vipForm.reset();
        });
    }

    if (bookBtn) {
        bookBtn.addEventListener('click', () => {
            const activeSlot = document.querySelector('.vip-slot-btn.active');
            const slotText = activeSlot ? activeSlot.textContent : 'Selected Slot';
            const dateVal = dateInput && dateInput.value ? dateInput.value : 'Upcoming Date';
            showToast(`VIP Site Tour reserved for ${dateVal} (${slotText}). Our advisory director will call shortly!`);
        });
    }
}

// 8. 15-Year Time Travel Slider (About Page)
function initTimeTravelSlider() {
    const eraBtns = document.querySelectorAll('.time-era-btn');
    const eraBadge = document.getElementById('timeEraBadge');
    const eraTitle = document.getElementById('timeEraTitle');
    const eraDesc = document.getElementById('timeEraDesc');
    const eraImg = document.getElementById('timeEraImg');
    const eraStat1 = document.getElementById('timeEraStat1');
    const eraStat2 = document.getElementById('timeEraStat2');
    const eraStat3 = document.getElementById('timeEraStat3');

    if (!eraBtns.length || !eraTitle) return;

    const ERA_DATA = {
        '2010': {
            badge: 'Era 2010 — Founding Vision',
            title: 'Founding of Vaaraahi Group & First Land Due-Diligence',
            desc: 'Vaaraahi Group was established with a singular conviction: to bring institutional-grade structural engineering, 40-year clear legal titles, and pure Vastu Shastra geomancy to Andhra Pradesh.',
            img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80',
            s1: '25 Acres', s2: '100%', s3: '1st Enclave'
        },
        '2014': {
            badge: 'Era 2014 — Inaugural Delivery',
            title: 'First Signature Luxury Villa Handover in Proddatur',
            desc: 'Completed our landmark duplex villa community with 100% on-time possession, introducing underground drainage, wide avenues, and private landscaped parks.',
            img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
            s1: '150 Villas', s2: '100% On-Time', s3: '4.9★ Rating'
        },
        '2019': {
            badge: 'Era 2019 — Multi-City Expansion',
            title: 'Expansion into Rayachoty & Jammalamadugu',
            desc: 'Launched Vaaraahi Grandeur and Vaaraahi Green Meadows, establishing resort clubhouses, solar avenue grids, and 40% dedicated native open green spaces.',
            img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1000&q=80',
            s1: '850+ Homes', s2: '4 Cities', s3: '15K Sq.Ft Club'
        },
        '2026': {
            badge: 'Era 2026 & Beyond — Smart Sanctuaries',
            title: 'Hyderabad Corporate HQ & Sustainable Smart Townships',
            desc: 'Pioneering EV-ready smart infrastructure, 3D BIM structural clash verification, and net-positive hydrological aquifers across prime growth corridors.',
            img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80',
            s1: '1.5M Sq.Ft', s2: '1,000+ Families', s3: 'Zero Snags'
        }
    };

    eraBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            eraBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const era = btn.getAttribute('data-era');
            const data = ERA_DATA[era];
            if (data) {
                if (eraBadge) eraBadge.textContent = data.badge;
                if (eraTitle) eraTitle.textContent = data.title;
                if (eraDesc) eraDesc.textContent = data.desc;
                if (eraImg) eraImg.src = data.img;
                if (eraStat1) eraStat1.textContent = data.s1;
                if (eraStat2) eraStat2.textContent = data.s2;
                if (eraStat3) eraStat3.textContent = data.s3;

                if (typeof gsap !== 'undefined') {
                    gsap.fromTo('.time-era-stage', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.4 });
                }
            }
        });
    });
}

// 9. Blueprint Commitment Matrix & Quality Dial (About Page)
function initCommitmentMatrixDial() {
    const matrixBtns = document.querySelectorAll('.matrix-btn');
    const mBadge = document.getElementById('matrixBadge');
    const mTitle = document.getElementById('matrixTitle');
    const mDesc = document.getElementById('matrixDesc');
    const mImg = document.getElementById('matrixImg');
    const mList = document.getElementById('matrixProofList');

    if (!matrixBtns.length || !mTitle) return;

    const MATRIX_DATA = {
        '1': {
            badge: 'Commitment 01 • Structural Integrity',
            title: '1. Quality Construction & Primary Fe-550D Steel',
            desc: 'We construct structures built for a century of resilience. Using primary Fe-550D corrosion-resistant steel rebar, certified M35 batching concrete, and non-destructive ultrasonic testing, our structural tolerances are among the strictest in South India.',
            img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
            proofs: ['Certified Fe-550D TMT high-elongation steel rebar (IS 1786)', 'Non-destructive UPV concrete density testing > 4.2 km/s', '300-point third-party zero-snag pre-handover audit']
        },
        '2': {
            badge: 'Commitment 02 • Modern Architecture',
            title: '2. Contemporary Architecture & Bioclimatic Light',
            desc: 'Every villa boasts double-height ceilings, seamless indoor-outdoor courtyards, and deep overhangs designed to optimize cross-ventilation and drop interior temperatures.',
            img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
            proofs: ['18-foot double-height foyer and living pavilions', 'Porotherm insulated natural terracotta wall blocks', 'Acoustic UPVC double-glazed panoramic windows']
        },
        '3': {
            badge: 'Commitment 03 • Strategic Growth',
            title: '3. Prime Locations on Booming Expressways',
            desc: 'Strategically positioned directly along national highways (NH-40), premier educational campuses, and financial district corridors for supreme capital appreciation.',
            img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
            proofs: ['Direct 2-minute connectivity to national bypass corridors', 'High capital appreciation corridors across AP & Telangana', 'Surrounded by top medical colleges and international schools']
        },
        '4': {
            badge: 'Commitment 04 • Vedic Harmony',
            title: '4. Thoughtful Planning & 100% Vastu Shastra',
            desc: 'Harmonized layout geometry with genuine Vastu Shastra geomancy, wide tree-lined boulevards, and zero unsightly overhead electrical cables.',
            img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
            proofs: ['100% authentic East/North facing auspicious entries', 'Master Suite positioned in southwest Nairutya power zone', 'Zero surface utility clutter with 100% underground conduits']
        },
        '5': {
            badge: 'Commitment 05 • Resort Lifestyle',
            title: '5. Modern Amenities & 15,000 Sq.Ft Clubhouses',
            desc: 'Infinity lap swimming pools, indoor badminton courts, state-of-the-art fitness suites, children play zones, and manicured party lawns for family celebrations.',
            img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80',
            proofs: ['15,000 Sq.Ft multi-level clubhouse with private theater', 'Ozone-purified infinity swimming pool with toddler splash area', 'Dedicated rubberized outdoor children activity arena']
        },
        '6': {
            badge: 'Commitment 06 • Governance',
            title: '6. Transparent Governance & 100% Clear Titles',
            desc: '40-year forensic revenue title searches, pre-approved bank loans from SBI/HDFC/ICICI, and full RERA carpet area itemized disclosures.',
            img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
            proofs: ['40-year litigation-free clear title certificate', 'SBI, HDFC & ICICI APF loan approvals in place', 'Milestone-linked construction escrow payment schedules']
        },
        '7': {
            badge: 'Commitment 07 • Punctuality',
            title: '7. Timely Execution & Milestone Handover Logs',
            desc: 'Zero project delay policy powered by automated material supply chains, weekly drone progress monitoring, and guaranteed handover schedules.',
            img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
            proofs: ['100% on-time handover record across 15 years', 'Fortnightly video progress reports for resident and NRI buyers', 'Dedicated post-handover facility management team']
        },
        '8': {
            badge: 'Commitment 08 • Wealth Creation',
            title: '8. Long-Term Value & Superior Rental Yields',
            desc: 'Sanctuaries designed to deliver maximum capital appreciation, low lifecycle maintenance costs, and enduring generational pride.',
            img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
            proofs: ['Demonstrated 2.5x capital appreciation over 5-year horizons', 'Low-maintenance architectural materials and solar common power', 'High rental demand from doctors, professionals, and industrialists']
        }
    };

    matrixBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            matrixBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const mId = btn.getAttribute('data-matrix-id');
            const data = MATRIX_DATA[mId];
            if (data) {
                if (mBadge) mBadge.textContent = data.badge;
                if (mTitle) mTitle.textContent = data.title;
                if (mDesc) mDesc.textContent = data.desc;
                if (mImg) mImg.src = data.img;
                if (mList) {
                    mList.innerHTML = data.proofs.map(p => `<li><i class="fas fa-check-circle" style="color: #38A169;"></i> ${p}</li>`).join('');
                }
                if (typeof gsap !== 'undefined') {
                    gsap.fromTo('.matrix-stage-panel', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.35 });
                }
            }
        });
    });
}

// 10. In-Card Unit Configurator & Blueprint Drawer (Portfolio Page)
function initInCardUnitConfigurator() {
    const configBtns = document.querySelectorAll('.card-config-selector .config-btn');
    const drawerToggles = document.querySelectorAll('.btn-toggle-blueprint');

    configBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const parent = btn.closest('.project-grid-card');
            if (!parent) return;

            const allBtnsInCard = parent.querySelectorAll('.config-btn');
            allBtnsInCard.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const readout = parent.querySelector('.config-spec-readout');
            const area = btn.getAttribute('data-unit-area');
            if (readout && area) {
                readout.textContent = area;
            }
        });
    });

    drawerToggles.forEach(btn => {
        btn.addEventListener('click', () => {
            const drawerId = btn.getAttribute('data-drawer-id');
            const drawer = document.getElementById(drawerId);
            if (drawer) {
                const isActive = drawer.classList.contains('active');
                if (isActive) {
                    drawer.classList.remove('active');
                    btn.innerHTML = '<i class="fas fa-eye"></i> Quick Peek Blueprint';
                } else {
                    drawer.classList.add('active');
                    btn.innerHTML = '<i class="fas fa-times"></i> Close Blueprint';
                }
            }
        });
    });
}

// 11. Room-by-Room Spatial Inspector (Project Detail)
function initRoomSpatialInspector() {
    const planBtns = document.querySelectorAll('.floorplan-tab-btn');
    const roomBtns = document.querySelectorAll('.room-pill-btn');
    const rTag = document.getElementById('roomSpecTag');
    const rTitle = document.getElementById('roomSpecTitle');
    const rArea = document.getElementById('roomSpecArea');
    const rDesc = document.getElementById('roomSpecDesc');
    const rImg = document.getElementById('roomSpecImg');

    if (!roomBtns.length || !rTitle) return;

    let currentPlan = '3bhk';
    let currentRoom = 'living';

    const SPATIAL_MATRIX = {
        '2bhk': {
            name: '2 BHK Smart Villa (2,100 Sq.Ft)',
            'living': {
                tag: '2 BHK • Spatial Zone 01',
                title: 'Double-Height Living & Foyer',
                area: '320 Sq.Ft • 16-Foot Ceiling Height',
                desc: 'Open-concept living pavilion with Italian Botticino marble flooring and large sliding acoustic UPVC windows overlooking the landscaped lawn.',
                img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80'
            },
            'master': {
                tag: '2 BHK • Spatial Zone 02',
                title: 'Royal Master Bedroom Suite',
                area: '280 Sq.Ft • Private Sunrise Balcony',
                desc: 'Southwest Nairutya aligned master bedroom with hardwood flooring, ensuite 4-fixture bathroom, and walk-in wardrobe.',
                img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80'
            },
            'kitchen': {
                tag: '2 BHK • Spatial Zone 03',
                title: 'Modular Gourmet Kitchen & Dining',
                area: '180 Sq.Ft • Southeast Agni Vastu',
                desc: 'Compact luxury island kitchen with quartz countertops, soft-close hardware, and attached utility area.',
                img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
            },
            'terrace': {
                tag: '2 BHK • Spatial Zone 04',
                title: 'Rooftop Solar Pavilion',
                area: '550 Sq.Ft • 3.3kW Solar Microgrid',
                desc: 'Cool-roof tiled open terrace with solar panels and panoramic horizon views.',
                img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80'
            },
            'deck': {
                tag: '2 BHK • Spatial Zone 05',
                title: 'Private Garden & Single EV Car Porch',
                area: '240 Sq.Ft • EV Fast Charger Ready',
                desc: 'Covered parking bay with rapid EV charging station and manicured lawn.',
                img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
            }
        },
        '3bhk': {
            name: '3 BHK Royal Duplex (2,650 Sq.Ft)',
            'living': {
                tag: '3 BHK • Spatial Zone 01',
                title: 'Double-Height Living & Grand Teakwood Foyer',
                area: '420 Sq.Ft • 18-Foot Ceiling Height',
                desc: 'Expansive living pavilion featuring floor-to-ceiling double-glazed acoustic UPVC windows, book-matched Italian Botticino marble flooring, and direct sightlines to the private courtyard.',
                img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80'
            },
            'master': {
                tag: '3 BHK • Spatial Zone 02',
                title: 'Royal Master Suite & Walk-In Dresser',
                area: '380 Sq.Ft • Private Cantilever Balcony',
                desc: 'Positioned in the southwest Nairutya power zone, featuring hardwood wooden flooring, private panoramic balcony, and 5-fixture ensuite bathroom with jacuzzi pre-wiring.',
                img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80'
            },
            'kitchen': {
                tag: '3 BHK • Spatial Zone 03',
                title: 'Gourmet Island Kitchen & Dining Deck',
                area: '240 Sq.Ft • Southeast Agni Vastu',
                desc: 'High-end modular quartz countertop layout with built-in hob provisions, utility wash deck, and direct seamless opening into the 12-seater formal dining hall.',
                img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
            },
            'terrace': {
                tag: '3 BHK • Spatial Zone 04',
                title: 'Rooftop Solar Sky Lounge & Stargazing Terrace',
                area: '850 Sq.Ft • Monocrystalline PV Array',
                desc: 'Open-air entertainer lounge pre-wired for a heated jacuzzi, featuring cool-roof heat reflective tiling and 5.5kW high-yield monocrystalline solar panels.',
                img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80'
            },
            'deck': {
                tag: '3 BHK • Spatial Zone 05',
                title: 'Private Garden Lawn & Dual EV Car Porch',
                area: '360 Sq.Ft • 22kW Fast Charger Ready',
                desc: 'Covered parking for two full-sized SUVs with dedicated 22kW rapid EV charging conduit, surrounded by organic herbal lawns and drip-irrigated native flora.',
                img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
            }
        },
        '4bhk': {
            name: '4 BHK Imperial Triplex (3,850 Sq.Ft)',
            'living': {
                tag: '4 BHK • Spatial Zone 01',
                title: 'Grand Palace Living & Double-Height Foyer',
                area: '560 Sq.Ft • 20-Foot Triple-Height Light Well',
                desc: 'Palatial entertaining hall with 20mm imported Statuario marble, acoustic double glazing, and direct indoor waterfall courtyard connection.',
                img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80'
            },
            'master': {
                tag: '4 BHK • Spatial Zone 02',
                title: 'Imperial Presidential Suite & Private Lounge',
                area: '480 Sq.Ft • Dual Cantilever Terrace',
                desc: 'Ultra-luxury suite with teakwood ceiling paneling, walk-in custom closet pavilion, and 6-fixture bathroom with private jacuzzi.',
                img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80'
            },
            'kitchen': {
                tag: '4 BHK • Spatial Zone 03',
                title: 'Chef Culinary Studio & Butler Pantry',
                area: '320 Sq.Ft • Dual Cooking Zones',
                desc: 'State-of-the-art show kitchen with central marble island, built-in Miele appliances, and concealed heavy wet prep kitchen.',
                img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
            },
            'terrace': {
                tag: '4 BHK • Spatial Zone 04',
                title: 'Executive Sky Lounge & Private Infinity Plunge Pool',
                area: '1,200 Sq.Ft • 7.5kW Solar Grid',
                desc: 'Rooftop recreation deck with heated outdoor infinity plunge pool, bar counter, barbecue pavilion, and stargazing lounge.',
                img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80'
            },
            'deck': {
                tag: '4 BHK • Spatial Zone 05',
                title: 'Grand Landscaped Courtyard & 3-Car Covered Porch',
                area: '480 Sq.Ft • Dual 22kW Fast Ports',
                desc: 'Spacious 3-car portico with dual fast charging stations and manicured Japanese Zen garden.',
                img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
            }
        }
    };

    function updateDisplay() {
        const planData = SPATIAL_MATRIX[currentPlan] || SPATIAL_MATRIX['3bhk'];
        const data = planData[currentRoom] || planData['living'];
        if (data) {
            if (rTag) rTag.textContent = data.tag;
            if (rTitle) rTitle.textContent = data.title;
            if (rArea) rArea.textContent = data.area;
            if (rDesc) rDesc.textContent = data.desc;
            if (rImg) rImg.src = data.img;

            if (typeof gsap !== 'undefined') {
                gsap.fromTo('.floorplan-viewer-box', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.35 });
            }
        }
    }

    if (planBtns.length) {
        planBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                planBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                SoundFX.playTap();

                const pKey = btn.getAttribute('data-plan');
                if (pKey && SPATIAL_MATRIX[pKey]) {
                    currentPlan = pKey;
                    updateDisplay();
                    showToast(`Switched to ${SPATIAL_MATRIX[pKey].name}`);
                }
            });
        });
    }

    roomBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            roomBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            SoundFX.playTap();

            const rKey = btn.getAttribute('data-room');
            if (rKey) {
                currentRoom = rKey;
                updateDisplay();
            }
        });
    });

    updateDisplay();
}

// 12. Resort Amenity Campus Navigator (Project Detail)
function initAmenityCampusNavigator() {
    const catBtns = document.querySelectorAll('.amenity-cat-btn');
    const cards = document.querySelectorAll('.amenity-interactive-card');

    if (!catBtns.length || !cards.length) return;

    catBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            catBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-amenity-cat');

            cards.forEach(card => {
                const cardCats = card.getAttribute('data-cat') || '';
                if (filter === 'all' || cardCats.includes(filter)) {
                    card.style.display = 'flex';
                    if (typeof gsap !== 'undefined') {
                        gsap.fromTo(card, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.3 });
                    }
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// 13. Multi-Modal Commute Simulator (Project Detail)
function initCommuteSimulator() {
    const modeBtns = document.querySelectorAll('.commute-mode-btn');
    const cNh = document.getElementById('ctime-nh');
    const cSchool = document.getElementById('ctime-school');
    const cHospital = document.getElementById('ctime-hospital');
    const cAirport = document.getElementById('ctime-airport');

    if (!modeBtns.length || !cNh) return;

    const COMMUTE_DATA = {
        'car': { nh: '2 Mins (1.2 km)', school: '5 Mins (2.8 km)', hospital: '8 Mins (4.5 km)', airport: '45 Mins (52 km)' },
        'bike': { nh: '3 Mins (1.2 km)', school: '6 Mins (2.8 km)', hospital: '9 Mins (4.5 km)', airport: '55 Mins (52 km)' },
        'cycle': { nh: '5 Mins (1.2 km)', school: '12 Mins (2.8 km)', hospital: '18 Mins (4.5 km)', airport: 'Transit Bus (40 Mins)' }
    };

    modeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const mode = btn.getAttribute('data-cmode');
            const data = COMMUTE_DATA[mode];
            if (data) {
                cNh.textContent = data.nh;
                cSchool.textContent = data.school;
                cHospital.textContent = data.hospital;
                cAirport.textContent = data.airport;

                if (typeof gsap !== 'undefined') {
                    gsap.fromTo('.commute-dest-item', { opacity: 0, x: 10 }, { opacity: 1, x: 0, duration: 0.25, stagger: 0.05 });
                }
            }
        });
    });
}

// 14. Sustainability Proof Console & Developer Risk Assessor
function initSustainabilityProofConsole() {
    const proofBtns = document.querySelectorAll('.proof-nav-btn');
    const pTag = document.getElementById('proofPillarTag');
    const pTitle = document.getElementById('proofPillarTitle');
    const pDesc = document.getElementById('proofPillarDesc');
    const pImg = document.getElementById('proofPillarImg');
    const pList = document.getElementById('proofPillarList');

    if (proofBtns.length && pTitle) {
        const SUSTAIN_DATA = {
            '1': {
                tag: 'Standard 01 • Legal Due-Diligence',
                title: 'Unconditional Trust & 40-Year Forensic Title Certainty',
                desc: 'At Vaaraahi Group, we believe legal transparency is the primary foundation of every home. We conduct rigorous 40-year title searches across revenue registries, obtain non-encumbrance certifications, and secure all APF clearances before launching a project.',
                img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
                points: [
                    { title: '40-Year Legal Search', desc: 'Senior High Court Advocate Vetting' },
                    { title: 'SBI, HDFC & ICICI APF', desc: 'Direct Pre-Approved Project Loans' },
                    { title: 'Online Buyer Vault', desc: '24/7 Access to Revenue Deeds' }
                ]
            },
            '2': {
                tag: 'Standard 02 • Structural Longevity',
                title: 'Engineered Longevity with Fe-550D Rebars & M35 Concrete',
                desc: 'We construct structures meant to withstand centuries, not decades. Using certified Fe-550D TMT reinforcement rebar, digitized concrete batching, and non-destructive ultrasonic testing, our engineering tolerances are among the strictest in South India.',
                img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
                points: [
                    { title: 'Fe-550D Primary Rebar', desc: 'Corrosion-Resistant Elongation Steel' },
                    { title: 'UPV Velocity > 4.2 km/s', desc: 'Ultrasonic Concrete Density Audits' },
                    { title: '300-Point Snag Guarantee', desc: 'Third-Party Zero Defect Sign-off' }
                ]
            },
            '3': {
                tag: 'Standard 03 • Absolute Transparency',
                title: '100% Fixed Price Assurance & RERA Carpet Area',
                desc: 'No hidden clauses, no surprise escalating amenities charges, and no ambiguous square-foot calculations. Our contracts clearly detail carpet area, built-up area, and all-inclusive pricing breakdown.',
                img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
                points: [
                    { title: 'RERA Carpet Area Standard', desc: 'Zero Super Built-Up Inflation' },
                    { title: 'Milestone Escrow Billing', desc: 'Pay Linked to Verified Construction' },
                    { title: 'Fortnightly Drone Logs', desc: 'Transparent Video Updates for NRIs' }
                ]
            },
            '4': {
                tag: 'Standard 04 • Eco Stewardship',
                title: '100% Rainwater Percolation Aquifers & Native Flora',
                desc: 'Our gated developments give back to nature. We integrate deep groundwater percolation recharge pits, native drought-tolerant trees, permeable road paving, and 100% solar common power grids.',
                img: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80',
                points: [
                    { title: 'Zero Runoff Aquifers', desc: 'Percolation Recharging Wells' },
                    { title: '40% Native Tree Cover', desc: 'Drought-Tolerant Regional Species' },
                    { title: 'Permeable Avenue Pavers', desc: 'Natural Soil Hydrological Absorption' }
                ]
            },
            '5': {
                tag: 'Standard 05 • Vastu Precision',
                title: 'Vedic Geomancy & Double-Height Natural Airflow',
                desc: 'Every villa layout is harmonized with natural directional forces according to pure Vastu Shastra geomancy while boasting double-height ceilings, Italian marble flooring, and expansive open-plan living.',
                img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
                points: [
                    { title: '100% Authentic Vastu', desc: 'East/North Auspicious Alignments' },
                    { title: '5°C Cooler Interiors', desc: 'Porotherm Thermal Mass Cavities' },
                    { title: 'Underground Cabling', desc: 'Zero Overhead Wires on Streetscapes' }
                ]
            }
        };

        proofBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                proofBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const pId = btn.getAttribute('data-pillar-id');
                const data = SUSTAIN_DATA[pId];
                if (data) {
                    if (pTag) pTag.textContent = data.tag;
                    if (pTitle) pTitle.textContent = data.title;
                    if (pDesc) pDesc.textContent = data.desc;
                    if (pImg) pImg.src = data.img;
                    if (pList) {
                        pList.innerHTML = data.points.map(pt => `
                            <div class="proof-point-card">
                                <i class="fas fa-check-circle" style="color: var(--color-gold);"></i>
                                <div>
                                    <strong>${pt.title}</strong>
                                    <span>${pt.desc}</span>
                                </div>
                            </div>
                        `).join('');
                    }
                    if (typeof gsap !== 'undefined') {
                        gsap.fromTo('.proof-pillar-stage', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.35 });
                    }
                }
            });
        });
    }

    // Assessor Mode Switcher
    const assessorBtns = document.querySelectorAll('.assessor-btn');
    const tableRows = document.querySelectorAll('.comparison-row');

    if (assessorBtns.length && tableRows.length) {
        assessorBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                assessorBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const mode = btn.getAttribute('data-assessor-mode');
                tableRows.forEach(row => {
                    const colVaaraahi = row.querySelector('.check-green');
                    const colRisk = row.querySelector('.cross-red');

                    if (mode === 'all') {
                        if (colVaaraahi) colVaaraahi.style.opacity = '1';
                        if (colRisk) colRisk.style.opacity = '1';
                    } else if (mode === 'vaaraahi') {
                        if (colVaaraahi) colVaaraahi.style.opacity = '1';
                        if (colRisk) colRisk.style.opacity = '0.3';
                    } else if (mode === 'risks') {
                        if (colVaaraahi) colVaaraahi.style.opacity = '0.3';
                        if (colRisk) colRisk.style.opacity = '1';
                    }
                });
            });
        });
    }
}

// 15. Eco-Savings & Carbon Impact Calculator (Sustainability Page)
function initEcoSavingsCalculator() {
    const areaSlider = document.getElementById('ecoVillaArea');
    const familySlider = document.getElementById('ecoFamilyCount');
    const dispArea = document.getElementById('dispEcoArea');
    const dispFamily = document.getElementById('dispEcoFamily');

    const outWater = document.getElementById('ecoValWater');
    const outSolar = document.getElementById('ecoValSolar');
    const outHvac = document.getElementById('ecoValHvac');
    const outCo2 = document.getElementById('ecoValCo2');

    if (!areaSlider || !familySlider || !outWater) return;

    function recalculateEco() {
        const area = parseInt(areaSlider.value, 10);
        const family = parseInt(familySlider.value, 10);

        if (dispArea) dispArea.textContent = `${area.toLocaleString()} Sq.Ft`;
        if (dispFamily) dispFamily.textContent = `${family} Persons`;

        // Mathematical formulas for ecological returns
        const waterHarvested = Math.round(area * 45.3); // litres/year
        const solarKwh = Math.round(area * 2.25); // kWh/year
        const hvacSavings = Math.round(area * 12); // INR saved/year
        const co2Offset = Math.round(solarKwh * 0.82); // kg CO2 offset/year

        outWater.textContent = `${waterHarvested.toLocaleString()} Litres`;
        outSolar.textContent = `${solarKwh.toLocaleString()} kWh`;
        outHvac.textContent = `₹${hvacSavings.toLocaleString()} Saved`;
        outCo2.textContent = `${co2Offset.toLocaleString()} kg CO₂`;
    }

    areaSlider.addEventListener('input', recalculateEco);
    familySlider.addEventListener('input', recalculateEco);
    recalculateEco();
}

// 16. Careers Culture & Department Role Matchmaker
function initCareersCultureAndMatchmaker() {
    const deptBtns = document.querySelectorAll('.career-dept-btn');
    const roleItems = document.querySelectorAll('.careers-roles-grid .role-card-item');

    if (deptBtns.length && roleItems.length) {
        deptBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                deptBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const dept = btn.getAttribute('data-dept');

                roleItems.forEach(role => {
                    const roleDept = role.getAttribute('data-dept') || '';
                    if (dept === 'all' || roleDept === dept) {
                        role.style.display = 'flex';
                        if (typeof gsap !== 'undefined') {
                            gsap.fromTo(role, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3 });
                        }
                    } else {
                        role.style.display = 'none';
                    }
                });
            });
        });
    }

    // Culture card interactive deep-dive
    const cultureCards = document.querySelectorAll('.culture-explorer-grid .culture-card');
    cultureCards.forEach(card => {
        card.addEventListener('click', () => {
            cultureCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        });
    });
}

// 17. Regional HQ & Experience Centre Navigator (Contact Page)
function initRegionalHQNavigator() {
    const officeBtns = document.querySelectorAll('.office-tab-btn');
    const badge = document.getElementById('officeTypeBadge');
    const title = document.getElementById('officeTitle');
    const address = document.getElementById('officeAddress');
    const phone = document.getElementById('officePhone');
    const email = document.getElementById('officeEmail');
    const hours = document.getElementById('officeHours');
    const img = document.getElementById('officeImg');

    if (!officeBtns.length || !title) return;

    const OFFICE_DATA = {
        'hyd': {
            badge: 'Corporate Headquarters',
            title: 'Vaaraahi Corporate Tower, Hyderabad',
            address: 'Floor 8, Vaaraahi Signature Towers, Financial District, Nanakramguda, Hyderabad, Telangana 500032',
            phone: '+91 40 2988 7700 / +91 98765 43210',
            email: 'hyd@vaaraahigroup.com',
            hours: 'Mon – Sat: 9:00 AM – 7:30 PM | Sun: 10:00 AM – 5:00 PM',
            img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'
        },
        'proddatur': {
            badge: 'Regional Operations Hub',
            title: 'Vaaraahi Experience Center, Proddatur',
            address: 'Main Bypass Road, Near RTC Complex, YSR Kadapa District, Andhra Pradesh 516360',
            phone: '+91 8564 255 100 / +91 98765 43211',
            email: 'proddatur@vaaraahigroup.com',
            hours: 'Mon – Sat: 9:00 AM – 8:00 PM | Sun: 9:30 AM – 6:30 PM',
            img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
        },
        'rayachoty': {
            badge: 'Site Experience Gallery',
            title: 'Vaaraahi Grandeur Site Pavilion, Rayachoty',
            address: 'Madanapalle Bypass Road, Near NH-40 Junction, Annamayya District, Andhra Pradesh 516269',
            phone: '+91 8561 244 800 / +91 98765 43212',
            email: 'rayachoty@vaaraahigroup.com',
            hours: 'Mon – Sun: 9:00 AM – 7:30 PM (Site Tours Active Daily)',
            img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80'
        },
        'jammalamadugu': {
            badge: 'Township Project Hub',
            title: 'Vaaraahi Green Meadows Office, Jammalamadugu',
            address: 'Gandhi Road, Commercial Center, YSR Kadapa District, Andhra Pradesh 516434',
            phone: '+91 8560 233 400 / +91 98765 43213',
            email: 'jmdg@vaaraahigroup.com',
            hours: 'Mon – Sat: 9:30 AM – 7:00 PM | Sun: 10:00 AM – 4:00 PM',
            img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
        }
    };

    officeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            officeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            SoundFX.playTap();

            const offKey = btn.getAttribute('data-office');
            const data = OFFICE_DATA[offKey];
            if (data) {
                if (badge) badge.textContent = data.badge;
                if (title) title.textContent = data.title;
                if (address) address.textContent = data.address;
                if (phone) phone.textContent = data.phone;
                if (email) email.textContent = data.email;
                if (hours) hours.textContent = data.hours;
                if (img) img.src = data.img;

                if (typeof gsap !== 'undefined') {
                    gsap.fromTo('.office-display-card', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.35 });
                }
            }
        });
    });
}

// (Duplicate initCustomCursor removed - handled by primary cursor engine at line 335)

// ===================================================================
// VAARAAHI GROUP — PEAK 3D & WEBGL FLAGSHIP ANIMATION ENGINES
// ===================================================================

// ================= 20. THREE.JS HERO 3D ARCHITECTURAL STAGE (🔴 PEAK) =================
function initHero3DStage() {
    const canvas = document.getElementById('hero3dCanvas');
    if (!canvas || typeof THREE === 'undefined') return;

    const stageWrap = canvas.parentElement;
    let width = stageWrap.clientWidth || window.innerWidth;
    let height = stageWrap.clientHeight || window.innerHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x04100B, 0.022);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 200);
    camera.position.set(0, 7, 27);

    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    // ================= LIGHTING RIG =================
    const ambientLight = new THREE.AmbientLight(0x122c20, 1.6);
    scene.add(ambientLight);

    // Primary Sun Light with crisp architectural soft shadows
    const sunLight = new THREE.DirectionalLight(0xFFE5B4, 2.6);
    sunLight.position.set(22, 28, 14);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 80;
    sunLight.shadow.camera.left = -20;
    sunLight.shadow.camera.right = 20;
    sunLight.shadow.camera.top = 20;
    sunLight.shadow.camera.bottom = -20;
    sunLight.shadow.bias = -0.0004;
    scene.add(sunLight);

    // Gold Rim & Skylight Fill
    const goldFillLight = new THREE.DirectionalLight(0xC5A059, 1.4);
    goldFillLight.position.set(-18, 12, -10);
    scene.add(goldFillLight);

    // Warm Interior Ground Living Light
    const groundInteriorLight = new THREE.PointLight(0xFFA834, 3.2, 18);
    groundInteriorLight.position.set(-1, 2.4, 1.5);
    scene.add(groundInteriorLight);

    // Warm Master Suite Interior Light
    const masterInteriorLight = new THREE.PointLight(0xFFC266, 2.6, 16);
    masterInteriorLight.position.set(2.5, 5.2, 1.2);
    scene.add(masterInteriorLight);

    // Pool Underwater LED Glow
    const poolGlowLight = new THREE.PointLight(0x38EF7D, 1.2, 12);
    poolGlowLight.position.set(-4, 0.2, 5);
    scene.add(poolGlowLight);

    // ================= ARCHITECTURAL VILLA GROUP =================
    const villaGroup = new THREE.Group();
    scene.add(villaGroup);

    // ================= HIGH-END LUXURY MATERIALS =================
    const travertineMat = new THREE.MeshStandardMaterial({
        color: 0xEDE5D8,
        roughness: 0.48,
        metalness: 0.04
    });

    const darkBasaltMat = new THREE.MeshStandardMaterial({
        color: 0x13211A,
        roughness: 0.32,
        metalness: 0.25
    });

    const woodLouverMat = new THREE.MeshStandardMaterial({
        color: 0x8A5728,
        roughness: 0.45,
        metalness: 0.28
    });

    const goldTrimMat = new THREE.MeshStandardMaterial({
        color: 0xD4AF37,
        metalness: 0.92,
        roughness: 0.18
    });

    const glassMat = new THREE.MeshStandardMaterial({
        color: 0x8AE5D8,
        transparent: true,
        opacity: 0.38,
        roughness: 0.05,
        metalness: 0.15
    });

    const warmInteriorMat = new THREE.MeshBasicMaterial({
        color: 0xFFAA33
    });

    const ledWarmStripMat = new THREE.MeshBasicMaterial({
        color: 0xFFEAB5
    });

    const poolLedStripMat = new THREE.MeshBasicMaterial({
        color: 0x48DF9B
    });

    const waterMat = new THREE.MeshStandardMaterial({
        color: 0x062016,
        roughness: 0.03,
        metalness: 0.94,
        transparent: true,
        opacity: 0.92
    });

    const foliageMat = new THREE.MeshStandardMaterial({
        color: 0x1B4B38,
        roughness: 0.8,
        metalness: 0.05
    });

    // -------------------------------------------------------------
    // 1. SITE FOUNDATION, SUBTERRANEAN PLINTH & INFINITY POOL
    // -------------------------------------------------------------
    // Base Subterranean Plinth (Dark Green Slate)
    const basePlinthGeo = new THREE.BoxGeometry(32, 0.4, 26);
    const basePlinthMesh = new THREE.Mesh(basePlinthGeo, darkBasaltMat);
    basePlinthMesh.position.set(0, -0.2, 0);
    basePlinthMesh.receiveShadow = true;
    villaGroup.add(basePlinthMesh);

    // Stepped Main Travertine Terrace Podium
    const podiumGeo = new THREE.BoxGeometry(25, 0.6, 19);
    const podiumMesh = new THREE.Mesh(podiumGeo, travertineMat);
    podiumMesh.position.set(0, 0.3, 0);
    podiumMesh.receiveShadow = true;
    podiumMesh.castShadow = true;
    villaGroup.add(podiumMesh);

    // Infinity Reflection Pool Basin
    const poolBasinGeo = new THREE.BoxGeometry(15, 0.28, 8);
    const poolBasinMesh = new THREE.Mesh(poolBasinGeo, darkBasaltMat);
    poolBasinMesh.position.set(-3.5, 0.46, 5.5);
    poolBasinMesh.receiveShadow = true;
    villaGroup.add(poolBasinMesh);

    // Water Surface Plane
    const poolWaterGeo = new THREE.PlaneGeometry(14.6, 7.6, 32, 32);
    const poolWaterMesh = new THREE.Mesh(poolWaterGeo, waterMat);
    poolWaterMesh.rotation.x = -Math.PI / 2;
    poolWaterMesh.position.set(-3.5, 0.61, 5.5);
    poolWaterMesh.receiveShadow = true;
    villaGroup.add(poolWaterMesh);

    // Pool Perimeter Underwater LED Ribbon
    const poolLedGeo = new THREE.BoxGeometry(14.8, 0.04, 0.08);
    const poolLedMesh = new THREE.Mesh(poolLedGeo, poolLedStripMat);
    poolLedMesh.position.set(-3.5, 0.62, 9.35);
    villaGroup.add(poolLedMesh);

    // Floating Stepping Stone Pavers across the Pool
    const stepGeo = new THREE.BoxGeometry(2.4, 0.16, 1.4);
    for (let i = 0; i < 4; i++) {
        const step = new THREE.Mesh(stepGeo, travertineMat);
        step.position.set(5.5, 0.65, 3.5 + i * 1.8);
        step.castShadow = true;
        step.receiveShadow = true;
        villaGroup.add(step);
    }

    // -------------------------------------------------------------
    // 2. LEVEL 01: GRAND DOUBLE-HEIGHT LIVING PAVILION & FOYER
    // -------------------------------------------------------------
    // Main Ground Structural Enclosure (Charcoal Slate / Dark Basalt)
    const l1MainGeo = new THREE.BoxGeometry(17, 3.4, 13);
    const l1MainMesh = new THREE.Mesh(l1MainGeo, darkBasaltMat);
    l1MainMesh.position.set(-0.8, 2.3, 0);
    l1MainMesh.castShadow = true;
    l1MainMesh.receiveShadow = true;
    villaGroup.add(l1MainMesh);

    // Floor-to-Ceiling Panoramic Glass Facade
    const l1GlassGeo = new THREE.BoxGeometry(13.6, 3.0, 0.15);
    const l1GlassMesh = new THREE.Mesh(l1GlassGeo, glassMat);
    l1GlassMesh.position.set(-0.8, 2.3, 6.55);
    villaGroup.add(l1GlassMesh);

    // Side Glass Window
    const l1SideGlassGeo = new THREE.BoxGeometry(0.15, 3.0, 9.5);
    const l1SideGlassMesh = new THREE.Mesh(l1SideGlassGeo, glassMat);
    l1SideGlassMesh.position.set(7.68, 2.3, 0);
    villaGroup.add(l1SideGlassMesh);

    // Architectural Bronze Window Framing Mullions
    const mullionMat = goldTrimMat;
    for (let x = -6.5; x <= 5.5; x += 3.0) {
        const mullionGeo = new THREE.BoxGeometry(0.08, 3.0, 0.2);
        const mullion = new THREE.Mesh(mullionGeo, mullionMat);
        mullion.position.set(x, 2.3, 6.6);
        mullion.castShadow = true;
        villaGroup.add(mullion);
    }

    // Warm Illuminated Living Room Interior Chamber
    const l1InteriorGeo = new THREE.BoxGeometry(11, 2.6, 8);
    const l1InteriorMesh = new THREE.Mesh(l1InteriorGeo, warmInteriorMat);
    l1InteriorMesh.position.set(-0.8, 2.2, 1.5);
    villaGroup.add(l1InteriorMesh);

    // Cantilevered Entrance Porch Canopy with Gold Trim
    const porchCanopyGeo = new THREE.BoxGeometry(6.5, 0.3, 4.5);
    const porchCanopy = new THREE.Mesh(porchCanopyGeo, travertineMat);
    porchCanopy.position.set(5.5, 3.8, 6.5);
    porchCanopy.castShadow = true;
    villaGroup.add(porchCanopy);

    // Recessed Warm LED Strip Under Porch
    const porchLedGeo = new THREE.BoxGeometry(6.2, 0.04, 0.1);
    const porchLed = new THREE.Mesh(porchLedGeo, ledWarmStripMat);
    porchLed.position.set(5.5, 3.63, 8.65);
    villaGroup.add(porchLed);

    // -------------------------------------------------------------
    // 3. LEVEL 02: CANTILEVERED MASTER SUITES & BALCONY TERRACE
    // -------------------------------------------------------------
    // Cantilevered Upper Box (Travertine & Italian Marble Block)
    const l2MainGeo = new THREE.BoxGeometry(15, 3.1, 11.5);
    const l2MainMesh = new THREE.Mesh(l2MainGeo, travertineMat);
    l2MainMesh.position.set(1.8, 5.3, 0.8);
    l2MainMesh.castShadow = true;
    l2MainMesh.receiveShadow = true;
    villaGroup.add(l2MainMesh);

    // Recessed Balcony Void / Cutout (Dark Charcoal Inset)
    const l2BalconyGeo = new THREE.BoxGeometry(8.5, 2.6, 3.2);
    const l2BalconyMesh = new THREE.Mesh(l2BalconyGeo, darkBasaltMat);
    l2BalconyMesh.position.set(4.5, 5.1, 5.6);
    l2BalconyMesh.castShadow = true;
    l2BalconyMesh.receiveShadow = true;
    villaGroup.add(l2BalconyMesh);

    // Master Bedroom Panoramic Glass Corner
    const l2GlassGeo = new THREE.BoxGeometry(8.2, 2.5, 0.15);
    const l2GlassMesh = new THREE.Mesh(l2GlassGeo, glassMat);
    l2GlassMesh.position.set(4.5, 5.1, 4.05);
    villaGroup.add(l2GlassMesh);

    // Master Suite Warm Glowing Interior
    const l2InteriorGeo = new THREE.BoxGeometry(7.5, 2.2, 4);
    const l2InteriorMesh = new THREE.Mesh(l2InteriorGeo, warmInteriorMat);
    l2InteriorMesh.position.set(4.5, 5.0, 1.8);
    villaGroup.add(l2InteriorMesh);

    // Balcony Frameless Glass Balustrade
    const balustradeGeo = new THREE.BoxGeometry(8.4, 1.1, 0.08);
    const balustradeMesh = new THREE.Mesh(balustradeGeo, glassMat);
    balustradeMesh.position.set(4.5, 4.4, 7.15);
    villaGroup.add(balustradeMesh);

    // Balustrade Champagne Gold Handrail
    const handrailGeo = new THREE.BoxGeometry(8.4, 0.06, 0.12);
    const handrailMesh = new THREE.Mesh(handrailGeo, goldTrimMat);
    handrailMesh.position.set(4.5, 4.95, 7.15);
    handrailMesh.castShadow = true;
    villaGroup.add(handrailMesh);

    // Architectural Vertical Louver Slat Screen (14 Bronze Louvers)
    for (let i = 0; i < 14; i++) {
        const louverGeo = new THREE.BoxGeometry(0.1, 2.9, 0.35);
        const louver = new THREE.Mesh(louverGeo, woodLouverMat);
        louver.position.set(-5.0 + i * 0.45, 5.2, 6.6);
        louver.castShadow = true;
        louver.receiveShadow = true;
        villaGroup.add(louver);
    }

    // Under-Cantilever LED Ribbon Lighting
    const underCantileverLedGeo = new THREE.BoxGeometry(14.8, 0.06, 0.12);
    const underCantileverLed = new THREE.Mesh(underCantileverLedGeo, ledWarmStripMat);
    underCantileverLed.position.set(1.8, 3.72, 6.5);
    villaGroup.add(underCantileverLed);

    // -------------------------------------------------------------
    // 4. LEVEL 03: ROOFTOP SOLAR SKY LOUNGE & PERGOLA CANOPY
    // -------------------------------------------------------------
    // Floating Slender Roof Canopy Slab
    const roofSlabGeo = new THREE.BoxGeometry(17.5, 0.38, 13.5);
    const roofSlabMesh = new THREE.Mesh(roofSlabGeo, darkBasaltMat);
    roofSlabMesh.position.set(1.8, 7.0, 0.8);
    roofSlabMesh.castShadow = true;
    roofSlabMesh.receiveShadow = true;
    villaGroup.add(roofSlabMesh);

    // Rooftop Open Pergola Beam Matrix (8 Cantilevered Slat Beams)
    for (let b = 0; b < 9; b++) {
        const pergolaGeo = new THREE.BoxGeometry(0.16, 0.32, 6.5);
        const pergola = new THREE.Mesh(pergolaGeo, goldTrimMat);
        pergola.position.set(-2.0 + b * 0.9, 7.35, 4.2);
        pergola.castShadow = true;
        pergola.receiveShadow = true;
        villaGroup.add(pergola);
    }

    // High-Efficiency Solar Microgrid Tiles on Roof
    const solarGeo = new THREE.BoxGeometry(6.5, 0.08, 4.5);
    const solarMat = new THREE.MeshStandardMaterial({
        color: 0x0B1B2B,
        roughness: 0.15,
        metalness: 0.85
    });
    const solarArray = new THREE.Mesh(solarGeo, solarMat);
    solarArray.position.set(-2.5, 7.24, -1.8);
    solarArray.rotation.x = 0.08;
    solarArray.castShadow = true;
    villaGroup.add(solarArray);

    // Rooftop Green Garden Planter Box & Foliage
    const planterGeo = new THREE.BoxGeometry(5.2, 0.5, 1.2);
    const planter = new THREE.Mesh(planterGeo, travertineMat);
    planter.position.set(6.2, 7.45, 6.5);
    planter.castShadow = true;
    villaGroup.add(planter);

    const foliageGeo = new THREE.BoxGeometry(4.8, 0.45, 0.9);
    const foliage = new THREE.Mesh(foliageGeo, foliageMat);
    foliage.position.set(6.2, 7.85, 6.5);
    foliage.castShadow = true;
    villaGroup.add(foliage);

    // -------------------------------------------------------------
    // 5. SLENDER GOLD ARCHITECTURAL COLUMNS & SITE ACCENTS
    // -------------------------------------------------------------
    const colGeo = new THREE.CylinderGeometry(0.12, 0.12, 6.6, 20);
    const columnCoordinates = [
        [-8.2, 3.6, 6.0],
        [-8.2, 3.6, -5.8],
        [8.5, 3.6, 5.8],
        [8.5, 3.6, -5.8],
        [3.8, 3.6, 6.4]
    ];
    columnCoordinates.forEach(([x, y, z]) => {
        const col = new THREE.Mesh(colGeo, goldTrimMat);
        col.position.set(x, y, z);
        col.castShadow = true;
        col.receiveShadow = true;
        villaGroup.add(col);
    });

    // Pathway Modernist LED Bollards
    const bollardGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.9, 12);
    const bollardHeadGeo = new THREE.CylinderGeometry(0.09, 0.09, 0.15, 12);
    const bollardPositions = [
        [7.5, 0.75, 4.2],
        [7.5, 0.75, 7.2],
        [-9.5, 0.55, 3.5],
        [-9.5, 0.55, 7.5]
    ];
    bollardPositions.forEach(([bx, by, bz]) => {
        const bollard = new THREE.Mesh(bollardGeo, darkBasaltMat);
        bollard.position.set(bx, by, bz);
        bollard.castShadow = true;
        villaGroup.add(bollard);

        const bollardHead = new THREE.Mesh(bollardHeadGeo, ledWarmStripMat);
        bollardHead.position.set(bx, by + 0.45, bz);
        villaGroup.add(bollardHead);
    });

    // ================= 6. ATMOSPHERIC FLOATING GOLD DUST =================
    const particleCount = 1200;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
        particlePositions[i] = (Math.random() - 0.5) * 55;
        particlePositions[i + 1] = Math.random() * 28 - 2;
        particlePositions[i + 2] = (Math.random() - 0.5) * 55;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
        color: 0xD4AF37,
        size: 0.22,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending
    });
    const particleField = new THREE.Points(particleGeo, particleMat);
    scene.add(particleField);

    // ================= INTERACTION RIG =================
    let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    window.addEventListener('mousemove', (e) => {
        mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    // Scroll-Scrubbed GSAP Camera Dolly
    let scrollProgress = 0;
    if (typeof ScrollTrigger !== 'undefined' && typeof gsap !== 'undefined') {
        ScrollTrigger.create({
            trigger: '.hero-webgl-stage',
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
            onUpdate: (self) => {
                scrollProgress = self.progress;
            }
        });
    }

    // Lighting Modes
    let currentAngle = 0.35;
    let baseCamRadius = 26;
    let baseCamHeight = 6.8;

    const camBtns = document.querySelectorAll('.telemetry-cam-btn');
    camBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            camBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const mode = btn.getAttribute('data-cam-mode');
            if (mode === 'orbit') {
                baseCamRadius = 26;
                baseCamHeight = 6.8;
                sunLight.color.setHex(0xFFE5B4);
                sunLight.intensity = 2.6;
                ambientLight.color.setHex(0x122c20);
                ambientLight.intensity = 1.6;
                groundInteriorLight.intensity = 3.2;
                masterInteriorLight.intensity = 2.6;
            } else if (mode === 'zenith') {
                baseCamRadius = 22;
                baseCamHeight = 16;
                sunLight.color.setHex(0xFFFFFF);
                sunLight.intensity = 3.4;
                ambientLight.color.setHex(0x1a3d2e);
                ambientLight.intensity = 2.0;
                groundInteriorLight.intensity = 2.0;
                masterInteriorLight.intensity = 1.8;
            } else if (mode === 'dusk') {
                baseCamRadius = 28;
                baseCamHeight = 4.5;
                sunLight.color.setHex(0xFF6B35);
                sunLight.intensity = 1.8;
                ambientLight.color.setHex(0x0a1c15);
                ambientLight.intensity = 1.2;
                groundInteriorLight.intensity = 4.8;
                masterInteriorLight.intensity = 4.2;
                poolGlowLight.intensity = 2.4;
            }
            if (typeof SoundFX !== 'undefined' && typeof SoundFX.playSolarShift === 'function') {
                SoundFX.playSolarShift();
            }
        });
    });

    // ================= RENDER ANIMATION LOOP =================
    let clock = new THREE.Clock();
    let isRunning = true;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            isRunning = entry.isIntersecting;
        });
    }, { threshold: 0.05 });
    observer.observe(stageWrap);

    function renderLoop() {
        requestAnimationFrame(renderLoop);
        if (!isRunning) return;

        const delta = clock.getDelta();
        const elapsedTime = clock.getElapsedTime();

        // Smooth Mouse Lerping
        mouse.x += (mouse.targetX - mouse.x) * 0.04;
        mouse.y += (mouse.targetY - mouse.y) * 0.04;

        // Slow cinematic orbit
        currentAngle += delta * 0.06;

        // Camera Dynamics with Scroll Scrub & Parallax
        const scrollLift = scrollProgress * 16;
        const scrollPull = scrollProgress * 14;
        const finalRadius = baseCamRadius + scrollPull;
        const finalHeight = baseCamHeight + scrollLift + mouse.y * 2.2;

        camera.position.x = Math.sin(currentAngle) * finalRadius + mouse.x * 3.2;
        camera.position.z = Math.cos(currentAngle) * finalRadius;
        camera.position.y = finalHeight;
        camera.lookAt(0, 3.8 + scrollLift * 0.25, 0);

        // Water ripple / shimmer animation
        const waterPositions = poolWaterGeo.attributes.position.array;
        for (let w = 2; w < waterPositions.length; w += 3) {
            const u = waterPositions[w - 2];
            const v = waterPositions[w - 1];
            waterPositions[w] = Math.sin(u * 1.5 + elapsedTime * 2.2) * 0.03 + Math.cos(v * 1.8 + elapsedTime * 1.8) * 0.03;
        }
        poolWaterGeo.attributes.position.needsUpdate = true;

        // Floating Golden Dust Motion
        particleField.rotation.y = elapsedTime * 0.015;
        const pArr = particleGeo.attributes.position.array;
        for (let i = 1; i < particleCount * 3; i += 3) {
            pArr[i] += Math.sin(elapsedTime * 0.8 + i) * 0.006;
        }
        particleGeo.attributes.position.needsUpdate = true;

        renderer.render(scene, camera);
    }
    renderLoop();

    // Window Resize Handler
    window.addEventListener('resize', () => {
        width = stageWrap.clientWidth || window.innerWidth;
        height = stageWrap.clientHeight || window.innerHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    });
}

// ================= 21. EXTRUDED 3D STATS COUNTERS (🟡) =================
function initStats3DBlocks() {
    const statBlocks = document.querySelectorAll('.stat-3d-block');
    if (!statBlocks.length) return;

    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        statBlocks.forEach(block => {
            const numElem = block.querySelector('.stat-3d-num');
            if (!numElem) return;
            const targetVal = parseInt(numElem.getAttribute('data-target') || '0', 10);
            const prefix = numElem.getAttribute('data-prefix') || '';
            const suffix = numElem.getAttribute('data-suffix') || '';

            ScrollTrigger.create({
                trigger: block,
                start: 'top 88%',
                once: true,
                onEnter: () => {
                    let counterObj = { val: 0 };
                    gsap.to(counterObj, {
                        val: targetVal,
                        duration: 2.2,
                        ease: 'power2.out',
                        onUpdate: () => {
                            numElem.textContent = `${prefix}${Math.round(counterObj.val).toLocaleString()}${suffix}`;
                        },
                        onComplete: () => {
                            block.classList.add('glare-active');
                            setTimeout(() => block.classList.remove('glare-active'), 1400);
                        }
                    });
                }
            });

            // 3D Perspective Tilt on Hover
            block.addEventListener('mousemove', (e) => {
                const rect = block.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                const rotX = (y / (rect.height / 2)) * -8;
                const rotY = (x / (rect.width / 2)) * 8;
                block.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-8px) scale(1.02)`;
            });
            block.addEventListener('mouseleave', () => {
                block.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)';
            });
        });
    }
}

// ================= 22. TRUE 3D CURVED ARC PROJECT CAROUSEL (🔴 PEAK) =================
function initPeak3DCurvedCarousel() {
    const track = document.getElementById('carousel3dTrack');
    if (!track) return;

    const cards = Array.from(track.querySelectorAll('.carousel-3d-card'));
    const dotsWrap = document.getElementById('carousel3dDots');
    const btnPrev = document.getElementById('carousel3dPrev');
    const btnNext = document.getElementById('carousel3dNext');

    if (!cards.length) return;

    let currentIndex = 0;
    const total = cards.length;

    // Build pagination dots
    if (dotsWrap) {
        dotsWrap.innerHTML = '';
        cards.forEach((_, idx) => {
            const dot = document.createElement('div');
            dot.className = `carousel-3d-dot ${idx === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => updateCarousel(idx));
            dotsWrap.appendChild(dot);
        });
    }

    function updateCarousel(newIndex) {
        currentIndex = (newIndex + total) % total;

        cards.forEach((card, idx) => {
            let offset = idx - currentIndex;
            // Wrap shortest path
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            const angle = offset * 28; // Arc degrees
            const transZ = Math.cos(angle * (Math.PI / 180)) * 120 - 80;
            const transX = offset * 320;
            const scale = Math.max(0.72, 1 - Math.abs(offset) * 0.18);
            const opacity = Math.abs(offset) > 2 ? 0 : Math.max(0.2, 1 - Math.abs(offset) * 0.45);

            card.style.transform = `translateX(${transX}px) translateZ(${transZ}px) rotateY(${-angle}deg) scale(${scale})`;
            card.style.opacity = opacity;
            card.style.zIndex = 10 - Math.abs(offset);
            card.style.pointerEvents = offset === 0 ? 'auto' : (Math.abs(offset) === 1 ? 'auto' : 'none');

            if (offset === 0) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });

        if (dotsWrap) {
            const dots = dotsWrap.querySelectorAll('.carousel-3d-dot');
            dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
        }
    }

    // Card Clicking to Navigate
    cards.forEach((card, idx) => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('a') || e.target.closest('button')) {
                return; // allow links/buttons to work directly
            }
            if (currentIndex !== idx) {
                updateCarousel(idx);
                SoundFX.playTap();
            }
        });

        // Specular Glare Tracking on Active Card
        card.addEventListener('mousemove', (e) => {
            if (!card.classList.contains('active')) return;
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            card.style.setProperty('--mouse-x', `${x}%`);
            card.style.setProperty('--mouse-y', `${y}%`);
        });
    });

    if (btnPrev) btnPrev.addEventListener('click', () => { updateCarousel(currentIndex - 1); SoundFX.playTap(); });
    if (btnNext) btnNext.addEventListener('click', () => { updateCarousel(currentIndex + 1); SoundFX.playTap(); });

    // Touch / Mouse Dragging with Inertia
    let startX = 0;
    let isDragging = false;

    track.addEventListener('mousedown', (e) => {
        startX = e.clientX;
        isDragging = true;
    });
    window.addEventListener('mouseup', (e) => {
        if (!isDragging) return;
        isDragging = false;
        const diff = e.clientX - startX;
        if (diff > 50) updateCarousel(currentIndex - 1);
        else if (diff < -50) updateCarousel(currentIndex + 1);
    });

    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    }, { passive: true });
    track.addEventListener('touchend', (e) => {
        const diff = e.changedTouches[0].clientX - startX;
        if (diff > 50) updateCarousel(currentIndex - 1);
        else if (diff < -50) updateCarousel(currentIndex + 1);
    });

    updateCarousel(0);
}

// ================= 23. THREE.JS REGIONAL 3D TERRAIN MAP (🔴 PEAK) =================
function initThreeRegionalMap() {
    const canvas = document.getElementById('threeMapCanvas');
    if (!canvas || typeof THREE === 'undefined') return;

    const wrap = canvas.parentElement;
    let width = wrap.clientWidth || 1200;
    let height = wrap.clientHeight || 580;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050E0A, 0.03);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 16, 22);

    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Ambient & Directional
    scene.add(new THREE.AmbientLight(0x1a3a2a, 1.6));
    const goldLight = new THREE.PointLight(0xC5A059, 2.5, 40);
    goldLight.position.set(0, 12, 0);
    scene.add(goldLight);

    // 1. Stylized 3D Terrain Wireframe Grid
    const gridHelper = new THREE.GridHelper(36, 36, 0xC5A059, 0x143626);
    gridHelper.position.y = 0;
    scene.add(gridHelper);

    // 2. City Landmark Coordinates
    const CITIES = {
        'rayachoty': { name: 'Vaaraahi Grandeur (Rayachoty)', x: -6, z: 3, stats: '45+ Luxury Duplex Villas • 100% Delivered', rera: 'AP RERA #P02400004581' },
        'proddatur': { name: 'Vaaraahi Elite Vistas (Proddatur)', x: -2, z: -4, stats: '60+ Gated Residences • 15,000 Sq.Ft Clubhouse', rera: 'AP RERA #P02400003920' },
        'jammalamadugu': { name: 'Vaaraahi Green Meadows', x: 5, z: -2, stats: 'Eco-Living Duplex Masterplan • 40% Green Canopy', rera: 'AP RERA #P02400004112' },
        'hyderabad': { name: 'Hyderabad Corporate Headquarters', x: 7, z: 6, stats: 'Financial District, Nanakramguda • Architectural Studio', rera: 'Telangana HQ' }
    };

    const markersGroup = new THREE.Group();
    scene.add(markersGroup);

    const beaconGeo = new THREE.CylinderGeometry(0.2, 0.05, 3.5, 16);
    const beaconMat = new THREE.MeshStandardMaterial({ color: 0xC5A059, metalness: 0.9, roughness: 0.1 });
    const ringGeo = new THREE.RingGeometry(0.4, 0.7, 32);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xC5A059, side: THREE.DoubleSide, transparent: true, opacity: 0.7 });

    const animatedRings = [];

    Object.keys(CITIES).forEach(key => {
        const data = CITIES[key];
        const beacon = new THREE.Mesh(beaconGeo, beaconMat);
        beacon.position.set(data.x, 1.75, data.z);
        markersGroup.add(beacon);

        const ring = new THREE.Mesh(ringGeo, ringMat.clone());
        ring.rotation.x = -Math.PI / 2;
        ring.position.set(data.x, 0.08, data.z);
        markersGroup.add(ring);
        animatedRings.push(ring);
    });

    // Camera Flythrough Control
    const hudTitle = document.getElementById('threeMapHudTitle');
    const hudDesc = document.getElementById('threeMapHudDesc');
    const cityBtns = document.querySelectorAll('.three-map-city-btn');

    function flyToCity(cityKey) {
        const target = CITIES[cityKey];
        if (!target) return;

        cityBtns.forEach(b => b.classList.toggle('active', b.getAttribute('data-city-target') === cityKey));

        if (hudTitle) hudTitle.textContent = target.name;
        if (hudDesc) hudDesc.innerHTML = `<strong>${target.stats}</strong><br><span style="color: var(--color-gold); font-size: 11px;">${target.rera}</span>`;

        if (typeof gsap !== 'undefined') {
            gsap.to(camera.position, {
                x: target.x * 0.8,
                y: 11,
                z: target.z + 14,
                duration: 1.4,
                ease: 'power3.out'
            });
            gsap.to(goldLight.position, {
                x: target.x,
                y: 6,
                z: target.z,
                duration: 1.4
            });
        }
    }

    cityBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const key = btn.getAttribute('data-city-target');
            flyToCity(key);
            SoundFX.playCompassTick();
        });
    });

    // Render loop
    let clock = new THREE.Clock();
    function mapLoop() {
        requestAnimationFrame(mapLoop);
        const time = clock.getElapsedTime();

        // Pulsating Rings
        animatedRings.forEach((ring, idx) => {
            const scale = 1 + ((time * 1.5 + idx * 0.5) % 2) * 1.2;
            ring.scale.set(scale, scale, scale);
            ring.material.opacity = Math.max(0, 1 - (scale - 1) / 2.4);
        });

        camera.lookAt(0, 0, 0);
        renderer.render(scene, camera);
    }
    mapLoop();

    window.addEventListener('resize', () => {
        width = wrap.clientWidth || 1200;
        height = wrap.clientHeight || 580;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    });
}

// ================= 24. THREE.JS 3D UNIT WALKTHROUGH & DAY/NIGHT SHADER (🔴 PEAK) =================
function initThreeUnitWalkthrough() {
    const canvas = document.getElementById('unit3dCanvas');
    if (!canvas || typeof THREE === 'undefined') return;

    const wrap = canvas.parentElement;
    let width = wrap.clientWidth || 1200;
    let height = wrap.clientHeight || 620;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x07130E);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(16, 12, 18);

    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;

    // Controls
    let controls = null;
    if (typeof THREE.OrbitControls !== 'undefined') {
        controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.maxPolarAngle = Math.PI / 2 - 0.05;
        controls.minDistance = 10;
        controls.maxDistance = 40;
    }

    // Lights
    const ambientLight = new THREE.AmbientLight(0x2a4a3a, 1.2);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xFFF2D6, 2.0);
    sunLight.position.set(15, 20, 10);
    sunLight.castShadow = true;
    scene.add(sunLight);

    const interiorLight = new THREE.PointLight(0xFFA500, 0, 15);
    interiorLight.position.set(0, 3, 0);
    scene.add(interiorLight);

    // Villa Unit Architecture
    const unitGroup = new THREE.Group();
    scene.add(unitGroup);

    const marbleMat = new THREE.MeshStandardMaterial({ color: 0xE8E3D8, roughness: 0.3 });
    const darkWoodMat = new THREE.MeshStandardMaterial({ color: 0x2A1D13, roughness: 0.5 });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x90CDF4, transparent: true, opacity: 0.45, roughness: 0.1 });
    const grassMat = new THREE.MeshStandardMaterial({ color: 0x1A472A, roughness: 0.8 });

    // Base Lawn
    const lawn = new THREE.Mesh(new THREE.BoxGeometry(26, 0.4, 20), grassMat);
    lawn.position.y = -0.2;
    lawn.receiveShadow = true;
    unitGroup.add(lawn);

    // Ground Floor Living & Dining
    const l1 = new THREE.Mesh(new THREE.BoxGeometry(14, 3, 10), marbleMat);
    l1.position.set(0, 1.5, 0);
    l1.castShadow = true;
    l1.receiveShadow = true;
    unitGroup.add(l1);

    // First Floor Master Bedrooms
    const l2 = new THREE.Mesh(new THREE.BoxGeometry(12, 2.6, 8), darkWoodMat);
    l2.position.set(1, 4.3, -1);
    l2.castShadow = true;
    l2.receiveShadow = true;
    unitGroup.add(l2);

    // Glass French Windows
    const win = new THREE.Mesh(new THREE.BoxGeometry(8, 2.2, 0.1), glassMat);
    win.position.set(0, 1.5, 5.05);
    unitGroup.add(win);

    // Day / Night Switch Logic
    const lightBtns = document.querySelectorAll('.lighting-btn');
    lightBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            lightBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const mode = btn.getAttribute('data-light-mode');

            if (mode === 'day') {
                scene.background.setHex(0x07130E);
                sunLight.color.setHex(0xFFF2D6);
                sunLight.intensity = 2.0;
                ambientLight.color.setHex(0x2a4a3a);
                interiorLight.intensity = 0;
            } else if (mode === 'sunset') {
                scene.background.setHex(0x180D09);
                sunLight.color.setHex(0xFF6B35);
                sunLight.intensity = 1.4;
                ambientLight.color.setHex(0x3D1A10);
                interiorLight.intensity = 1.8;
            } else if (mode === 'night') {
                scene.background.setHex(0x040B10);
                sunLight.color.setHex(0x3B6C9E);
                sunLight.intensity = 0.8;
                ambientLight.color.setHex(0x0C1824);
                interiorLight.color.setHex(0xFFAA33);
                interiorLight.intensity = 4.5;
            }
            if (typeof SoundFX !== 'undefined' && typeof SoundFX.playSolarShift === 'function') {
                SoundFX.playSolarShift();
            }
        });
    });

    // Camera Angle Presets
    const camBtns = document.querySelectorAll('.cam-btn');
    camBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            camBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const angle = btn.getAttribute('data-cam-angle');

            if (typeof gsap !== 'undefined') {
                if (angle === 'iso') {
                    gsap.to(camera.position, { x: 16, y: 12, z: 18, duration: 1.2 });
                } else if (angle === 'top') {
                    gsap.to(camera.position, { x: 0, y: 24, z: 0.1, duration: 1.2 });
                } else if (angle === 'front') {
                    gsap.to(camera.position, { x: 0, y: 4, z: 22, duration: 1.2 });
                }
            }
        });
    });

    function unitLoop() {
        requestAnimationFrame(unitLoop);
        if (controls) controls.update();
        renderer.render(scene, camera);
    }
    unitLoop();

    window.addEventListener('resize', () => {
        width = wrap.clientWidth || 1200;
        height = wrap.clientHeight || 620;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    });
}

// ================= 25. THREE.JS SUSTAINABILITY SCROLLYTELLING CUTAWAY (🔴 PEAK) =================
function initSustainability3DScrollytelling() {
    const canvas = document.getElementById('sustain3dCanvas');
    if (!canvas || typeof THREE === 'undefined') return;

    const wrap = canvas.parentElement;
    let width = wrap.clientWidth || 600;
    let height = wrap.clientHeight || 580;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x06140D);
    scene.fog = new THREE.FogExp2(0x06140D, 0.025);

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(16, 9, 18);
    camera.lookAt(0, 1.5, 0);

    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: false
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x1B382B, 1.8);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xFFF3D6, 2.5);
    sunLight.position.set(15, 25, 12);
    sunLight.castShadow = true;
    scene.add(sunLight);

    const rimLight = new THREE.DirectionalLight(0x38B2AC, 1.2);
    rimLight.position.set(-15, 10, -10);
    scene.add(rimLight);

    const villaGroup = new THREE.Group();
    scene.add(villaGroup);

    // ================= ARCHITECTURAL VILLA CUTAWAY MODEL =================

    // 1. Earth Ground & Landscaping Base
    const groundGeo = new THREE.BoxGeometry(18, 0.8, 16);
    const groundMat = new THREE.MeshStandardMaterial({ color: 0x0E2419, roughness: 0.8 });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.position.set(0, -0.4, 0);
    villaGroup.add(ground);

    // Grass Turf Deck
    const grassGeo = new THREE.BoxGeometry(17.6, 0.1, 15.6);
    const grassMat = new THREE.MeshStandardMaterial({ color: 0x1B432E, roughness: 0.6 });
    const grass = new THREE.Mesh(grassGeo, grassMat);
    grass.position.set(0, 0.05, 0);
    villaGroup.add(grass);

    // Reflection Infinity Pool
    const poolGeo = new THREE.BoxGeometry(5.5, 0.4, 10);
    const poolWaterMat = new THREE.MeshPhysicalMaterial({
        color: 0x00B4D8,
        transparent: true,
        opacity: 0.8,
        roughness: 0.05,
        transmission: 0.6,
        reflectivity: 0.9
    });
    const pool = new THREE.Mesh(poolGeo, poolWaterMat);
    pool.position.set(-5.5, 0.15, 0);
    villaGroup.add(pool);

    // Pool Border Coping
    const copingGeo = new THREE.BoxGeometry(6, 0.2, 10.5);
    const copingMat = new THREE.MeshStandardMaterial({ color: 0xD8D2C2, roughness: 0.4 });
    const coping = new THREE.Mesh(copingGeo, copingMat);
    coping.position.set(-5.5, 0.05, 0);
    villaGroup.add(coping);

    // 2. Subterranean Rainwater Percolation Vault (Step 0)
    const vaultTankGeo = new THREE.BoxGeometry(8, 2.2, 7);
    const vaultTankMat = new THREE.MeshPhysicalMaterial({
        color: 0x1A4731,
        transparent: true,
        opacity: 0.4,
        roughness: 0.2,
        wireframe: false
    });
    const vaultTank = new THREE.Mesh(vaultTankGeo, vaultTankMat);
    vaultTank.position.set(2, -1.8, 0);
    villaGroup.add(vaultTank);

    // Water Inside Vault
    const vaultWaterGeo = new THREE.BoxGeometry(7.6, 1.6, 6.6);
    const vaultWaterMat = new THREE.MeshStandardMaterial({
        color: 0x0284C7,
        transparent: true,
        opacity: 0.85,
        roughness: 0.1,
        emissive: 0x0369A1,
        emissiveIntensity: 0.4
    });
    const vaultWater = new THREE.Mesh(vaultWaterGeo, vaultWaterMat);
    vaultWater.position.set(2, -2.0, 0);
    villaGroup.add(vaultWater);

    // Percolation Pipeline
    const pipeGeo = new THREE.CylinderGeometry(0.12, 0.12, 4.5, 12);
    const pipeMat = new THREE.MeshStandardMaterial({ color: 0xC5A059, metalness: 0.8, roughness: 0.2 });
    const downPipe = new THREE.Mesh(pipeGeo, pipeMat);
    downPipe.position.set(5.5, 0.5, 3);
    villaGroup.add(downPipe);

    // 3. Ground Floor Villa Living Volume (Step 2 & 3)
    const gfFloorGeo = new THREE.BoxGeometry(10, 0.3, 9);
    const marbleMat = new THREE.MeshStandardMaterial({ color: 0xEAE5DC, roughness: 0.3 });
    const gfFloor = new THREE.Mesh(gfFloorGeo, marbleMat);
    gfFloor.position.set(1.5, 0.2, 0);
    villaGroup.add(gfFloor);

    // Floor-to-Ceiling Glass Walls (Front & Side Cutaway)
    const glassMat = new THREE.MeshPhysicalMaterial({
        color: 0xA5F3FC,
        transparent: true,
        opacity: 0.35,
        roughness: 0.05,
        transmission: 0.85
    });
    const frontGlass = new THREE.Mesh(new THREE.BoxGeometry(9.6, 2.6, 0.08), glassMat);
    frontGlass.position.set(1.5, 1.6, 4.3);
    villaGroup.add(frontGlass);

    const sideGlass = new THREE.Mesh(new THREE.BoxGeometry(0.08, 2.6, 8.6), glassMat);
    sideGlass.position.set(-3.2, 1.6, 0);
    villaGroup.add(sideGlass);

    // Architectural Mullion Frames
    const frameGeo = new THREE.BoxGeometry(0.1, 2.8, 0.1);
    const darkFrameMat = new THREE.MeshStandardMaterial({ color: 0x1E293B, metalness: 0.5, roughness: 0.3 });
    for (let x = -3; x <= 6; x += 3) {
        const col = new THREE.Mesh(frameGeo, darkFrameMat);
        col.position.set(x, 1.6, 4.35);
        villaGroup.add(col);
    }

    // Porotherm Terracotta Cavity Wall (Back & Side)
    const brickWallGeo = new THREE.BoxGeometry(9.8, 2.8, 0.4);
    const brickMat = new THREE.MeshStandardMaterial({
        color: 0xC2593F, // Warm Terracotta Porotherm
        roughness: 0.7
    });
    const backWall = new THREE.Mesh(brickWallGeo, brickMat);
    backWall.position.set(1.5, 1.6, -4.3);
    villaGroup.add(backWall);

    // Interior Warm Ambient Glow
    const interiorLight = new THREE.PointLight(0xFFE5B4, 2.0, 8);
    interiorLight.position.set(1.5, 1.8, 0);
    villaGroup.add(interiorLight);

    // Interior Lounge Minimalist Sofa & Table
    const sofaGeo = new THREE.BoxGeometry(3, 0.6, 1.4);
    const sofaMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.8 });
    const sofa = new THREE.Mesh(sofaGeo, sofaMat);
    sofa.position.set(1.5, 0.5, 0);
    villaGroup.add(sofa);

    // 4. First Floor Cantilevered Master Suite
    const ffFloorGeo = new THREE.BoxGeometry(11, 0.35, 9.6);
    const concreteMat = new THREE.MeshStandardMaterial({ color: 0xF1EFEA, roughness: 0.4 });
    const ffFloor = new THREE.Mesh(ffFloorGeo, concreteMat);
    ffFloor.position.set(1.2, 3.1, 0.3);
    villaGroup.add(ffFloor);

    // Upper Master Bedroom Volume
    const upperWallMat = new THREE.MeshStandardMaterial({ color: 0xFAFAF9, roughness: 0.3 });
    const upperWall = new THREE.Mesh(new THREE.BoxGeometry(8, 2.6, 8), upperWallMat);
    upperWall.position.set(2.5, 4.6, 0);
    villaGroup.add(upperWall);

    // Upper Balcony Glass Railing
    const railingMat = new THREE.MeshPhysicalMaterial({
        color: 0xBAE6FD,
        transparent: true,
        opacity: 0.4,
        roughness: 0.1
    });
    const railing = new THREE.Mesh(new THREE.BoxGeometry(4.5, 0.9, 0.05), railingMat);
    railing.position.set(-2.8, 3.7, 4.8);
    villaGroup.add(railing);

    // Cantilever Timber Louver Screen
    const louverMat = new THREE.MeshStandardMaterial({ color: 0xB45309, roughness: 0.5 });
    for (let i = 0; i < 6; i++) {
        const louver = new THREE.Mesh(new THREE.BoxGeometry(0.08, 2.4, 0.25), louverMat);
        louver.position.set(-1.2 + i * 0.4, 4.5, 4.1);
        louver.rotation.y = 0.4;
        villaGroup.add(louver);
    }

    // 5. Monocrystalline Solar Rooftop Array (Step 1)
    const roofSlabGeo = new THREE.BoxGeometry(9, 0.3, 8.6);
    const roofSlab = new THREE.Mesh(roofSlabGeo, concreteMat);
    roofSlab.position.set(2.5, 6.0, 0);
    villaGroup.add(roofSlab);

    // Solar PV Panels Grid
    const solarGroup = new THREE.Group();
    villaGroup.add(solarGroup);

    const panelGeo = new THREE.BoxGeometry(1.8, 0.06, 1.2);
    const solarCellMat = new THREE.MeshStandardMaterial({
        color: 0x0F172A, // Deep Photovoltaic Navy Blue
        metalness: 0.9,
        roughness: 0.15,
        emissive: 0x1E3A8A,
        emissiveIntensity: 0.2
    });

    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            const panel = new THREE.Mesh(panelGeo, solarCellMat);
            panel.position.set(0.5 + c * 2.0, 6.35, -2.0 + r * 1.5);
            panel.rotation.x = -0.15; // 15-degree solar tilt
            solarGroup.add(panel);
        }
    }

    // Solar Inverter Battery Unit
    const inverterGeo = new THREE.BoxGeometry(0.8, 1.2, 0.4);
    const inverterMat = new THREE.MeshStandardMaterial({ color: 0xC5A059, metalness: 0.8, roughness: 0.2 });
    const inverter = new THREE.Mesh(inverterGeo, inverterMat);
    inverter.position.set(6.2, 6.7, -3);
    solarGroup.add(inverter);

    // 6. Fe-550D High-Tensile Steel Rebar Columns (Step 3)
    const structuralColumns = [];
    const rebarMat = new THREE.MeshStandardMaterial({
        color: 0xC5A059,
        metalness: 0.9,
        roughness: 0.2,
        emissive: 0x997A38,
        emissiveIntensity: 0.3
    });

    const colPositions = [
        [-3.2, 1.6, -4.3],
        [6.2, 1.6, -4.3],
        [-3.2, 1.6, 4.3],
        [6.2, 1.6, 4.3],
        [-1.2, 4.5, -3.8],
        [6.2, 4.5, -3.8]
    ];

    colPositions.forEach(pos => {
        const colMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 3.2, 12), rebarMat);
        colMesh.position.set(pos[0], pos[1], pos[2]);
        villaGroup.add(colMesh);
        structuralColumns.push(colMesh);
    });

    // 7. Animated Flow Particles (Water droplets / Aerodynamic wind)
    const particleCount = 40;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
        particlePositions[i * 3] = (Math.random() - 0.5) * 8;
        particlePositions[i * 3 + 1] = Math.random() * 6 - 2;
        particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
        color: 0x38B2AC,
        size: 0.18,
        transparent: true,
        opacity: 0.75
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    villaGroup.add(particleSystem);

    // Subsystem Telemetry Badge & Scrollytelling Triggers
    const hudBadge = document.getElementById('sustainHudBadge');
    const storyCards = document.querySelectorAll('.sustain-story-card');

    if (typeof ScrollTrigger !== 'undefined' && typeof gsap !== 'undefined') {
        storyCards.forEach((card, idx) => {
            ScrollTrigger.create({
                trigger: card,
                start: 'top 65%',
                end: 'bottom 35%',
                onEnter: () => activateStep(idx),
                onEnterBack: () => activateStep(idx)
            });
        });
    }

    function activateStep(stepIdx) {
        storyCards.forEach((c, i) => c.classList.toggle('active', i === stepIdx));

        if (stepIdx === 0) { // Subsystem 01: Hydrology
            vaultWaterMat.color.setHex(0x0284C7);
            vaultWaterMat.emissive.setHex(0x0284C7);
            vaultWaterMat.emissiveIntensity = 0.8;
            solarCellMat.emissiveIntensity = 0.1;
            brickMat.color.setHex(0xC2593F);
            particleMat.color.setHex(0x38BDF8); // Water droplets

            if (hudBadge) {
                hudBadge.innerHTML = '<i class="fas fa-tint text-gold"></i> Subterranean Hydrology Vault: 100% Recharge Active';
            }
            if (typeof gsap !== 'undefined') {
                gsap.to(camera.position, { x: 14, y: 4, z: 15, duration: 1.2, ease: 'power2.out' });
                gsap.to(villaGroup.rotation, { y: 0.2, duration: 1.2 });
            }
        } else if (stepIdx === 1) { // Subsystem 02: Clean Energy
            vaultWaterMat.emissiveIntensity = 0.2;
            solarCellMat.emissive.setHex(0xF59E0B); // Golden Solar Glow
            solarCellMat.emissiveIntensity = 0.9;
            brickMat.color.setHex(0xC2593F);
            particleMat.color.setHex(0xFBBF24); // Solar Energy photons

            if (hudBadge) {
                hudBadge.innerHTML = '<i class="fas fa-solar-panel text-gold"></i> Monocrystalline PV Array: 5.5kW Microgrid Active';
            }
            if (typeof gsap !== 'undefined') {
                gsap.to(camera.position, { x: 10, y: 12, z: 12, duration: 1.2, ease: 'power2.out' });
                gsap.to(villaGroup.rotation, { y: 0.8, duration: 1.2 });
            }
        } else if (stepIdx === 2) { // Subsystem 03: Thermal Physics
            vaultWaterMat.emissiveIntensity = 0.2;
            solarCellMat.emissiveIntensity = 0.1;
            brickMat.color.setHex(0x059669); // Emerald Porotherm cooling
            particleMat.color.setHex(0x34D399); // Wind currents

            if (hudBadge) {
                hudBadge.innerHTML = '<i class="fas fa-wind text-gold"></i> Bioclimatic Aerodynamic Venting: 5.8°C Passive Cooling';
            }
            if (typeof gsap !== 'undefined') {
                gsap.to(camera.position, { x: 15, y: 7, z: 13, duration: 1.2, ease: 'power2.out' });
                gsap.to(villaGroup.rotation, { y: 1.4, duration: 1.2 });
            }
        } else if (stepIdx === 3) { // Subsystem 04: Structural Longevity
            vaultWaterMat.emissiveIntensity = 0.2;
            solarCellMat.emissiveIntensity = 0.1;
            brickMat.color.setHex(0xC2593F);
            structuralColumns.forEach(c => {
                c.material.emissive.setHex(0xC5A059);
                c.material.emissiveIntensity = 1.0;
            });
            particleMat.color.setHex(0xC5A059);

            if (hudBadge) {
                hudBadge.innerHTML = '<i class="fas fa-shield-alt text-gold"></i> Fe-550D TMT Core & M35 Batching: 100-Year ISO Certified';
            }
            if (typeof gsap !== 'undefined') {
                gsap.to(camera.position, { x: 16, y: 5, z: 16, duration: 1.2, ease: 'power2.out' });
                gsap.to(villaGroup.rotation, { y: 2.1, duration: 1.2 });
            }
        }
    }

    // Interactive Drag & Rotate Support
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    canvas.addEventListener('mousedown', (e) => {
        isDragging = true;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
    });

    window.addEventListener('mouseup', () => { isDragging = false; });
    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const deltaX = e.clientX - prevMouseX;
        const deltaY = e.clientY - prevMouseY;
        villaGroup.rotation.y += deltaX * 0.006;
        camera.position.y = Math.max(2, Math.min(16, camera.position.y - deltaY * 0.03));
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
    });

    // Touch Support for mobile
    canvas.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
            isDragging = true;
            prevMouseX = e.touches[0].clientX;
            prevMouseY = e.touches[0].clientY;
        }
    }, { passive: true });

    canvas.addEventListener('touchmove', (e) => {
        if (!isDragging || e.touches.length !== 1) return;
        const deltaX = e.touches[0].clientX - prevMouseX;
        const deltaY = e.touches[0].clientY - prevMouseY;
        villaGroup.rotation.y += deltaX * 0.006;
        camera.position.y = Math.max(2, Math.min(16, camera.position.y - deltaY * 0.03));
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
    }, { passive: true });

    window.addEventListener('touchend', () => { isDragging = false; });

    let clock = new THREE.Clock();
    function sustainLoop() {
        requestAnimationFrame(sustainLoop);
        const delta = clock.getDelta();

        // Slow smooth autorotation when not interacting
        if (!isDragging) {
            villaGroup.rotation.y += delta * 0.03;
        }

        // Animate particles flowing
        const positions = particleGeo.attributes.position.array;
        for (let i = 0; i < particleCount; i++) {
            positions[i * 3 + 1] -= delta * 1.5; // Flow downward
            if (positions[i * 3 + 1] < -2.2) {
                positions[i * 3 + 1] = 6.0;
                positions[i * 3] = (Math.random() - 0.5) * 8;
                positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
            }
        }
        particleGeo.attributes.position.needsUpdate = true;

        // Subtle water pulse in vault
        vaultWater.scale.y = 1.0 + Math.sin(clock.getElapsedTime() * 2) * 0.03;

        renderer.render(scene, camera);
    }
    sustainLoop();

    window.addEventListener('resize', () => {
        width = wrap.clientWidth || 600;
        height = wrap.clientHeight || 580;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    });
}

// ================= 18. FLOATING ARCHITECTURAL CAPSULE NAVBAR & SPATIAL CONCIERGE =================
function initFloatingCapsuleNav() {
    const nav = document.getElementById('navbar');
    const linksWrapper = document.querySelector('.nav-links-wrapper');
    const glider = document.getElementById('navGlider');
    const links = document.querySelectorAll('.nav-links li a');
    const exploreBtn = document.getElementById('navExploreTrigger');
    const drawer = document.getElementById('spatialDrawer');
    const drawerClose = document.getElementById('spatialDrawerClose');

    if (!nav) return;

    // 1. Magnetic Pill Glider
    function updateGlider(target) {
        if (!glider || !linksWrapper || !target) return;
        const targetRect = target.getBoundingClientRect();
        const wrapperRect = linksWrapper.getBoundingClientRect();

        const width = targetRect.width + 12;
        const left = targetRect.left - wrapperRect.left - 6;
        const top = targetRect.top - wrapperRect.top + (targetRect.height - 34) / 2;

        glider.style.width = `${width}px`;
        glider.style.left = `${left}px`;
        glider.style.top = `${top}px`;
        glider.style.opacity = '1';
    }

    const activeLink = document.querySelector('.nav-links li a.active');
    if (activeLink) {
        setTimeout(() => updateGlider(activeLink), 200);
    }

    links.forEach(link => {
        link.addEventListener('mouseenter', () => updateGlider(link));
        link.addEventListener('mouseleave', () => {
            if (activeLink) {
                updateGlider(activeLink);
            } else if (glider) {
                glider.style.opacity = '0';
            }
        });
    });

    // 2. Spatial Mega Directory Drawer
    if (exploreBtn && drawer) {
        exploreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            drawer.classList.add('active');
            document.body.style.overflow = 'hidden';
            if (typeof SoundFX !== 'undefined' && typeof SoundFX.playTap === 'function') {
                SoundFX.playTap();
            }
        });
    }

    if (drawerClose && drawer) {
        drawerClose.addEventListener('click', () => {
            drawer.classList.remove('active');
            document.body.style.overflow = '';
            if (typeof SoundFX !== 'undefined' && typeof SoundFX.playTap === 'function') {
                SoundFX.playTap();
            }
        });
    }

    // Close on Escape or click outside backdrop
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && drawer && drawer.classList.contains('active')) {
            drawer.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    if (drawer) {
        drawer.addEventListener('click', (e) => {
            if (e.target === drawer) {
                drawer.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // 3. Scroll Header Class
    function handleScroll() {
        if (window.scrollY > 30) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
}

// ================= 20. WHY VAARAAHI & SUSTAINABILITY HORIZONTAL EDITORIAL SCROLL (ARAKU STYLE) =================
function initWhyVaaraahiHorizontalScroll() {
    const section = document.getElementById('whyVaaraahiSection');
    const track = document.getElementById('whyHorizTrack');
    const viewport = document.getElementById('whyHorizViewport');
    const progressBar = document.getElementById('whyHorizProgressFill');
    const slides = document.querySelectorAll('.araku-slide');

    if (!section || !track || !slides.length) return;

    const totalSlides = slides.length;

    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        // Kill existing triggers for this section on re-init
        ScrollTrigger.getAll().forEach(t => {
            if (t.vars && t.vars.trigger === section) t.kill();
        });

        const mm = gsap.matchMedia();

        mm.add("(min-width: 992px)", () => {
            const getScrollDistance = () => track.scrollWidth - window.innerWidth + 200;

            gsap.to(track, {
                x: () => -getScrollDistance(),
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    pin: true,
                    scrub: 1,
                    start: "top top",
                    end: () => `+=${getScrollDistance() * 1.2}`,
                    invalidateOnRefresh: true,
                    anticipatePin: 1,
                    onUpdate: (self) => {
                        const progress = self.progress;
                        if (progressBar) {
                            progressBar.style.width = `${Math.max(16, progress * 100)}%`;
                        }
                    }
                }
            });
        });

        mm.add("(max-width: 991px)", () => {
            track.style.transform = 'none';
            if (viewport) {
                viewport.addEventListener('scroll', () => {
                    const scrollLeft = viewport.scrollLeft;
                    const maxScroll = viewport.scrollWidth - viewport.clientWidth;
                    const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
                    if (progressBar) progressBar.style.width = `${Math.max(16, progress * 100)}%`;
                }, { passive: true });
            }
        });
    }
}

// ================= 20.5. ABOUT VAARAAHI (HERITAGE STUDIO & INTERACTIVE LENS) =================
function initHomeAboutPillars() {
    const section = document.getElementById('homeAboutSection');
    if (!section) return;

    const pillarCards = section.querySelectorAll('.about-pillar-card');
    const switchBtns = section.querySelectorAll('.stage-switch-btn');
    const stageCard = document.getElementById('aboutStageCard');
    const stageImg = document.getElementById('aboutStageImg');
    const hudTag = document.getElementById('aboutHudTag');
    const hudTitle = document.getElementById('aboutHudTitle');
    const hudMetrics = document.getElementById('aboutHudMetrics');
    const hotspot1 = document.getElementById('aboutHotspot1');
    const hotspot2 = document.getElementById('aboutHotspot2');

    const PILLAR_CONFIG = {
        engineering: {
            tag: '✦ ACTIVE INSPECTION: CIVIL ENGINEERING ✦',
            title: 'Structural Integrity & 300-Pt Quality Assurance',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
            hotspot1: { top: '28%', left: '22%', icon: 'fas fa-shield-alt', text: 'Fe-550D Reinforced Framework' },
            hotspot2: { top: '60%', right: '20%', icon: 'fas fa-cubes-stacked', text: 'M35 Certified Concrete' },
            metrics: [
                { val: 'Fe-550D', lbl: 'Primary Steel Rebar' },
                { val: 'M35 Grade', lbl: 'Batching Concrete' },
                { val: '100 Yrs', lbl: 'Design Lifespan' }
            ]
        },
        vastu: {
            tag: '✦ ACTIVE INSPECTION: VASTU & BIOCLIMATIC ✦',
            title: '100% Cosmic Vastu & Bioclimatic Wind Channels',
            image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
            hotspot1: { top: '25%', left: '28%', icon: 'fas fa-compass', text: '100% Solar & Cosmic Geometry' },
            hotspot2: { top: '65%', right: '24%', icon: 'fas fa-wind', text: 'SW-NE Natural Wind Funnels' },
            metrics: [
                { val: '100%', lbl: 'Vastu Geometric Balance' },
                { val: '4°C Cooler', lbl: 'Bioclimatic Thermal Mass' },
                { val: '100%', lbl: 'Rainwater Aquifer Recharge' }
            ]
        },
        governance: {
            tag: '✦ ACTIVE INSPECTION: TRANSPARENCY & TITLES ✦',
            title: '100% RERA Clearance & 40-Year Legal Vetting',
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
            hotspot1: { top: '30%', left: '25%', icon: 'fas fa-certificate', text: 'AP & TG RERA Approved' },
            hotspot2: { top: '55%', right: '22%', icon: 'fas fa-file-shield', text: '40-Year Clean Legal Titles' },
            metrics: [
                { val: '100%', lbl: 'RERA Compliance' },
                { val: '0', lbl: 'Pending Litigations' },
                { val: 'Tier-1', lbl: 'APF National Bank Approvals' }
            ]
        }
    };

    function setActivePillar(pillarKey) {
        const config = PILLAR_CONFIG[pillarKey];
        if (!config) return;

        // Update Left Pillars
        pillarCards.forEach(card => {
            card.classList.toggle('active', card.dataset.pillar === pillarKey);
        });

        // Update Right Switch Buttons
        switchBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.targetPillar === pillarKey);
        });

        // Cross-fade image
        if (stageImg) {
            stageImg.style.opacity = '0.3';
            stageImg.style.transform = 'scale(0.96)';
            setTimeout(() => {
                stageImg.src = config.image;
                stageImg.style.opacity = '1';
                stageImg.style.transform = 'scale(1)';
            }, 250);
        }

        // Update HUD
        if (hudTag) hudTag.textContent = config.tag;
        if (hudTitle) hudTitle.textContent = config.title;
        if (hudMetrics) {
            hudMetrics.innerHTML = config.metrics.map(m => `
                <div class="hud-metric-item">
                    <span class="hud-m-val">${m.val}</span>
                    <span class="hud-m-lbl">${m.lbl}</span>
                </div>
            `).join('');
        }

        // Update Hotspots
        if (hotspot1) {
            hotspot1.style.top = config.hotspot1.top;
            hotspot1.style.left = config.hotspot1.left;
            hotspot1.style.right = 'auto';
            const content1 = hotspot1.querySelector('.hotspot-content');
            if (content1) content1.innerHTML = `<i class="${config.hotspot1.icon}"></i> <span>${config.hotspot1.text}</span>`;
        }
        if (hotspot2) {
            hotspot2.style.top = config.hotspot2.top;
            hotspot2.style.right = config.hotspot2.right;
            hotspot2.style.left = 'auto';
            const content2 = hotspot2.querySelector('.hotspot-content');
            if (content2) content2.innerHTML = `<i class="${config.hotspot2.icon}"></i> <span>${config.hotspot2.text}</span>`;
        }
    }

    // Attach click handlers to Left Pillar cards
    pillarCards.forEach(card => {
        card.addEventListener('click', () => {
            const pillar = card.dataset.pillar;
            setActivePillar(pillar);
        });
    });

    // Attach click handlers to Right Switch buttons
    switchBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const pillar = btn.dataset.targetPillar;
            setActivePillar(pillar);
        });
    });

    // 3D Perspective Tilt on Mouse Movement
    if (stageCard && window.innerWidth > 991) {
        stageCard.addEventListener('mousemove', (e) => {
            const rect = stageCard.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -6;
            const rotateY = ((x - centerX) / centerX) * 6;

            stageCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });

        stageCard.addEventListener('mouseleave', () => {
            stageCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        });
    }
}

// ================= 21. FEATURED DEVELOPMENTS (GREENSIRI-STYLE CINEMATIC SHOWCASE) =================
function initKineticFilmstrip() {
    const section = document.getElementById('kineticFilmstripSection');
    if (!section) return;

    const slideCurrent = document.getElementById('slideCurrent');
    const slideNext = document.getElementById('slideNext');
    const backdropImg = document.getElementById('showcaseBackdropImg');
    const nextImg = document.getElementById('showcaseNextImg');
    const typoSolid = document.getElementById('typoSolid');
    const typoOutline = document.getElementById('typoOutline');
    const locBadge = document.getElementById('showcaseLocBadge');
    const locText = document.getElementById('showcaseLocText');
    const projectTitle = document.getElementById('showcaseProjectTitle');
    const projectMeta = document.getElementById('showcaseProjectMeta');
    const prevBtn = document.getElementById('filmstripPrevBtn');
    const nextBtn = document.getElementById('filmstripNextBtn');
    const advantagesList = document.getElementById('advantagesList');
    const paginationDots = section.querySelectorAll('.showcase-pagination .page-dot');

    const PROJECTS = [
        {
            solid: 'VAARAAHI',
            outline: 'GRANDEUR',
            title: 'Villas Crafted For You',
            location: 'Madanapalle Bypass Road, Rayachoty',
            metaHtml: 'Vaaraahi Grandeur • 3 & 4 BHK Luxury Duplex • <span class="showcase-price">₹1.85 Cr onwards</span>',
            image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1920&q=85',
            advantages: [
                { title: '100% VASTU COMPLIANT', desc: 'Solar-aligned orientations with optimal positive cosmic energy.' },
                { title: '15,000 SQ.FT CLUBHOUSE', desc: 'Resort-style pool, fitness center, banquet pavilion & yoga deck.' },
                { title: 'FE-550D STEEL & M35 CONCRETE', desc: 'Built for 100-year structural longevity with zero-snag audits.' },
                { title: 'CLEAR TITLE & RERA APPROVED', desc: '40-year clear legal title vetting and national bank APF approvals.' }
            ]
        },
        {
            solid: 'ELITE',
            outline: 'VISTAS',
            title: 'Gated Luxury Living',
            location: 'Main Bypass Road, Proddatur',
            metaHtml: 'Vaaraahi Elite Vistas • Contemporary Villas • <span class="showcase-price">₹1.45 Cr onwards</span>',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85',
            advantages: [
                { title: 'READY TO MOVE IN', desc: '100% delivered with Occupancy Certificate (OC) handed over.' },
                { title: '1 KM LINEAR GREEN PARK', desc: '40% dedicated lush landscaped botanical green cover.' },
                { title: 'UNDERGROUND CABLING', desc: 'Concealed electricity, optical fiber & stormwater drainage.' },
                { title: '3 & 4 BHK CONTEMPORARY', desc: 'Private terraces, expansive master suites & 2-car porticos.' }
            ]
        },
        {
            solid: 'GREEN',
            outline: 'MEADOWS',
            title: 'Eco Sanctuary Townships',
            location: 'Gandhi Road, Jammalamadugu',
            metaHtml: 'Vaaraahi Green Meadows • Eco Plots & Villas • <span class="showcase-price">₹95 Lakhs onwards</span>',
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=85',
            advantages: [
                { title: 'ZERO-WASTE HYDROLOGY', desc: 'Deep subterranean percolation wells capturing 100% runoff.' },
                { title: '100% SOLAR MICROGRID', desc: 'Renewable common-area solar illumination & EV stations.' },
                { title: 'AYURVEDIC BIO-GARDENS', desc: '500+ indigenous trees and therapeutic oxygen corridors.' },
                { title: 'PHASE 2 MASTERPLAN', desc: 'High-appreciation growth corridor with instant registration.' }
            ]
        },
        {
            solid: 'ROYAL',
            outline: 'PALMS',
            title: 'Bespoke Plotted Enclaves',
            location: 'Ring Road, Proddatur Ph-2',
            metaHtml: 'Vaaraahi Royal Palms • Gated Enclaves • <span class="showcase-price">₹1.10 Cr onwards</span>',
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=85',
            advantages: [
                { title: 'NEW LAUNCH PRIVILEGE', desc: 'Early-bird investor pricing with flexible milestone terms.' },
                { title: 'AI VISION SECURITY', desc: '24/7 biometric perimeter barriers and ANPR license scanners.' },
                { title: 'AVENUE PLANTATIONS', desc: '40-ft wide bitumen roadways with ornamental royal palm trees.' },
                { title: 'VILLA DESIGN FREEDOM', desc: 'Pre-approved architectural elevations with turnkey construction.' }
            ]
        },
        {
            solid: 'SKY',
            outline: 'HIGH',
            title: 'Architectural Sky Residences',
            location: 'Financial District, Hyderabad',
            metaHtml: 'Vaaraahi Sky High • 45-Storey Sky Suites • <span class="showcase-price">₹2.20 Cr onwards</span>',
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=85',
            advantages: [
                { title: '45-STOREY ICON', desc: 'Panoramic skyline views of Hyderabad\'s Financial District.' },
                { title: 'SKY INFINITY POOL & HELIPAD', desc: 'Rooftop leisure club, private cabanas & helipad.' },
                { title: 'DESTINATION ELEVATORS', desc: 'High-speed smart destination elevators with touchless access.' },
                { title: 'PRE-LAUNCH PRIVILEGE', desc: 'Bespoke 4 & 5 BHK sky penthouses with private decks.' }
            ]
        }
    ];

    let currentIndex = 0;
    let isTransitioning = false;

    function renderProject(index, direction = 'next') {
        if (isTransitioning && direction !== 'init') return;
        
        currentIndex = (index + PROJECTS.length) % PROJECTS.length;
        const p = PROJECTS[currentIndex];

        if (direction === 'init') {
            if (backdropImg) backdropImg.src = p.image;
            if (typoSolid) typoSolid.textContent = p.solid;
            if (typoOutline) typoOutline.textContent = p.outline;
            if (locText) locText.textContent = p.location;
            if (projectTitle) projectTitle.textContent = p.title;
            if (projectMeta) projectMeta.innerHTML = p.metaHtml;
            if (advantagesList) {
                advantagesList.innerHTML = p.advantages.map(adv => `
                    <div class="advantage-item">
                        <h4 class="adv-title">${adv.title}</h4>
                        <p class="adv-desc">${adv.desc}</p>
                    </div>
                `).join('');
            }
            paginationDots.forEach((dot, idx) => {
                dot.classList.toggle('active', idx === currentIndex);
            });
            return;
        }

        isTransitioning = true;
        const isNext = direction === 'next';
        const offset = isNext ? 1 : -1;

        // 1. Parallax Wall Slide on Dual Backdrop Layers
        if (slideCurrent && slideNext && backdropImg && nextImg && typeof gsap !== 'undefined') {
            nextImg.src = p.image;
            
            // Set starting state for incoming slide & parallax child image
            gsap.set(slideNext, {
                xPercent: offset * 100,
                opacity: 1,
                zIndex: 3
            });
            gsap.set(nextImg, {
                xPercent: -offset * 35,
                scale: 1.15
            });

            // Master Transition Timeline
            const tl = gsap.timeline({
                onComplete: () => {
                    backdropImg.src = p.image;
                    gsap.set(slideCurrent, { xPercent: 0, scale: 1, opacity: 1, filter: 'none' });
                    gsap.set(slideNext, { opacity: 0, zIndex: 2 });
                    isTransitioning = false;
                }
            });

            // Slide incoming curtain in
            tl.to(slideNext, {
                xPercent: 0,
                duration: 0.65,
                ease: 'power3.inOut'
            }, 0);

            // Counter-slide inner image for depth parallax
            tl.to(nextImg, {
                xPercent: 0,
                scale: 1.05,
                duration: 0.65,
                ease: 'power3.inOut'
            }, 0);

            // Push current background out with slight scale & dimming
            tl.to(slideCurrent, {
                xPercent: -offset * 35,
                scale: 0.94,
                opacity: 0.3,
                filter: 'brightness(0.5)',
                duration: 0.65,
                ease: 'power3.inOut'
            }, 0);
        } else {
            if (backdropImg) backdropImg.src = p.image;
            isTransitioning = false;
        }

        // 2. Kinetic Parallax Split on Giant Typography
        if (typoSolid && typoOutline && typeof gsap !== 'undefined') {
            gsap.to([typoSolid, typoOutline], {
                x: -offset * 120,
                opacity: 0,
                filter: 'blur(10px)',
                duration: 0.25,
                ease: 'power2.in',
                onComplete: () => {
                    typoSolid.textContent = p.solid;
                    typoOutline.textContent = p.outline;
                    gsap.fromTo([typoSolid, typoOutline], 
                        { x: offset * 120, opacity: 0, filter: 'blur(10px)' }, 
                        { x: 0, opacity: 1, filter: 'blur(0px)', duration: 0.45, ease: 'power3.out', stagger: 0.05 }
                    );
                }
            });
        } else if (typoSolid && typoOutline) {
            typoSolid.textContent = p.solid;
            typoOutline.textContent = p.outline;
        }

        // 3. Left Information Stagger Animation
        const leftElements = [locBadge, projectTitle, projectMeta].filter(Boolean);
        if (leftElements.length && typeof gsap !== 'undefined') {
            gsap.to(leftElements, {
                y: -12,
                opacity: 0,
                duration: 0.18,
                onComplete: () => {
                    if (locText) locText.textContent = p.location;
                    if (projectTitle) projectTitle.textContent = p.title;
                    if (projectMeta) projectMeta.innerHTML = p.metaHtml;
                    gsap.fromTo(leftElements, 
                        { y: 16, opacity: 0 }, 
                        { y: 0, opacity: 1, duration: 0.35, stagger: 0.04, ease: 'power2.out' }
                    );
                }
            });
        } else {
            if (locText) locText.textContent = p.location;
            if (projectTitle) projectTitle.textContent = p.title;
            if (projectMeta) projectMeta.innerHTML = p.metaHtml;
        }

        // 4. Advantages Panel Cascading Wave
        if (advantagesList) {
            const itemsHtml = p.advantages.map(adv => `
                <div class="advantage-item">
                    <h4 class="adv-title">${adv.title}</h4>
                    <p class="adv-desc">${adv.desc}</p>
                </div>
            `).join('');

            advantagesList.innerHTML = itemsHtml;
            advantagesList.style.opacity = '1';

            if (typeof gsap !== 'undefined') {
                gsap.fromTo(advantagesList.querySelectorAll('.advantage-item'), 
                    { opacity: 0, x: offset * 35, scale: 0.96 }, 
                    { opacity: 1, x: 0, scale: 1, duration: 0.38, stagger: 0.06, ease: 'power2.out' }
                );
            }
        }

        // 5. Update pagination dots
        paginationDots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === currentIndex);
        });
    }

    if (prevBtn) {
        prevBtn.onclick = () => renderProject(currentIndex - 1, 'prev');
    }

    if (nextBtn) {
        nextBtn.onclick = () => renderProject(currentIndex + 1, 'next');
    }

    paginationDots.forEach(dot => {
        dot.addEventListener('click', () => {
            const idx = parseInt(dot.dataset.index, 10);
            if (!isNaN(idx) && idx !== currentIndex) {
                renderProject(idx, idx > currentIndex ? 'next' : 'prev');
            }
        });
    });

    // Keyboard Arrow navigation support
    window.addEventListener('keydown', (e) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            if (e.key === 'ArrowLeft') renderProject(currentIndex - 1, 'prev');
            else if (e.key === 'ArrowRight') renderProject(currentIndex + 1, 'next');
        }
    });

    // Touch Swipe support
    let touchStartX = 0;
    section.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    section.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) renderProject(currentIndex + 1, 'next');
            else renderProject(currentIndex - 1, 'prev');
        }
    }, { passive: true });

    // Initial render
    renderProject(0, 'init');
}

// ================= 22. VAARAAHI ARCHITECTURAL JOURNAL & BLOG ENGINE =================
let currentReaderFontSize = 15;
let currentArticleId = null;

function initPublicBlogs() {
    const grid = document.getElementById('publicBlogsGrid');
    if (!grid) return;

    const catPills = document.querySelectorAll('#blogCatPills .cat-pill');
    const searchInput = document.getElementById('blogSearchInput');
    const searchClearBtn = document.getElementById('searchClearBtn');
    const readTimeFilter = document.getElementById('readTimeFilter');
    const emptyState = document.getElementById('blogEmptyState');
    const spotlightCard = document.getElementById('spotlightCard');

    let activeCategory = 'All';
    let searchQuery = '';
    let readTimeVal = 'all';

    // 3D Magnetic tilt on spotlight card
    if (spotlightCard) {
        spotlightCard.addEventListener('mousemove', (e) => {
            const rect = spotlightCard.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            const rotX = (y / (rect.height / 2)) * -4;
            const rotY = (x / (rect.width / 2)) * 4;
            spotlightCard.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
        });
        spotlightCard.addEventListener('mouseleave', () => {
            spotlightCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        });
    }

    function renderFeed() {
        const allPosts = BlogStore.getAll().filter(p => p.status !== 'Draft');
        
        const filtered = allPosts.filter(post => {
            // Category match
            const matchCat = activeCategory === 'All' || post.category.toLowerCase().includes(activeCategory.toLowerCase());
            
            // Search match
            const q = searchQuery.toLowerCase().trim();
            const matchSearch = !q || 
                post.title.toLowerCase().includes(q) || 
                (post.excerpt && post.excerpt.toLowerCase().includes(q)) || 
                (post.author && post.author.toLowerCase().includes(q)) ||
                post.category.toLowerCase().includes(q);

            // Read time match
            let matchTime = true;
            const minutes = parseInt(post.readTime) || 5;
            if (readTimeVal === 'short') matchTime = minutes < 5;
            if (readTimeVal === 'long') matchTime = minutes >= 5;

            return matchCat && matchSearch && matchTime;
        });

        if (!filtered.length) {
            grid.innerHTML = '';
            if (emptyState) emptyState.style.display = 'block';
            return;
        }

        if (emptyState) emptyState.style.display = 'none';

        grid.innerHTML = filtered.map(post => `
            <article class="blog-card" onclick="openArticleReader('${post.id}')" data-cursor-action="READ">
                <div class="blog-card-media">
                    <img src="${post.image}" alt="${post.title}" class="blog-card-img" loading="lazy">
                    <span class="blog-card-cat-badge">${post.category}</span>
                    <span class="blog-card-read-badge"><i class="far fa-clock"></i> ${post.readTime}</span>
                </div>
                <div class="blog-card-body">
                    <div>
                        <div class="blog-card-meta">
                            <span><i class="far fa-calendar-alt"></i> ${post.date}</span>
                            <span><i class="far fa-eye"></i> ${post.views || 1200}</span>
                        </div>
                        <h3 class="blog-card-title">${post.title}</h3>
                        <p class="blog-card-excerpt">${post.excerpt}</p>
                    </div>
                    <div class="blog-card-footer">
                        <span class="blog-card-author"><i class="fas fa-pen-nib text-gold"></i> ${post.author ? post.author.split(',')[0] : 'Vaaraahi Desk'}</span>
                        <button class="btn-card-read" aria-label="Read Article">
                            <span>Read</span> <i class="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </article>
        `).join('');

        if (typeof gsap !== 'undefined') {
            gsap.fromTo('.blog-card', 
                { opacity: 0, y: 25 }, 
                { opacity: 1, y: 0, duration: 0.45, stagger: 0.08, ease: 'power2.out' }
            );
        }
    }

    // Category button listeners
    catPills.forEach(pill => {
        pill.addEventListener('click', () => {
            catPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            activeCategory = pill.getAttribute('data-cat') || 'All';
            renderFeed();
        });
    });

    // Search input with instant debounce
    let searchDebounce;
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchDebounce);
            searchQuery = e.target.value;
            if (searchClearBtn) {
                searchClearBtn.classList.toggle('visible', searchQuery.length > 0);
            }
            searchDebounce = setTimeout(renderFeed, 180);
        });
    }

    if (searchClearBtn) {
        searchClearBtn.addEventListener('click', () => {
            searchInput.value = '';
            searchQuery = '';
            searchClearBtn.classList.remove('visible');
            renderFeed();
        });
    }

    // Read time filter
    if (readTimeFilter) {
        readTimeFilter.addEventListener('change', (e) => {
            readTimeVal = e.target.value;
            renderFeed();
        });
    }

    // Initial render
    renderFeed();
}

// Reset filters helper
window.resetBlogFilters = function() {
    const searchInput = document.getElementById('blogSearchInput');
    const searchClearBtn = document.getElementById('searchClearBtn');
    const readTimeFilter = document.getElementById('readTimeFilter');
    const catPills = document.querySelectorAll('#blogCatPills .cat-pill');

    if (searchInput) searchInput.value = '';
    if (searchClearBtn) searchClearBtn.classList.remove('visible');
    if (readTimeFilter) readTimeFilter.value = 'all';

    catPills.forEach((p, idx) => {
        p.classList.toggle('active', idx === 0);
    });

    initPublicBlogs();
};

// Full-screen article reader modal
window.openArticleReader = function(id) {
    const post = BlogStore.getById(id) || DEFAULT_BLOGS.find(p => p.id === id);
    if (!post) return;

    currentArticleId = id;
    const modal = document.getElementById('blogReaderModal');
    const content = document.getElementById('blogReaderContent');
    const progressFill = document.getElementById('readerProgressFill');
    const body = document.getElementById('blogReaderBody');

    if (!modal || !content) return;

    // Increment views in store
    post.views = (post.views || 1200) + 1;
    const all = BlogStore.getAll();
    const targetIdx = all.findIndex(p => p.id === id);
    if (targetIdx !== -1) {
        all[targetIdx].views = post.views;
        BlogStore.saveAll(all);
    }

    content.innerHTML = `
        <div class="reader-header-meta">
            <span class="spotlight-cat-pill">${post.category}</span>
            <span style="font-size: 12px; color: rgba(255,255,255,0.6); margin-left: 12px;">
                <i class="far fa-calendar-alt"></i> ${post.date} • <i class="far fa-clock"></i> ${post.readTime}
            </span>
        </div>
        <h1 style="margin-top: 14px;">${post.title}</h1>
        <div style="font-size: 13px; color: var(--color-gold); font-weight: 600; margin-bottom: 20px;">
            <i class="fas fa-feather-alt"></i> Authored by ${post.author || 'Vaaraahi Architecture Council'}
        </div>
        <img src="${post.image}" alt="${post.title}" class="reader-hero-img">
        <div class="reader-text-stream">
            ${post.content || post.excerpt}
        </div>
        
        <!-- Related Project CTA inside Reader -->
        <div style="background: rgba(197, 160, 89, 0.12); border: 1px solid var(--color-gold); border-radius: var(--radius-xl); padding: 22px 26px; margin-top: 36px; display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap;">
            <div>
                <span style="font-size: 11px; font-weight: 800; color: var(--color-gold); letter-spacing: 1.5px; text-transform: uppercase;">✦ EXPERIENCE THIS IN ARCHITECTURE ✦</span>
                <h4 style="color: #FFFFFF; font-size: 18px; margin: 4px 0 2px;">Explore Vaaraahi Grandeur & Elite Vistas</h4>
                <p style="color: rgba(255,255,255,0.8); font-size: 12.5px; margin: 0;">Tour our 100% Vastu-compliant 3 & 4 BHK luxury duplex villas with clubhouse amenities.</p>
            </div>
            <a href="portfolio.html" class="btn-luxury btn-sm" style="flex-shrink: 0;">Explore Projects <i class="fas fa-arrow-right"></i></a>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Reading progress tracker
    if (body && progressFill) {
        body.scrollTop = 0;
        progressFill.style.width = '0%';
        body.onscroll = () => {
            const scrollPercent = (body.scrollTop / (body.scrollHeight - body.clientHeight)) * 100;
            progressFill.style.width = `${Math.min(100, Math.max(0, scrollPercent))}%`;
        };
    }
};

window.closeArticleReader = function() {
    const modal = document.getElementById('blogReaderModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
};

window.adjustReaderFont = function(delta) {
    const content = document.getElementById('blogReaderContent');
    if (content) {
        currentReaderFontSize = Math.min(22, Math.max(13, currentReaderFontSize + delta * 2));
        content.style.fontSize = `${currentReaderFontSize}px`;
    }
};

window.toggleReaderTheme = function() {
    const body = document.getElementById('blogReaderBody');
    const btn = document.getElementById('readerThemeBtn');
    if (body) {
        body.classList.toggle('sepia-mode');
        if (btn) {
            btn.innerHTML = body.classList.contains('sepia-mode') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        }
    }
};

window.shareCurrentArticle = function() {
    if (navigator.share) {
        navigator.share({
            title: 'Vaaraahi Architectural Journal',
            text: 'Check out this architectural insight from Vaaraahi Group:',
            url: window.location.href
        }).catch(() => {});
    } else {
        navigator.clipboard.writeText(window.location.href);
        alert('Article link copied to clipboard!');
    }
};

// Regional Growth & ROI Forecaster Simulator
function initBlogRoiForecaster() {
    const regionSelector = document.getElementById('roiRegionSelector');
    const capSlider = document.getElementById('roiCapitalSlider');
    const horSlider = document.getElementById('roiHorizonSlider');
    const capValBadge = document.getElementById('roiCapitalVal');
    const horValBadge = document.getElementById('roiHorizonVal');
    const projValEl = document.getElementById('roiProjectedVal');
    const gainTextEl = document.getElementById('roiGainText');
    const rentalEl = document.getElementById('roiRentalYield');
    const catalystList = document.getElementById('roiCatalystList');

    if (!capSlider || !horSlider) return;

    const REGION_PROFILES = {
        'rayachoty': {
            name: 'Rayachoty Bypass Belt',
            cagr: 0.165,
            rentalRate: 0.058,
            catalysts: [
                { icon: 'fa-road', text: 'Kadapa-Bangalore 4-Lane Greenfield Expressway (2027)' },
                { icon: 'fa-solar-panel', text: 'Annamayya District HQ Infra & Mega Solar Park' }
            ]
        },
        'proddatur': {
            name: 'Proddatur Ring Road',
            cagr: 0.178,
            rentalRate: 0.062,
            catalysts: [
                { icon: 'fa-city', text: 'Outer Bypass Expansion & Textile Export Trade Corridor' },
                { icon: 'fa-graduation-cap', text: 'Regional Medical & Engineering Academic Cluster' }
            ]
        },
        'jmdg': {
            name: 'Jammalamadugu Corridor',
            cagr: 0.185,
            rentalRate: 0.055,
            catalysts: [
                { icon: 'fa-industry', text: 'Jindal Steel Integrated Greenfield Industrial Plant' },
                { icon: 'fa-water', text: 'Gandikota Eco-Tourism & Highway Expansion Zone' }
            ]
        },
        'hyderabad': {
            name: 'Hyderabad Financial District',
            cagr: 0.145,
            rentalRate: 0.048,
            catalysts: [
                { icon: 'fa-subway', text: 'Metro Phase 2 Airport Express Line' },
                { icon: 'fa-building', text: 'Tier-1 IT Global Capability Centers (GCC)' }
            ]
        }
    };

    let activeRegion = 'rayachoty';

    function calculate() {
        const capitalLakhs = parseFloat(capSlider.value); // in Lakhs
        const years = parseInt(horSlider.value, 10);
        const profile = REGION_PROFILES[activeRegion] || REGION_PROFILES['rayachoty'];

        // Format capital label
        if (capValBadge) {
            capValBadge.textContent = capitalLakhs >= 100 ? `₹ ${(capitalLakhs / 100).toFixed(2)} Cr` : `₹ ${capitalLakhs} Lakhs`;
        }
        if (horValBadge) {
            horValBadge.textContent = `${years} Year${years > 1 ? 's' : ''}`;
        }

        // Compound appreciation: A = P * (1 + r)^t
        const finalAmountLakhs = capitalLakhs * Math.pow(1 + profile.cagr, years);
        const gainPercent = (((finalAmountLakhs - capitalLakhs) / capitalLakhs) * 100).toFixed(0);
        const rentalLakhs = (capitalLakhs * profile.rentalRate).toFixed(1);

        if (projValEl) {
            projValEl.textContent = finalAmountLakhs >= 100 ? `₹ ${(finalAmountLakhs / 100).toFixed(2)} Cr` : `₹ ${finalAmountLakhs.toFixed(1)} Lakhs`;
        }
        if (gainTextEl) {
            gainTextEl.textContent = `+${gainPercent}% Total Capital Growth (${(profile.cagr * 100).toFixed(1)}% CAGR)`;
        }
        if (rentalEl) {
            rentalEl.textContent = `₹ ${rentalLakhs} Lakhs / yr`;
        }

        if (catalystList) {
            catalystList.innerHTML = profile.catalysts.map(c => `
                <div class="catalyst-row">
                    <i class="fas ${c.icon} text-gold"></i>
                    <span>${c.text}</span>
                </div>
            `).join('');
        }
    }

    if (regionSelector) {
        const pills = regionSelector.querySelectorAll('.region-pill');
        pills.forEach(pill => {
            pill.addEventListener('click', () => {
                pills.forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                activeRegion = pill.getAttribute('data-region');
                calculate();
            });
        });
    }

    capSlider.addEventListener('input', calculate);
    horSlider.addEventListener('input', calculate);

    calculate();
}

window.handleWhitepaperDownload = function(e) {
    e.preventDefault();
    const btn = document.getElementById('btnWhitepaperSubmit');
    const email = document.getElementById('whitepaperEmail');

    if (!email || !email.value) return;

    if (btn) {
        btn.innerHTML = '<span><i class="fas fa-spinner fa-spin"></i> Generating PDF Link...</span>';
        btn.disabled = true;
    }

    setTimeout(() => {
        if (btn) {
            btn.innerHTML = '<span><i class="fas fa-check-circle"></i> Whitepaper Dispatched!</span>';
            btn.style.background = '#38A169';
        }
        alert(`Success! The 2026 Rayalaseema & AP Luxury Real Estate Market Report has been sent to ${email.value}.`);
        email.value = '';
        setTimeout(() => {
            if (btn) {
                btn.innerHTML = '<span><i class="fas fa-download"></i> Download Report (PDF)</span>';
                btn.style.background = '';
                btn.disabled = false;
            }
        }, 3500);
    }, 1200);
};

// ================= 23. VAARAAHI BLOGS CMS ADMIN DASHBOARD & STUDIO =================
let deleteCandidateId = null;

function initBlogsAdmin() {
    const tableBody = document.getElementById('adminPostsTableBody');
    if (!tableBody) return;

    const gateOverlay = document.getElementById('adminGateOverlay');
    const loginBtn = document.getElementById('adminLoginBtn');
    const quickLoginBtn = document.getElementById('quickLoginDemoBtn');
    const passwordInput = document.getElementById('adminPasswordInput');
    const searchInput = document.getElementById('adminSearchInput');
    const statusFilters = document.querySelectorAll('#adminStatusFilters .admin-filter-pill');
    const fileInput = document.getElementById('postFileInput');
    const dropzone = document.getElementById('adminDropzone');
    const clearPhotoBtn = document.getElementById('btnClearPhoto');
    const excerptInput = document.getElementById('postExcerptInput');
    const charCount = document.getElementById('excerptCharCount');
    const form = document.getElementById('adminPostForm');

    let currentFilter = 'All';
    let currentSearch = '';

    // 1. Authentication Handling
    function checkAuth() {
        if (sessionStorage.getItem('vaaraahi_cms_auth') === 'true') {
            if (gateOverlay) gateOverlay.style.display = 'none';
        } else {
            if (gateOverlay) gateOverlay.style.display = 'flex';
        }
    }

    function doLogin() {
        const pass = passwordInput ? passwordInput.value.trim() : '';
        if (pass === 'vaaraahi2026' || pass === 'admin') {
            sessionStorage.setItem('vaaraahi_cms_auth', 'true');
            if (gateOverlay) gateOverlay.style.display = 'none';
            showAdminToast('CMS Unlocked! Welcome to Editorial Studio.');
            renderAdminTable();
        } else {
            alert('Invalid Passcode. For demo testing, use: vaaraahi2026');
        }
    }

    if (loginBtn) loginBtn.onclick = doLogin;
    if (quickLoginBtn) {
        quickLoginBtn.onclick = () => {
            if (passwordInput) passwordInput.value = 'vaaraahi2026';
            doLogin();
        };
    }
    if (passwordInput) {
        passwordInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') doLogin();
        });
    }

    // 2. Render Posts Table & Stats
    function renderAdminTable() {
        let posts = BlogStore.getAll();
        if (!posts || !posts.length) {
            posts = DEFAULT_BLOGS;
            BlogStore.saveAll(DEFAULT_BLOGS);
        }

        // Update Top Metrics
        const total = posts.length;
        const publishedCount = posts.filter(p => p.status === 'Published').length;
        const draftCount = posts.filter(p => p.status === 'Draft').length;
        const totalViews = posts.reduce((sum, p) => sum + (p.views || 1200), 0);

        const elTotal = document.getElementById('adminStatTotal');
        const elPub = document.getElementById('adminStatPublished');
        const elDraft = document.getElementById('adminStatDrafts');
        const elViews = document.getElementById('adminStatViews');
        const elCountAll = document.getElementById('countFilterAll');
        const elCountPub = document.getElementById('countFilterPub');
        const elCountDraft = document.getElementById('countFilterDraft');

        if (elTotal) elTotal.textContent = total;
        if (elPub) elPub.textContent = publishedCount;
        if (elDraft) elDraft.textContent = draftCount;
        if (elViews) elViews.textContent = totalViews.toLocaleString();
        if (elCountAll) elCountAll.textContent = total;
        if (elCountPub) elCountPub.textContent = publishedCount;
        if (elCountDraft) elCountDraft.textContent = draftCount;

        // Filter & Search
        const filtered = posts.filter(p => {
            const matchStatus = currentFilter === 'All' || p.status === currentFilter;
            const q = currentSearch.toLowerCase().trim();
            const matchSearch = !q || 
                p.title.toLowerCase().includes(q) || 
                p.category.toLowerCase().includes(q) || 
                (p.author && p.author.toLowerCase().includes(q));
            return matchStatus && matchSearch;
        });

        if (!filtered.length) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="6" style="text-align: center; padding: 40px; color: rgba(255,255,255,0.6);">
                        <i class="fas fa-inbox" style="font-size: 32px; color: var(--color-gold); margin-bottom: 10px; display: block;"></i>
                        No articles match the current filter.
                    </td>
                </tr>
            `;
            return;
        }

        tableBody.innerHTML = filtered.map(post => `
            <tr>
                <td>
                    <img src="${post.image}" alt="${post.title}" class="admin-table-thumb" onerror="this.src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'">
                </td>
                <td>
                    <div class="admin-post-title">${post.title}</div>
                    <div class="admin-post-author"><i class="fas fa-pen-nib text-gold"></i> ${post.author || 'Vaaraahi Editorial'} • <small><i class="far fa-clock"></i> ${post.readTime || '4 min'}</small></div>
                </td>
                <td>
                    <span class="admin-cat-tag">${post.category}</span>
                </td>
                <td>
                    <span style="color: rgba(255,255,255,0.7);">${post.date}</span>
                </td>
                <td>
                    <span class="admin-status-badge ${post.status === 'Published' ? 'published' : 'draft'}" onclick="togglePostStatus('${post.id}')" title="Click to toggle Status">
                        <i class="fas ${post.status === 'Published' ? 'fa-check-circle' : 'fa-hourglass-half'}"></i> ${post.status}
                    </span>
                </td>
                <td>
                    <div class="admin-table-actions">
                        <button class="btn-admin-act edit" onclick="openEditPostModal('${post.id}')" title="Edit Article">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn-admin-act delete" onclick="openDeleteModal('${post.id}')" title="Delete Article">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `).join('');
    }

    // 3. Search & Filter Listeners
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value;
            renderAdminTable();
        });
    }

    statusFilters.forEach(pill => {
        pill.addEventListener('click', () => {
            statusFilters.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            currentFilter = pill.getAttribute('data-status') || 'All';
            renderAdminTable();
        });
    });

    // 4. Excerpt Character Counter
    if (excerptInput && charCount) {
        excerptInput.addEventListener('input', () => {
            charCount.textContent = `${excerptInput.value.length} / 180 chars`;
        });
    }

    // 5. Image File Upload & Drag-and-Drop
    function handlePhotoFile(file) {
        if (!file || !file.type.startsWith('image/')) {
            alert('Please select a valid image file (PNG, JPG, WebP).');
            return;
        }
        const reader = new FileReader();
        reader.onload = function(e) {
            const dataUrl = e.target.result;
            const imgInput = document.getElementById('postImageInput');
            const previewWrap = document.getElementById('postImagePreviewWrap');
            const previewImg = document.getElementById('postImagePreview');
            const prompt = document.getElementById('dropzonePrompt');

            if (imgInput) imgInput.value = dataUrl;
            if (previewImg) previewImg.src = dataUrl;
            if (previewWrap) previewWrap.style.display = 'flex';
            if (prompt) prompt.style.display = 'none';
        };
        reader.readAsDataURL(file);
    }

    if (fileInput) {
        fileInput.addEventListener('change', (e) => {
            if (e.target.files && e.target.files[0]) {
                handlePhotoFile(e.target.files[0]);
            }
        });
    }

    if (dropzone) {
        dropzone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropzone.classList.add('dragover');
        });
        dropzone.addEventListener('dragleave', () => {
            dropzone.classList.remove('dragover');
        });
        dropzone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropzone.classList.remove('dragover');
            if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                handlePhotoFile(e.dataTransfer.files[0]);
            }
        });
    }

    if (clearPhotoBtn) {
        clearPhotoBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const imgInput = document.getElementById('postImageInput');
            const previewWrap = document.getElementById('postImagePreviewWrap');
            const prompt = document.getElementById('dropzonePrompt');
            if (fileInput) fileInput.value = '';
            if (imgInput) imgInput.value = '';
            if (previewWrap) previewWrap.style.display = 'none';
            if (prompt) prompt.style.display = 'block';
        });
    }

    // 6. Form Submission
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const id = document.getElementById('postIdInput').value;
            const title = document.getElementById('postTitleInput').value.trim();
            const category = document.getElementById('postCategoryInput').value;
            const author = document.getElementById('postAuthorInput').value.trim();
            const status = document.getElementById('postStatusInput').value;
            const image = document.getElementById('postImageInput').value.trim() || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80';
            const excerpt = document.getElementById('postExcerptInput').value.trim();
            const content = document.getElementById('postContentInput').value.trim();

            const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
            const readMinutes = Math.max(2, Math.ceil(wordCount / 180));
            const readTime = `${readMinutes} min read`;

            if (id) {
                // Update
                BlogStore.update(id, {
                    title,
                    category,
                    author,
                    status,
                    image,
                    excerpt,
                    content,
                    readTime
                });
                showAdminToast('Article updated successfully!');
            } else {
                // Create
                BlogStore.add({
                    title,
                    category,
                    author,
                    status,
                    image,
                    excerpt,
                    content,
                    readTime
                });
                showAdminToast('New article published successfully!');
            }

            closePostModal();
            renderAdminTable();
        });
    }

    checkAuth();
    renderAdminTable();
}

// Global modal triggers
window.openNewPostModal = function() {
    const modal = document.getElementById('adminPostModal');
    const title = document.getElementById('postModalTitle');
    const idInput = document.getElementById('postIdInput');
    const form = document.getElementById('adminPostForm');
    const previewWrap = document.getElementById('postImagePreviewWrap');
    const prompt = document.getElementById('dropzonePrompt');
    const charCount = document.getElementById('excerptCharCount');

    if (form) form.reset();
    if (idInput) idInput.value = '';
    if (title) title.textContent = 'Add New Blog Post';
    if (previewWrap) previewWrap.style.display = 'none';
    if (prompt) prompt.style.display = 'block';
    if (charCount) charCount.textContent = '0 / 180 chars';
    if (modal) modal.style.display = 'flex';
};

window.closePostModal = function() {
    const modal = document.getElementById('adminPostModal');
    if (modal) modal.style.display = 'none';
};

window.openEditPostModal = function(id) {
    const post = BlogStore.getById(id);
    if (!post) return;

    const modal = document.getElementById('adminPostModal');
    const title = document.getElementById('postModalTitle');
    const idInput = document.getElementById('postIdInput');
    const titleInput = document.getElementById('postTitleInput');
    const catInput = document.getElementById('postCategoryInput');
    const authorInput = document.getElementById('postAuthorInput');
    const statusInput = document.getElementById('postStatusInput');
    const imgInput = document.getElementById('postImageInput');
    const excerptInput = document.getElementById('postExcerptInput');
    const contentInput = document.getElementById('postContentInput');
    const previewWrap = document.getElementById('postImagePreviewWrap');
    const previewImg = document.getElementById('postImagePreview');
    const prompt = document.getElementById('dropzonePrompt');
    const charCount = document.getElementById('excerptCharCount');

    if (idInput) idInput.value = post.id;
    if (title) title.textContent = 'Edit Publication';
    if (titleInput) titleInput.value = post.title;
    if (catInput) catInput.value = post.category;
    if (authorInput) authorInput.value = post.author || '';
    if (statusInput) statusInput.value = post.status;
    if (imgInput) imgInput.value = post.image;
    if (excerptInput) {
        excerptInput.value = post.excerpt;
        if (charCount) charCount.textContent = `${post.excerpt.length} / 180 chars`;
    }
    if (contentInput) contentInput.value = post.content || '';

    if (post.image) {
        if (previewImg) previewImg.src = post.image;
        if (previewWrap) previewWrap.style.display = 'flex';
        if (prompt) prompt.style.display = 'none';
    }

    if (modal) modal.style.display = 'flex';
};

window.openDeleteModal = function(id) {
    const post = BlogStore.getById(id);
    if (!post) return;
    deleteCandidateId = id;

    const modal = document.getElementById('adminDeleteModal');
    const titleEl = document.getElementById('deletePostTitle');
    const confirmBtn = document.getElementById('confirmDeleteBtn');

    if (titleEl) titleEl.textContent = `"${post.title}"`;
    if (confirmBtn) {
        confirmBtn.onclick = () => {
            if (deleteCandidateId) {
                const posts = BlogStore.getAll().filter(p => p.id !== deleteCandidateId);
                BlogStore.saveAll(posts);
                closeDeleteModal();
                showAdminToast('Article permanently deleted.');
                initBlogsAdmin();
            }
        };
    }
    if (modal) modal.style.display = 'flex';
};

window.closeDeleteModal = function() {
    const modal = document.getElementById('adminDeleteModal');
    if (modal) modal.style.display = 'none';
    deleteCandidateId = null;
};

window.togglePostStatus = function(id) {
    const post = BlogStore.getById(id);
    if (!post) return;
    const newStatus = post.status === 'Published' ? 'Draft' : 'Published';
    BlogStore.update(id, { status: newStatus });
    showAdminToast(`Status changed to ${newStatus}`);
    initBlogsAdmin();
};

window.applyImagePreset = function(url) {
    const imgInput = document.getElementById('postImageInput');
    const previewWrap = document.getElementById('postImagePreviewWrap');
    const previewImg = document.getElementById('postImagePreview');
    const prompt = document.getElementById('dropzonePrompt');

    if (imgInput) imgInput.value = url;
    if (previewImg) previewImg.src = url;
    if (previewWrap) previewWrap.style.display = 'flex';
    if (prompt) prompt.style.display = 'none';
};

window.formatEditorText = function(tag) {
    const textarea = document.getElementById('postContentInput');
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = textarea.value.substring(start, end) || 'Sample text';
    let formatted = selected;

    if (tag === 'b') formatted = `<strong>${selected}</strong>`;
    if (tag === 'i') formatted = `<em>${selected}</em>`;
    if (tag === 'h3') formatted = `<h3>${selected}</h3>`;
    if (tag === 'p') formatted = `<p>${selected}</p>`;
    if (tag === 'quote') formatted = `<blockquote>${selected}</blockquote>`;
    if (tag === 'ul') formatted = `<ul>\n  <li>${selected}</li>\n  <li>Second key insight</li>\n</ul>`;

    textarea.setRangeText(formatted, start, end, 'end');
    textarea.focus();
};

window.showAdminToast = function(msg) {
    const toast = document.getElementById('adminToast');
    if (!toast) return;
    const msgEl = toast.querySelector('.toast-msg');
    if (msgEl) msgEl.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3500);
};

function safeRun(fn, name) {
    try {
        if (typeof fn === 'function') fn();
    } catch (err) {
        console.warn(`[Vaaraahi] Error initializing ${name}:`, err);
    }
}

// ================= 19. MASTER RE-INITIALIZATION LIFECYCLE =================
function initAllPageFeatures() {
    safeRun(initFloatingCapsuleNav, 'initFloatingCapsuleNav');
    safeRun(initSmoothScroll, 'initSmoothScroll');
    safeRun(initCustomCursor, 'initCustomCursor');
    safeRun(initGSAPAnimations, 'initGSAPAnimations');
    safeRun(initCoreInteractions, 'initCoreInteractions');
    safeRun(initHomeAboutPillars, 'initHomeAboutPillars');
    safeRun(initKineticFilmstrip, 'initKineticFilmstrip');
    safeRun(initWhyVaaraahiHorizontalScroll, 'initWhyVaaraahiHorizontalScroll');
    safeRun(initRoiMortgageCalculator, 'initRoiMortgageCalculator');
    safeRun(initBioclimaticInspector, 'initBioclimaticInspector');
    safeRun(initBeforeAfterSlider, 'initBeforeAfterSlider');
    safeRun(initTransitNavigator, 'initTransitNavigator');
    safeRun(initZeroSnagVerifier, 'initZeroSnagVerifier');
    safeRun(init3DExplodedVilla, 'init3DExplodedVilla');
    safeRun(init3DCurvedCarousel, 'init3DCurvedCarousel');
    safeRun(initDayNightSimulator, 'initDayNightSimulator');
    safeRun(init3DMasterplanNavigator, 'init3DMasterplanNavigator');
    safeRun(initProjectsFilterAndMap, 'initProjectsFilterAndMap');
    safeRun(initPublicBlogs, 'initPublicBlogs');
    safeRun(initBlogsAdmin, 'initBlogsAdmin');
    safeRun(initCareersPortal, 'initCareersPortal');
    safeRun(initHomeBlogStrip, 'initHomeBlogStrip');

    // Peak 3D & WebGL Engines
    safeRun(initHero3DStage, 'initHero3DStage');
    safeRun(initStats3DBlocks, 'initStats3DBlocks');
    safeRun(initPeak3DCurvedCarousel, 'initPeak3DCurvedCarousel');
    safeRun(initThreeRegionalMap, 'initThreeRegionalMap');
    safeRun(initThreeUnitWalkthrough, 'initThreeUnitWalkthrough');
    safeRun(initSustainability3DScrollytelling, 'initSustainability3DScrollytelling');

    // Initialize bespoke mechanisms
    safeRun(initHeroAtmosphereSwitcher, 'initHeroAtmosphereSwitcher');
    safeRun(initCityImpactExplorer, 'initCityImpactExplorer');
    safeRun(initVastuCompass, 'initVastuCompass');
    safeRun(initMultiPerspectiveCards, 'initMultiPerspectiveCards');
    safeRun(initPillarProofConsole, 'initPillarProofConsole');
    safeRun(initVoiceTestimonialHub, 'initVoiceTestimonialHub');
    safeRun(initVipSchedulerDesk, 'initVipSchedulerDesk');
    safeRun(initTimeTravelSlider, 'initTimeTravelSlider');
    safeRun(initCommitmentMatrixDial, 'initCommitmentMatrixDial');
    safeRun(initInCardUnitConfigurator, 'initInCardUnitConfigurator');
    safeRun(initRoomSpatialInspector, 'initRoomSpatialInspector');
    safeRun(initAmenityCampusNavigator, 'initAmenityCampusNavigator');
    safeRun(initCommuteSimulator, 'initCommuteSimulator');
    safeRun(initSustainabilityProofConsole, 'initSustainabilityProofConsole');
    safeRun(initEcoSavingsCalculator, 'initEcoSavingsCalculator');
    safeRun(initCareersCultureAndMatchmaker, 'initCareersCultureAndMatchmaker');
    safeRun(initRegionalHQNavigator, 'initRegionalHQNavigator');
    safeRun(initBlogRoiForecaster, 'initBlogRoiForecaster');
}

document.addEventListener('DOMContentLoaded', () => {
    initAllPageFeatures();
    initBarbaTransitions();
});







