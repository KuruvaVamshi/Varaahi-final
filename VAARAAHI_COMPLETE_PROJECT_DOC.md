# VAARAAHI GROUP OF ESTATES — COMPLETE PROJECT & SECTION-BY-SECTION DOCUMENTATION

---

## 📑 TABLE OF CONTENTS
1. **Executive Overview & Brand Architecture**
2. **Global Shared Ecosystem (Navigation, Audio, Transitions, Cursor, Dock)**
3. **Page 1: `index.html` — Flagship 3D Home Portal (19 Sections)**
4. **Page 2: `about.html` — Heritage, Story & Governance (7 Sections)**
5. **Page 3: `portfolio.html` — Master Projects Inventory & Multi-Filter (6 Sections)**
6. **Page 4: `project-detail.html` — Single Landmark Deep-Dive (8 Sections)**
7. **Page 5: `sustainability.html` — Why Vaaraahi & Bioclimatic Standards (6 Sections)**
8. **Page 6: `careers.html` — High-Performance Culture & Job Portal (5 Sections)**
9. **Page 7: `blogs.html` — Public Architectural Insights & Press (4 Sections)**
10. **Page 8: `blogs-admin.html` — Internal Editorial CMS Portal (4 Sections)**
11. **Page 9: `contact.html` — Regional Experience Centers & Consultations (5 Sections)**
12. **Master Inventory of 16 Bespoke Interactive Tools**
13. **Technical Stack, Libraries & Data Persistence**

---

## 🏛️ 1. EXECUTIVE OVERVIEW & BRAND ARCHITECTURE

**Vaaraahi Group of Estates** is an ultra-luxury real estate development web application and spatial experience center. The company develops premium residential gated communities, luxury duplex villas, and plotted lifestyle enclaves across prime growth corridors in **Telangana and Andhra Pradesh** (specifically **Hyderabad, Rayachoty, Proddatur, and Jammalamadugu**).

### Core Brand Identity & Standards:
* **15+ Years Track Record:** 1,000+ happy resident families, 1.5M+ Sq.Ft delivered.
* **100% Legal Transparency:** Forensic 40-year title searches by High Court advocates with RERA licenses and direct Bank APF approvals (SBI, HDFC, ICICI).
* **Engineered for 100+ Years:** Fe-550D TMT corrosion-resistant steel rebar, computer-batched M35 concrete, and Porotherm clay insulation masonry.
* **Bioclimatic & Vastu Science:** 100% Vastu compliance harmonized with solar orientation and stack ventilation to achieve interiors that are **5°C cooler naturally**.
* **Environmental Stewardship:** 40% dedicated green canopy, subterranean rainwater percolation aquifers, and solar microgrid arrays.

---

## 🌐 2. GLOBAL SHARED ECOSYSTEM (PRESENT ON ALL PAGES)

### 1. Floating Architectural Capsule Navbar
* **Structure:** A frosted emerald-glass pill (`backdrop-filter: blur(24px)`) floating 20px from the top.
* **Magnetic Glider Indicator:** A glowing gold pill highlight (`#navGlider`) that calculates link offsets and smoothly glides behind menu links with physics easing on hover.
* **Live Counter Badge:** Displays `5` on the *Projects* link indicating active landmark enclaves.
* **Pulsing CTA:** "Enquire Now" with an animated gold radar pulse dot leading to `contact.html`.
* **Mobile Hamburger:** Responsive full-screen slide-down menu for mobile devices.

### 2. Luxury Custom Cursor
* **Structure:** A dual-element custom pointer composed of a 6px gold inner dot (`.lux-cursor`) and a 36px smooth spring follower circle (`.lux-follower`).
* **Contextual Badge Feedback:** Text tags dynamically pop up on hover (*e.g., `EXPLORE`, `VIEW`, `CALC`, `PLAY`, `DRAG`, `INSPECT`, `360°`*).

### 3. Barba.js Double-Pane Curtain Shutter Transitions
* **Structure:** Seamless page navigation without traditional browser reloading. Dual emerald shutters slide in to wipe the screen, initialize new page scripts, and wipe out smoothly.

### 4. Procedural Luxury Audio Engine (`SoundFX`)
* **Structure:** Web Audio API synthesizer generating bespoke acoustic feedback:
  * Soft metallic ping on button taps.
  * Resonant chime on modal openings.
  * Shutter sweep on page transitions.

### 5. Floating Quick-Action Dock (Bottom-Right)
* **"Book Site Visit" Pill:** Smoothly opens or scrolls to the VIP appointment desk.
* **WhatsApp Icon:** Direct one-click encrypted chat with an executive relationship manager.

---

## 🏠 3. PAGE 1: `index.html` (FLAGSHIP 3D HOME PORTAL)

### Section 1: Floating Capsule Navigation
* **Function:** Global access point with magnetic glider and Enquire CTA.

### Section 2: Hero 3D Spatial Rig & Editorial Intro
* **Function:** Real-time WebGL 3D architectural duplex villa with floor-to-ceiling glowing glass curtain walls, rippling infinity pool, 14 vertical louvers, and rooftop solar pergola.
* **User Controls:**
  * **Atmosphere Light Rig:** Toggle between **Golden Hour** (amber sunrise), **Zenith** (noon sun), and **Dusk** (twilight with interior glowing point lights).
  * **Parallax Orbit & Scroll Dolly:** Move mouse to orbit camera; scroll down to dolly camera into the sky.
  * **CTAs:** Direct buttons to *"Explore Portfolio"* and *"Book Private Site Tour"*.

### Section 3: Live Marquee Ribbon
* **Function:** Smooth infinite ticker displaying verified credentials (RERA, APF, 300-point zero-snag, 15+ years trust).

### Section 4: Vaaraahi Regional Scale & Impact Hub
* **Function:** Regional scoreboard across AP & TG.
* **User Controls:** Click tabs for **All Regions, Rayachoty Hub, Proddatur Hub, Jammalamadugu,** or **Hyderabad HQ** to dynamically recalculate delivered square footage, families, and project counts.

### Section 5: 3D Exploded Villa Structural Architecture & Floor Inspector
* **Function:** BIM architectural cutaway of a 4 BHK luxury triplex villa.
* **User Controls:** Click *"Explode 3D Floors"* or choose **Level 03 (Sky Lounge), Level 02 (Master Suites), Level 01 (Grand Living),** or **Foundation** to inspect room zones, dimensions, and materials.

### Section 6: Interactive Vastu & Bioclimatic Alignment Compass
* **Function:** Bridges ancient Indian Vastu Shastra geomancy with modern thermal science.
* **User Controls:** Click any of the 8 cardinal nodes (**Ishanya/NE, Purva/E, Agni/SE, Dakshina/S, Nairuthi/SW, Pashchima/W, Vayavya/NW, Uttara/N**) to inspect ideal room placements and airflow rationale.

### Section 7: 3D Curved Architectural Showcase Carousel
* **Function:** Orbital perspective slider showcasing flagship villa enclaves (*Grandeur, Elite Vistas, Green Meadows, Signature Towers*).
* **User Controls:** Drag, swipe, or click arrow buttons to navigate cards with direct unit exploration links.

### Section 8: Interactive 3D Regional Map & Drone Flythrough
* **Function:** 3D terrain canvas displaying geographical nodes across South India.
* **User Controls:** Click city buttons to fly the virtual drone camera into Rayachoty, Proddatur, Jammalamadugu, or Hyderabad.

### Section 9: Bioclimatic Structure & Material Deep-Dive
* **Function:** Architectural cross-section blueprint detailing why homes stay 5°C cooler.
* **User Controls:** Click on 6 hotspot pins (**Porotherm Blocks, Fe-550D Steel, M35 Concrete, UPVC Glazing, Aquifers, Rooftop Solar**) to view U-values and efficiency stats.

### Section 10: 24-Hour Solar & Lighting Simulator
* **Function:** Real-time solar path and ambient lighting visualizer.
* **User Controls:** Select **Dawn (6:30 AM), Noon (12:00 PM), Golden Hour (5:30 PM),** or **Night (9:00 PM)** to transition daylight shaders and window luminescence.

### Section 11: Blueprint Vision vs. Completed Reality (Before/After Slider)
* **Function:** Proves construction execution fidelity.
* **User Controls:** Drag the split-screen divider handle left/right to compare 3D BIM render against finished handover photography.

### Section 12: Smart Mortgage & 10-Year ROI Wealth Calculator
* **Function:** Financial planning simulator.
* **User Controls:** Toggle between **Monthly EMI** and **10-Year Wealth Growth (ROI)**; adjust sliders for Price, Down Payment, Tenure, and Appreciation Rate to see real-time wealth readouts.

### Section 13: Regional Transit & Highway Corridor Navigator
* **Function:** Interactive SVG highway radar showing drive durations.
* **User Controls:** Click waypoints along the route (**NH-44, Regional Airport, IT Tech Hub, Hospital City, Bengaluru Corridor**) to view drive durations and preview photos.

### Section 14: 3D Isometric Community Masterplan Navigator
* **Function:** Aerial township infrastructure viewer.
* **User Controls:** Click hotspots to inspect the **15,000 Sq.Ft Clubhouse, 40% Green Park, 40-Ft Avenues,** and **Security Gateway**.

### Section 15: Forensic Integrity & Proof Console
* **Function:** Tabbed legal and engineering due-diligence vault.
* **User Controls:** Switch between 5 pillars to review 40-year clear title proofs, bank APF approvals, and soil test logs.

### Section 16: Resident Voice Testimonial Hub
* **Function:** Verified homeowner feedback with interactive voice note simulators.
* **User Controls:** Filter by community / NRI buyers and play simulated voice notes with animated equalizer waveforms.

### Section 17: Public Blogs & Construction Updates Strip
* **Function:** Live feed of recent architectural articles leading to `blogs.html`.

### Section 18: Parallax VIP Site Tour Booking Band
* **Function:** Direct chauffeur tour scheduler.
* **User Controls:** Select preferred time window (Morning, Afternoon, Sunset), enter details, and confirm a VIP Pass.

### Section 19: Site-Wide Master Footer
* **Function:** Full sitemap, office addresses, legal links, and social channels.

---

## 🏛️ 4. PAGE 2: `about.html` (HERITAGE, STORY & GOVERNANCE)

### Section 1: Hero Banner
* **Function:** Atmospheric overview of the 15-year founder journey (*"Crafting Generational Sanctuaries Since 2010"*).

### Section 2: 15-Year Interactive Milestone Time-Travel Slider
* **Function:** Chronological history of Vaaraahi Group.
* **User Controls:** Click era buttons (**2010 Inception, 2014 Inaugural Delivery, 2019 Multi-City Scale, 2026 Smart Communities**) to inspect historical milestones and land bank metrics.

### Section 3: The 8 Commitments of Vaaraahi (Blueprint Matrix)
* **Function:** Engineering and governance charter.
* **User Controls:** Click through 8 stations (*Quality Construction, Architecture, Locations, Planning, Amenities, Transparency, Execution, Value*) to review technical ISO benchmarks.

### Section 4: 300-Point Zero-Snag Quality Audit Console
* **Function:** Pre-handover inspection system.
* **User Controls:** Switch between **Civil & Structural, Hydrology, Electrical,** and **Legal Clearances**; click *"Download Sample Audit Log (PDF)"*.

### Section 5: Interactive 6-Stop Delivery Process Stepper
* **Function:** Client journey roadmap from **01 Discover, 02 Plan, 03 Design, 04 Build, 05 Deliver,** to **06 Relationships**.

### Section 6: Leadership Profile & Philosophy Audio-Note
* **Function:** Profile of Founder & Managing Director **Sri K. Vamshi Vardhan Reddy** with an interactive 1:15 minute executive voice note.

### Section 7: The Vaaraahi Promise & Consultation CTA
* **Function:** Corporate oath and site tour reservation trigger.

---

## 🏙️ 5. PAGE 3: `portfolio.html` (MASTER PROJECTS INVENTORY)

### Section 1: Hero Banner
* **Function:** Portfolio overview (*"Addresses Designed for Tomorrow"*).

### Section 2: Multi-Factor Live Filter Bar & View Toggle
* **Function:** Real-time search engine for properties.
* **User Controls:** Filter by **City** (Hyderabad, Proddatur, Jammalamadugu, Rayachoty), **Property Type** (Villas, Gated Communities, Apartments), **Status** (Available, Ongoing, Ready), and **BHK** (2, 3, 4 BHK); switch between **Grid** and **Map View**.

### Section 3: 3D Cylindrical Spatial Project Gallery
* **Function:** Orbital perspective carousel of flagship projects with direct unit exploration links.

### Section 4: Interactive Regional Map View
* **Function:** Live map canvas displaying GPS pins across AP and Telangana with property popups.

### Section 5: Projects Grid Showcase
* **Function:** Comprehensive cards showing pricing, RERA IDs, square footage, and direct deep-links to `project-detail.html`.

### Section 6: Parallax VIP Consultation Band & Master Footer
* **Function:** Direct booking band and global footer.

---

## 🏡 6. PAGE 4: `project-detail.html` (SINGLE LANDMARK DEEP-DIVE)

### Section 1: Hero Gallery & 360° Virtual Tour
* **Function:** High-resolution architectural photography with 360° interactive walkthrough trigger.

### Section 2: Quick Overview Bar
* **Function:** Snapshot showing Property Type, Configuration (3 & 4 BHK), Possession Status, and RERA Registration ID.

### Section 3: 3D Interactive Unit Walkthrough & Day/Night Shader
* **Function:** Real-time Three.js 3D villa model.
* **User Controls:** Switch camera angles (**Isometric, Top-Down, Street**) and lighting rigs (**Daylight, Sunset, Night**).

### Section 4: 3D Exploded Villa BIM Inspector
* **Function:** Interactive 4-level floor cutaway with room dimensions.

### Section 5: Interactive 2D/3D Floor Plan Switcher & Dimension Tables
* **Function:** Room-by-room architectural blueprint dimensions table.

### Section 6: Masterplan Community Layout & Infrastructure Spec Grid
* **Function:** Gated township specifications, underground power grid, and bank APF pre-approval letters.

### Section 7: Cinematic Video Tour Player
* **Function:** 4K video walkthrough with custom playback controls.

### Section 8: VIP Booking & Brochure Download Form
* **Function:** Form to download the 32-page project PDF or book an on-site chauffeur walkthrough.

---

## 🌿 7. PAGE 5: `sustainability.html` (WHY VAARAAHI & ECO STANDARDS)

### Section 1: Hero & Sticky Jump Links Banner
* **Function:** Intro banner with quick anchor buttons to `#why-vaaraahi`, `#comparisonSection`, `#bioclimaticSection`, `#ecoCalculatorSection`.

### Section 2: Forensic Due-Diligence & Proof Console (Part 1)
* **Function:** Tabbed legal and engineering vault detailing 40-year clear titles, SBI/HDFC APF approvals, and certified steel logs.

### Section 3: Developer Comparison Matrix & Risk Assessor
* **Function:** Side-by-side comparison table showing **Vaaraahi Lifetime Standards** vs. **Conventional Builder Risks**.

### Section 4: 3D Bioclimatic Scrollytelling Cutaway (Part 2)
* **Function:** 3D building cutaway detailing stack ventilation, Porotherm thermal mass, and rainwater harvesting aquifers.

### Section 5: Interactive Eco-Savings & Carbon Offset Calculator
* **Function:** Simulates annual electricity cost savings (via solar PV) and groundwater replenishment in liters.

### Section 6: Parallax CTA Consultation Band & Master Footer
* **Function:** Call to action and footer.

---

## 💼 8. PAGE 6: `careers.html` (CAREERS & CULTURE PORTAL)

### Section 1: Hero Section
* **Function:** Welcome message (*"Shape the Skyline. Build Your Legacy."*).

### Section 2: Engineering Culture & Growth Explorer
* **Function:** 4 culture cards detailing BIM certifications, zero-harm safety, merit bonuses, and family healthcare.

### Section 3: Smart Role Matchmaker & Live Filter
* **Function:** Current vacancies filterable by **Civil & Structural, Architecture & BIM, Quality Assurance,** and **Advisory & Sales**.

### Section 4: Interactive Job Application Modal
* **Function:** Application form with inputs for Name, Email, Phone, Experience, Portfolio URL, and Resume File Upload.

### Section 5: General Application Band & Master Footer
* **Function:** Open application submission and global footer.

---

## 📰 9. PAGE 7: `blogs.html` (PUBLIC INSIGHTS & ARTICLES)

### Section 1: Hero Section
* **Function:** Knowledge hub overview (*"Architecture, Insights & Living Standards"*).

### Section 2: Real-Time Category Filter & Search Bar
* **Function:** Filter articles by **All, Sustainability, Construction Updates, Industry Insights**, or search by keyword.

### Section 3: Public Blogs Dynamic Grid
* **Function:** Responsive cards populated dynamically from `BlogStore` in `main.js`.

### Section 4: Modal Full Article Reader
* **Function:** Clicking *"Read Article"* opens an elegant reader modal with full typography, author info, and reading time.

---

## 🔐 10. PAGE 8: `blogs-admin.html` (INTERNAL CMS PORTAL)

### Section 1: Admin Passcode Authentication Gate Modal
* **Function:** Security gate (`Passcode: vaaraahi2026` or 1-Click Demo Login) restricting CMS access to authorized staff.

### Section 2: Content Management Dashboard & Metrics
* **Function:** Executive metrics showing **Total Articles, Published Online, Drafts,** and **Estimated Reader Views**.

### Section 3: Articles Management Table
* **Function:** Management table with edit and delete triggers.

### Section 4: Add / Edit Article Modal Editor
* **Function:** Full form to create or edit articles (Title, Category, Author, Image URL, Excerpt, Body); saves directly to `localStorage` with instant reflection on `blogs.html`.

---

## 📍 11. PAGE 9: `contact.html` (REGIONAL HUBS & APPOINTMENTS)

### Section 1: Hero Section
* **Function:** Contact header (*"Begin Your Journey Home"*).

### Section 2: Interactive Consultation Form & Direct Call Bar
* **Function:** Lead submission form and direct telephone/email hotlines.

### Section 3: Regional Headquarters & Experience Centers Grid
* **Function:** 4 physical hub cards:
  1. **Hyderabad Corporate HQ** (Financial District, Nanakramguda)
  2. **Proddatur Experience Center** (Main Bypass Road)
  3. **Rayachoty Regional Hub** (Madanapalle Road)
  4. **Jammalamadugu Branch Office** (Gandhi Road)

### Section 4: Interactive Google Maps Embed Stage
* **Function:** Visual satellite/map locator for regional offices.

### Section 5: Master Site Footer
* **Function:** Global site footer and legal notices.

---

## 🛠️ 12. MASTER INVENTORY OF 16 BESPOKE INTERACTIVE TOOLS

| # | Tool Name | Found On | What It Does & User Outcome |
| :-: | :--- | :--- | :--- |
| **1** | **Hero 3D WebGL Villa Stage** | `index.html` | Real-time 3D modernist villa with Golden/Zenith/Dusk atmosphere switcher and mouse orbit. |
| **2** | **Regional Impact Hub** | `index.html` | City-by-city live delivered square footage and family counter. |
| **3** | **3D Exploded Villa BIM Inspector** | `index.html`, `project-detail.html` | Explodes 4 floors to inspect room dimensions and structural specifications. |
| **4** | **Vastu & Bioclimatic Compass** | `index.html` | 8-point cardinal geomancy dial showing room placements and wind flow science. |
| **5** | **3D Curved Showcase Carousel** | `index.html` | Perspective 3D card carousel of landmark villas with pricing and unit links. |
| **6** | **3D Regional Drone Map** | `index.html`, `portfolio.html` | Interactive 3D flythrough camera navigation across AP & TG growth hubs. |
| **7** | **Bioclimatic Material Deep-Dive** | `index.html` | 6 interactive blueprint hotspots showing why homes stay 5°C cooler. |
| **8** | **24-Hour Solar & Lighting Simulator** | `index.html` | Simulates Dawn, Noon, Dusk, and Night lighting shaders and window glow. |
| **9** | **Before/After Execution Slider** | `index.html` | Interactive divider comparing 3D BIM render vs. completed handover photo. |
| **10** | **Mortgage & 10-Yr ROI Calculator** | `index.html` | Dual-mode simulator calculating monthly EMI and 10-year capital appreciation. |
| **11** | **Transit & Corridor Navigator** | `index.html` | Interactive SVG road radar showing real-time drive times to airports and tech hubs. |
| **12** | **3D Isometric Masterplan Navigator** | `index.html` | Hotspots exploring clubhouse, 40% green parks, and security gates. |
| **13** | **Forensic Proof & Integrity Console** | `index.html`, `sustainability.html` | 5-pillar vault displaying 40-year clear title searches and bank APF letters. |
| **14** | **Resident Voice Testimonial Hub** | `index.html` | Homeowner story filter with animated audio equalizer voice note simulators. |
| **15** | **15-Year Milestone Time-Travel Slider** | `about.html` | Scrubbable historical timeline showing company evolution since 2010. |
| **16** | **Developer Risk Comparison Matrix** | `sustainability.html` | Side-by-side audit comparing Vaaraahi standards against builder risks. |

---

## 💻 13. TECHNICAL STACK & ARCHITECTURE

* **Core Language:** Pure Vanilla HTML5 & JavaScript (ES6+) for blazing fast load times and zero dependency bloat.
* **Styling:** Unified Luxury Design System (`style.css`) using CSS Custom Properties, glassmorphic filters, and fluid CSS grids.
* **3D Graphics Engine:** `Three.js` (WebGL) for real-time mesh rendering, shadow mapping, and shader manipulation.
* **Kinetic Animation:** `GSAP` (GreenSock) + `ScrollTrigger` for smooth scroll scrubbing, stagger reveals, and split-line text animations.
* **Page Transitions:** `@barba/core` for seamless page wiping without full page reloads.
* **Acoustic Synthesizer:** Native HTML5 `Web Audio API` generating procedural sine/triangle chimes.
* **CMS Persistence:** Client-side `localStorage` data store (`BlogStore`) with full Create, Read, Update, Delete (CRUD) capability.
