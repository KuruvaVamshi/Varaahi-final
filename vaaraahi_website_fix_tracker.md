# VAARAAHI GROUP — Website Fix Tracker

Built by auditing the actual code (`main.js`, `style.css`, and all 8 HTML pages) against the original architecture guide. Use this as a working checklist — go section by section, page by page, and mark each row ✅ once you've visually confirmed it in the browser.

**How to use this doc:** For each row, open the page, scroll to that section, and test the described interaction. Note the result in the "Verified?" column. Anything you mark ✗ or "broken", send me a screenshot referencing the Section ID below and I'll trace it straight to the exact function.

---

## 🔧 Global Setup (check this first — affects every page)

| Check | What to verify | Status |
| :--- | :--- | :--- |
| Script load order | All 8 pages load: Three.js r128 → OrbitControls → GSAP → ScrollTrigger → Lenis → Barba → `main.js`, in that order | ✅ Confirmed consistent across all pages |
| Console errors | Open DevTools Console on each page, reload, screenshot any red errors | ⬜ Needs browser check |
| `safeRun()` warnings | Because every section init is wrapped in try/catch, a failing section fails **silently**. Open Console and look for lines starting `[Vaaraahi] Error initializing...` — this is the single fastest way to find every broken section at once | ⬜ **Do this first** — paste me the full list of warnings and I can fix all of them in one pass |
| Image loading | Unsplash CDN images (63 total site-wide) — confirm none show as broken/grey boxes (could indicate network/hotlink blocking in your environment) | ⬜ Needs browser check |

---

## 1. Home Page (`index.html`)

| # | Section | JS Function | Known Status |
| :-- | :-- | :-- | :-- |
| 1 | Hero 3D WebGL Stage | `initHero3DStage()` | Code intact. Depends on Three.js/OrbitControls loading — check console first. |
| 2 | Extruded 3D Stats Strip | `initStats3DBlocks()` | Code intact. |
| — | Marquee Ribbon | CSS-only (`.marquee-inner`) | Pure CSS keyframe, no JS dependency — if not animating, it's a CSS/style.css issue, not JS. |
| 3 | City & Impact Explorer | `initCityImpactExplorer()` | Code intact, uses fallback IDs correctly. |
| 4 | 3D Exploded Villa BIM Inspector | `init3DExplodedVilla()` | Code intact. |
| 5 | Vastu & Bioclimatic Compass | `initVastuCompass()` | Code intact, uses fallback IDs correctly. |
| 6 | 3D Curved Arc Project Carousel | `initPeak3DCurvedCarousel()` | Code intact. |
| 7 | 3D Regional Terrain Map | `initThreeRegionalMap()` | Code intact — heaviest Three.js scene, most likely to choke on slow GPUs/mobile. |
| 8 | Bioclimatic Material Inspector | `initBioclimaticInspector()` | Code intact. |
| 9 | 24-Hr Solar & Lighting Simulator | `initDayNightSimulator()` | Code intact. |
| 10 | BIM Render vs Reality Slider | `initBeforeAfterSlider()` | Code intact. |
| 11 | Mortgage & ROI Calculator | `initRoiMortgageCalculator()` | Code intact. |
| 12 | Transit & Highway Navigator | `initTransitNavigator()` | Code intact. |
| 13 | 3D Isometric Masterplan Navigator | `init3DMasterplanNavigator()` | Code intact. |
| 14 | Pillars of Integrity Console | `initPillarProofConsole()` | Code intact. |
| 15 | Homeowner Voice Testimonial Hub | `initVoiceTestimonialHub()` | Code intact. (Note: an old unused testimonial-slider code path also exists in `initCoreInteractions()` targeting classes that no longer exist in the HTML — harmless dead code, doesn't affect this section.) |
| 16 | Live Blogs Strip | `initHomeBlogStrip()` | Code intact — pulls from `BlogStore` (localStorage). If you haven't published any blog posts via the admin panel yet, this section will legitimately show 0 or fallback posts — **not a bug**, just no content yet. |
| 17 | VIP Site Visit Scheduling Desk | `initVipSchedulerDesk()` | ✅ Verified wired correctly end-to-end. |

---

## 2. About Us Page (`about.html`)

| # | Section | JS Function | Known Status |
| :-- | :-- | :-- | :-- |
| 1 | Heritage Hero | `initGSAPAnimations()` | Code intact. |
| 2 | 15-Year Time Travel Slider | `initTimeTravelSlider()` | Code intact. |
| 3 | Commitment Matrix Dial | `initCommitmentMatrixDial()` | Code intact. |
| 4 | 300-Point Zero-Snag Verifier | `initZeroSnagVerifier()` | ⚠️ **Not in original doc — extra section found in code.** Verify this renders; it's a newer addition. |
| 5 | 6-Stop Development Process Stepper | `initCoreInteractions()` | Code intact. |
| 6 | Leadership & Founder Profile | `initGSAPAnimations()` | Code intact. |
| 7 | Promise & Closing CTA | CSS/`style.css` | Static parallax band. |

---

## 3. Projects Portfolio Page (`portfolio.html`)

| # | Section | JS Function | Known Status |
| :-- | :-- | :-- | :-- |
| 1 | Portfolio Hero | `initGSAPAnimations()` | Code intact. |
| 2 | Filter & View Toggle Bar | `initProjectsFilterAndMap()` | Code intact. |
| 3 | 3D Cylindrical Ring Carousel | `init3DCurvedCarousel()` | Code intact. |
| 4 | Master Grid + In-Card Unit Configurator | `initInCardUnitConfigurator()` | Code intact. |
| 5 | Interactive Map Viewport | `initProjectsFilterAndMap()` | Code intact. Has a "Coming Soon" status badge/filter option — this is intentional content, not a bug. |

---

## 4. Project Detail Page (`project-detail.html`)

| # | Section | JS Function | Known Status |
| :-- | :-- | :-- | :-- |
| 1 | Hero Gallery & 360° Tour | `initGSAPAnimations()` | Code intact. |
| 2 | Overview Panel | Static | — |
| 3 | 3D Unit Walkthrough + Day/Night Shader | `initThreeUnitWalkthrough()` | Code intact — heavy Three.js scene. |
| 4 | 3D Exploded Isometric Villa Viewport | `init3DExplodedVilla()` | Code intact. |
| 5 | Day/Dusk/Night Solar Simulator | `initDayNightSimulator()` | Code intact. |
| 6 | **Room-by-Room Spatial Inspector + 2/3/4 BHK Config Tabs** | `initRoomSpatialInspector()` | ✅ **FIXED & VERIFIED.** Added dynamic BHK matrix support (`2bhk`, `3bhk`, `4bhk`) connected to all 5 spatial room tabs (`living`, `master`, `kitchen`, `terrace`, `deck`) with reactive square footage updates and toast feedback. |
| 7 | Before/After Handover Slider | `initBeforeAfterSlider()` | Code intact. |
| 8 | Amenity Campus Navigator | `initAmenityCampusNavigator()` | Code intact. |
| 9 | Commute Simulator | `initCommuteSimulator()` | Code intact. |
| 10 | Brochure Download Lead Capture | `initCoreInteractions()` | Code intact. |

---

## 5. Sustainability Page (`sustainability.html`)

| # | Section | JS Function | Known Status |
| :-- | :-- | :-- | :-- |
| 1 | Hero & Intro Banner | `initGSAPAnimations()` | Code intact. |
| 2 | Forensic Proof Console | `initSustainabilityProofConsole()` | Code intact. |
| 3 | Standard vs Vaaraahi Comparison Matrix | `initSustainabilityProofConsole()` | Same function, dual-mode — code intact. |
| 4 | 3D Sustainability Scrollytelling | `initSustainability3DScrollytelling()` | Code intact — this is scroll-driven, so if Lenis smooth-scroll isn't loading correctly it can visually desync. Check console for Lenis errors. |
| 5 | Bioclimatic Material Deep-Dive | `initBioclimaticInspector()` | Code intact. |
| 6 | Eco Savings & Carbon Calculator | `initEcoSavingsCalculator()` | Code intact. |
| 7 | Leadership Quote & CTA | Static | — |

---

## 6. Careers Page (`careers.html`)

| # | Section | JS Function | Known Status |
| :-- | :-- | :-- | :-- |
| 1 | Careers Hero | `initGSAPAnimations()` | Code intact. |
| 2 | Culture & Benefit Explorer | `initCareersCultureAndMatchmaker()` | Code intact. |
| 3 | Smart Career Matchmaker & Filter | `initCareersCultureAndMatchmaker()` | Code intact. |
| 4 | Application Modal Drawer | `initCareersPortal()` | ✅ Verified: `closeCareerModal()` correctly bound via `window.closeCareerModal`. |

---

## 7. Blogs Pages (`blogs.html` / `blogs-admin.html`)

| # | Section | JS Function | Known Status |
| :-- | :-- | :-- | :-- |
| 1 | Filter & Search Bar | `initPublicBlogs()` | Code intact. |
| 2 | Dynamic Blogs Grid | `initPublicBlogs()` (via `BlogStore`, localStorage) | Will be **empty until you publish at least one article** via the admin panel — this is expected, not broken. |
| 3 | Full-Screen Reader Modal | `openArticleReader()` / `window.closeArticleReader` | ✅ Verified correctly bound. |
| 4 | Admin Portal (CMS) | `initBlogsAdmin()` | Password gate: `vaaraahi2026`. All modal open/close functions (`openNewPostModal`, `closePostModal`, `closeDeleteModal`) verified correctly bound via `window.*`. |

---

## 8. Contact Page (`contact.html`)

| # | Section | JS Function | Known Status |
| :-- | :-- | :-- | :-- |
| 1 | Contact Hero | `initGSAPAnimations()` | Code intact. |
| 2 | Regional HQ Navigator | `initRegionalHQNavigator()` | Code intact. |
| 3 | Direct Inquiry & VIP Pass Form | `initCoreInteractions()` | Code intact — generic form-submit handler shows a success toast on any form site-wide. |

---

## 🎯 Priority Action Plan

1. **You already have the fixed `main.js`** (floor-plan config tabs bug) — drop it into your project folder, replacing the old one.
2. **Open every page in a browser with DevTools Console open.** Copy me every line that starts with `[Vaaraahi] Error initializing ...`. This single step will surface every silently-broken section in one shot, instead of me guessing.
3. **Send 3-4 screenshots** of sections that still look empty/broken after step 2, and reference the Section # from this doc (e.g. "Home #7 — Regional Terrain Map is blank").
4. Once I can see actual rendered failures, I'll patch each one directly in `main.js`/`style.css`/the relevant HTML and hand back updated files section by section.

This targeted loop (console errors → screenshots → direct fix) will get every section working far faster and more reliably than a blind full rewrite, since ~90% of the codebase already checks out structurally sound.
