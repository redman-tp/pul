<template>
  <q-page class="metaverse">
    <main class="main">
      <!-- === HOME === -->
      <section class="home" id="home">
        <img src="/images/ralphoculus.jpg" alt="" class="home__img" />

        <div class="home__container container grid">
          <div class="home__data">
            <h1 class="home__data-title">
              A whole new world of <br />
              extended reality in Africa.
            </h1>
            <p class="">Metaverse |VR|AR|MR| Games | Trainings</p>
            <small
              >Helping people leverage technology for improved
              livelihood.</small
            >
          </div>
        </div>
      </section>

      <div class="new container">
        <div class="text">Coming Soon</div>

        <section class="about first section" id="about">
          <div class="about__container grid">
            <div class="about__data">
              <h2 class="section__title about__title">
                Greysoft XR Training Program on Realtime 3D Extended Reality.
              </h2>
              <!-- <h4>Dancing in the Metaverse</h4> -->
              <p class="about__description">
                Don&#39;t miss your chance to be part of this exciting
                opportunity! Sign up now to stay updated and secure your spot in
                our highly anticipated training program. Dive into the immersive
                world of XR development and gain the skills you need to succeed
                in this fast-growing industry. Be the first to know when
                enrollment opens and get exclusive access to early-bird
                discounts.
              </p>

              <a
                target="_blank"
                href="https://forms.gle/UN4GGjH74Va6v3aV9"
                class="button"
                >Sign Up</a
              >
            </div>

            <div class="grid">
              <img src="/images/edo6.jpeg" alt="" />
            </div>
          </div>
        </section>

        <section class="about section" id="about">
          <div class="about__container flexer grid">
            <div class="grid">
              <Splide :options="options" aria-label="Vue Splide Example">
                <SplideSlide>
                  <iframe
                    width="100%"
                    height="312"
                    src="https://www.youtube.com/embed/kDeNaRJQDdM"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </SplideSlide>
                <SplideSlide>
                  <iframe
                    width="100%"
                    height="312"
                    src="https://www.youtube.com/embed/ZaBJxWUp5dQ"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </SplideSlide>
              </Splide>
            </div>
            <div class="about__data">
              <h2 class="section__title about__title">
                Greysoft XR Bootcamp (January 2023)
              </h2>
              <p class="about__description">
                Greysoft XR successfully organized a transformative bootcamp in
                January 2023, bringing together a diverse group of 50 passionate
                participants eager to delve into the world of extended reality.
                This immersive program provided hands-on training, expert
                mentorship, and invaluable networking opportunities. The
                bootcamp culminated in an exhilarating hackathon, where
                participants showcased their skills, creativity, and
                problem-solving abilities.
                <q-btn class="read" flat @click="read('bootcamp')">
                  Read More <i class="fa-solid q-ml-sm fa-arrow-right"></i
                ></q-btn>
              </p>
            </div>
          </div>
        </section>
        <CardSlides :images="xrImages" />

        <section class="about section" id="about">
          <div class="about__container grid">
            <div class="about__data">
              <h2 class="section__title about__title">
                Greysoft Pioneers Kaduna State Investment Summit 7.0 in the
                Metaverse
              </h2>
              <p class="about__description">
                In September 2022, Greysoft achieved a remarkable milestone by
                spearheading the transformation of the Kaduna State Investment
                Summit (KADINVEST 7.0) into a groundbreaking virtual experience
                within the metaverse. This pioneering initiative established
                Kaduna state as the first subnational government worldwide to
                host a major investment summit in the metaverse. Leveraging
                cutting-edge extended reality technologies, Greysoft seamlessly
                blended the physical and digital realms to create an immersive
                and interactive platform for participants.
                <q-btn class="read" flat @click="read('kadinvest')">
                  Read More <i class="fa-solid q-ml-sm fa-arrow-right"></i
                ></q-btn>
              </p>
            </div>

            <div class="grid">
              <img src="/images/kad2.jpeg" alt="" />
            </div>
          </div>
        </section>
        <CardSlides :images="kad7" />

        <section class="about section" id="about">
          <div class="about__container flexer grid">
            <div class="grid">
              <img src="/images/oba.jpg" alt="" />
            </div>
            <div class="about__data">
              <h2 class="section__title about__title">
                Unlocking the Future of Extended Reality at Edo Innovates
                Conference
              </h2>
              <p class="about__description">
                In November 2022, the Edo State Government recognized Greysoft
                as a leading force in extended reality (XR) and invited them to
                partner in the prestigious Edo Innovates Conference. The
                conference aimed to showcase the transformative power of XR
                technology and shed light on the multitude of opportunities it
                presents across various sectors. Greysoft&#39;s participation in
                the event included captivating presentations, interactive XR
                demonstrations, and engaging discussions on the future of
                immersive technologies.
                <q-btn class="read" flat @click="read('unlock')">
                  Read More <i class="fa-solid q-ml-sm fa-arrow-right"></i
                ></q-btn>
              </p>
            </div>
          </div>
        </section>
        <CardSlides :images="ulockImages" />
      </div>
      <section class="about section" id="about">
        <div class="about__container container grid">
          <div class="about__data">
            <h2 class="section__title about__title">
              Dancing in the Metaverse
            </h2>
            <!-- <h4>Dancing in the Metaverse</h4> -->
            <p class="about__description">
              Imagine hanging out with your friends without having to leave the
              comfort of your home. Experience an immersive reunion with your
              friends from all over the world; US, Canada, UK, Dubai… name it!
              Greysoft is investing in the future of social connection by
              creating virtual experiences for Africans to get first-hand value
              and enjoyment from the virtual space.
            </p>

            <p class="control">
              For immersive experience you need an oculus headset. Otherwise
              experience it from your computer set using Right-Left-Up-Down
              Arrows.
            </p>
            <a
              target="_blank"
              href="https://app.theoverlay.io/location/globe-theater"
              class="button"
              >Experience</a
            >
          </div>

          <div class="grid">
            <img src="/pe/dancing.jpg" alt="" />
          </div>
        </div>
      </section>
      <section class="about section" id="about">
        <div class="about__container flexer container grid">
          <div class="experience__img grid">
            <img src="/pe/space.jpg" alt="" />
          </div>
          <div class="about__data">
            <h2 class="section__title about__title">
              Experience our Spaceship
            </h2>
            <!-- <h4>Experience our Spaceship</h4> -->
            <p class="about__description">
              Did you ever think for once that you’ll get the opportunity to
              enter into a spaceship in your lifetime? I don’t think so… At
              Greysoft, we are giving you the opportunity to explore our ship. A
              masterpiece of architectural finesse.
            </p>

            <p class="control">
              For immersive experience you need an oculus headset. Otherwise
              experience it from your computer set using Right-Left-Up-Down
              Arrows.
            </p>
            <a
              target="_blank"
              href="https://app.theoverlay.io/location/sky-station"
              class="button"
              >Experience</a
            >
          </div>
        </div>
      </section>

      <section class="about section" id="about">
        <div class="about__container container grid">
          <div class="about__data">
            <h2 class="section__title about__title">Create your own Avatar</h2>
            <!-- <h4>Create your own Avatar</h4> -->
            <p class="about__description">
              We understand that not everyone likes a default avatar for
              traversing the metaverse. With our partners “Ready Player Me” we
              are giving you the power to personalize your avatar.
            </p>
            <a
              target="_blank"
              href="https://readyplayer.me/avatar"
              class="button"
              >Create</a
            >
          </div>

          <div class="experience__img grid">
            <img src="/pe/avatar.png" alt="" />
          </div>
        </div>
      </section>

      <section class="about section" id="about">
        <div class="about__container flexer container grid">
          <div class="experience__img grid">
            <img src="/pe/grey.jpg" alt="" />
          </div>
          <div class="about__data">
            <h2 class="section__title about__title">GreyHobb Virtual Tour</h2>
            <!-- <h4>GreyHobb Virtual Tour</h4> -->
            <p class="about__description">
              Take the time to familiarize with our space where all the creative
              juice flows from. We are currently working on projects to
              implement virtual tourism across Africa as well as virtual
              governance and Real Estate.
            </p>
            <p class="control">
              For immersive experience you need an oculus headset. Otherwise
              experience it from your computer by clicking the targets.
            </p>
            <a
              target="_blank"
              href="https://kuula.co/share/collection/7vGlZ?logo=-1&amp;info=0&amp;fs=1&amp;vr=1&amp;sd=1&amp;initload=0&amp;thumbs=-1"
              class="button"
              >Experience</a
            >
          </div>
        </div>
      </section>
      <section class="about section" id="about">
        <div class="about__container container grid">
          <div class="about__data">
            <h2 class="section__title about__title">VR Games from Greysoft</h2>
            <!-- <h4>VR Games from Greysoft</h4> -->
            <p class="about__description">
              Our first attempt at Unreal Engine was to develop a VR Games Park,
              which consisted of a 2 Player Basketball Game, together with a
              Bull’s Eye Archery in same field. It also included a dragon
              hovering over the field. Archers score points by hitting the
              virtual Bull’s Eye or the dragon while basketball players score
              points by picking up the virtual ball and throwing into the rim.
            </p>
          </div>
          <div class="experience__img grid">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/xMp4_tgXJAM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
      <section class="about section" id="about">
        <div class="about__container flexer container grid">
          <div class="experience__img grid">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/liQ1lUHW3xQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="about__data">
            <h2 class="section__title about__title">
              VR Hand Tracking Interaction
            </h2>
            <!-- <h4>VR Hand Tracking Interaction</h4> -->
            <p class="about__description">
              Our research for more realistic VR experience and interaction is
              unbelievably super promising. Watch our newest model GreyXN to
              follow our progress on the future of Virtual Reality.
            </p>
          </div>
        </div>
      </section>

      <section class="about section" id="about">
        <div class="about__container container grid">
          <div class="about__data">
            <h2 class="section__title about__title">
              VR Tour- Murtala Mohammed Square
            </h2>
            <!-- <h4>VR Hand Tracking Interaction</h4> -->
            <p class="about__description">
              Experience the beauty of virtual tourism from the comfort of your
              home. Greysoft provides a peep into this magnificent edifice right
              in the hear of Kaduna metropolis. Murtala Mohammed Square has seen
              various marmot crowd of people and spectacular events.
            </p>

            <p class="control">
              For immersive experience you need an oculus headset. Otherwise
              experience it from your computer by clicking the targets.
            </p>
            <a
              target="_blank"
              href="https://kuula.co/share/collection/7vbCd?logo=1&info=0&fs=1&vr=1&initload=0&thumbs=-1&alpha=0.90"
              class="button"
              >Experience</a
            >
          </div>

          <div class="experience__img grid">
            <img src="/pe/murita.jpg" alt="" />
          </div>
        </div>
      </section>

      <section class="about addpad section" id="about">
        <div class="about__container flexer container grid">
          <div class="experience__img grid">
            <Splide :options="options" aria-label="Vue Splide Example">
              <SplideSlide>
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/rtLTZUaMSDQ"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </SplideSlide>
              <SplideSlide>
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/V6VsxcVpBVY"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </SplideSlide>
              <SplideSlide>
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/tc_ofY5WFw8"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </SplideSlide>
            </Splide>
          </div>

          <div class="about__data">
            <h2 class="section__title about__title">
              Learn More About The Metaverse
            </h2>
            <!-- <h4>VR Hand Tracking Interaction</h4> -->
            <p class="about__description">
              Everyone is blabbing about the metaverse. But what does this
              future digital world look like? WSJ’s Joanna Stern checked into a
              hotel and strapped on a virtual-reality headset for the day. She
              went to work meetings, hung out with new avatar friends and
              attended virtual shows
            </p>
          </div>
        </div>
      </section>
    </main>

    <div class="follow">
      <h2 class="section__title about__title">Follow our Works</h2>

      <p>
        We have created our metaverse engine “GreyEngine” on which we are
        implementing several out-of-the- box solutions. Our test modules hold
        exciting promises for our future projects which includes; VR Games, AR
        Games, AR for Fashion, VR for Education, VR Tourism, VR Governance, VR
        Real Estate. <br />
        <a class="demo" target="_blank" href="https://conjure.world/"
          >Click to Demo Engine</a
        >
      </p>

      <div class="rowe">
        <div class="columnn">
          <img src="/pe/follow1.jpg" style="width: 100%" />
          <img src="/pe//follow2.jpg" style="width: 100%" />
        </div>
        <div class="columnn">
          <img src="/pe//follow6.jpg" style="width: 100%" />
          <img src="/pe/follow4.jpg" style="width: 100%" />
        </div>
        <div class="columnn">
          <img src="/pe/follow7.jpg" style="width: 100%" />
          <img src="/pe/follow5.jpg" style="width: 100%" />
        </div>
      </div>
    </div>

    <q-dialog v-model="fixed">
      <q-card>
        <q-card-section>
          <div class="text-h6">Read More...</div>
        </q-card-section>

        <q-separator />

        <q-card-section style="max-height: 50vh" class="scroll">
          <p>
            {{ readmore.desc }}
          </p>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <!-- <q-btn flat label="Decline" color="primary" v-close-popup /> -->
          <q-btn flat label="Close" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <Footer />
  </q-page>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
import CardSlides from "components/CardSlides.vue";
import Footer from "../components/FooterMain.vue";
export default {
  components: {
    Footer,
    Splide,
    SplideSlide,
    CardSlides,
  },
  data() {
    return {
      xrImages: [
        {
          img: "/images/xr1.jpeg",
        },

        {
          img: "/images/xr2.jpeg",
        },
        {
          img: "/images/xr3.jpeg",
        },
        {
          img: "/images/xr4.jpeg",
        },
        {
          img: "/images/xr5.jpeg",
        },
        {
          img: "/images/xr6.jpeg",
        },
      ],
      kad7: [
        {
          img: "/images/kad1.jpeg",
        },

        {
          img: "/images/kad2.jpeg",
        },
        {
          img: "/images/kad3.jpeg",
        },
        {
          img: "/images/kad4.jpeg",
        },
        {
          img: "/images/kad5.jpeg",
        },
        {
          img: "/images/kad6.jpeg",
        },
        {
          img: "/images/kad7.jpeg",
        },
        {
          img: "/images/kad8.jpeg",
        },
        {
          img: "/images/kad9.jpeg",
        },
        {
          img: "/images/kad10.jpeg",
        },
        {
          img: "/images/kad11.jpeg",
        },
        {
          img: "/images/kad12.jpeg",
        },
      ],
      ulockImages: [
        {
          img: "/images/edo1.jpeg",
        },

        {
          img: "/images/edo2.jpeg",
        },
        {
          img: "/images/edo3.jpeg",
        },
        {
          img: "/images/edo4.jpeg",
        },
        {
          img: "/images/edo6.jpeg",
        },
        {
          img: "/images/edo5.jpeg",
        },
        {
          img: "/images/edo8.jpeg",
        },
        {
          img: "/images/edo9.jpeg",
        },
      ],
      options: {
        rewind: true,
        arrows: false,
        perPage: 1,
      },
      fixed: false,

      readmore: { desc: "" },
      xrBoot:
        "Greysoft XR successfully organized a transformative bootcamp in January 2023, bringing together a diverse group of 50 passionate participants eager to delve into the world of extended reality. This immersive program provided hands-on training, expert mentorship, and invaluable networking opportunities. The bootcamp culminated in an exhilarating hackathon, where participants showcased their skills, creativity, and problem-solving abilities. The winning teams were rewarded with exciting prizes and the opportunity to secure internships with esteemed industry partners. Additionally, outstanding individuals received exclusive job placement offers, paving the way for promising careers in the XR field. The Greysoft XR Bootcamp set a new standard in industry-focused training, empowering participants to unlock their full potential and embark on a rewarding journey in the realm of extended reality.",
      kadInvest:
        "In September 2022, Greysoft achieved a remarkable milestone by spearheading the transformation of the Kaduna State Investment Summit (KADINVEST 7.0) into a groundbreaking virtual experience within the metaverse. This pioneering initiative established Kaduna state as the first subnational government worldwide to host a major investment summit in the metaverse. Leveraging cutting-edge extended reality technologies, Greysoft seamlessly blended the physical and digital realms to create an immersive and interactive platform for participants. The virtual summit provided attendees with unprecedented access to engage with industry leaders, explore investment opportunities, and foster meaningful connections in a dynamic and futuristic environment. Greysoft&#39;s visionary collaboration with Kaduna state not only showcased the limitless potential of the metaverse but also solidified their position as a trailblazer in shaping the future of events and fostering economic growth.",
      unlock:
        "In November 2022, the Edo State Government recognized Greysoft as a leading force in extended reality (XR) and invited them to partner in the prestigious Edo Innovates Conference. The conference aimed to showcase the transformative power of XR technology and shed light on the multitude of opportunities it presents across various sectors. Greysoft&#39;s participation in the event included captivating presentations, interactive XR demonstrations, and engaging discussions on the future of immersive technologies. By effectively highlighting the potential applications of XR, Greysoft not only inspired conference attendees but also fostered a greater understanding of the impact XR can have on industries such as education, healthcare, tourism, and more. The partnership with the Edo State Government solidified Greysoft&#39;s reputation as an industry leader and their commitment to driving innovation, collaboration, and economic growth through XR technologies.",
    };
  },

  methods: {
    read(data) {
      if (data === "bootcamp") {
        this.readmore.desc = this.xrBoot;
      } else if (data === "kadinvest") {
        this.readmore.desc = this.kadInvest;
      } else {
        this.readmore.desc = this.unlock;
      }

      this.fixed = true;
    },
  },
};
</script>

<style scoped>
p.control {
  color: #e5e5e583;
}

.text {
  color: #fff;
  font-size: 40px;
  font-weight: 700;
  margin-top: 2rem;
  font-style: italic;
}
.metaverse {
  background: #111;
}

.read {
  text-transform: capitalize;
  background: white;
  color: #000000;
  padding: 5px;
  font-size: 12px;
  min-height: auto;
  min-height: auto;
}

.read i {
  margin-left: 0.5rem;
}
.home__data {
  text-align: left;
}

.home__data p {
  color: #fff;
  font-size: 1.5rem;
  max-width: 600px;
  margin-top: 1rem;
}

.main {
  overflow: unset;
}

.home__data small {
  color: #fff;
}

.about__description {
  margin-bottom: var(--mb-1);
  line-height: 1.5;
  font-weight: 300;
  font-size: 16px;
  color: #fff;
}

.section__title {
  font-size: 1.7rem;
  color: #8d345a;
  text-align: left;
  margin-bottom: 0.5rem;
  line-height: 1.3;
  font-weight: 500;
}

.about__data {
  text-align: left;
}
@media screen and (max-width: 912px) {
  .about {
    padding-top: 3rem;
  }

  /* .section__title {
    text-align: center;
  } */
}
@media screen and (min-height: 721px) {
  .home__container,
  .home__img {
    height: 740px;
  }
}

.home__img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90vh;
  object-fit: cover;
  /* object-position: 40%; */
  object-position: 30% 40%;
  /* object-position: 9%; */
}
.home::before {
  content: "";
  position: absolute;
  background-color: #000;
  background-blend-mode: multiply;
  opacity: 0.55;
  top: 0;
  right: 0;
  width: 100%;
  height: 90vh;
  z-index: 2;
}
@media screen and (min-height: 721px) {
  .home::before {
    content: "";
    position: absolute;
    background: #000000;
    background-blend-mode: multiply;
    opacity: 0.75;
    top: 0;
    right: 0;
    width: 100%;
    height: 90vh;
  }
}
@media screen and (min-width: 960px) {
  .home__data {
    align-self: flex-end !important;
    justify-self: flex-start;
  }
}

.home__data-title {
  font-size: var(--biggest-font-size);
  font-weight: var(--font-medium);
  margin-bottom: 0;
}

.follow .section__title {
  text-align: center;
}

.follow p {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  font-weight: 400;
  color: #fff;
  line-height: 1.6;
}
.rowe {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  padding: 0 4px;
  justify-content: center;
  margin-top: 1rem;
}
.columnn {
  -ms-flex: 25%; /* IE10 */
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
}

.columnn img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
  transition: 0.5s ease-in-out;
}
.columnn img:hover {
  transform: scale(1.1);
}
.home__container {
  position: relative;
  height: calc(80vh - var(--header-height));
  align-content: center;
  row-gap: 0rem;
  z-index: 10;
}

.splide {
  margin-bottom: 1rem;
}

@media screen and (min-width: 960px) {
  .home__container {
    height: 90vh;
    grid-template-rows: 0fr 0fr;
    margin-top: 0rem;
  }
}
@media screen and (min-width: 1024px) {
  .home__container {
    grid-template-rows: 0fr 0fr;
    margin: 2rem auto 0;
  }
}
/* @media screen and (max-width: 800px) {
  .section__title {
    text-align: center;
  }
} */
@media screen and (max-width: 500px) {
  .home__container {
    position: relative;
    height: 70vh;
    align-content: center;
    row-gap: 0rem;
    z-index: 10;
  }
  .home::before {
    height: 70vh;
  }
  .home__img {
    height: 70vh;
    object-position: 55% 40%;
  }
  .columnn {
    flex: 100%;
    max-width: 100%;
  }
  .about {
    margin-top: 3rem !important;
  }
  .about {
    padding-top: 0rem;
  }

  .text {
    margin-top: 2rem;
    font-size: 30px;
  }

  .home__data-title {
    font-size: 30px;
    margin-top: 3rem;
  }

  .home__data p {
    font-size: 1rem;
  }

  .about.first {
    margin-top: 2rem !important;
  }
}
</style>
