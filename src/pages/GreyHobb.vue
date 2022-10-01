<template>
  <q-page>
    <main class="main">
      <!-- === HOME === -->
      <section class="home" id="home">
        <img src="/pe//unsplash_FPQlXQtjkqU.png" alt="" class="home__img" />
        <div class="home__container container grid">
          <div class="home__data">
            <h1 class="home__data-title">GreyHobb</h1>

            <p class="home__data-title-d">Co-working and Creative Hub</p>
          </div>
        </div>
      </section>

      <section class="about section" id="tour">
        <div class="about__container flexer container grid">
          <div class="about__img" data-aos="zoom-in">
            <img src="/pe/pexels-tima-miroshnichenko-5685821.jpg" alt="" />
          </div>
          <div class="about__data">
            <h2 class="section__title about__title">
              An Ecosystem of Creative and Innovative Minds!
            </h2>
            <p class="about__description">
              We provide conducive and state-of-the-art co-working environment
              for our users, which is inclusive of 24/7 high speed internet
              service, electricity, open work area, access to kitchen and dining
              gazebos, conference rooms, security assurance (police covering),
              integrated taxing system, funding opportunities, incubation and
              acceleration programs and access to professionals in the
              technological and creative space.
            </p>
          </div>
        </div>
      </section>

      <section class="about section" id="tour">
        <div class="about__container container grid">
          <div class="about__data">
            <h2 class="section__title about__title">Co-working</h2>
            <p class="about__description">
              Our Co-working space embodies tech-driven startups which have
              access to our incubation and acceleration programs. The creative
              arm covers creative content development, fashion, films, art,
              music and general traditional/cultural content.
            </p>
            <!-- <a href="#" class="button"
              >Join us <i class="fas fa-arrow-right"></i
            ></a> -->
          </div>
          <div class="about__img" data-aos="zoom-in">
            <img src="/pe/pexels-kindel-media-6773652 (1).jpg" alt="" />
          </div>
        </div>
      </section>
      <section class="about section" id="tour">
        <div class="about__container flexer container grid">
          <div class="about__img" data-aos="zoom-in">
            <img src="/pe/unsplash_34GZCgaVksk.png" alt="" />
          </div>
          <div class="about__data">
            <h2 class="section__title about__title">Our Goal</h2>
            <p class="about__description">
              Our goal at the hub is to bring people together from all
              backgrounds, with a wide range of skills and education to foster
              an ecosystem of networking and knowledge-sharing, so they can
              mutually benefit and learn from each other.
            </p>
            <!-- <a href="#" class="button"
              >Join us <i class="fas fa-arrow-right"></i
            ></a> -->
          </div>
        </div>
      </section>
      <section class="about section" id="tour">
        <div class="about__container container grid">
          <div class="about__data">
            <h2 class="section__title about__title">GreyHobb</h2>
            <p class="about__description">
              At GreyHobb, students, developers, entrepreneurs, content
              creators, digital marketers etc. are welcome to join a growing
              ecosystem with a view to making life changing connections that can
              transform an idea into a profitable venture.
            </p>
            <!-- <a href="#" class="button"
              >Join us <i class="fas fa-arrow-right"></i
            ></a> -->
          </div>

          <div class="about__img" data-aos="zoom-in">
            <img src="/pe/unsplash_wT-xJyLHcNA.png" alt="" />
          </div>
        </div>
      </section>

      <hr class="q-my-xl" />

      <section class="about section" id="member">
        <div class="about__container container grid">
          <div class="about__img" data-aos="zoom-in">
            <img src="/pe/9970.jpg" alt="" />
          </div>

          <div class="about__data">
            <h2 class="section__title about__title">Become a member</h2>
            <p class="about__description">
              Becoming a member of this formidable community comes with a
              truckload of advantages. Asides 24hr access to internet and
              electricity, members have access to a community of innovators
              where the solution to any challenge is only "an ask" away. An
              ecosystem of creative minds - imagine a situation where your
              payment gateway powers my app, amazing right?
            </p>
            <ul>
              <li>+ Membership Card</li>
              <li>+ Security</li>
              <li>+ Growing Global Community</li>
              <li>+ Greyhobb office address</li>
            </ul>
            <div class="disclaimer">
              <h5>Disclaimer</h5>
              <p>Do not use our office address on CAC incorporation papers</p>
            </div>
          </div>
        </div>
      </section>

      <section class="our-plans container">
        <h2>Select a Plan</h2>
        <Splide :options="options" aria-label="Vue Splide Example">
          <SplideSlide>
            <div class="swiper-slide swiper-card">
              <h2>Byte Plan</h2>
              <ul>
                <li>+ Access to space</li>
                <li>+ 24hr Internet</li>
                <li>+ 24hr Electricity</li>
                <li>+ Admin</li>
              </ul>
              <h4>#15k/Month</h4>
              <a href="">Subscribe</a>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="swiper-slide swiper-card">
              <h2>Kilobyte Plan</h2>
              <ul>
                <li>+ Access to space</li>
                <li>+ 3X access to private office / conference</li>
                <li>+ 24hr Internet</li>
                <li>+ 24hr Electricity</li>
                <li>+ Admin</li>
              </ul>
              <h4>#30k/Month</h4>
              <a href="">Subscribe</a>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="swiper-slide swiper-card">
              <h2>Megabyte Plan</h2>
              <ul>
                <li>+ Access to space</li>
                <li>+ 5X access to private office / conference</li>
                <li>+ 24hr Internet</li>
                <li>+ 24hr Electricity</li>
                <li>+ Admin</li>
              </ul>
              <h4>#45k/Month</h4>
              <a href="">Subscribe</a>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="swiper-slide swiper-card">
              <h2>Gigabyte Plan</h2>
              <ul>
                <li>+ Access to space</li>
                <li>+ Unlimited access to private office / conference</li>
                <li>+ 24hr Internet</li>
                <li>+ 24hr Electricity</li>
                <li>+ Admin</li>
              </ul>
              <h4>#75k/Month</h4>
              <a href="">Subscribe</a>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="swiper-slide swiper-card">
              <h2>Terabyte Plan</h2>
              <ul>
                <li>+ Dedicated office</li>
                <li>+ Access to all spaces / conference room</li>
                <li>+ 24hr Internet</li>
                <li>+ 24hr Electricity</li>
                <li>+ Admin</li>
                <li>+ Training Room (One time access)</li>
              </ul>
              <h4>#99.9kk/Month</h4>
              <a href="">Subscribe</a>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="swiper-slide swiper-card">
              <h2>Virtual Office Plan</h2>
              <p>
                We reserve a virtual office for you where your clients can send
                their mails and correspondences. Our business relations officer
                is well trained to handle high level correspondencs which are
                filed and reported appropriately to you online.
              </p>
              <h4>#35k/Month</h4>
              <a href="">Subscribe</a>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="swiper-slide swiper-card">
              <Splide :options="options_small" aria-label="Vue Splide Example">
                <SplideSlide>
                  <img src="/pe/tees1.jpg" alt="" />
                </SplideSlide>
                <SplideSlide>
                  <img src="/pe/tee2.jpg" alt="" />
                </SplideSlide>
                <SplideSlide>
                  <img src="/pe/teees.jpg" alt="" />
                </SplideSlide>
              </Splide>

              <h4>Branded Tees available</h4>
              <h4>#5k only</h4>

              <a href="">Place an Order</a>
            </div>
          </SplideSlide>
        </Splide>

        <div class="note container">
          <h4>Note</h4>
          <ul>
            <li>
              - All Subscribed members are eligible to use the training hall for
              2hours at #30,000.
            </li>
            <li>
              - Request for private Office/Conference rooms should be made
              36hours to time of intended use for appropriate booking.
            </li>
            <li>- Our code of conduct applies to all subscribers.</li>
          </ul>
        </div>
      </section>

      <section class="codess" id="codes">
        <div class="codess container">
          <h2>Code of Conduct</h2>
          <p class="lead">
            GreyHobb is dedicated to providing an ethical, safe, peaceful,
            secure and enjoyable working environment for everyone; therefore,we
            have adopted the following codes of conduct to address issues
            relating to harassment, respect of workspace, cleanliness and noise
            level.
          </p>

          <div class="codes-wrap">
            <div class="code">
              <div class="icon">
                <img src="/pe/harassment.png" alt="" />
              </div>

              <div class="code-detail">
                <h3>Harassment</h3>
                <p>
                  Harassment includes, but is not limited to, reasonably
                  offensive verbal comments related to gender, disability,
                  physical appearance, body size, ethnicity or religion; sexual
                  images in public spaces; deliberate intimidation; stalking;
                  following; harassing photography or recording; sustained
                  disruption of talks or other events; inappropriate physical
                  contact; and unwelcome sexual attention. Impact trumps
                  intention. Members or co-workers are encouraged to contact the
                  workspace manager, even if only witnessing harassment to
                  another. Members asked to stop any harassing behavior are
                  expected to comply immediately.
                </p>
              </div>
            </div>

            <div class="code">
              <div class="icon">
                <img src="/pe/neatness.png" alt="" />
              </div>

              <div class="code-detail">
                <h3>Neatness</h3>
                <p>
                  Harassment includes, but is not limited to, reasonably
                  offensive verbal comments related to gender, disability,
                  physical appearance, body size, ethnicity or religion; sexual
                  images in public spaces; deliberate intimidation; stalking;
                  following; harassing photography or recording; sustained
                  disruption of talks or other events; inappropriate physical
                  contact; and unwelcome sexual attention. Impact trumps
                  intention. Members or co-workers are encouraged to contact the
                  workspace manager, even if only witnessing harassment to
                  another. Members asked to stop any harassing behavior are
                  expected to comply immediately.
                </p>
              </div>
            </div>

            <div class="code">
              <div class="icon">
                <img src="/pe/etiquettes.png" alt="" />
              </div>

              <div class="code-detail">
                <h3>Etiquettes</h3>
                <p>
                  Harassment includes, but is not limited to, reasonably
                  offensive verbal comments related to gender, disability,
                  physical appearance, body size, ethnicity or religion; sexual
                  images in public spaces; deliberate intimidation; stalking;
                  following; harassing photography or recording; sustained
                  disruption of talks or other events; inappropriate physical
                  contact; and unwelcome sexual attention. Impact trumps
                  intention. Members or co-workers are encouraged to contact the
                  workspace manager, even if only witnessing harassment to
                  another. Members asked to stop any harassing behavior are
                  expected to comply immediately.
                </p>
              </div>
            </div>

            <div class="code">
              <div class="icon">
                <img src="/pe/photo.png" alt="" />
              </div>

              <div class="code-detail">
                <h3>Photo Policy</h3>
                <p>
                  All event photographers will seek to obtain permission for
                  reposting. Members are free to ask that photographs of
                  themselves are withheld from any promotional materials. to
                  maintain privacy and personal boundaries, all members must ask
                  before taking any photographs that are clearly meant to
                  highlight a small group or single person.
                </p>
              </div>
            </div>

            <div class="code">
              <div class="icon">
                <img src="pe/enforcement.png" alt="" />
              </div>

              <div class="code-detail">
                <h3>Enforcement</h3>
                <p>
                  If a members defaults in any of the above stated conducts, our
                  Space Managers retain the right to take action in order to
                  maintain a welcoming environment for other members. This
                  includes warnings, expulsion from the environment without a
                  refund, or other measures deemed appropriate. Space Managers
                  are authorized to address anything designed to, or with the
                  clear impact of, making the environment hostile for any
                  member. We expect members to follow these rules at our
                  co-working space and social activities, and we encourage
                  members to follow these guidelines outside of GreyHobb.
                </p>
              </div>
            </div>

            <div class="code">
              <div class="icon">
                <img src="/pe/reporting.png" alt="" />
              </div>

              <div class="code-detail">
                <h3>Reporting</h3>
                <p>
                  If someone makes you or anyone else feel unsafe or unwelcome,
                  we encourage you to report it as soon as possible. Space
                  Managers will be identifiable by their attire or badges, and
                  they have been instructed on how to respond to all issues. All
                  claims are taken seriously and will be handled by a dedicated
                  staff.
                </p>
              </div>
            </div>
            <div class="code">
              <div class="icon">
                <img src="/pe/meditation.png" alt="" />
              </div>

              <div class="code-detail">
                <h3>Mediation</h3>
                <p>
                  If you feel you have been falsely or unfairly accused of
                  violating this Code of Conduct, you should notify our Space
                  Manager with a concise description of your grievance. Your
                  grievance will be handled in accordance with GreyHobb’s
                  existing governance policies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </q-page>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

import Footer from "../components/FooterMain.vue";

export default {
  components: {
    Footer,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      options: {
        rewind: true,
        arrows: false,
        autoplay: true,

        perPage: 3,
        breakpoints: {
          2700: {
            perPage: 5,
          },
          2400: {
            perPage: 4,
          },
          1400: {
            perPage: 3,
          },

          1000: {
            perPage: 2,
          },
          700: {
            perPage: 1,
          },
        },
      },
      options_small: {
        rewind: true,
        autoplay: true,
        arrows: false,
        perPage: 2,
        breakpoints: {
          800: {
            perPage: 2,
          },
          800: {
            perPage: 1,
          },
        },
      },
    };
  },
};
</script>

<style scoped>
.home__data {
  text-align: center;
}
@media screen and (min-width: 960px) {
  .home__data {
    align-self: flex-end !important;
    justify-self: center;
  }
}

.home__data-title {
  font-size: var(--biggest-font-size);
  font-weight: var(--font-medium);
  margin-bottom: 0;
}

.codess {
  text-align: center;
  margin-top: 4rem;
}

.codess h2 {
  font-size: var(--h1-font-size);
  font-weight: 600;
  color: #ab042c;
}

.codess p.lead {
  max-width: 700px;
  text-align: center !important;
  margin: 1rem auto;
}
.codes-wrap {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin: 2rem 0;
  place-items: center;
}

.codes-wrap .code {
  display: flex;
  justify-content: space-between;
}
.codes-wrap .code:nth-child(1) {
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  border: 1px solid #8d345a;
  box-shadow: 0px 5px 17px rgba(0, 0, 0, 0.25);
  padding: 1rem;
}
.codes-wrap .code:nth-child(1) .code-detail h3 {
  color: #8d345a;
}
.codes-wrap .code:nth-child(2) {
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  border: 1px solid #00dffa;
  box-shadow: 0px 5px 17px rgba(0, 0, 0, 0.25);
  padding: 1rem;
}

.codes-wrap .code:nth-child(2) .code-detail h3 {
  color: #00dffa;
}
.codes-wrap .code:nth-child(3) {
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  border: 1px solid #ff6464;
  box-shadow: 0px 5px 17px rgba(0, 0, 0, 0.25);
  padding: 1rem;
}
.codes-wrap .code:nth-child(3) .code-detail h3 {
  color: #ff6464;
}

.codes-wrap .code:nth-child(4) {
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  border: 1px solid #6854fc;
  box-shadow: 0px 5px 17px rgba(0, 0, 0, 0.25);
  padding: 1rem;
}

.codes-wrap .code:nth-child(4) .code-detail h3 {
  color: #6854fc;
}
.codes-wrap .code:nth-child(5) {
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  border: 1px solid #e08c29;
  box-shadow: 0px 5px 17px rgba(0, 0, 0, 0.25);

  padding: 1rem;
}

.codes-wrap .code:nth-child(5) .code-detail h3 {
  color: #e08c29;
}
.codes-wrap .code:nth-child(6) {
  display: flex;
  justify-content: space-between;
  background: #ffffff;

  border: 1px solid #facc07;
  box-shadow: 0px 5px 17px rgba(0, 0, 0, 0.25);
  padding: 1rem;
}

.codes-wrap .code:nth-child(6) .code-detail h3 {
  color: #facc07;
}
.codes-wrap .code:nth-child(7) {
  display: flex;
  justify-content: space-between;
  background: #ffffff;

  border: 1px solid #00dffa;
  box-shadow: 0px 5px 17px rgba(0, 0, 0, 0.25);
  padding: 1rem;
}

.codes-wrap .code:nth-child(7) .code-detail h3 {
  color: #00dffa;
}

.codes-wrap .code .code-detail {
  margin-left: 2rem;
  text-align: left;
}

.codes-wrap .code .icon img {
  object-fit: contain;
  width: 500px;
}

.codes-wrap .code .code-detail h3 {
  color: var(--title-color);
  font-size: var(--h2-font-size);
  font-weight: 300;
  line-height: 1.1666em;
  margin-bottom: 0.75rem;
}
.codes-wrap .code .code-detail p {
  font-size: var(--normal-font-size);
  font-weight: 400;
  line-height: 1.617em;
}

.our-plans {
  margin-top: 4rem;
}
.our-plans h2 {
  text-align: center;
  margin-bottom: 1rem;
  color: var(--text-color);
  font-size: var(--h1-font-size);
}

.swiper {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: visible;
  list-style: none;
  padding: 0;
  z-index: 1;
  /* width: 90%;
  margin: 0 auto; */
}
.swiperr .swiper-slide {
  width: 100% !important;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  /* -webkit-align-items: center; */
}
.swiper-paginationn .swiper-pagination-bullet-active {
  color: var(--text-color);
}
/* .swiper-wrapper {
  transform: none !important;
  transition-duration: 0;
} */

.swiper-card {
  background-color: #ffff;
  color: var(--text-color);
  padding: 2rem 1rem;
  border: 2px solid rgba(77, 77, 77, 0.18);
  min-height: 350px;
  /* width: 100% !important; */
  width: 300px !important;
  box-shadow: 2px 10px 10px rgba(197, 190, 190, 0.97);
  transition: all 0.3s ease-in-out;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  padding: 0.75rem;
  overflow: hidden;
  margin: 0 1rem;
  /* width: 300pz !important; */
}

@media (max-width: 400px) {
  .swiper-card {
    width: 100% !important;
  }
}

.swiper-card img {
  width: 100%;
  height: 166px;
  /* min-height: 200px; */
  object-fit: contain;
}

.swiper-card h4,
.swiper-card p {
  margin: 0.75rem;
}

.swiper-card h2 {
  margin-bottom: 1rem;
  color: var(--text-color);
  font-size: var(--normal-font-size);
  padding: 1rem 0;
}
.swiper-card p {
  font-size: var(--small-font-size);
}
.swiper-card ul,
.swiper-card p {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  min-height: 200px;
  /* margin-top: 0.75rem; */
}
.swiper-card li {
  margin: 0.35rem;
  color: var(--text-color);
  font-size: var(--small-font-size);
}
.swiper-card h4 {
  color: var(--text-color);
  font-size: var(--small-font-size);
  text-align: left;
}

.swiper-card a {
  text-decoration: none;
  padding: 0.55rem;
  border-radius: 8px;
  width: 95%;
  /* background-color: #ff6464 !important; */
  background: linear-gradient(
    243.56deg,
    rgba(141, 53, 74, 0.94) 33.39%,
    rgba(200, 2, 50, 0.6768) 113.06%
  );
  /* margin: 1rem 0; */
  display: inline-block;
  color: #ffff;
  border-radius: 8px;
  /* margin: 0.75rem; */
}

.swiper-container-horizontal > .swiper-pagination-bullets,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  bottom: -30px;
  /* left: 0; */
  width: 100%;
}

.swiper-pagination-bullet-active {
  opacity: 1;
  background: linear-gradient(
    243.56deg,
    rgba(141, 53, 74, 0.94) 33.39%,
    rgba(200, 2, 50, 0.6768) 113.06%
  );
}

/* new swipe */

.note {
  margin-top: 4rem;
  background-color: #ffff;
  color: var(--text-color);
  padding: 1rem;
  border: 2px solid rgba(77, 77, 77, 0.18);
  box-shadow: 2px 10px 10px rgba(197, 190, 190, 0.97);
  transition: all 0.3s ease-in-out;
  border-radius: 8px;
}
.note li {
  margin: 1rem 0;
}
.note h4 {
  color: #ab042c;
}
</style>
