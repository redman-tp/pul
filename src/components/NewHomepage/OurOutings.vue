<template>
  <section class="outings-section" data-aos="fade-up" data-aos-duration="1000">
    <div class="container">
      <div class="section-header" data-aos="fade-up" data-aos-delay="200">
        <h2 class="section-title">Our Activities</h2>
        <p class="section-description">
          Explore our vibrant community events and activities that showcase our commitment to
          innovation, education, and technological advancement in our society.
        </p>
      </div>

      <div class="carousel-container" data-aos="fade-up" data-aos-delay="400">
        <Splide :options="carouselOptions" aria-label="Company Activities Showcase">
          <SplideSlide v-for="(activity, index) in activities" :key="index">
            <div class="activity-card" @click="activity.imgs && openModal(activity)">
              <div class="activity-image">
                <img :src="activity.img" :alt="activity.desc" loading="lazy" />
                <div class="image-overlay">
                  <div class="overlay-content">
                    <p class="activity-description">{{ activity.desc }}</p>
                    <span v-if="activity.imgs" class="view-more">
                      View Gallery <i class="fas fa-images"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>

    <q-dialog v-model="openModals" class="gallery-modal">
      <q-card class="modal-card">
        <q-carousel
          swipeable
          animated
          v-model="slide"
          thumbnails
          infinite
          height="70vh"
          class="gallery-carousel"
          navigation
          navigation-icon="circle"
          control-color="primary"
          control-type="regular"
        >
          <q-carousel-slide
            v-for="(img, index) in modalImgs"
            :key="index"
            :name="index + 1"
            :img-src="img"
          >
            <div class="absolute-bottom custom-caption">
              <div class="text-h6">{{ modalDesc }}</div>
              <div class="text-subtitle1">Image {{ index + 1 }} of {{ modalImgs.length }}</div>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </q-card>
    </q-dialog>
  </section>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'
import { ref } from 'vue'

export default {
  components: {
    Splide,
    SplideSlide,
  },
  setup() {
    return {
      slide: ref(1),
    }
  },
  data() {
    return {
      openModals: false,
      modalImgs: [],
      modalDesc: '',
      carouselOptions: {
        rewind: true,
        autoplay: true,
        interval: 4000,
        arrows: true,
        pagination: true,
        perPage: 3,
        gap: '2rem',
        breakpoints: {
          1200: {
            perPage: 3,
            gap: '1.5rem',
          },
          968: {
            perPage: 2,
            gap: '1.5rem',
          },
          768: {
            perPage: 2,
            gap: '1rem',
          },
          480: {
            perPage: 1,
            gap: '1rem',
          },
        },
      },
      activities: [
        {
          title: 'Kaduna Agritech Conference',
          img: '/images/acp1.jpg',
          desc: ` Kaduna Agritech Conference 2025`,
        },
        {
          title: 'Kaduna Agritech Conference',
          img: '/images/acp2.jpg',
          desc: ` Kaduna Agritech Conference 2025`,
        },
        {
          title: 'Kaduna Agritech Conference',
          img: '/images/acp3.jpg',
          desc: ` Kaduna Agritech Conference 2025`,
        },
        {
          title: 'Kaduna Business Community and Gov. Nasir El Rufai',
          img: '/images/kuk1.jpeg',
          desc: `The Kukah Prize for Young Innovators was well attended by presidents and state governors of Nigeria`,
          imgs: [
            '/images/kuk2.jpeg',
            '/images/kuk3.jpeg',
            '/images/kuk4.jpeg',
            '/images/kuk5.jpeg',
          ],
        },
        {
          title: 'Remote Jobs',
          img: '/images/ceospeech.jpeg',
          desc: ` CEO, Greysoft Technologies, speaks at the Kukah Prize for Young Innovators on the vision of the award`,
        },
        {
          title: 'Bishop MH Kukah at Greysoft on Digital Literacy',
          img: '/images/winners.jpeg',
          desc: `Winners of the maiden edition of the Kukah Prize for Young Innovators 2022.`,
        },
        {
          title: 'The Kukah Prize for Young Innovators',
          img: '/images/okwu.jpeg',
          desc: `Honorary award to Dr. Jude Onwudili of Aston University, College of Engineering.`,
        },
        {
          title: 'We are Community Driven!',
          img: '/images/kadin.jpeg',
          desc: `CEO Greysoft Technologies and the Administrator, Kaduna State Capital Authority, Hafiz Bayero at the KadInvest 7.0 - Kaduna Investment Summit.`,
        },
        {
          title: 'UK Aid funded Apprenticeship and Traineeship S4P Program',
          img: '/images/vr1.jpeg',
          desc: `Kaduna State becomes the first sub national government to hold its summit in the metaverse - We made this happen!`,
        },
        {
          title: 'KADIPA meets GreyHobb',
          img: '/images/vr2.jpeg',
          desc: `Kaduna State experiences the metaverse in a whole new way. Digital government investment summit live on VR`,
        },
        {
          title: 'Certiport Authorized Testing Center (CATC)',
          img: '/images/vr3.jpeg',
          desc: `Experience the 7th Kaduna Investment Summit from the metaverse, powered by Greysoft Technologies.`,
        },
        {
          title: 'Nigeria/Kaduna Startup Bill',
          img: '/images/boot.jpeg',
          desc: `Greysoft's Booth at the KadInvest 7.0 - we are committed to Emerging technologies and helping you understand and leverage it.`,
        },
        {
          title: 'NFT Bootcamp',
          img: '/images/smallbus.jpeg',
          desc: `The Manzo Small Business Challenge is a business pitch event that enable Startups to win prizes on pitching their services and business strategies.`,
        },
        {
          title: 'Fullstack Bootcamp',
          img: '/images/ihifix.jpeg',
          desc: `Ihifix Digital Summit on Open Governance. Greysoft's participation highlights the importance of technology in achieving transparency in governance.`,
        },
        {
          title: 'Bootcamp Winners – N500,000',
          img: '/images/bill.jpeg',
          desc: `CEO Greysoft Technologies at the NABG - Bill and Melinda Gates powered regional conference on enhancing Agribusiness practices.`,
        },
        {
          title: 'Greysoft Open Day',
          img: '/images/empower.jpeg',
          desc: `At Greysoft, we empower women and youth to take advantage of technology for improved livelihood.`,
        },
        {
          title: 'Kids Code Class',
          img: '/images/agritech.jpeg',
          desc: ` Greysoft AgriTech Open Day - Startup Founders pitch their business to carry community along with their works.`,
        },
        {
          title: 'Free/Paid Acting Class',
          img: '/images/openday1.jpeg',
          desc: ` Greysoft Open Day is an event where Founders meet Community (users of their products) for a heart to heart.`,
          imgs: ['/images/openday2.jpeg'],
        },
        {
          title: 'Script Writing Conference',
          img: '/images/coworking.jpeg',
          desc: ` Co-working at Greysoft Technologies is thrilling with waves of ideas and team exchanging hands.`,
        },
        {
          title: 'Script Writing Conference',
          img: '/images/kids.jpeg',
          desc: `Kids Code Class at Greysoft Technologies introduces young children to digital skills at tender ages.`,
        },
        {
          title: 'GreyHobb Game Day',
          img: '/images/smallbusi.jpeg',
          desc: `Rachael Bawado wins the Manzo Small Business Challenge 2022 and bags N500,000`,
        },
        {
          title: 'GreyHobb Game Day',
          img: '/images/tmax.jpeg',
          desc: `Project TMAX in partnership with the Federal Government and ITF on upskilling youth and women.`,
          imgs: ['/images/tmax1.jpeg', '/images/tmax2.jpeg'],
        },
        {
          title: 'GreyHobb Game Day',
          img: '/images/s4p.jpeg',
          desc: `Greysoft Partners with the Skills for Prosperity team to enhance digital skills (from skills to jobs) powered by UKAids`,
        },
        {
          title: 'GreyHobb Game Day',
          img: '/images/int.jpeg',
          desc: ` International Women's Day - Empowering Women with Digital Skill.`,
          imgs: ['/images/int1.jpeg'],
        },
        {
          title: 'GreyHobb Game Day',
          img: '/images/natview.jpeg',
          desc: `CEO and COO Greysoft Technologies and the CEO, Natview Technologies at the 2022 Datathon in Kaduna.`,
        },
        {
          title: 'GreyHobb Game Day',
          img: '/images/drmanzo.jpeg',
          desc: `Dr. Manzo Maigari, Chairman, Greysoft Technologies speaks on the impact of technology in African societies at the Kukah Prize for Young Innovators.`,
        },
      ],
    }
  },
  methods: {
    openModal(activity) {
      if (activity.imgs) {
        this.modalImgs = activity.imgs
        this.modalDesc = activity.desc
        this.openModals = true
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.outings-section {
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

  &::after {
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
}

.section-description {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4a4a4a;
  max-width: 700px;
  margin: 0 auto;
}

.carousel-container {
  max-width: 1200px;
  margin: 0 auto;

  :deep(.splide) {
    .splide__arrow {
      background: rgba(255, 255, 255, 0.9);
      width: 3rem;
      height: 3rem;
      opacity: 0;
      transition: all 0.3s ease;

      &:hover {
        background: var(--q-primary);
        svg {
          fill: white;
        }
      }

      svg {
        fill: var(--q-primary);
        width: 1.2em;
        height: 1.2em;
      }
    }

    &:hover {
      .splide__arrow {
        opacity: 1;
      }
    }

    .splide__pagination {
      bottom: -2rem;

      &__page {
        background: rgba(141, 53, 74, 0.3);
        transition: all 0.3s ease;

        &.is-active {
          background: var(--q-primary);
          transform: scale(1.4);
        }
      }
    }
  }
}

.activity-card {
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  height: 400px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);

    .image-overlay {
      opacity: 1;
    }

    .activity-image img {
      transform: scale(1.1);
    }
  }
}

.activity-image {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8));
  display: flex;
  align-items: flex-end;
  padding: 2rem;
  opacity: 0;
  transition: all 0.3s ease;
}

.overlay-content {
  color: white;
}

.activity-description {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.view-more {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  color: #f0d043;

  i {
    transition: transform 0.3s ease;
  }

  &:hover i {
    transform: translateX(5px);
  }
}

.gallery-modal {
  :deep(.q-dialog__inner) {
    padding: 2rem;
  }
}

.modal-card {
  border-radius: 20px;
  overflow: hidden;
  max-width: 90vw;
  background: transparent;
}

.gallery-carousel {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);

  :deep(.q-carousel__navigation) {
    .q-btn {
      margin: 6px 4px;
      opacity: 0.7;
      transition: all 0.3s ease;

      &--active {
        opacity: 1;
        transform: scale(1.2);
      }
    }
  }

  .custom-caption {
    background: rgba(0, 0, 0, 0.7);
    padding: 16px;
    color: white;
    text-align: center;

    .text-h6 {
      font-family: 'Poppins', sans-serif;
      font-size: 1.1rem;
      margin-bottom: 8px;
      line-height: 1.4;
    }

    .text-subtitle1 {
      font-family: 'Inter', sans-serif;
      font-size: 0.9rem;
      margin: 0;
      opacity: 0.8;
    }
  }
}

@media (max-width: 1024px) {
  .outings-section {
    padding: 3rem 0;
  }

  .container {
    padding: 0 4%;
  }

  .activity-card {
    height: 350px;
  }

  .section-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .outings-section {
    padding: 2.5rem 0;
  }

  .container {
    padding: 0 3%;
  }

  .activity-card {
    height: 300px;
  }

  .image-overlay {
    opacity: 1;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7));
  }
}

@media (max-width: 480px) {
  .outings-section {
    padding: 2rem 0;
  }

  .container {
    padding: 0 2%;
  }

  .section-title {
    font-size: 2rem;
  }

  .activity-card {
    height: 250px;
  }
}
</style>
