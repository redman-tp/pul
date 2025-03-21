<template>
  <section class="focus-areas-section">
    <div class="section-header">
      <h3 class="section-title">Our Events</h3>
    </div>
    <div class="focus-areas-carousel" role="region" aria-label="Focus Areas Showcase">
      <q-carousel
        v-model="slide"
        animated
        infinite
        :navigation="!isMobile"
        arrows
        :autoplay="autoplayActive"
        :autoplay-timeout="6000"
        @mouseenter="pauseAutoplay"
        @mouseleave="resumeAutoplay"
        height="600px"
        class="focus-carousel"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        navigation-icon="circle"
        control-type="flat"
        control-color="primary"
        arrows-style="background: rgba(255, 255, 255, 0.9); color: var(--q-primary)"
        @keyup.left="previousSlide"
        @keyup.right="nextSlide"
      >
        <!-- Agritech Conference Slide -->
        <q-carousel-slide :name="1" class="slide-content">
          <div class="slide-grid">
            <div
              class="visual-section"
              :style="{
                backgroundImage: 'url(/images/about001.png)',
              }"
              role="img"
              aria-label="Agritech Conference Showcase"
            >
              <div class="overlay"></div>
            </div>
            <div class="content-section">
              <div class="slide-number" aria-hidden="true">01</div>
              <h2>Agritech Conference</h2>
              <p>
                Join us at the forefront of agricultural innovation. Our Agritech Conference brings
                together industry leaders, farmers, and tech innovators to explore cutting-edge
                solutions for sustainable farming.
              </p>
              <q-btn
                class="cta-button"
                flat
                label="Learn More →"
                @click="navigateToSection('agritech-conference')"
                aria-label="Learn more about our Agritech Conference"
              />
            </div>
          </div>
        </q-carousel-slide>

        <!-- Tech4All Slide -->
        <q-carousel-slide :name="2" class="slide-content">
          <div class="slide-grid">
            <div class="content-section">
              <div class="slide-number" aria-hidden="true">02</div>
              <h2>Tech4All</h2>
              <p>
                Empowering communities through technology education and access. Tech4All is our
                initiative to make technology education accessible to everyone, regardless of their
                background or location.
              </p>
              <q-btn
                class="cta-button"
                flat
                label="Learn More →"
                @click="navigateToSection('tech4all')"
                aria-label="Discover our Tech4All initiative"
              />
            </div>
            <div
              class="visual-section"
              :style="{
                backgroundImage: 'url(/images/kids.jpeg)',
              }"
              role="img"
              aria-label="Tech4All Initiative"
            >
              <div class="overlay"></div>
            </div>
          </div>
        </q-carousel-slide>

        <!-- Open Innovation Program Slide -->
        <q-carousel-slide :name="3" class="slide-content">
          <div class="slide-grid">
            <div
              class="visual-section"
              :style="{
                backgroundImage: 'url(/images/openday1.jpeg)',
              }"
              role="img"
              aria-label="GreySoft Open Innovation Program"
            >
              <div class="overlay"></div>
            </div>
            <div class="content-section">
              <div class="slide-number" aria-hidden="true">03</div>
              <h2>Greysoft Open Innovation Program</h2>
              <p>
                Greysoft Innovations calls to public/private organization. Our Open Innovation
                Program invites innovators, startups, and organizations to work together on
                groundbreaking solutions.
              </p>
              <q-btn
                class="cta-button"
                flat
                label="Learn More →"
                @click="navigateToSection('open-innovation')"
                aria-label="Learn about our Open Innovation Program"
              />
            </div>
          </div>
        </q-carousel-slide>

        <!-- Kukah Prize Slide -->
        <q-carousel-slide :name="4" class="slide-content">
          <div class="slide-grid">
            <div class="content-section">
              <div class="slide-number" aria-hidden="true">04</div>
              <h2>Kukah Prize For Young Innovations</h2>
              <p>
                Celebrating and supporting young innovators who are making a difference. The Kukah
                Prize recognizes and rewards outstanding innovations that address real-world
                challenges.
              </p>
              <q-btn
                class="cta-button"
                flat
                label="Learn More →"
                @click="navigateToSection('kukah-prize')"
                aria-label="Learn about the Kukah Prize"
              />
            </div>
            <div
              class="visual-section"
              :style="{
                backgroundImage: 'url(/images/kuk1.jpeg)',
              }"
              role="img"
              aria-label="Kukah Prize For Young Innovations"
            >
              <div class="overlay"></div>
            </div>
          </div>
        </q-carousel-slide>

        <!-- Murder Board Slide -->
        <q-carousel-slide :name="5" class="slide-content">
          <div class="slide-grid">
            <div
              class="visual-section"
              :style="{
                backgroundImage: 'url(/images/training1.jpeg)',
              }"
              role="img"
              aria-label="GreyHobbs's Murder Board"
            >
              <div class="overlay"></div>
            </div>
            <div class="content-section">
              <div class="slide-number" aria-hidden="true">05</div>
              <h2>GreyHobbs's Murder Board</h2>
              <p>
                A unique platform for problem-solving and innovation. The Murder Board challenges
                teams to think critically and develop creative solutions to complex technical
                problems.
              </p>
              <q-btn
                class="cta-button"
                flat
                label="Learn More →"
                @click="navigateToSection('murder-board')"
                aria-label="Learn about GreyHobbs's Murder Board"
              />
            </div>
          </div>
        </q-carousel-slide>

        <!-- Innovation Conference Slide -->
        <q-carousel-slide :name="6" class="slide-content">
          <div class="slide-grid">
            <div class="content-section">
              <div class="slide-number" aria-hidden="true">06</div>
              <h2>GreySoft Innovation Conference</h2>
              <p>
                The premier event for technology innovation and collaboration. Join industry
                leaders, innovators, and visionaries to explore the latest trends and shape the
                future of technology.
              </p>
              <q-btn
                class="cta-button"
                flat
                label="Learn More →"
                @click="navigateToSection('innovation-conference')"
                aria-label="Learn about our Innovation Conference"
              />
            </div>
            <div
              class="visual-section"
              :style="{
                backgroundImage: 'url(/images/teched.png)',
              }"
              role="img"
              aria-label="GreySoft Innovation Conference"
            >
              <div class="overlay"></div>
            </div>
          </div>
        </q-carousel-slide>

        <!-- Greysoft Metaverse Slide -->
        <q-carousel-slide :name="7" class="slide-content">
          <div class="slide-grid">
            <div
              class="visual-section"
              :style="{
                backgroundImage: 'url(/images/ralphoculus.jpg)',
              }"
              role="img"
              aria-label="Greysoft Metaverse"
            >
              <div class="overlay"></div>
            </div>
            <div class="content-section">
              <div class="slide-number" aria-hidden="true">07</div>
              <h2>Greysoft Metaverse</h2>
              <p>
                Explore the frontiers of digital reality in our immersive Metaverse experience.
                Greysoft Metaverse brings together virtual collaboration, learning, and innovation
                in a cutting-edge environment that transcends physical limitations.
              </p>
              <q-btn
                class="cta-button"
                flat
                label="Learn More →"
                @click="navigateToSection('metaverse')"
                aria-label="Explore Greysoft Metaverse"
              />
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'FocusAreasCarousel',
  setup() {
    const router = useRouter()
    const slide = ref(1)
    const autoplayActive = ref(true)
    const windowWidth = ref(window.innerWidth)

    const isMobile = computed(() => {
      return windowWidth.value <= 768
    })

    const pauseAutoplay = () => {
      autoplayActive.value = false
    }

    const resumeAutoplay = () => {
      autoplayActive.value = true
    }

    const updateWindowWidth = () => {
      windowWidth.value = window.innerWidth
    }

    const navigateToSection = (section) => {
      router.push({ path: '/' + section })
    }

    const previousSlide = () => {
      if (slide.value > 1) {
        slide.value--
      } else {
        slide.value = 7
      }
    }

    const nextSlide = () => {
      if (slide.value < 7) {
        slide.value++
      } else {
        slide.value = 1
      }
    }

    // Handle keyboard navigation
    const handleKeydown = (event) => {
      if (event.key === 'ArrowLeft') {
        previousSlide()
      } else if (event.key === 'ArrowRight') {
        nextSlide()
      }
    }

    onMounted(() => {
      window.addEventListener('keydown', handleKeydown)
      window.addEventListener('resize', updateWindowWidth)
    })

    onUnmounted(() => {
      window.removeEventListener('keydown', handleKeydown)
      window.removeEventListener('resize', updateWindowWidth)
    })

    return {
      slide,
      autoplayActive,
      isMobile,
      pauseAutoplay,
      resumeAutoplay,
      navigateToSection,
      previousSlide,
      nextSlide,
    }
  },
}
</script>

<style scoped>
.focus-areas-section {
  padding: 4rem 5%;
  background: #f8f9fa;
}

.section-header {
  margin-bottom: 2rem;
  padding: 0 2rem;
}

.section-title {
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 2.5rem;
  color: #1a1a1a;
  line-height: 1.2;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60px;
  height: 3px;
  background: var(--q-primary);
  transition: width 0.3s ease;
}

.focus-areas-carousel {
  position: relative;
  margin: 0;
  width: 100%;
}

.focus-carousel {
  background: #f8f9fa;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
}

.slide-content {
  padding: 0;
  height: 100%;
  contain: layout style paint;
}

.slide-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  gap: 2rem;
}

.visual-section {
  position: relative;
  background-size: cover;
  background-position: center;
  height: 100%;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 10px;
  overflow: hidden;
}

.visual-section:hover {
  transform: scale(1.02);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2));
  transition: all 0.3s ease;
}

.visual-section:hover .overlay {
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1));
}

.content-section {
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-number {
  font-family: 'Poppins';
  font-size: 4rem;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 2rem;
  left: 2rem;
  transition: all 0.3s ease;
  z-index: 0;
}

h2 {
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 2.5rem;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  position: relative;
  z-index: 1;
}

h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60px;
  height: 3px;
  background: var(--q-primary);
  transition: width 0.3s ease;
}

.content-section:hover h2::after {
  width: 100px;
}

p {
  font-family: 'Inter';
  font-size: 1.1rem;
  line-height: 1.6;
  color: #4a4a4a;
  margin-bottom: 2rem;
  max-width: 90%;
  position: relative;
  z-index: 1;
}

.cta-button {
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 1.1rem;
  color: var(--q-primary);
  padding: 0.5rem 0;
  position: relative;
  width: fit-content;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
}

.cta-button::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--q-primary);
  transition: width 0.3s ease;
}

.cta-button:hover {
  transform: translateX(10px);
  opacity: 0.9;
}

.cta-button:hover::after {
  width: 100%;
}

.cta-button:focus {
  outline: 2px solid var(--q-primary);
  outline-offset: 4px;
}

@media (max-width: 1024px) {
  .focus-areas-section {
    padding: 3rem 4%;
  }

  .section-header {
    padding: 0 1rem;
    margin-bottom: 1.5rem;
  }

  .section-title {
    font-size: 2.25rem;
  }

  .slide-grid {
    grid-template-columns: 1fr;
    grid-template-rows: 300px 1fr;
    gap: 1rem;
  }

  .content-section {
    padding: 2rem;
  }

  h2 {
    font-size: 2rem;
  }

  .slide-number {
    font-size: 3rem;
    top: 1rem;
    left: 1rem;
  }

  p {
    max-width: 100%;
  }

  .focus-carousel {
    border-radius: 15px;
  }

  :deep(.q-carousel__arrow) {
    width: 44px;
    height: 44px;
    font-size: 1.75rem;
  }

  :deep(.q-carousel__arrow--prev) {
    left: 0.75rem;
  }

  :deep(.q-carousel__arrow--next) {
    right: 0.75rem;
  }

  :deep(.q-carousel__navigation) {
    bottom: 1.5rem;
    padding: 6px 12px;
  }
}

@media (max-width: 768px) {
  .focus-areas-section {
    padding: 2rem 3%;
  }

  .section-header {
    padding: 0 0.5rem;
    margin-bottom: 1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .focus-areas-carousel {
    margin: 1rem 0;
  }

  .focus-carousel {
    border-radius: 10px;
    height: 550px !important;
  }

  h2 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  .cta-button {
    font-size: 1rem;
  }

  .content-section {
    padding: 1.5rem;
  }

  .slide-grid {
    gap: 0.5rem;
  }

  /* Keep arrows but make them smaller on mobile */
  :deep(.q-carousel__arrow) {
    width: 36px;
    height: 36px;
    font-size: 1.3rem;
    background: rgba(255, 255, 255, 0.8) !important;
  }

  :deep(.q-carousel__arrow--prev) {
    left: 0.5rem;
  }

  :deep(.q-carousel__arrow--next) {
    right: 0.5rem;
  }

  /* Hide only navigation on mobile */
  :deep(.q-carousel__navigation) {
    display: none;
  }
}

@media (max-width: 480px) {
  .focus-areas-section {
    padding: 1.5rem 2%;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .focus-carousel {
    border-radius: 8px;
    height: 520px !important;
  }

  .content-section {
    padding: 1rem;
  }

  .slide-grid {
    grid-template-rows: 200px 1fr;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.4;
    margin-bottom: 1rem;
  }

  .cta-button {
    font-size: 0.9rem;
  }

  .slide-number {
    font-size: 2.5rem;
    top: 0.5rem;
    left: 0.5rem;
  }

  /* Smaller arrows for very small screens */
  :deep(.q-carousel__arrow) {
    width: 32px;
    height: 32px;
    font-size: 1.1rem;
  }

  :deep(.q-carousel__arrow--prev) {
    left: 0.3rem;
  }

  :deep(.q-carousel__arrow--next) {
    right: 0.3rem;
  }
}

/* Preload images for smooth transitions */
@media (min-width: 1025px) {
  .focus-areas-carousel::after {
    position: absolute;
    width: 0;
    height: 0;
    overflow: hidden;
    z-index: -1;
    content: url('@/assets/focus-areas/vr-focus.webp')
      url('@/assets/focus-areas/agritech-focus.webp') url('@/assets/focus-areas/climate-focus.webp')
      url('@/assets/focus-areas/academy-focus.webp');
  }
}

/* Navigation Container Styles */
:deep(.q-carousel__navigation) {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  padding: 8px 16px;
  border-radius: 50px;
  width: auto;
  display: inline-flex;
  justify-content: center;
  z-index: 10;
}

:deep(.q-carousel__navigation-inner) {
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
}

/* Navigation Dots */
:deep(.q-carousel__navigation-icon) {
  font-size: 12px !important;
  transition: all 0.3s ease;
  margin: 0 4px;
  opacity: 0.7;
}

:deep(.q-carousel__navigation-icon--active) {
  transform: scale(1.4);
  opacity: 1;
}

/* Arrow Navigation */
:deep(.q-carousel__arrow) {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9) !important;
  color: var(--q-primary) !important;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 10;
}

:deep(.q-carousel__arrow--prev) {
  left: 1rem;
}

:deep(.q-carousel__arrow--next) {
  right: 1rem;
}

:deep(.q-carousel__arrow:hover) {
  background: var(--q-primary) !important;
  color: white !important;
  transform: translateY(-50%) scale(1.1);
}

:deep(.q-carousel__arrow--inactive) {
  opacity: 0;
  pointer-events: none;
}

/* Focus States */
:deep(.q-carousel__arrow:focus),
:deep(.q-carousel__navigation-icon:focus) {
  outline: none;
  box-shadow: 0 0 0 3px var(--q-primary);
}
</style>
