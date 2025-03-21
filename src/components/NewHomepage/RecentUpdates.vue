<template>
  <section class="recent-updates-section">
    <div class="section-header">
      <p class="section-subtitle">Recent Updates</p>
      <h2 class="section-title">Our Campaigns</h2>
    </div>

    <div class="posts-grid">
      <div
        class="post post-one"
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }"
      >
        <div class="post-image">
          <img src="/images/empower.jpeg" alt="Empowerment Campaign" />
        </div>
        <div class="post-overlay">
          <div class="post-content">
            <div class="post-category">Technology</div>
            <h3 class="post-title">Empowering Communities Through Technology</h3>
            <p class="post-description">
              Creating sustainable digital solutions that empower communities and improve
              livelihoods.
            </p>
            <div class="post-actions">
              <q-btn class="action-btn" icon-right="arrow_forward">
                <span>Learn More</span>
              </q-btn>
            </div>
          </div>
        </div>
      </div>

      <div
        class="post post-two"
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
      >
        <div class="post-image">
          <img src="/images/re2.png" alt="Kadinvest Metaverse" />
        </div>
        <div class="post-overlay">
          <div class="post-content">
            <div class="post-category">Metaverse</div>
            <h3 class="post-title">
              Kaduna State Annual Investment Submit (KADINVEST 7.0) Metaverse Experience
            </h3>
            <p class="post-description">
              Kaduna State becomes the first sub-national government in Nigeria leveraging the
              Metaverse with partnership from Greysoft. We made it happen!
            </p>
            <div class="post-actions">
              <q-btn class="action-btn" href="https://kadinvest.live" target="_blank">
                <span>Visit Platform</span>
                <i class="fas fa-external-link-alt q-ml-xs"></i>
              </q-btn>
            </div>
          </div>
        </div>
      </div>

      <div
        class="post post-three"
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 300 } }"
      >
        <div class="post-image">
          <img src="/images/re4.png" alt="Tech Hackathon" />
        </div>
        <div class="post-overlay">
          <div class="post-content">
            <div class="post-category">Innovation</div>
            <h3 class="post-title">Tech Hackathon: SDG 16</h3>
            <p class="post-description">
              Using technology to promote peaceful and inclusive societies and to solve insecurity
              within the state.
            </p>
            <div class="post-actions">
              <q-btn class="action-btn" icon-right="arrow_forward">
                <span>Learn More</span>
              </q-btn>
            </div>
          </div>
        </div>
      </div>

      <div
        class="post post-four"
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 400 } }"
      >
        <div class="post-image">
          <img src="kukah.svg" alt="Kukah Prize" />
        </div>
        <div class="post-overlay">
          <div class="post-content">
            <div class="post-category">Awards</div>
            <h3 class="post-title">The Kukah Prize for Young Innovators</h3>
            <p class="post-description">
              The Kukah Prize for Young Innovators is an award of recognition for outstanding
              innovators in the field of technology presented to young Africans who show exceptional
              promise.
            </p>
            <div class="post-actions">
              <q-btn class="action-btn" to="/kukah">
                <span>Learn More</span>
                <i class="fas fa-arrow-right q-ml-xs"></i>
              </q-btn>
            </div>
          </div>
        </div>
      </div>

      <div
        class="post post-five"
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 500 } }"
      >
        <div class="post-image">
          <img src="/images/oba.jpg" alt="Community Engagement" />
        </div>
        <div class="post-overlay">
          <div class="post-content">
            <div class="post-category">Community</div>
            <h3 class="post-title">Community Engagement & Digital Inclusion</h3>
            <p class="post-description">
              Bridging the digital divide through community-focused initiatives and inclusive
              technology solutions.
            </p>
            <div class="post-actions">
              <q-btn class="action-btn" icon-right="arrow_forward">
                <span>Learn More</span>
              </q-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RecentUpdates',
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

.recent-updates-section {
  padding: 5rem 10% 6rem;
  font-family: 'Poppins', sans-serif;
}

.section-header {
  margin-bottom: 3rem;
}

.section-subtitle {
  font-size: 1.5rem;
  font-weight: 500;
  color: $primary-color;
  margin: 0 0 0.5rem;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 40px;
    height: 3px;
    background: $accent-color;
    transition: width 0.4s ease;
  }

  &:hover::after {
    width: 100%;
  }
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #000000;
  margin: 0;
  letter-spacing: -0.5px;
}

.posts-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 250px 250px 250px;
  gap: 20px;
  grid-template-areas:
    'one two three'
    'four two three'
    'four five three';
}

.post {
  position: relative;
  border-radius: $border-radius;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

    .post-image img {
      transform: scale(1.1);
    }

    .post-overlay {
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.9) 0%,
        rgba(0, 0, 0, 0.7) 40%,
        rgba(0, 0, 0, 0.4) 70%,
        rgba(0, 0, 0, 0.1) 100%
      );
    }

    .post-title {
      transform: translateY(0);
    }

    .post-description {
      opacity: 1;
      transform: translateY(0);
    }

    .post-actions {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

.post-one {
  grid-area: one;
}

.post-two {
  grid-area: two;
}

.post-three {
  grid-area: three;
}

.post-four {
  grid-area: four;
}

.post-five {
  grid-area: five;
}

.post-image {
  height: 100%;
  width: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.7s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
}

.post-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.6) 50%,
    rgba(0, 0, 0, 0.2) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;
  transition: background 0.4s ease;
}

.post-content {
  z-index: 2;
}

.post-category {
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 600;
  color: $accent-color;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 20px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    height: 2px;
    background: $accent-color;
  }
}

.post-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: $text-color;
  margin: 0 0 0.75rem;
  line-height: 1.3;
  transform: translateY(5px);
  transition: transform 0.4s ease;
}

.post-description {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.85);
  margin: 0 0 1.25rem;
  line-height: 1.6;
  opacity: 0.8;
  transform: translateY(10px);
  transition: all 0.4s ease 0.1s;
}

.post-actions {
  opacity: 0.8;
  transform: translateY(15px);
  transition: all 0.4s ease 0.2s;
}

.action-btn {
  background: linear-gradient(135deg, $gradient-start 0%, $gradient-end 100%);
  color: $text-color;
  font-weight: 600;
  padding: 0.5rem 1.25rem;
  border-radius: 30px;
  font-size: 0.9rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }
}

// Responsive styles
@media (max-width: 1200px) {
  .recent-updates-section {
    padding: 4rem 6% 5rem;
  }

  .section-subtitle {
    font-size: 1.3rem;
  }

  .section-title {
    font-size: 2.2rem;
  }

  .posts-grid {
    grid-template-rows: 220px 220px 220px;
  }

  .post-title {
    font-size: 1.3rem;
  }

  .post-description {
    font-size: 0.9rem;
  }
}

@media (max-width: 992px) {
  .section-subtitle {
    font-size: 1.2rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .posts-grid {
    grid-template-rows: 200px 200px 200px;
    gap: 15px;
  }

  .post-overlay {
    padding: 1.5rem;
  }

  .post-title {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  .post-description {
    font-size: 0.85rem;
    margin-bottom: 1rem;
  }
}

@media (max-width: 768px) {
  .recent-updates-section {
    padding: 3rem 5% 4rem;
  }

  .section-header {
    margin-bottom: 2rem;
  }

  .posts-grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 200px 200px 200px 200px;
    grid-template-areas:
      'one two'
      'four two'
      'four five'
      'three three';
  }
}

@media (max-width: 576px) {
  .recent-updates-section {
    padding: 2.5rem 5% 3.5rem;
  }

  .section-subtitle {
    font-size: 1.1rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .posts-grid {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 200px);
    grid-template-areas:
      'four'
      'one'
      'two'
      'three'
      'five';
  }

  .post {
    &:hover {
      transform: translateY(-5px);
    }
  }
}
</style>
