<template>
  <div id="about" class="pos_relative" v-if="courses">
    <section id="service" class="hotcake_courses">
      <h3>Our HotCake Courses</h3>
      <div class="">
        <div class="team">
          <!-- <h2 class="text-primary">Our Team</h2> -->
          <!-- <p class="desc">Our tranined staff</p> -->
          <div class="grid">
            <figure
              v-for="course in courses"
              :key="course.id"
              class="effect-sadie"
            >
              <img :src="course.image" alt="img02" />
              <figcaption>
                <h2>
                  <div class="title">{{ course.title }}</div>
                  <div class="name q-mt-sm">Hover to see the intro video</div>

                  <q-btn
                    :to="{
                      name: 'portal.register',
                      params: { portal: portal.slug },
                    }"
                    class="q-mt-lg bg-green text-white q-px-lg q-pt-sm"
                  >
                    Enroll
                  </q-btn>
                  <!-- <div class="name">{{ course.name }}</div> -->
                </h2>
                <div
                  v-if="course.title === 'BLOCKCHAIN TECHNOLOGY'"
                  class="watch"
                >
                  <q-spinner-hourglass color="primary" size="1.5em" />

                  <small>Coming soon</small>
                </div>
                <div v-else class="watch">
                  <p @click="toggleVideo(course.video_link)">
                    <i class="fa-duotone fa-play"></i>
                  </p>
                  <small>Watch the intro</small>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
        <q-dialog full-width v-model="videoDialog">
          <q-card style="height: fit-content; width: 100%" class="dialog_wid">
            <!-- {{ spin }} -->
            <div v-if="load" class="spin q-py-xl text-center">
              <q-spinner-cube size="100px" color="indigo" />
            </div>

            <q-video v-else :ratio="16 / 9" :src="video" />
          </q-card>
        </q-dialog>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    page: {
      type: Object,
      default: () => ({}),
    },
    section: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const portal = ref(props.page.portal || {});
    return {
      portal,
      courses: portal.value.learning_paths,
      video: ref([]),
      videoDialog: ref(false),
      load: ref(true),
    };
  },

  methods: {
    toggleVideo(video) {
      this.videoDialog = true;
      this.load = true;
      this.video = video;
      setTimeout(() => {
        this.load = false;
      }, 3000);
    },
  },
};
</script>

<style scoped>
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

/*-----------------------------------*\
 * #MEDIA QUERIES
\*-----------------------------------*/

/**
 * responsive for larger than 550px screen
 */

/**
 * responsive for larger than 768px screen
 */

@media (min-width: 768px) {
  :root {
    --fs-1: 55px;
  }
}

/**
 * responsive for larger than 1024px screen
 */

@media (min-width: 1024px) {
  :root {
    --fs-1: 65px;
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
  .pos_relative {
    margin-top: -10%;
  }
}
@media (max-width: 768px) {
  .hotcake_courses {
    width: 80%;
    margin: -60% auto 0;
  }

  .pos_relative {
    margin-top: -25%;
  }
}
@media (max-width: 600px) {
  .hotcake_courses {
    width: 80%;
    margin: -90% auto 0;
  }
}
@media (max-width: 500px) {
  .hotcake_courses {
    margin: -110% auto 0;
  }
}

@media (max-width: 400px) {
  .hotcake_courses {
    margin: -125% auto 0;
  }
}
@media (max-width: 330px) {
  .pos_relative {
    margin-top: -35%;
  }
}
@media (max-width: 300px) {
  .pos_relative {
    margin-top: -55%;
  }
}
</style>

<style scoped>
.team {
  padding: 2rem 0 0;
}
.team {
  position: relative;
}

.grid {
  position: relative;
  padding: 1em 0 2em;
  list-style: none;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  align-items: center;
  gap: 2rem 4rem;
  z-index: 10;
}

.watch {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.watch i {
  background: #ffffff;
  width: 55px;
  height: 55px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #051234;
}

.watch small {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 121.52%;
  text-align: center;
  color: #ffffff;
}

/* Common style */
.grid figure {
  position: relative;
  float: left;
  overflow: hidden;
  margin: 10px 1%;
  min-width: 300px;
  max-width: 100%;
  min-height: 5px;
  width: 100%;
  text-align: center;
  cursor: pointer;
}
.grid figure:nth-child(1)::before {
  content: "";
  background: #0d6d05;
  /* background: #051234; */
  mix-blend-mode: hard-light;
  border-radius: 4px;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.grid figure:nth-child(2)::before {
  content: "";
  background: #34051c;
  mix-blend-mode: hard-light;
  border-radius: 4px;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.grid figure:nth-child(3)::before {
  content: "";
  background: #72179d;
  /* background: #0c3405; */
  mix-blend-mode: multiply;
  border-radius: 4px;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.grid figure:nth-child(4)::before {
  content: "";
  background: #053431;
  mix-blend-mode: multiply;
  border-radius: 4px;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.grid figure:nth-child(5)::before {
  content: "";
  background: #c58e00;
  mix-blend-mode: multiply;
  border-radius: 4px;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.grid figure:nth-child(6)::before {
  content: "";
  background: #0008c5;
  mix-blend-mode: multiply;
  border-radius: 4px;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.grid figure img {
  position: relative;
  display: block;
  min-height: 100%;
  max-width: 100%;
  /* opacity: 0.8; */
  border-radius: 15px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.grid figure figcaption {
  padding: 2em;
  /* border-radius: 15px; */
  color: #fff;
  text-transform: uppercase;
  font-size: 1.25em;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.grid figure figcaption::before,
.grid figure figcaption::after {
  pointer-events: none;
}

.grid figure figcaption,
.grid figure figcaption > a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Anchor will cover the whole item by default */
/* For some effects it will show as a button */
.grid figure figcaption > a {
  z-index: 1000;
  text-indent: 200%;
  white-space: nowrap;
  font-size: 0;
  opacity: 0;
}

.grid figure h2 {
  word-spacing: -0.15em;
  font-weight: 300;
}

figure.effect-sadie {
  opacity: 1;
}
figure.effect-sadie:hover {
  opacity: 0.9;
  transition: 2s all ease-in-out;
}

.grid figure h2,
.grid figure p {
  margin: 0;
}

.grid figure p {
  letter-spacing: 1px;
  font-size: 68.5%;
  font-size: 20px;
  padding: 0.6rem;
  text-decoration: underline;
}
.grid figure p i {
  font-size: 25px;
  margin: 0 1rem;
}

figure.effect-sadie figcaption::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
  opacity: 0;
  -webkit-transform: translate3d(0, 50%, 0);
  transform: translate3d(0, 50%, 0);
}

figure.effect-sadie h2 .title {
  font-style: normal;
  font-weight: 600;
  font-size: 27px;
  line-height: 122%;
  text-align: center;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #ffffff;
  max-width: 200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.grid figure:nth-child(4) h2 .title {
  max-width: 150px !important;
}
figure.effect-sadie h2 .name {
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 1.4;
  text-align: center;
  color: #ffffff;
  letter-spacing: 0.9rem;
}

figure.effect-sadie h2 {
  position: absolute;
  bottom: 0%;
  padding: 2rem 0;
  /* padding: 1rem 0 4rem; */
  left: 0;
  width: 100%;
  z-index: 5;
  top: 50%;
  -webkit-transition: -webkit-transform 0.35s, color 0.35s;
  transition: transform 0.35s, color 0.35s;
  -webkit-transform: translate3d(0, -50%, 0);
  transform: translate3d(0, -50%, 0);
}

figure.effect-sadie figcaption::before,
figure.effect-sadie .watch {
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
}

figure.effect-sadie .watch {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 2em;
  width: 100%;
  opacity: 0;
  z-index: 5;
  -webkit-transform: translate3d(0, 10px, 0);
  transform: translate3d(0, 10px, 0);
}

figure.effect-sadie:hover h2 {
  color: #fff;
  -webkit-transform: translate3d(0, 25%, 0) translate3d(0, -40px, 0);
  transform: translate3d(0, 25%, 0) translate3d(0, -40px, 0);
  background: none;
  transition: all 2s ease-in-out;
  padding: 1rem 0 4rem;
  top: 37%;
}
figure.effect-sadie:hover img {
  background: #051234;
  transition: all 2s ease-in-out;
  opacity: 0.3;
}
figure.effect-sadie:hover .name {
  display: none;
}

figure.effect-sadie:hover figcaption::before,
figure.effect-sadie:hover .watch {
  opacity: 1;
  -webkit-transform: translate3d(0, -250px, 0);
  transform: translate3d(0, -250px, 0);
  transition: all 2s ease-in-out;
}

@media (min-width: 1300px) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    margin: 0 auto;
    max-width: 1300px;
  }
  .grid figure img {
    height: 500px;
  }
}
@media (max-width: 800px) {
  .grid figure {
    min-width: 250px;
    width: 100%;
  }
  .grid {
    position: relative;
    /* margin: 0 auto; */
    padding: 1em 0 4em;
    max-width: 1100px;
    list-style: none;
    text-align: center;
    /* width: 350px; */
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    align-items: center;
    gap: 0.65rem;
  }
}
@media (max-width: 400px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
