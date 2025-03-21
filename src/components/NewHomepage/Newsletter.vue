<template>
  <section class="newsletter-section">
    <div class="floating-elements">
      <div class="floating-cube cube-1"></div>
      <div class="floating-cube cube-2"></div>
      <div class="floating-sphere sphere-1"></div>
    </div>

    <div class="noise-overlay"></div>
    <div class="grid-overlay"></div>

    <div class="container">
      <div class="split-layout">
        <div class="left-panel" data-aos="fade-right" data-aos-duration="1200">
          <div class="title-container">
            <h2 class="section-title">
              <span class="title-line">Newsletter</span>
            </h2>
            <div class="animated-bar"></div>
          </div>

          <div class="description-container">
            <p class="section-description">
              Join our global community of innovators and stay updated with special offers, tech
              trends, events, and community activities. Be the first to know about our latest
              innovations.
            </p>
          </div>

          <div class="content-wrapper">
            <h3 class="content-title">Join a global team of change-makers</h3>
            <p class="content-description">
              Sign up for our email newsletter and get updated with our special Grey offers, tech
              trends, events, and much more. Get updated on our special community activities and
              stay inspired.
            </p>
          </div>
        </div>

        <div class="right-panel" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="300">
          <div class="image-container">
            <div class="image-frame">
              <img src="/images/news.png" alt="Newsletter" />
              <div class="image-glitch-effect"></div>
            </div>
          </div>

          <div class="form-container" id="newsletter-form">
            <form class="newsletter-form">
              <h4 class="form-title">Join the community</h4>
              <p class="form-subtitle">We send out updates and tech insights every week</p>

              <div class="form-group">
                <label for="email">Email Address</label>
                <div class="input-wrapper">
                  <input type="email" id="email" placeholder="Enter your email here" required />
                </div>
              </div>

              <button class="submit-button" type="submit">
                <span>Subscribe</span>
                <i class="fa-solid fa-paper-plane"></i>
              </button>
            </form>
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
  name: 'Newsletter',
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
  methods: {
    scrollToForm() {
      const formElement = document.getElementById('newsletter-form')
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' })
      }
    },
  },
}
</script>

<style scoped>
/* Base Styles */
.newsletter-section {
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

.sphere-1 {
  width: 200px;
  height: 200px;
  top: 10%;
  right: 10%;
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
  display: flex;
  flex-direction: column;
  gap: 2rem;
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
  width: 30%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
  animation: barShimmer 3s infinite;
}

@keyframes barShimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(400%);
  }
}

/* Description Styles */
.description-container {
  max-width: 600px;
  margin-bottom: 2rem;
}

.section-description {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: #4a4a4a;
}

.content-wrapper {
  margin-bottom: 2rem;
}

.content-title {
  font-family: 'Poppins', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--q-primary);
}

.content-description {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4a4a4a;
}

/* Image Styles */
.image-container {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  margin-bottom: 2rem;
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

/* Form Styles */
.form-container {
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(141, 53, 74, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.form-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, var(--q-primary), #f0d043);
}

.newsletter-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-title {
  font-family: 'Poppins', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
  color: #333;
}

.form-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #666;
  margin: 0 0 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #555;
}

.input-wrapper {
  position: relative;
}

.input-wrapper input {
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(141, 53, 74, 0.2);
  border-radius: 8px;
  color: #333;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.input-wrapper input:focus {
  outline: none;
  border-color: var(--q-primary);
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 0 3px rgba(141, 53, 74, 0.1);
}

.input-wrapper input::placeholder {
  color: rgba(0, 0, 0, 0.3);
}

.submit-button {
  background: linear-gradient(90deg, var(--q-primary), #8d354a);
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.submit-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(141, 53, 74, 0.2);
}

.submit-button i {
  transition: transform 0.3s ease;
}

.submit-button:hover i {
  transform: translateX(5px);
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .section-title {
    font-size: 4rem;
  }
}

@media (max-width: 992px) {
  .newsletter-section {
    padding: 6rem 0;
  }

  .split-layout {
    flex-direction: column;
    gap: 3rem;
  }

  .section-title {
    font-size: 3.5rem;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 3rem;
  }

  .form-container {
    padding: 2rem;
  }
}

@media (max-width: 576px) {
  .newsletter-section {
    padding: 4rem 0;
  }

  .section-title {
    font-size: 2.5rem;
  }

  .form-container {
    padding: 1.5rem;
  }

  .form-title {
    font-size: 1.5rem;
  }

  .submit-button {
    padding: 0.8rem 1.5rem;
  }
}
</style>
