<template>
  <section class="who-section">
    <div class="floating-elements">
      <div class="floating-cube cube-1"></div>
      <div class="floating-cube cube-2"></div>
      <div class="floating-cube cube-3"></div>
      <div class="floating-sphere sphere-1"></div>
      <div class="floating-sphere sphere-2"></div>
    </div>

    <div class="noise-overlay"></div>
    <div class="grid-overlay"></div>

    <div class="container">
      <div class="split-layout">
        <div class="left-panel" data-aos="fade-right" data-aos-duration="1200">
          <div class="title-container">
            <h2 class="section-title">
              <span class="title-line">Who</span>
              <span class="title-line">We Are</span>
            </h2>
            <div class="animated-bar"></div>
          </div>

          <div class="description-container">
            <p class="section-description">
              We are a team of innovators who aim to offer quality technical services.
              <span class="highlight">The reality we create at Greysoft technologies</span>
              is that young African talent can explore numerous job opportunities from the comfort
              of their home country and not have a limiting dream of living overseas just to exhibit
              those talents.
            </p>
            <p class="section-description">
              At Greysoft, we place <span class="highlight-alt">'people'</span> right at the center
              of everything we do, as we are driven by the community we serve. We enable an
              atmosphere of inspiration and productivity.
            </p>
          </div>
        </div>

        <div class="right-panel" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="300">
          <div class="image-stack">
            <div class="image-container primary-image">
              <div class="image-frame">
                <img src="/images/ralphoculus.jpg" alt="Team member with VR headset" />
                <div class="image-glitch-effect"></div>
              </div>
            </div>
            <div class="image-container secondary-image">
              <div class="image-frame">
                <img src="/images/company.png" alt="Company office" />
                <div class="image-glitch-effect"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="features-container"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="600"
      >
        <div class="feature-card" data-aos="zoom-in" data-aos-delay="700">
          <div class="feature-icon">
            <i class="fa-solid fa-eye"></i>
          </div>
          <div class="feature-content">
            <h3 class="feature-title">Our Vision</h3>
            <p class="feature-description">Increased access to digital opportunities in Kaduna.</p>
            <!-- <button class="feature-button">
              <span>Learn More</span>
            <i class="fa-solid fa-arrow-right"></i>
            </button> -->
          </div>
        </div>

        <div class="feature-card" data-aos="zoom-in" data-aos-delay="800">
          <div class="feature-icon">
            <i class="fa-solid fa-bullseye"></i>
          </div>
          <div class="feature-content">
            <h3 class="feature-title">Our Mission</h3>
            <p class="feature-description">
              Help people leverage technology for improved livelihood.
            </p>
            <!-- <button class="feature-button">
              <span>Learn More</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button> -->
          </div>
        </div>

        <div class="feature-card" data-aos="zoom-in" data-aos-delay="900">
          <div class="feature-icon">
            <i class="fa-solid fa-star"></i>
          </div>
          <div class="feature-content">
            <h3 class="feature-title">Our Values</h3>
            <p class="feature-description">
              <span class="value-item">People</span> •
              <span class="value-item">Productivity</span> •
              <span class="value-item">Quality</span> • <span class="value-item">Innovation</span> •
              <span class="value-item">Teamwork</span>
            </p>
            <!-- <button class="feature-button">
              <span>Learn More</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: 'Who',
  setup() {
    onMounted(() => {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
      })

      // Add glitch effect to images
      const addGlitchEffect = () => {
        const images = document.querySelectorAll('.image-glitch-effect')
        images.forEach((image) => {
          const randomDelay = Math.random() * 5
          image.style.animationDelay = `${randomDelay}s`
        })
      }

      // Add floating animation to elements
      const animateFloatingElements = () => {
        const elements = document.querySelectorAll('.floating-cube, .floating-sphere')
        elements.forEach((element) => {
          const randomDuration = 15 + Math.random() * 10
          const randomDelay = Math.random() * 5
          element.style.animationDuration = `${randomDuration}s`
          element.style.animationDelay = `${randomDelay}s`
        })
      }

      addGlitchEffect()
      animateFloatingElements()
    })
  },
}
</script>

<style scoped>
/* Base Styles */
.who-section {
  position: relative;
  padding: 8rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  color: #333;
  width: 100%;
  overflow: hidden;
  min-height: 100vh;
}

.container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 5;
}

/* Background Elements */
.noise-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  opacity: 0.05;
  z-index: 1;
  pointer-events: none;
}

.grid-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
    linear-gradient(to right, rgba(141, 53, 74, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(141, 53, 74, 0.05) 1px, transparent 1px);
  background-size: 30px 30px;
  z-index: 2;
  pointer-events: none;
}

.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  pointer-events: none;
}

.floating-cube {
  position: absolute;
  background: linear-gradient(135deg, rgba(141, 53, 74, 0.1), rgba(29, 38, 113, 0.1));
  border: 1px solid rgba(141, 53, 74, 0.1);
  border-radius: 4px;
  animation: floatAnimation 20s infinite ease-in-out;
}

.floating-sphere {
  position: absolute;
  background: radial-gradient(circle at center, rgba(240, 208, 67, 0.1), transparent 70%);
  border-radius: 50%;
  animation: floatAnimation 25s infinite ease-in-out;
}

.cube-1 {
  width: 120px;
  height: 120px;
  top: 15%;
  left: 10%;
  transform: rotate(45deg);
}

.cube-2 {
  width: 80px;
  height: 80px;
  bottom: 20%;
  right: 15%;
  transform: rotate(20deg);
}

.cube-3 {
  width: 150px;
  height: 150px;
  bottom: 10%;
  left: 5%;
  transform: rotate(-30deg);
}

.sphere-1 {
  width: 200px;
  height: 200px;
  top: 10%;
  right: 10%;
}

.sphere-2 {
  width: 300px;
  height: 300px;
  bottom: 5%;
  left: 30%;
  opacity: 0.3;
}

@keyframes floatAnimation {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-20px) rotate(5deg);
  }
  50% {
    transform: translateY(10px) rotate(-5deg);
  }
  75% {
    transform: translateY(-15px) rotate(3deg);
  }
}

/* Layout Styles */
.split-layout {
  display: flex;
  flex-direction: row;
  gap: 4rem;
  margin-bottom: 6rem;
}

.left-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.right-panel {
  flex: 1;
  position: relative;
}

/* Title Styles */
.title-container {
  margin-bottom: 3rem;
}

.section-title {
  font-family: 'Poppins', sans-serif;
  font-size: 5rem;
  font-weight: 900;
  line-height: 1;
  margin: 0;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  background: linear-gradient(90deg, #333, #8d354a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

.title-line {
  display: block;
}

.animated-bar {
  width: 150px;
  height: 6px;
  margin-top: 2rem;
  position: relative;
  overflow: hidden;
  background: linear-gradient(90deg, var(--q-primary), #f0d043);
  border-radius: 3px;
}

.animated-bar::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
  animation: barShimmer 3s infinite;
}

@keyframes barShimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

/* Description Styles */
.description-container {
  max-width: 600px;
}

.section-description {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: #4a4a4a;
}

.highlight {
  color: var(--q-primary);
  font-weight: 600;
}

.highlight-alt {
  color: var(--q-primary);
  font-weight: 700;
}

/* Image Styles */
.image-stack {
  position: relative;
  height: 500px;
}

.image-container {
  position: absolute;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.primary-image {
  width: 70%;
  height: 400px;
  top: 0;
  right: 0;
  z-index: 2;
}

.secondary-image {
  width: 60%;
  height: 350px;
  bottom: 0;
  left: 0;
  z-index: 1;
}

.image-frame {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.image-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.image-container:hover {
  transform: translateY(-10px);
}

.image-container:hover img {
  transform: scale(1.05);
}

.image-glitch-effect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, transparent, rgba(141, 53, 74, 0.2), transparent);
  mix-blend-mode: overlay;
  animation: glitchEffect 8s infinite;
  pointer-events: none;
}

@keyframes glitchEffect {
  0%,
  100% {
    opacity: 0;
  }
  10%,
  15% {
    opacity: 1;
    transform: translate(5px, 0);
  }
  20%,
  25% {
    opacity: 0;
  }
  30%,
  35% {
    opacity: 0.8;
    transform: translate(-5px, 0);
  }
  40%,
  100% {
    opacity: 0;
  }
}

/* Features Section */
.features-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;
}

.feature-card {
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(141, 53, 74, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, var(--q-primary), #f0d043);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.9);
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--q-primary);
  transition: all 0.3s ease;
}

.feature-card:hover .feature-icon {
  transform: scale(1.2);
}

.feature-title {
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #333;
}

.feature-description {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #4a4a4a;
  margin-bottom: 1.5rem;
}

.value-item {
  color: var(--q-primary);
  font-weight: 600;
  transition: all 0.3s ease;
}

.feature-card:hover .value-item {
  color: #333;
}

.feature-button {
  background: transparent;
  border: none;
  color: var(--q-primary);
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.feature-button i {
  transition: transform 0.3s ease;
}

.feature-button:hover {
  color: #333;
}

.feature-button:hover i {
  transform: translateX(5px);
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .section-title {
    font-size: 4rem;
  }

  .image-stack {
    height: 450px;
  }

  .primary-image {
    height: 350px;
  }

  .secondary-image {
    height: 300px;
  }
}

@media (max-width: 992px) {
  .who-section {
    padding: 6rem 0;
  }

  .split-layout {
    flex-direction: column;
    gap: 3rem;
  }

  .image-stack {
    height: 500px;
    margin: 0 auto;
    max-width: 600px;
  }

  .features-container {
    grid-template-columns: repeat(2, 1fr);
  }

  .section-title {
    font-size: 3.5rem;
  }
}

@media (max-width: 768px) {
  .features-container {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .image-stack {
    height: 400px;
  }

  .primary-image {
    width: 80%;
    height: 300px;
  }

  .secondary-image {
    width: 70%;
    height: 250px;
  }

  .section-title {
    font-size: 3rem;
  }
}

@media (max-width: 480px) {
  .who-section {
    padding: 4rem 0;
  }

  .image-stack {
    height: 350px;
  }

  .primary-image {
    width: 90%;
    height: 250px;
  }

  .secondary-image {
    width: 80%;
    height: 200px;
  }

  .section-title {
    font-size: 2.5rem;
  }

  .feature-card {
    padding: 1.5rem;
  }
}
</style>
