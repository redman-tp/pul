<template>
  <section class="team-section" data-aos="fade-up" data-aos-duration="1000">
    <div class="container">
      <div class="section-header" data-aos="fade-up" data-aos-delay="200">
        <h2 class="section-title">Our Think-Hat Crew</h2>
        <p class="section-description">
          We are a prolific team of experienced innovators who continuously tinker, question, and
          turn challenges into opportunities, unveiling market-ready solutions for our communities.
          When we are not about creating solutions, you can find us in the passionate space of our
          favorite sports, movies, and hangout venue.
        </p>
      </div>

      <div class="team-grid" data-aos="fade-up" data-aos-delay="400">
        <div
          v-for="(member, index) in staffs"
          :key="index"
          class="team-card"
          :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
          :data-aos-delay="200 + index * 100"
        >
          <div class="card-inner">
            <div class="card-front">
              <div class="member-image">
                <img :src="member.img" :alt="member.name" loading="lazy" />
                <div class="image-overlay"></div>
              </div>
              <div class="member-info">
                <h3 class="member-name">{{ member.name }}</h3>
                <p class="member-position">{{ member.position }}</p>
              </div>
            </div>
            <div class="card-back">
              <div class="social-links">
                <a
                  v-if="member.twitter"
                  :href="member.twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-link"
                  aria-label="Twitter Profile"
                >
                  <i class="fa-brands fa-twitter"></i>
                </a>
                <a
                  v-if="member.linkedIn"
                  :href="member.linkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-link"
                  aria-label="LinkedIn Profile"
                >
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
              <div class="member-quote" v-if="member.quote">
                <p>"{{ member.quote }}"</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="text-center" data-aos="fade-up" data-aos-delay="600">
        <q-btn to="/team" class="view-more-btn" flat>
          View More
          <i class="fas fa-arrow-right q-ml-sm"></i>
        </q-btn>
      </div> -->
    </div>
  </section>
</template>

<script>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: 'TeamSection',
  data() {
    return {
      staffs: [
        {
          name: 'Dr. Manzo Maigari',
          position: 'Chairman',
          linkedIn: 'https://www.linkedin.com/in/manzo-maigari-2071b1257/',
          img: '/images/dr.png',
          twitter: 'https://twitter.com/MaigariManzo',
          quote: '',
        },
        {
          name: 'Isah Raphael',
          position: 'CEO/CTO',
          linkedIn: 'https://www.linkedin.com/in/raphael-isah-93a98a104',
          img: '/images/ralph.png',
          twitter: 'https://twitter.com/realralphg',
          quote: '',
        },
        {
          name: 'Dala Alphonso',
          position: 'Advisory Board',
          linkedIn: 'https://www.linkedin.com/in/dalaisms/',
          img: '/images/dala.jpeg',
          twitter: 'https://twitter.com/dalaisms',
          quote: '',
        },
        {
          name: 'Niyi Akintade',
          position: 'Senior Legal',
          img: '/images/niyi.jpg',
          linkedIn:
            'https://www.linkedin.com/in/niyi-babatunde-akintade-b1312324/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          twitter: 'https://x.com/nytade?t=st4kbcbAmCzstBb8y3u6Iw&s=09',
          quote: '',
        },
        {
          name: 'Blessing Patrick',
          position: 'Legal',
          img: '/images/blessing.jpg',
          linkedIn:
            'https://www.linkedin.com/in/blessing-patrick-8192b2183?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          twitter: 'https://x.com/blessin277?t=ugPHREmKN-_gPvziI1mKxw&s=09',
          quote: '',
        },
        {
          name: 'Stephanie Akut',
          position: 'Human Resource Manager',
          img: '/images/stef3.jpeg',
          linkedIn: 'https://www.linkedin.com/in/stephanieakut',
          twitter: 'https://twitter.com/Stefphilz',
          quote: '',
        },
      ],
    }
  },
  setup() {
    onMounted(() => {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
      })
    })
  },
}
</script>

<style scoped>
.team-section {
  padding: 4rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  position: relative;
  overflow: hidden;
  width: 100%;
}

.container {
  width: 100%;
  max-width: unset;
  margin: 0 auto;
  padding: 0 5%;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.section-title {
  font-family: 'Poppins', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: var(--q-primary);
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, var(--q-primary) 0%, #f0d043 100%);
  border-radius: 2px;
}

.section-description {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4a4a4a;
  max-width: 700px;
  margin: 0 auto;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.team-card {
  perspective: 1000px;
  height: 380px;
  width: 100%;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  cursor: pointer;
}

.team-card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 20px;
  overflow: hidden;
}

.card-front {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.card-back {
  background: linear-gradient(135deg, var(--q-primary) 0%, #f0d043 100%);
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: white;
}

.member-image {
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
}

.member-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: transform 0.3s ease;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.7) 100%);
}

.member-info {
  padding: 1rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.95);
}

.member-name {
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
}

.member-position {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: var(--q-primary);
  margin: 0.5rem 0 0;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: white;
  color: var(--q-primary);
  transform: translateY(-3px);
}

.member-quote {
  text-align: center;
  font-style: italic;
}

.view-more-btn {
  margin-top: 4rem;
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  color: var(--q-primary);
  padding: 0.75rem 2rem;
  border: 2px solid var(--q-primary);
  border-radius: 50px;
  transition: all 0.3s ease;
}

.view-more-btn:hover {
  background: var(--q-primary);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

@media (max-width: 1200px) {
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .container {
    max-width: 960px;
  }
}

@media (max-width: 1024px) {
  .team-section {
    padding: 3rem 0;
  }

  .container {
    padding: 0 4%;
  }

  .section-header {
    margin-bottom: 3rem;
  }
}

@media (max-width: 768px) {
  .team-section {
    padding: 2.5rem 0;
  }

  .container {
    padding: 0 3%;
  }

  .team-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .member-image {
    height: 260px;
  }

  .team-card {
    height: 360px;
  }

  .section-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 480px) {
  .team-section {
    padding: 2rem 0;
  }

  .container {
    padding: 0 1.5rem;
  }

  .team-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .member-image {
    height: 240px;
  }

  .team-card {
    height: 340px;
  }

  .section-title {
    font-size: 2rem;
  }
}
</style>
