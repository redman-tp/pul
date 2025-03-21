<template>
  <section class="sponsors-section">
    <div class="sponsors-container">
      <div class="section-header">
        <h3 class="section-subtitle">Our Clients And Partners</h3>
        <h2 class="section-title">Some organisations we work with</h2>
      </div>

      <div class="sponsors-showcase">
        <!-- First Row - Scrolling Left -->
        <div class="sponsors-row" data-direction="left">
          <div class="sponsors-track">
            <!-- First set -->
            <div
              class="sponsor-item"
              v-for="(sponsor, index) in firstRowSponsors"
              :key="`first-${index}`"
            >
              <div class="sponsor-logo-container">
                <img :src="sponsor.logo" :alt="sponsor.name" class="sponsor-logo" />
              </div>
            </div>
            <!-- Duplicate set for seamless scrolling -->
            <div
              class="sponsor-item"
              v-for="(sponsor, index) in firstRowSponsors"
              :key="`first-dup-${index}`"
            >
              <div class="sponsor-logo-container">
                <img :src="sponsor.logo" :alt="sponsor.name" class="sponsor-logo" />
              </div>
            </div>
          </div>
        </div>

        <!-- Second Row - Scrolling Right -->
        <div class="sponsors-row" data-direction="right">
          <div class="sponsors-track">
            <!-- First set -->
            <div
              class="sponsor-item"
              v-for="(sponsor, index) in secondRowSponsors"
              :key="`second-${index}`"
            >
              <div class="sponsor-logo-container">
                <img :src="sponsor.logo" :alt="sponsor.name" class="sponsor-logo" />
              </div>
            </div>
            <!-- Duplicate set for seamless scrolling -->
            <div
              class="sponsor-item"
              v-for="(sponsor, index) in secondRowSponsors"
              :key="`second-dup-${index}`"
            >
              <div class="sponsor-logo-container">
                <img :src="sponsor.logo" :alt="sponsor.name" class="sponsor-logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      firstRowSponsors: [
        { name: 'Lcci', logo: '/images/lcci.jpg' },
        { name: 'Microsoft', logo: '/sponsors/microsoft.svg' },
        { name: 'KDSG', logo: '/sponsors/kdsg.svg' },
        { name: 'KADIPA', logo: '/sponsors/kadipa.svg' },
        { name: 'Agrolog', logo: '/sponsors/agrolog.svg' },
        { name: 'Softalliance', logo: '/sponsors/softalliance2.png' },
        { name: 'Kukah', logo: '/sponsors/kukah.svg' },
        { name: 'Cleantech', logo: '/sponsors/cleantech.svg' },
        { name: 'Rabitz', logo: '/sponsors/rabitz.svg' },
        { name: 'Bantu', logo: '/sponsors/bantu.svg' },
        { name: 'Certiport', logo: '/sponsors/certiport.svg' },
        { name: 'AFEX', logo: '/sponsors/newlogo/afex.jpg' },
        { name: 'FCMB', logo: '/sponsors/newlogo/fcmb.webp' },
        { name: 'Founders Institute', logo: '/sponsors/newlogo/founders.png' },
        { name: 'Extension Africa', logo: '/sponsors/newlogo/extension.webp' },
        { name: 'Heiger', logo: '/sponsors/newlogo/heiger.webp' },
      ],
      secondRowSponsors: [
        { name: 'DBI', logo: '/sponsors/dbi.svg' },
        { name: 'ITF', logo: '/sponsors/itf.svg' },
        { name: 'NBTE', logo: '/sponsors/nbte.svg' },
        { name: 'VictoryXR', logo: '/sponsors/victoryxr.svg' },
        { name: 'Google', logo: '/sponsors/google.svg' },
        { name: 'Meta', logo: '/sponsors/meta.svg' },
        { name: 'PAN', logo: '/sponsors/pan.svg' },
        { name: 'NITDA', logo: '/pe/NITDA-logo-newest-1-removebg-preview 1.png' },
        { name: 'Sabou', logo: '/images/sabou2.jpg' },
        { name: 'Logo 4-01', logo: '/sponsors/newlogo/logo4-01.jpg' },
        { name: 'Logo 4-06', logo: '/sponsors/newlogo/logo4-06.png' },
        { name: 'Logo 3-06', logo: '/sponsors/newlogo/logo3-06.png' },
        { name: 'Logo 2-05', logo: '/images/olamag.png' },
        { name: 'Logo 2-07', logo: '/sponsors/newlogo/logo2-07.jpg' },
        { name: 'Logo 2-07', logo: '/sponsors/logo04.jpg' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.sponsors-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  position: relative;
  overflow: hidden;

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

.sponsors-container {
  width: 100%;
  // max-width: 1400px;
  margin: 0 auto;
  padding: 0 5%;
  position: relative;
  z-index: 1;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-subtitle {
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--q-primary);
  margin: 0 0 0.5rem;
}

.section-title {
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, var(--q-primary) 0%, #f0d043 100%);
    border-radius: 2px;
  }
}

.sponsors-showcase {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.sponsors-row {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 2rem 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 120px;
    z-index: 5;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: rgb(245, 246, 248);
    background: linear-gradient(
      90deg,
      rgba(245, 246, 248, 1) 0%,
      rgba(245, 246, 248, 0.9436566863073355) 52%,
      rgba(245, 246, 248, 0) 100%
    );
  }

  &::after {
    right: 0;
    background: rgb(236, 239, 241);
    background: linear-gradient(
      90deg,
      rgba(236, 239, 241, 0) 0%,
      rgba(236, 239, 241, 0.9436566863073355) 48%,
      rgba(236, 239, 241, 1) 100%
    );
  }

  &[data-direction='left'] .sponsors-track {
    animation: scroll-left 60s linear infinite;
  }

  &[data-direction='right'] .sponsors-track {
    animation: scroll-right 60s linear infinite;
  }

  &:hover .sponsors-track {
    animation-play-state: paused;
  }
}

.sponsors-track {
  display: flex;
  width: fit-content;
}

.sponsor-item {
  flex: 0 0 auto;
  padding: 0 2rem;
}

.sponsor-logo-container {
  width: 180px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  }
}

.sponsor-logo {
  max-width: 80%;
  max-height: 60%;
  object-fit: contain;
  filter: grayscale(100%);
  opacity: 0.8;
  transition: all 0.5s ease;

  &:hover {
    filter: grayscale(0%);
    opacity: 1;
  }
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes scroll-right {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .sponsor-logo-container {
    width: 160px;
    height: 100px;
  }

  .section-title {
    font-size: 2.2rem;
  }

  .section-subtitle {
    font-size: 1.3rem;
  }

  .sponsors-row {
    &::before,
    &::after {
      width: 100px;
    }
  }
}

@media (max-width: 992px) {
  .sponsors-section {
    padding: 4rem 0;
  }

  .sponsor-logo-container {
    width: 140px;
    height: 90px;
  }

  .sponsor-item {
    padding: 0 1.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1.2rem;
  }

  .sponsors-row {
    &::before,
    &::after {
      width: 80px;
    }
  }
}

@media (max-width: 768px) {
  .sponsors-section {
    padding: 3rem 0;
  }

  .sponsor-logo-container {
    width: 120px;
    height: 80px;
  }

  .sponsor-item {
    padding: 0 1rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .section-subtitle {
    font-size: 1.1rem;
  }

  .sponsors-row {
    padding: 1.5rem 0;
    &::before,
    &::after {
      width: 60px;
    }
  }
}

@media (max-width: 480px) {
  .sponsors-section {
    padding: 2rem 0;
  }

  .sponsor-logo-container {
    width: 100px;
    height: 70px;
  }

  .sponsor-item {
    padding: 0 0.8rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .sponsors-row {
    padding: 1rem 0;
    &::before,
    &::after {
      width: 40px;
    }
  }
}
</style>
