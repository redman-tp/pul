<template>
  <section class="hero-section">
    <!-- Tech-themed SVG overlays that float across all slides -->
    <div class="tech-overlays">
      <div
        class="tech-element circuit"
        v-motion
        :initial="{ opacity: 0, scale: 0.8 }"
        :enter="{ opacity: 0.15, scale: 1, transition: { duration: 1000 } }"
      ></div>
      <div
        class="tech-element dots"
        v-motion
        :initial="{ opacity: 0, x: -50 }"
        :enter="{ opacity: 0.1, x: 0, transition: { duration: 800, delay: 200 } }"
      ></div>
      <div
        class="tech-element wave"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 0.1, y: 0, transition: { duration: 800, delay: 400 } }"
      ></div>
      <div
        class="tech-element grid"
        v-motion
        :initial="{ opacity: 0, scale: 1.2 }"
        :enter="{ opacity: 0.1, scale: 1, transition: { duration: 1000, delay: 300 } }"
      ></div>
      <div
        class="tech-element binary"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 0.08, y: 0, transition: { duration: 1200, delay: 500 } }"
      ></div>
      <div
        class="tech-element particles"
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 0.15, transition: { duration: 1500, delay: 200 } }"
      ></div>
    </div>

    <!-- Main carousel -->
    <q-carousel
      v-model="slide"
      animated
      navigation-icon="none"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="pauseAutoplay"
      @mouseleave="resumeAutoplay"
      :autoplay="autoplayActive"
      swipeable
      infinite
      :autoplay-timeout="7000"
      class="hero-carousel"
    >
      <!-- Slide 1: Pioneering Agritech -->
      <q-carousel-slide name="agritech" class="hero-slide">
        <div class="slide-background">
          <img src="/images/dronef1.png" alt="Pioneering Agritech" class="slide-bg-image" />
          <div class="slide-overlay"></div>
        </div>

        <div
          class="slide-content"
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          <div class="slide-category">
            <span class="category-number">01</span>
            <span class="category-label">Pioneering Agritech</span>
          </div>

          <h2 class="slide-title">
            Cultivating <span class="highlight">Innovation</span><br />
            in Agriculture
          </h2>

          <p class="slide-description">
            Transforming Agriculture through policy development and cutting-edge technology
            solutions that increase productivity, sustainability, and access to markets for farmers
            across Africa.
          </p>

          <div class="slide-actions">
            <!-- <q-btn class="cta-btn primary-cta" icon-right="arrow_forward">
              <span>Explore Solutions</span>
            </q-btn> -->
            <q-btn href="https://agritech.greysoft.ng/" class="cta-btn secondary-cta">
              <span>Learn More</span>
            </q-btn>
          </div>

          <div class="slide-stats">
            <div class="stat-item">
              <div class="stat-number">50+</div>
              <div class="stat-label">
                Agritech Startups <br />
                Incubated
              </div>
            </div>
            <div class="stat-item">
              <div class="stat-number">10+</div>
              <div class="stat-label">
                Agritech Solutions <br />
                Developed
              </div>
            </div>
            <div class="stat-item">
              <div class="stat-number">10+</div>
              <div class="stat-label">
                Agritech Hackathons <br />
                Done
              </div>
            </div>
          </div>
        </div>
      </q-carousel-slide>

      <!-- Slide 2: Extended Reality Solutions -->
      <q-carousel-slide name="xr" class="hero-slide">
        <div class="slide-background">
          <img src="/images/meta2.jpg" alt="Extended Reality Solutions" class="slide-bg-image" />
          <div class="slide-overlay"></div>
        </div>

        <div
          class="slide-content"
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          <div class="slide-category">
            <span class="category-number">02</span>
            <span class="category-label">Extended Reality Solutions</span>
          </div>

          <h2 class="slide-title">
            Immersive <span class="highlight">Experience</span><br />
            Alternative Reality <span class="text-subtitle1"> | VR, MR, AR |</span>
          </h2>

          <p class="slide-description">
            Creating immersive XR experiences for various industries; EDUCATION | DEFENCE | HEALTH |
            REAL-ESTATE | TOURISM, for an accelerated all-round experience.
          </p>

          <div class="slide-actions">
            <!-- <q-btn
              to="https://greysoft.ng/greysoftxr"
              class="cta-btn primary-cta"
              icon-right="arrow_forward"
            >
              <span>Discover XR</span>
            </q-btn> -->
            <q-btn href="https://greysoft.ng/greysoftxr" class="cta-btn secondary-cta">
              <span>Discover XR</span>
            </q-btn>
          </div>

          <div class="slide-stats">
            <div class="stat-item">
              <div class="stat-number">30+</div>
              <div class="stat-label">
                XR Experiences <br />
                Developed
              </div>
            </div>
            <div class="stat-item">
              <div class="stat-number">10+</div>
              <div class="stat-label">XR Projects Done</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">10+</div>
              <div class="stat-label">XR Hackathons <br />Done</div>
            </div>
          </div>
        </div>
      </q-carousel-slide>

      <!-- Slide 3: TVET & Digital Literacy -->
      <q-carousel-slide name="tvet" class="hero-slide">
        <div class="slide-background">
          <img src="/images/tvethero.jpg" alt="TVET & Digital Literacy" class="slide-bg-image" />
          <div class="slide-overlay"></div>
        </div>

        <div
          class="slide-content"
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          <div class="slide-category">
            <span class="category-number">03</span>
            <span class="category-label">TVET | Digital Literacy</span>
          </div>

          <h2 class="slide-title">
            Empowering <span class="highlight">Futures</span><br />
            Through Education
          </h2>

          <p class="slide-description">
            Building digital skills and technical vocational capabilities to create a workforce
            ready for the challenges and opportunities of the digital economy.
          </p>

          <div class="slide-actions">
            <q-btn
              href="https://greysoft.ng/greyacademy"
              class="cta-btn primary-cta"
              icon-right="arrow_forward"
            >
              <span>Grey Academy</span>
            </q-btn>
            <q-btn href="https://tech4all.greysoft.ng/" class="cta-btn secondary-cta">
              <span>Tech4All</span>
            </q-btn>
          </div>

          <div class="slide-stats">
            <div class="stat-item">
              <div class="stat-number">30K+</div>
              <div class="stat-label">Students/Interns <br />Trained</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">50+</div>
              <div class="stat-label">Employer Organization <br />Partners</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">20+</div>
              <div class="stat-label">Training Programs</div>
            </div>
          </div>
        </div>
      </q-carousel-slide>

      <!-- Slide 4: Digital Transformation -->
      <q-carousel-slide name="transformation" class="hero-slide">
        <div class="slide-background">
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
            alt="Digital Transformation"
            class="slide-bg-image"
          />
          <div class="slide-overlay"></div>
        </div>

        <div
          class="slide-content"
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          <div class="slide-category">
            <span class="category-number">04</span>
            <span class="category-label">Digital Transformation</span>
          </div>

          <h2 class="slide-title">
            Technology Roadmaps, Policy Development and Business Digitization
          </h2>

          <p class="slide-description">
            Guiding organizations and Businesses through comprehensive digital transformation
            journeys and Policies that enhance efficiency, innovation, and competitive advantage.
          </p>

          <div class="slide-actions">
            <!-- <q-btn class="cta-btn primary-cta" icon-right="arrow_forward">
              <span>Transform Now</span>
            </q-btn> -->
            <q-btn class="cta-btn secondary-cta">
              <span>Learn More</span>
            </q-btn>
          </div>

          <div class="slide-stats">
            <div class="stat-item">
              <div class="stat-number">100+</div>
              <div class="stat-label">
                Technology Business <br />
                Consultations
              </div>
            </div>
            <div class="stat-item">
              <div class="stat-number">20+</div>
              <div class="stat-label">Digital Transformation <br />Projects (MSMEs)</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">5+</div>
              <div class="stat-label">
                Policies/Bills <br />
                Contributed/Developed
              </div>
            </div>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>

    <!-- Social links and mission statement -->
    <div class="hero-footer">
      <!-- Footer tech elements -->
      <div class="footer-tech-elements">
        <div class="footer-tech-element code-block"></div>
        <div class="footer-tech-element circuit-dots"></div>
        <div class="footer-tech-element data-flow"></div>
        <div class="footer-tech-element tech-glow"></div>
      </div>

      <div class="hero-footer-content">
        <div
          class="social-links"
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 800, delay: 600 } }"
        >
          <a
            href="https://web.facebook.com/greysoftng"
            target="_blank"
            class="social-link"
            aria-label="Facebook"
          >
            <i class="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com/greyhobb/"
            target="_blank"
            class="social-link"
            aria-label="Instagram"
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a
            href="https://twitter.com/greyhobb"
            target="_blank"
            class="social-link"
            aria-label="Twitter"
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/greysoft-tech/mycompany/"
            target="_blank"
            class="social-link"
            aria-label="LinkedIn"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>

        <!-- <div
          class="mission-statement"
          v-motion
          :initial="{ opacity: 0, x: 30 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 800, delay: 600 } }"
        >
          <div class="mission-container">
            <div class="mission-icon">
              <i class="fas fa-lightbulb pulse-glow"></i>
            </div>
            <div class="mission-text">
              <q>To help people leverage technology for improved livelihood</q>
            </div>
            <div class="mission-particles">
              <span v-for="n in 6" :key="n" class="particle" :class="`p${n}`"></span>
            </div>
          </div>
        </div> -->
      </div>
    </div>

    <!-- Scroll indicator -->
    <div
      class="scroll-indicator"
      v-motion
      :initial="{ opacity: 0, y: -20 }"
      :enter="{
        opacity: 1,
        y: 0,
        transition: { duration: 800, delay: 1000, repeat: Infinity, repeatType: 'reverse' },
      }"
    >
      <span>Scroll</span>
      <i class="fas fa-chevron-down"></i>
    </div>

    <!-- Slide indicators -->
    <div class="slide-indicators">
      <div
        v-for="(slideName, index) in ['agritech', 'xr', 'tvet', 'transformation']"
        :key="slideName"
        class="indicator-item"
        :class="{ active: slide === slideName }"
        @click="slide = slideName"
      >
        <span class="indicator-number">0{{ index + 1 }}</span>
        <span class="indicator-bar"></span>
      </div>
    </div>

    <!-- Dynamic Image Preview -->
    <div class="image-preview-container">
      <div class="preview-image-wrapper">
        <transition name="fade" mode="out-in">
          <div
            :key="slide"
            class="preview-image"
            :style="{
              backgroundImage: `url(${getSlideImage(slide)})`,
            }"
          ></div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'HeroSection',
  setup() {
    const slide = ref('agritech')
    const autoplayActive = ref(true)

    const pauseAutoplay = () => {
      autoplayActive.value = false
    }

    const resumeAutoplay = () => {
      autoplayActive.value = true
    }

    const slideImages = {
      agritech: '/images/dronef1.png',
      xr: '/images/meta2.jpg',
      tvet: '/images/tvethero.jpg',
      transformation:
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
    }

    const getSlideImage = (slideName) => {
      return slideImages[slideName] || ''
    }

    return {
      slide,
      getSlideImage,
      autoplayActive,
      pauseAutoplay,
      resumeAutoplay,
    }
  },
}
</script>

<style lang="scss" scoped>
@use 'sass:color';

// Variables
$primary-color: var(--q-primary, #8d354a);
$secondary-color: #f0d043;
$gradient-start: #ab042c;
$gradient-end: #2c0f3a;
$accent-color: #f0d043;
$text-color: #ffffff;
$heading-color: #f8f9fa;
$transition-speed: 0.3s;
$border-radius: 12px;

// New overlay gradient variables
$overlay-gradient-start: rgba(13, 23, 65, 0.75);
$overlay-gradient-middle: rgba(43, 9, 82, 0.65);
$overlay-gradient-end: rgba(138, 3, 47, 0.7);

// Main Hero Section
.hero-section {
  position: relative;
  height: 100vh;
  min-height: 700px;
  max-height: 100vh;
  overflow: hidden;
  font-family: 'Poppins', sans-serif;

  // Target Quasar-generated elements that cause overflow
  :deep(.q-panel.scroll) {
    overflow: hidden !important;
  }
}

// Tech-themed SVG overlays
.tech-overlays {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
}

.tech-element {
  position: absolute;
  opacity: 0.1;
}

.circuit {
  top: 10%;
  right: 5%;
  width: 300px;
  height: 300px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath fill='none' stroke='%23ffffff' stroke-width='0.5' d='M10,30 L90,30 M30,10 L30,90 M70,10 L70,90 M10,50 L90,50 M10,70 L90,70 M50,10 L50,90'/%3E%3Ccircle cx='30' cy='30' r='3' fill='%23ffffff'/%3E%3Ccircle cx='50' cy='30' r='3' fill='%23ffffff'/%3E%3Ccircle cx='70' cy='30' r='3' fill='%23ffffff'/%3E%3Ccircle cx='30' cy='50' r='3' fill='%23ffffff'/%3E%3Ccircle cx='50' cy='50' r='3' fill='%23ffffff'/%3E%3Ccircle cx='70' cy='50' r='3' fill='%23ffffff'/%3E%3Ccircle cx='30' cy='70' r='3' fill='%23ffffff'/%3E%3Ccircle cx='50' cy='70' r='3' fill='%23ffffff'/%3E%3Ccircle cx='70' cy='70' r='3' fill='%23ffffff'/%3E%3C/svg%3E");
  animation: float 15s ease-in-out infinite;
}

.dots {
  bottom: 15%;
  left: 10%;
  width: 250px;
  height: 250px;
  background-image: radial-gradient(circle, #ffffff 1px, transparent 1px);
  background-size: 15px 15px;
  animation: float 12s ease-in-out infinite reverse;
}

.wave {
  top: 40%;
  right: 15%;
  width: 200px;
  height: 100px;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 5px,
    rgba(255, 255, 255, 0.5) 5px,
    rgba(255, 255, 255, 0.5) 10px
  );
  transform: rotate(-30deg);
  animation: wave 10s ease-in-out infinite;
}

.grid {
  bottom: 20%;
  right: 20%;
  width: 200px;
  height: 200px;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px);
  background-size: 20px 20px;
  animation: float 18s ease-in-out infinite;
}

// New tech elements
.binary {
  top: 25%;
  left: 15%;
  width: 200px;
  height: 300px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='300' viewBox='0 0 200 300'%3E%3Ctext x='10' y='20' font-family='monospace' font-size='10' fill='%23ffffff'%3E01001010110%3C/text%3E%3Ctext x='30' y='40' font-family='monospace' font-size='10' fill='%23ffffff'%3E1010001%3C/text%3E%3Ctext x='15' y='60' font-family='monospace' font-size='10' fill='%23ffffff'%3E01101001%3C/text%3E%3Ctext x='25' y='80' font-family='monospace' font-size='10' fill='%23ffffff'%3E10110010%3C/text%3E%3Ctext x='5' y='100' font-family='monospace' font-size='10' fill='%23ffffff'%3E0110101%3C/text%3E%3Ctext x='40' y='120' font-family='monospace' font-size='10' fill='%23ffffff'%3E10100111%3C/text%3E%3Ctext x='20' y='140' font-family='monospace' font-size='10' fill='%23ffffff'%3E01011%3C/text%3E%3Ctext x='10' y='160' font-family='monospace' font-size='10' fill='%23ffffff'%3E10110%3C/text%3E%3Ctext x='30' y='180' font-family='monospace' font-size='10' fill='%23ffffff'%3E011010%3C/text%3E%3Ctext x='15' y='200' font-family='monospace' font-size='10' fill='%23ffffff'%3E10001%3C/text%3E%3C/svg%3E");
  animation: float 20s ease-in-out infinite;
  opacity: 0.08;
}

.particles {
  top: 10%;
  left: 30%;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0.5px, transparent 1px);
  background-size: 50px 50px;
  animation: twinkle 10s ease-in-out infinite;
}

// Carousel and Slides
.hero-carousel {
  height: calc(100vh - 100px);
  min-height: 600px;
  max-height: calc(100vh - 100px);

  :deep(.q-carousel__slides-container) {
    height: 100%;
    overflow: hidden !important;
  }

  .q-carousel__arrow {
    opacity: 0;
    transition: opacity 0.3s ease;
    background: rgba(0, 0, 0, 0.5);
    color: white;

    &:hover {
      background: rgba($accent-color, 0.8);
    }
  }

  &:hover {
    .q-carousel__arrow {
      opacity: 1;
    }
  }

  .q-carousel__navigation {
    display: none !important;
  }
}

.hero-slide {
  position: relative;
  height: 100%;
  padding: 0;
  overflow: hidden;
}

.slide-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.slide-bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: brightness(0.8);
}

.slide-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    $overlay-gradient-start 0%,
    $overlay-gradient-middle 50%,
    $overlay-gradient-end 100%
  );
  z-index: 2;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 70% 30%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%);
  }
}

.slide-content {
  position: relative;
  z-index: 3;
  max-width: 600px;
  margin-left: 10%;
  padding-top: 15vh;
}

.slide-category {
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;
  position: relative;
  background: rgba($accent-color, 0.15);
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba($accent-color, 0.3);
  backdrop-filter: blur(5px);
  transform: translateX(-20px);
  width: fit-content;
  border-left: 4px solid $accent-color;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 20px;
    width: 2px;
    height: 30px;
    background: $accent-color;
    box-shadow: 0 0 10px rgba($accent-color, 0.8);
  }
}

.category-number {
  font-size: 3rem;
  font-weight: 800;
  color: $accent-color;
  margin-right: 1.2rem;
  opacity: 0.9;
  text-shadow: 0 2px 15px rgba($accent-color, 0.6);
  line-height: 1;
}

.category-label {
  font-size: 1.6rem;
  font-weight: 700;
  color: $accent-color;
  text-transform: uppercase;
  letter-spacing: 3px;
  position: relative;
  text-shadow: 0 2px 15px rgba($accent-color, 0.6);
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 0 5px 8px;
    border-color: transparent transparent transparent $accent-color;
    box-shadow: 0 0 8px rgba($accent-color, 0.8);
  }
}

.slide-title {
  font-size: 2.8rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.85);
  margin: 0 0 1.5rem;
  line-height: 1.2;
  letter-spacing: -1px;
  opacity: 0.9;

  .highlight {
    position: relative;
    display: inline-block;
    color: rgba(255, 255, 255, 0.85);

    &::after {
      content: '';
      position: absolute;
      bottom: 5px;
      left: 0;
      width: 100%;
      height: 6px;
      background: rgba($accent-color, 0.15);
      z-index: -1;
    }
  }
}

.slide-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  max-width: 90%;
}

.slide-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}

// CTA Buttons
.cta-btn {
  position: relative;
  overflow: hidden;
  font-weight: 600;
  padding: 0.9rem 1.8rem;
  border-radius: 30px;
  font-size: 1rem;
  letter-spacing: 0.5px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  text-transform: none;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);

    &::before {
      opacity: 0.8;
    }
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  span {
    position: relative;
    z-index: 2;
  }
}

.primary-cta {
  color: $text-color;

  &::before {
    background: linear-gradient(135deg, $gradient-start 0%, $gradient-end 100%);
  }

  &:hover {
    &::before {
      background: linear-gradient(
        135deg,
        color.scale($gradient-start, $lightness: 5%) 0%,
        color.scale($gradient-end, $lightness: 5%) 100%
      );
    }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background: rgba(255, 255, 255, 0.1);
    transition: height 0.3s ease;
    z-index: -1;
  }

  &:hover::after {
    height: 50%;
  }
}

.secondary-cta {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: $text-color;
  border: 1px solid rgba(255, 255, 255, 0.3);

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    border-color: $accent-color;
  }
}

// Stats section
.slide-stats {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: $accent-color;
  line-height: 1;
}

.stat-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 0.3rem;
}

// Slide indicators
.slide-indicators {
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 10;
}

.indicator-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &.active {
    .indicator-number {
      color: $accent-color;
      font-weight: 700;
    }

    .indicator-bar {
      width: 50px;
      background: $accent-color;
    }
  }

  &:hover:not(.active) {
    .indicator-number {
      color: rgba(255, 255, 255, 0.9);
    }

    .indicator-bar {
      width: 30px;
      background: rgba(255, 255, 255, 0.5);
    }
  }
}

.indicator-number {
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.3s ease;
}

.indicator-bar {
  height: 2px;
  width: 20px;
  background: rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

// Additional animations
@keyframes twinkle {
  0%,
  100% {
    opacity: 0.05;
  }
  50% {
    opacity: 0.15;
  }
}

// Hero Footer
.hero-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(
    135deg,
    rgba(43, 9, 82, 0.85) 0%,
    rgba(13, 13, 35, 0.9) 50%,
    rgba(138, 3, 47, 0.85) 100%
  );
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  box-shadow: 0 -5px 25px rgba(0, 0, 0, 0.15);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:
      radial-gradient(circle at 20% 50%, rgba($accent-color, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba($gradient-start, 0.15) 0%, transparent 40%);
    z-index: -1;
  }
}

// Footer tech elements
.footer-tech-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

.footer-tech-element {
  position: absolute;
  opacity: 0.1;
}

.code-block {
  bottom: -10px;
  right: 15%;
  width: 120px;
  height: 60px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='60' viewBox='0 0 120 60'%3E%3Ctext x='5' y='15' font-family='monospace' font-size='8' fill='%23ffffff'%3E%3C/text%3E%3Ctext x='5' y='15' font-family='monospace' font-size='8' fill='%23ffffff'%3E&lt;div class='tech'&gt;%3C/text%3E%3Ctext x='10' y='25' font-family='monospace' font-size='8' fill='%23ffffff'%3E  &lt;span&gt;code&lt;/span&gt;%3C/text%3E%3Ctext x='5' y='35' font-family='monospace' font-size='8' fill='%23ffffff'%3E&lt;/div&gt;%3C/text%3E%3C/svg%3E");
  animation: float-small 8s ease-in-out infinite;
}

.circuit-dots {
  top: 10px;
  left: 20%;
  width: 100px;
  height: 50px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='50' viewBox='0 0 100 50'%3E%3Ccircle cx='10' cy='10' r='2' fill='%23ffffff'/%3E%3Ccircle cx='30' cy='10' r='2' fill='%23ffffff'/%3E%3Ccircle cx='50' cy='10' r='2' fill='%23ffffff'/%3E%3Ccircle cx='70' cy='10' r='2' fill='%23ffffff'/%3E%3Ccircle cx='90' cy='10' r='2' fill='%23ffffff'/%3E%3Cline x1='10' y1='10' x2='30' y2='10' stroke='%23ffffff' stroke-width='1'/%3E%3Cline x1='30' y1='10' x2='50' y2='10' stroke='%23ffffff' stroke-width='1'/%3E%3Cline x1='50' y1='10' x2='70' y2='10' stroke='%23ffffff' stroke-width='1'/%3E%3Cline x1='70' y1='10' x2='90' y2='10' stroke='%23ffffff' stroke-width='1'/%3E%3Ccircle cx='20' cy='30' r='2' fill='%23ffffff'/%3E%3Ccircle cx='40' cy='30' r='2' fill='%23ffffff'/%3E%3Ccircle cx='60' cy='30' r='2' fill='%23ffffff'/%3E%3Ccircle cx='80' cy='30' r='2' fill='%23ffffff'/%3E%3Cline x1='20' y1='30' x2='40' y2='30' stroke='%23ffffff' stroke-width='1'/%3E%3Cline x1='40' y1='30' x2='60' y2='30' stroke='%23ffffff' stroke-width='1'/%3E%3Cline x1='60' y1='30' x2='80' y2='30' stroke='%23ffffff' stroke-width='1'/%3E%3Cline x1='10' y1='10' x2='20' y2='30' stroke='%23ffffff' stroke-width='1'/%3E%3Cline x1='50' y1='10' x2='40' y2='30' stroke='%23ffffff' stroke-width='1'/%3E%3Cline x1='70' y1='10' x2='80' y2='30' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E");
  animation: float-small 10s ease-in-out infinite reverse;
}

.data-flow {
  top: 50%;
  right: 5%;
  width: 80px;
  height: 40px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='40' viewBox='0 0 80 40'%3E%3Cpath d='M5,20 L75,20' stroke='%23ffffff' stroke-width='1' stroke-dasharray='4 2'/%3E%3Cpath d='M5,20 L15,15 L15,25 Z' fill='%23ffffff'/%3E%3Ccircle cx='30' cy='20' r='3' fill='%23ffffff'/%3E%3Ccircle cx='50' cy='20' r='3' fill='%23ffffff'/%3E%3Cpath d='M65,15 L75,20 L65,25 Z' fill='%23ffffff'/%3E%3C/svg%3E");
  animation: pulse 4s ease-in-out infinite;
}

.tech-glow {
  bottom: 20px;
  left: 40%;
  width: 60px;
  height: 60px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 70%);
  border-radius: 50%;
  animation: glow 6s ease-in-out infinite;
}

@keyframes float-small {
  0%,
  100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-5px) translateX(3px);
  }
  50% {
    transform: translateY(0) translateX(5px);
  }
  75% {
    transform: translateY(5px) translateX(2px);
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.05;
  }
  50% {
    opacity: 0.2;
  }
}

@keyframes glow {
  0%,
  100% {
    opacity: 0.1;
    transform: scale(1);
  }
  50% {
    opacity: 0.2;
    transform: scale(1.2);
  }
}

.hero-footer-content {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 5%;
  max-width: 1400px;
  margin: 0 auto;
  height: 100px;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: $text-color;
  font-size: 1.2rem;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  text-decoration: none;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, $gradient-start 0%, $gradient-end 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    color: $accent-color;
    border-color: $accent-color;

    &::before {
      opacity: 0.8;
    }
  }
}

.mission-statement {
  max-width: 500px;
  margin-right: 200px;
  display: flex;
  align-items: center;
}

.mission-container {
  position: relative;
  display: flex;
  align-items: center;
  // background: rgba(0, 0, 0, 0);
  border-radius: 16px;
  padding: 10px 13px;
  // border: 1px solid rgba(255, 255, 255, 0.1);
  // box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  // backdrop-filter: blur(10px);
  // -webkit-backdrop-filter: blur(10px);
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // background: linear-gradient(
    //   135deg,
    //   rgba($gradient-start, 0.1) 0%,
    //   rgba($gradient-end, 0.1) 100%
    // );
    z-index: -1;
  }
}

.mission-icon {
  margin-right: 20px;
  font-size: 2rem;
  color: $accent-color;
  opacity: 0.9;
  position: relative;
  z-index: 2;

  i {
    filter: drop-shadow(0 0 8px rgba($accent-color, 0.5));
  }

  .pulse-glow {
    animation: pulse-glow 3s ease-in-out infinite;
  }
}

.mission-text {
  display: flex;
  flex-direction: column;

  q {
    font-family: 'Poppins', sans-serif;
    font-style: italic;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.6;
    color: $text-color;
    position: relative;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    border-left: 3px solid $accent-color;
    padding-left: 15px;
    // box-shadow: 0 0 10px rgba($accent-color, 0.3);
  }
}

.mission-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}

.particle {
  position: absolute;
  width: 6px;
  height: 6px;
  background: $accent-color;
  border-radius: 50%;
  opacity: 0;
  z-index: 1;
  filter: blur(1px);
  box-shadow: 0 0 10px rgba($accent-color, 0.8);
}

.p1 {
  top: 20%;
  left: 10%;
  animation: float-particle 8s ease-in-out infinite;
  animation-delay: 0s;
}

.p2 {
  top: 60%;
  left: 80%;
  animation: float-particle 10s ease-in-out infinite;
  animation-delay: 1s;
}

.p3 {
  top: 80%;
  left: 30%;
  animation: float-particle 7s ease-in-out infinite;
  animation-delay: 2s;
}

.p4 {
  top: 10%;
  left: 60%;
  animation: float-particle 9s ease-in-out infinite;
  animation-delay: 3s;
}

.p5 {
  top: 45%;
  left: 15%;
  animation: float-particle 11s ease-in-out infinite;
  animation-delay: 4s;
}

.p6 {
  top: 30%;
  left: 90%;
  animation: float-particle 8s ease-in-out infinite;
  animation-delay: 5s;
}

@keyframes float-particle {
  0% {
    transform: translateY(0) translateX(0) scale(1);
    opacity: 0;
  }
  25% {
    opacity: 0.8;
  }
  50% {
    transform: translateY(-20px) translateX(15px) scale(1.2);
    opacity: 0.4;
  }
  75% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(0) translateX(0) scale(1);
    opacity: 0;
  }
}

@keyframes pulse-glow {
  0%,
  100% {
    opacity: 0.9;
    transform: scale(1);
    filter: drop-shadow(0 0 8px rgba($accent-color, 0.5));
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
    filter: drop-shadow(0 0 15px rgba($accent-color, 0.8));
  }
}

// Scroll Indicator
.scroll-indicator {
  position: absolute;
  bottom: 120px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: $text-color;
  font-size: 0.9rem;
  z-index: 10;

  span {
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500;
  }

  i {
    font-size: 1rem;
  }
}

// Animations
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes wave {
  0%,
  100% {
    transform: rotate(-30deg) translateY(0);
  }
  50% {
    transform: rotate(-30deg) translateY(-15px);
  }
}

// Responsive Styles
@media (max-width: 1280px) {
  .slide-content {
    padding-top: 12vh;
  }

  .slide-title {
    font-size: 3rem;
  }

  .category-number {
    font-size: 2.6rem;
  }

  .category-label {
    font-size: 1.4rem;
  }

  .slide-title {
    font-size: 2.5rem;
  }

  .mission-statement {
    max-width: 500px;
    margin-right: 250px;
  }

  .mission-text {
    q {
      font-weight: 400;
      font-size: 1rem;
    }
  }
}

@media (max-width: 992px) {
  .hero-section {
    min-height: 600px;
  }

  .hero-carousel {
    min-height: 500px;
  }

  .slide-content {
    margin-left: 5%;
    max-width: 500px;
  }

  .slide-title {
    font-size: 2.2rem;
  }

  .slide-description {
    font-size: 1rem;
  }

  .category-number {
    font-size: 2.4rem;
  }

  .category-label {
    font-size: 1.2rem;
  }

  .mission-statement q {
    font-size: 1.1rem;
  }

  .slide-stats {
    margin-top: 1.5rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .slide-indicators {
    right: 3%;
  }

  .cta-btn {
    padding: 0.8rem 1.5rem;
    font-size: 0.95rem;
  }

  .hero-footer-content {
    padding: 1.2rem 5%;
    height: auto;
  }

  .image-preview-container {
    width: 140px;
    height: 90px;
    bottom: 95px;
    right: 4%;
  }

  .mission-statement {
    margin-right: 150px;
  }
}

@media (max-width: 768px) {
  .hero-section {
    min-height: 500px;
    max-height: none;
  }

  .hero-carousel {
    height: calc(100vh - 80px);
    min-height: 420px;
  }

  .slide-content {
    padding-top: 10vh;
    max-width: 90%;
  }

  .slide-title {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  .slide-description {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }

  .category-number {
    font-size: 2rem;
  }

  .category-label {
    font-size: 1.1rem;
  }

  .hero-footer {
    flex-direction: column;
    gap: 1rem;
    height: auto;
    padding: 1.5rem 5%;
    background: linear-gradient(
      135deg,
      rgba(43, 9, 82, 0.9) 0%,
      rgba(13, 13, 35, 0.95) 50%,
      rgba(138, 3, 47, 0.9) 100%
    );
  }

  .mission-statement {
    margin-right: 0;
    text-align: center;
    max-width: 100%;

    .mission-container {
      flex-direction: column;
      padding: 15px;
      width: 100%;
      max-width: 300px;
      margin: 0 auto;
    }

    .mission-icon {
      margin-right: 0;
      margin-bottom: 10px;
    }

    .mission-text {
      align-items: center;

      q {
        padding-left: 0;
        border-left: none;
        text-align: center;
        font-size: 1rem;

        &::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 2px;
          background: $accent-color;
        }
      }
    }
  }

  .scroll-indicator {
    bottom: 100px;
  }

  .slide-actions {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .slide-stats {
    margin-top: 1.2rem;
  }

  .stat-number {
    font-size: 1.8rem;
  }

  .slide-indicators {
    display: none;
  }

  .footer-tech-element {
    opacity: 0.07;
  }

  .image-preview-container {
    width: 120px;
    height: 80px;
    bottom: 90px;
    right: 3%;
  }
}

@media (max-width: 576px) {
  .slide-content {
    padding-top: 15vh;
  }

  .slide-title {
    font-size: 1.8rem;
  }

  .slide-category {
    margin-bottom: 1rem;
  }

  .category-number {
    font-size: 1.5rem;
  }

  .cta-btn {
    padding: 0.7rem 1.4rem;
    font-size: 0.9rem;
  }

  .social-link {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }

  .scroll-indicator {
    display: none;
  }

  .slide-stats {
    flex-direction: column;
    gap: 0.8rem;
  }

  .image-preview-container {
    width: 100px;
    height: 70px;
    bottom: 85px;
    right: 5%;
  }
}

// Dynamic Image Preview
.image-preview-container {
  position: absolute;
  bottom: 50px;
  right: 5%;
  width: 290px;
  height: 180px;
  z-index: 15;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
    border-color: $accent-color;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
}

.preview-image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.preview-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }
}

// Transition animations
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

// Responsive adjustments for image preview
@media (max-width: 1280px) {
  .image-preview-container {
    width: 160px;
    height: 100px;
    bottom: 65px;
  }

  .mission-statement {
    margin-right: 180px;
  }
}

@media (max-width: 992px) {
  .image-preview-container {
    width: 140px;
    height: 90px;
    bottom: 95px;
    right: 4%;
  }

  .mission-statement {
    margin-right: 150px;
  }
}

@media (max-width: 768px) {
  .image-preview-container {
    width: 120px;
    height: 80px;
    bottom: 90px;
    right: 3%;
  }

  .mission-statement {
    margin-right: 0;
    text-align: center;
    max-width: 100%;

    .mission-container {
      flex-direction: column;
      padding: 15px;
      width: 100%;
      max-width: 300px;
      margin: 0 auto;
    }

    .mission-icon {
      margin-right: 0;
      margin-bottom: 10px;
    }

    .mission-text {
      align-items: center;

      q {
        padding-left: 0;
        border-left: none;
        text-align: center;
        font-size: 1rem;

        &::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 2px;
          background: $accent-color;
        }
      }
    }
  }

  .scroll-indicator {
    bottom: 100px;
  }

  .slide-actions {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .slide-stats {
    margin-top: 1.2rem;
  }

  .stat-number {
    font-size: 1.8rem;
  }

  .slide-indicators {
    display: none;
  }

  .footer-tech-element {
    opacity: 0.07;
  }
}

@media (max-width: 576px) {
  .image-preview-container {
    width: 100px;
    height: 70px;
    bottom: 85px;
    right: 5%;
  }
}
</style>
