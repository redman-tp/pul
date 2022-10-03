<template>
  <main>
    <article>
      <!--
        - #HERO
      -->

      <section id="home" class="hero">
        <div class="container">
          <div class="hero-banner">
            <q-carousel
              autoplay
              no
              animated
              v-model="slide"
              navigation
              infinite
            >
              <q-carousel-slide :name="1" img-src="/pe/emmanuel.png">
                <div class="quotes">
                  <div>
                    How far <span class="chat">@gami</span>, u get the job?
                  </div>
                  <transition
                    appear
                    name="fade"
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                  >
                    <div>You no give us gist</div>
                  </transition>
                  <div>How was the interview?</div>
                </div>
              </q-carousel-slide>
              <q-carousel-slide :name="2" img-src="/pe/mariya.png">
                <div class="quotes">
                  <div>
                    Wow, so <span class="chat">@gami</span> had an interview?
                  </div>
                  <div>Abeg give us gist</div>
                </div>
              </q-carousel-slide>
              <q-carousel-slide :name="3" img-src="/pe/joshchief.png">
                <div class="quotes">
                  <div>Wait, she’s offline.</div>
                  <div>Make i call her</div>
                </div>
              </q-carousel-slide>
              <q-carousel-slide :name="5" img-src="/pe/helen.png">
                <div class="quotes">
                  <div>lol, Yes i did ooo</div>
                  <div>... and it was awesome😀</div>
                  <div>
                    Honestly guys i am glad to be <br />
                    part of the HOTCAKE community
                  </div>
                </div>
              </q-carousel-slide>
              <q-carousel-slide :name="4" img-src="/pe/bilal.png">
                <div class="quotes">
                  <div>
                    Omoh <span class="chat">@gami</span> just finished her
                    <br />
                    course last week
                  </div>
                  <div>
                    ...and she’s bagged a job in less <br />
                    than four days
                  </div>
                  <div>Sweet!!!</div>
                </div>
              </q-carousel-slide>

              <q-carousel-slide :name="6" img-src="/pe/mike.png">
                <div class="quotes">
                  <div>
                    There’s a reason we are <br />
                    called the HOTCAKES 😀
                  </div>
                  <div>Na them dey rush us</div>
                </div>
              </q-carousel-slide>
            </q-carousel>
          </div>

          <!-- <figure class="hero-banner">
            <img
              src="/pe/hero-banner.png"
              alt="A young lady sits, holding a pen and a notebook."
            />
          </figure> -->

          <div class="hero-content">
            <h1 class="h1 hero-title">
              <span class="hello">Hello</span> <br />
              Comrade
            </h1>

            <p class="section-text">
              We know getting a job is hard; <br />
              not for the <span class="text-weight-bold">hotcakes</span>.
            </p>

            <a
              target="_blank"
              href="https://t.me/+CEhAxL_QHaU3MGJk"
              class="btn btn-primary"
            >
              Join the Hotcake Community
            </a>
          </div>
        </div>
        <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,64L48,85.3C96,107,192,149,288,149.3C384,149,480,107,576,122.7C672,139,768,213,864,224C960,235,1056,181,1152,138.7C1248,96,1344,64,1392,48L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg> -->
      </section>

      <div id="about" class="pos_relative">
        <section class="hotcake">
          <svg
            class="fillColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#100F21"
              fill-opacity="1"
              id="fillColor"
              d="M0,192L48,192C96,192,192,192,288,165.3C384,139,480,85,576,69.3C672,53,768,75,864,106.7C960,139,1056,181,1152,165.3C1248,149,1344,75,1392,37.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#0099ff"
              class="fillColor"
              id="fillColor"
              fill-opacity="1"
              d="M0,192L48,192C96,192,192,192,288,165.3C384,139,480,85,576,69.3C672,53,768,75,864,106.7C960,139,1056,181,1152,165.3C1248,149,1344,75,1392,37.3L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg> -->
          <!-- <svg
            class="first_svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#fff"
              fill-opacity="1"
              d="M0,192L40,192C80,192,160,192,240,165.3C320,139,400,85,480,64C560,43,640,53,720,64C800,75,880,85,960,117.3C1040,149,1120,203,1200,192C1280,181,1360,107,1400,69.3L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            ></path>
          </svg> -->

          <div class="hotcake_det container">
            <h2>
              <div class="what">What’s the</div>
              Hotcake Community?
            </h2>
            <p class="top">
              Techies and creatives combine; you're welcome to join the
              <span class="text-weight-bold">Hotcakes</span>
              regardless of what type of skill you want to learn.
            </p>
            <p class="down">
              Hotcake is a community space led by Greysoft Technologies for
              people who are looking for a rewarding job and the training to get
              them hired. Getting a job ike most things, can be a solitary
              endeavor, but if we can find the right support network, we can
              make it easier, more productive and more joyful. <br /><br />

              Here’s the opportunity: Stop talking about wanting to become a
              Product Designer, Fullstack Developer, Data Scientist, Digital
              Marketer and become one instead. Access training programs, one on
              one interview prep coaching and, free webinars. Simply learn,
              build your portfolio, get peer feedback, become a baked hot and
              attractive talent in the job market.
            </p>

            <div class="play">
              <button class="play-btn">
                <img src="/pe/learn.png" alt="" />
                <!-- <i class="fa-duotone fa-play"></i> -->
              </button>
            </div>
          </div>

          <div class="cur2">
            <svg
              class="second_svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#fff"
                fill-opacity="1"
                d="M0,192L40,192C80,192,160,192,240,165.3C320,139,400,85,480,64C560,43,640,53,720,64C800,75,880,85,960,117.3C1040,149,1120,203,1200,192C1280,181,1360,107,1400,69.3L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
              ></path>
            </svg>
          </div>
        </section>
        <section id="service" class="hotcake_courses">
          <h3>Our HotCake Courses</h3>
          <Ourstaff />
        </section>

        <section class="join">
          <div class="join_hold">
            <div class="joi">
              <h2>Join the Hotcakes.</h2>
              <div class="begin">Let the baking begin</div>
            </div>

            <div class="join_det">
              <div class="joins">
                <i class="fa-duotone fa-check"></i>
                <span>Professional Courses</span>
              </div>
              <div class="joins">
                <i class="fa-duotone fa-check"></i>
                <span>One-On-One Coaching</span>
              </div>
              <div class="joins">
                <i class="fa-duotone fa-check"></i>
                <span>Job Opportunities</span>
              </div>
            </div>

            <div class="join_now">
              <a target="_blank" href="https://t.me/+CEhAxL_QHaU3MGJk"
                >JOIN NOW</a
              >
            </div>
          </div>
        </section>
      </div>
    </article>
  </main>
  <Edufooter id="contact" />
</template>

<script>
import { ref } from "vue";
import Ourstaff from "../components/Ourstaff.vue";
import Edufooter from "../components/Edufooter.vue";
export default {
  components: {
    Edufooter,
    Ourstaff,
  },
  setup() {
    const beforeEnter = (el) => {
      el.style.transform = "translateY(-60px)";
      el.style.opacity = 0;
    };
    const enter = (el, done) => {
      el.style.transform = "translateY(0px)";
      el.style.opacity = 1;
      el.style.transition = "all 1s ease-in";
    };
    const afterEnter = (el) => {
      console.log("after enter");
    };
    return {
      afterEnter,
      enter,
      beforeEnter,
      slide: ref(1),
    };
  },

  methods: {
    generator() {
      let hotcake_section = document.querySelector(".hotcake");
      // let fillColor = document.querySelector(".fillColor");
      let fillColor = document.getElementById("fillColor");
      console.log((fillColor.style.fill = "fill"));
      const colors = [
        "#100F21",
        "#100F21",
        "#590114",
        "#16171C",
        "#002369",
        "#651158",
      ];

      const random_color = colors[Math.floor(Math.random() * colors.length)];
      console.log(random_color);
      hotcake_section.style.backgroundColor = random_color;
      fillColor.style.fill = random_color;
      // setInterval(() => {
      //   hotcake_section.style.backgroundColor = random_color;
      //   console.log(random_color);
      // }, 1000);
    },
  },

  created() {
    setInterval(() => this.generator(), 5000);
  },
};
</script>

<style scoped>
.btn {
  color: var(--white);
  font-family: var(--ff-poppins);
  padding: 20px 30px;
  border-radius: 15px;
  transition: var(--transition);
}

.btn-secondary {
  background: var(--rich-black-fogra-29);
  box-shadow: inset 0 -10px 20px hsl(240, 8%, 37%);
}

.btn-secondary:is(:hover, :focus) {
  background: var(--gambog);
  box-shadow: 5px 10px 30px hsla(39, 100%, 50%, 0.3);
}

.btn-primary {
  background: #0aafe3;
  border-radius: 10px;
  width: 300px;
  /* box-shadow: 5px 10px 30px hsla(39, 100%, 50%, 0.3); */
  box-shadow: 5px 10px 30px rgba(10, 175, 227, 0.7);
}

.btn-primary:is(:hover, :focus) {
  background: var(--gambog);
  transform: translateY(-3px);
}

.h1,
.h2,
.h3 {
  font-family: var(--ff-poppins);
  color: var(--rich-black-fogra-29);
}

.h1 {
  font-size: var(--fs-1);
  line-height: 1.1;
  font-weight: var(--fw-700);
}

.h2 {
  font-size: var(--fs-1);
  line-height: 1.2;
}

.h3 {
  color: var(--onyx);
  font-size: var(--fs-3);
  line-height: 1.2;
}

.section-text,
.card-text,
.card-subtitle {
  font-family: var(--ff-rubik);
  color: var(--sonic-silver);
  font-size: var(--fs-5);
  line-height: 1.8;
}

.section-text {
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 122%;
  margin: 2rem 0 1rem;
  color: #051234;
}

.vector-line {
  display: none;
}

.hotcake {
  background: hsl(243, 38%, 9%);
  position: relative;
  padding: 0rem 0 16rem;
}
/* .hotcake::before {
  content: "";
  position: absolute;
  top: 13%;
  left: 50%;
  height: 10vh;
  width: 100vh;
  background: #fff;
  border-radius: 50%;
  transform-origin: bottom;
  transform: translateX(-50%) scale(4);
} */

.first_svg {
  position: absolute;
  top: 0;
}
.second_svg {
  position: absolute;
  bottom: 0;
}

.hotcake h2 {
  font-style: normal;
  font-weight: 500;
  font-size: 55px;
  line-height: 122%;
  text-align: center;
  color: #ffffff;
  padding: 1rem 0 2rem;
  position: relative;
}

.quotes {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  z-index: 100;
  right: 0%;
}

.quotes .chat {
  font-weight: 400;
  font-size: 16.418px;
  line-height: 19px;
  letter-spacing: 0.05em;
  color: #0008c5;
}

.quotes div {
  background: #ebebeb;
  border-radius: 25.6531px;
  padding: 0.5rem;
  font-style: normal;
  font-weight: 400;
  font-size: 14.418px;
  line-height: 19px;
  letter-spacing: 0.05em;
  color: #303030;
  text-align: left;
  /* max-width: 150px; */
}
@media (max-width: 1025px) {
  .quotes div {
    font-size: 12.418px;
  }
}

.fillColor {
  position: absolute;
  top: -13%;
}
.hotcake p {
  font-style: normal;
  font-weight: 300;
  font-size: 18.81px;
  line-height: 122%;
  text-align: center;
  color: #ffffff;
  max-width: 1000px;
  margin: 0 auto;
}
.hotcake_det {
  padding-bottom: 19rem;
}
.slide-fade-enter-active {
  transition: all 3s ease;
}
.slide-fade-leave-active {
  transition: all 2.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
.hotcake_courses {
  width: 80%;
  margin: -40% auto 0;
}

@media (max-width: 1025px) {
  .hotcake_courses {
    width: 80%;
    margin: -48% auto 0;
  }
}

.hotcake_courses h3 {
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 122%;
  text-align: center;
  color: #ffffff;
  position: relative;
  padding: 1.5rem 0;
}

.play {
  position: relative;
  display: grid;
  place-items: center;
}
.play .play-btn {
  position: relative;
  width: 100px;
  height: 100px;
  background: transparent;
  border-radius: 50%;
  animation: zoom;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
.play-btn img {
  margin: 0;
  font-size: 25px;
}

@keyframes zoom {
  0% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1.1);
  }
}
/* .play .play-btn::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #0aafe3;
  border: 1px solid #ffc702;
  animation: pulseAnim 2s forwards infinite;
} */

.join {
  background: url("/pe/mul.png") no-repeat center/cover;
  position: relative;
  height: 80vh;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.join::before {
  position: absolute;
  content: "";
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.84);
}

.join_hold {
  position: relative;
  z-index: 10;
  display: flex;
  gap: 3.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.join_hold .begin {
  font-weight: 400;
  font-size: 35.418px;
  line-height: 122%;
  text-align: center;
  margin-top: 0.7rem;
  color: #ffffff;
}

.join .joins {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.join .joins i {
  background: #00ab30;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.join h2 {
  color: #fff;
  text-align: center;
}
.join .join_det {
  color: #fff;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}
.join .join_det span {
  display: flex;
  align-items: center;
}
/* .join_now {
  margin-top: 4rem;
} */
.join .join_now a {
  padding: 27.5406px 39.5896px;
  width: 185.18px;
  height: 70.08px;
  background: #0aafe3;
  border-radius: 10px;
  display: inline-block;
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

/*-----------------------------------*\
 * #HERO
\*-----------------------------------*/

.hero {
  padding: 150px 0 0;
  position: relative;
}
.hero svg {
  position: absolute;
  width: 100%;
  z-index: 1;
}

.hero-banner {
  margin-bottom: 30px;
  width: 100%;
}

.hero-banner img {
  width: 100%;
}

.hero-title {
  margin-bottom: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 112.448px;
  line-height: 82.5%;
}

@media (min-width: 1200px) {
  .hero-title {
    font-size: 132.448px;
  }
}

.hello {
  color: #c7c7c7;
}

.what {
  padding-top: 1rem;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 122%;
  text-align: center;
  letter-spacing: 0.72em;
  color: #888787;
}

p.top {
  font-style: normal;
  font-weight: 300;
  font-size: 30.81px;
  line-height: 129%;
  text-align: center;
  color: #cecece;
  margin: 0rem auto 2rem;
}

p.down {
  font-style: normal;
  font-weight: 300;
  font-size: 17.81px;
  line-height: 129%;
  text-align: center;
  color: #cecece;
  padding-bottom: 3rem;
}

.hero .section-text {
  margin-bottom: 45px;
}

.hero-content {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  /* text-align: center; */
}

/*-----------------------------------*\
 * #ABOUT
\*-----------------------------------*/

.about {
  padding-block: var(--section-padding);
}

.about-banner {
  position: relative;
  margin-bottom: 40px;
}

.about-img {
  width: 100%;
}
/* 
.play-btn {
  position: absolute;
  bottom: 24%;
  right: 8%;
  background: var(--white);
  width: 80px;
  height: 80px;
  display: grid;
  place-items: center;
  font-size: 25px;
  border-radius: 50%;
}

.play-btn::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1px solid var(--black);
  animation: pulseAnim 2s forwards infinite;
} */

@keyframes pulseAnim {
  0% {
    transform: scale(1);
    border-color: var(--black);
  }

  100% {
    transform: scale(1.5);
    border-color: transparent;
  }
}

.about-title {
  margin-bottom: 30px;
}

.about .section-text {
  margin-bottom: 50px;
}

/*-----------------------------------*\
 * #FOOTER
\*-----------------------------------*/

.footer {
  background: var(--rich-black-fogra-29);
}

.footer-top {
  padding-block: var(--section-padding);
}

.footer-brand {
  margin-bottom: 50px;
}

.footer-brand .logo {
  width: 160px;
  margin-bottom: 20px;
}

.footer-text {
  color: var(--silver-chalice);
  font-family: var(--ff-rubik);
  line-height: 1.8;
  margin-bottom: 30px;
}

.footer .social-list {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* gap: 15px; */
}

.footer .social-link {
  background: var(--raisin-black);
  color: var(--silver-chalice);
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  font-size: 18px;
  border-radius: 50%;
  border: 1px solid var(--raisin-black);
  transition: var(--transition);
}

.footer .social-link:is(:hover, :focus) {
  background: var(--rich-black-fogra-29);
  color: var(--cultured);
}

.footer-link-box {
  display: grid;
  gap: 30px;
}

.footer-list {
  max-width: 230px;
}

.footer-list li:first-child {
  margin-bottom: 10px;
}

.footer-link-title {
  color: var(--cultured);
  font-family: var(--ff-poppins);
  font-size: var(--fs-4);
}

.footer-link {
  color: var(--silver-chalice);
  font-family: var(--ff-rubik);
  padding-block: 10px;
  /* font-size: 16px; */
  transition: var(--transition);
}

.footer-link:is(:hover, :focus) {
  color: var(--cultured);
  transform: translateX(3px);
}

.footer .contact-item {
  padding-block: 10px;
}

.footer .contact-item span {
  display: inline-block;
  color: var(--cultured);
  font-family: var(--ff-rubik);
  font-weight: var(--fw-500);
}

.footer .contact-link {
  display: inline-block;
  color: var(--silver-chalice);
  font-family: var(--ff-rubik);
  font-weight: var(--fw-500);
}

.footer .contact-link address {
  font-style: normal;
}

.footer-bottom {
  padding-block: 20px;
  border-top: 1px solid var(--onyx);
}

.copyright {
  color: var(--silver-chalice);
  font-family: var(--ff-rubik);
  line-height: 1.7;
  text-align: center;
}

.copyright a {
  display: inline-block;
  color: inherit;
  transition: var(--transition);
}

.copyright a:is(:hover, :focus) {
  color: var(--cultured);
}

/*-----------------------------------*\
 * #MEDIA QUERIES
\*-----------------------------------*/

/**
 * responsive for larger than 550px screen
 */

@media (min-width: 550px) {
  .container {
    max-width: 550px;
    margin-inline: auto;
  }

  .h2 {
    --fs-1: 35px;
  }
}

/**
 * responsive for larger than 768px screen
 */

@media (min-width: 768px) {
  :root {
    --fs-1: 55px;
  }

  .container {
    max-width: 750px;
  }

  .hero-banner,
  .about-banner {
    max-width: 600px;
    margin-inline: auto;
  }

  .about-content {
    max-width: 600px;
  }

  /**
   * FOOTER
   */

  .footer-text {
    max-width: 400px;
  }
}

/**
 * responsive for larger than 1024px screen
 */

@media (min-width: 1024px) {
  :root {
    --fs-1: 65px;
  }

  .container {
    max-width: 950px;
  }

  .h2 {
    --fs-1: 40px;
  }

  .vector-line {
    display: block;
    position: absolute;
    width: 400px;
  }

  /**
   * HERO
   */

  .hero .container {
    display: grid;
    grid-template-columns: 4fr 4fr;
    align-items: flex-start;
    gap: 50px;
  }

  .hero-banner {
    margin-bottom: 0;
    order: 1;
  }

  /**
   * ABOUT
   */

  .about .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 50px;
  }

  .about-banner {
    position: relative;
    margin-bottom: 0;
  }

  .about-banner .vector-line {
    width: 400px;
    bottom: 50px;
    left: -50px;
  }

  .play-btn {
    width: 100px;
    height: 100px;
  }

  .about-content {
    max-width: unset;
  }

  .footer-link-box {
    grid-template-columns: repeat(4, 1fr);
  }
}

/**
 * responsive for larger than 1200px screen
 */

@media (min-width: 1200px) {
  /**
   * REUSED STYLE
   */

  .container {
    max-width: 1150px;
  }
  .hero-title {
    font-size: 132.448px;
  }

  .hotcake_det {
    padding-bottom: 29rem;
  }
}
.hero .container {
  display: flex;
  /* flex-direction: row-reverse; */
  align-items: flex-start;
  gap: 4rem;
}
@media (max-width: 1026px) {
  .quotes {
    right: 0%;
  }
  .hero .container {
    flex-direction: row-reverse;
  }
}
@media (max-width: 980px) {
  .pos_relative {
    margin-top: -6%;
  }
}
@media (max-width: 900px) {
  .hotcake_courses {
    width: 80%;
    margin: -60% auto 0;
  }
  .hero .container {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 4rem;
  }
  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .pos_relative {
    margin-top: -10%;
  }

  .fillColor {
    margin-top: 0%;
  }
}
@media (max-width: 768px) {
  .hotcake_courses {
    width: 80%;
    margin: -60% auto 0;
  }
  .hero {
    padding: 130px 0 0;
    position: relative;
  }
  .what {
    padding-top: 5rem;
    font-style: normal;
    margin-bottom: 1rem;
  }

  .pos_relative {
    margin-top: -25%;
  }

  .hotcake h2 {
    padding: 6rem 0 2rem;
  }
  .fillColor {
    top: -8%;
  }
}
@media (max-width: 600px) {
  .hotcake_courses {
    width: 80%;
    margin: -90% auto 0;
  }
  .hero-title {
    margin-bottom: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 62.448px;
    line-height: 82.5%;
  }
  .fillColor {
    top: -5%;
  }
  .join_hold .begin {
    font-size: 20.418px;
  }

  .quotes {
    display: none;
  }
}
@media (max-width: 500px) {
  .what {
    padding-top: 1rem;
  }
  p.top {
    font-size: 22.81px;
  }
  p.down {
    font-size: 15.81px;
  }
  .hotcake_courses {
    margin: -110% auto 0;
  }

  .join_hold h2 {
    font-size: 2rem;
  }

  .join .join_now a {
    padding: 27.5406px 39.5896px;
    width: 180.18px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60.08px;
  }

  .hero .container {
    gap: 1rem;
  }
}

@media (max-width: 400px) {
  .hotcake_courses {
    margin: -125% auto 0;
  }
  .btn-primary {
    width: 200px;
    padding: 10px 20px;
  }
}
@media (max-width: 360px) {
  .fillColor {
    top: -4%;
  }
}
@media (max-width: 330px) {
  .pos_relative {
    margin-top: -35%;
  }
  .btn-primary {
    width: 200px;
    padding: 0.5rem;
  }
  .fillColor {
    top: -3%;
  }
  .hotcake_det {
    padding-bottom: 14rem;
  }

  .hotcake h2 {
    font-size: 40px;
  }
}
@media (max-width: 300px) {
  .pos_relative {
    margin-top: -55%;
  }
}
</style>
