<template>
  <section class="metaverse-section" data-aos="fade-up" data-aos-duration="1000">
    <div class="floating-element">
      <img src="/controllar2.png" class="floating-image" alt="VR Controller image" />
    </div>
    <div class="section-header" data-aos="fade-up" data-aos-delay="200">
      <h3 class="section-title">Our Focus Area</h3>
    </div>

    <div class="carousel-wrapper" data-aos="fade-up" data-aos-delay="300">
      <q-carousel
        animated
        v-model="slide"
        infinite
        :autoplay="autoplay"
        transition-prev="fade"
        transition-next="fade"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
        class="main-carousel"
        swipeable
        navigation-position="none"
        arrows="false"
      >
        <!-- Metaverse Slide -->
        <q-carousel-slide class="carousel-slide" :name="1">
          <div class="slide-content content-right">
            <div class="slide-image-container">
              <div class="image-frame">
                <img src="/metaverse1.svg" alt="Woman holding VR Controller" class="slide-image" />
                <div class="title-overlay">
                  <h2 class="slide-title">The Metaverse</h2>
                  <div class="title-underline"></div>
                </div>
                <div class="glow-effect"></div>
              </div>
            </div>

            <div class="slide-text">
              <p>
                We've joined in creating a world where you get to meet, collaborate, play games,
                organize and attend concerts without actually being there in person. Going beyond
                the restriction of your device regions, the Metaverse offers you a combination of
                extended-XR (augmented, mixed, and virtual technologies) and physical reality in a
                resolute and shared virtual space.
              </p>
              <p>
                Kaduna State is the first sub-national government in Nigeria leveraging the
                metaverse. We made it happen!
              </p>

              <q-btn
                flat
                class="view-more-btn"
                label="Explore Metaverse"
                to="/metaverse"
                no-caps
                icon-right="fa-solid fa-arrow-right"
              />
            </div>
          </div>
        </q-carousel-slide>

        <!-- AgriTech Slide -->
        <q-carousel-slide class="carousel-slide" :name="2">
          <div class="slide-content content-left">
            <div class="slide-image-container">
              <div class="image-frame">
                <img src="/images/adfarm.png" alt="AgriTech" class="slide-image" />
                <div class="title-overlay">
                  <h2 class="slide-title">Agritech</h2>
                  <div class="title-underline"></div>
                </div>
                <div class="glow-effect"></div>
              </div>
            </div>

            <div class="slide-text">
              <p>
                We are driving a transformative shift in Africa’s agricultural sector by developing
                forward-thinking policies and implementing cutting-edge technological solutions. Our
                mission is to enhance productivity, promote sustainable farming practices, and
                create seamless access to local and global markets.
              </p>
              <p>
                By empowering farmers with innovative tools, data-driven insights, and strategic
                policy support, we are fostering a resilient agricultural ecosystem that ensures
                food security, economic growth, and long-term sustainability across the continent.
              </p>

              <q-btn
                flat
                class="view-more-btn"
                label="Explore AgriTech"
                to="/greycreate"
                no-caps
                icon-right="fa-solid fa-arrow-right"
              />
            </div>
          </div>
        </q-carousel-slide>

        <!-- Tech Education Slide -->
        <q-carousel-slide class="carousel-slide" :name="3">
          <div class="slide-content content-right">
            <div class="slide-image-container">
              <div class="image-frame">
                <img src="/images/teched.png" alt="Tech Education" class="slide-image" />
                <div class="title-overlay">
                  <h2 class="slide-title">Tech Education/TVET</h2>
                  <div class="title-underline"></div>
                </div>
                <div class="glow-effect"></div>
              </div>
            </div>

            <div class="slide-text">
              <p>
                Talk about training the next set of solution-birthers. Through our academy's
                training, we teach the skills needed to create, develop, execute, or operate
                in-demand technologies.
              </p>
              <p>
                Our GreyAcademy is a community space led by Greysoft technologies that provide
                training programs, interview prep coaching, and free webinars to you if you are
                looking to upskill and land your dream jobs.
              </p>

              <q-btn
                flat
                class="view-more-btn"
                label="Explore Tech Education"
                to="/greyacademy"
                no-caps
                icon-right="fa-solid fa-arrow-right"
              />
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const slide = ref(1)
    const autoplay = ref(true)

    return {
      slide,
      autoplay,
    }
  },
}
</script>

<style lang="scss" scoped>
.metaverse-section {
  position: relative;
  padding: 5rem 0 0;
  overflow: hidden;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/images/grid-pattern.png') repeat;
    opacity: 0.05;
    z-index: 0;
  }
}

.section-header {
  position: relative;
  margin-bottom: 2rem;
  max-width: 1400px;
  margin: 0 5% 2rem;
}

.section-title {
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 2.5rem;
  color: #1a1a1a;
  line-height: 1.2;
  position: relative;
  display: inline-block;
  margin: 0;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background: var(--q-primary);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100px;
  }
}

.section-subtitle {
  display: none;
}

.floating-element {
  position: absolute;
  right: -60px;
  top: 10px;
  width: 35%;
  max-width: 450px;
  min-width: 280px;
  animation: float 8s ease-in-out infinite;
  transform-origin: bottom right;
  z-index: 10;
  cursor: pointer;
  &:hover {
    z-index: 10;
    .floating-image {
      transform: scale(1.05) rotate(10deg);
    }
  }
}

.floating-image {
  width: 100%;
  filter: drop-shadow(0 15px 25px rgba(0, 0, 0, 0.2));
  transition: transform 0.5s ease;
  display: block;
  cursor: pointer;

  &:hover {
    transform: scale(1.05) rotate(10deg);
  }
}

.carousel-wrapper {
  position: relative;
  width: 100%;
}

.main-carousel {
  height: auto;
  width: 100%;
  background: transparent;

  :deep(.q-carousel__slide) {
    padding: 0;
  }
}

.carousel-slide {
  padding: 0;
  overflow: hidden;
}

.slide-content {
  display: flex;
  width: 100%;
  height: 600px;

  &.content-right {
    flex-direction: row-reverse;

    .slide-text {
      padding-right: 5%;
      padding-left: 5%;
    }
  }

  &.content-left {
    flex-direction: row;

    .slide-text {
      padding-left: 5%;
      padding-right: 5%;
    }
  }
}

.slide-image-container {
  position: relative;
  width: 50%;
  height: 100%;
}

.image-frame {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &:hover {
    .glow-effect {
      opacity: 1;
    }

    .slide-image {
      transform: scale(1.05);
    }
  }
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.title-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%);
  z-index: 2;
}

.slide-title {
  font-size: 3rem;
  font-weight: 800;
  margin: 0;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.title-underline {
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, var(--q-primary) 0%, #f0d043 100%);
  border-radius: 2px;
  margin-top: 10px;
}

.glow-effect {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(207, 2, 187, 0.2) 0%,
    rgba(211, 172, 31, 0.2) 50%,
    rgba(240, 13, 67, 0.2) 100%
  );
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
  z-index: 1;
}

.slide-text {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 0;

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #333;
    margin-bottom: 1.5rem;
    text-align: left;
  }
}

.view-more-btn {
  align-self: flex-start;
  background: linear-gradient(
    285.19deg,
    rgba(207, 2, 187, 0.94) -17.8%,
    rgba(211, 172, 31, 0.94) 67.55%,
    rgba(240, 13, 67, 0.94) 152.9%
  );
  color: white;
  border-radius: 8px;
  padding: 10px 20px;
  font-weight: 500;
  font-size: 1rem;
  margin-top: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);

    :deep(.q-icon) {
      transform: translateX(5px);
    }
  }

  :deep(.q-icon) {
    margin-left: 8px;
    transition: transform 0.3s ease;
  }
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .slide-title {
    font-size: 2.5rem;
  }

  .slide-content {
    height: 500px;
  }
}

@media (max-width: 992px) {
  .metaverse-section {
    padding: 4rem 0 0;
  }

  .slide-text p {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .slide-content {
    flex-direction: column !important;
    height: auto;

    &.content-right .slide-text,
    &.content-left .slide-text {
      padding: 2rem 5%;
    }
  }

  .slide-image-container,
  .slide-text {
    width: 100%;
  }

  .slide-image-container {
    height: 350px;
  }

  .floating-element {
    display: none;
  }

  .title-overlay {
    padding: 1.5rem;
  }

  .slide-title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .metaverse-section {
    padding: 3rem 0 0;
  }

  .section-title {
    font-size: 1.2rem;
  }

  .slide-image-container {
    height: 250px;
  }

  .title-overlay {
    padding: 1rem;
  }

  .slide-title {
    font-size: 1.8rem;
  }

  .slide-text p {
    font-size: 0.95rem;
    line-height: 1.6;
  }

  .view-more-btn {
    font-size: 0.9rem;
    padding: 8px 16px;
  }
}
</style>
