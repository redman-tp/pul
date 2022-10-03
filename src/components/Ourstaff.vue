<template>
  <div class="">
    <div class="team">
      <!-- <h2 class="text-primary">Our Team</h2> -->
      <!-- <p class="desc">Our tranined staff</p> -->
      <div class="grid">
        <figure
          v-for="(course, index) in courses"
          :key="index"
          class="effect-sadie"
        >
          <img :src="course.img" alt="img02" />
          <figcaption>
            <h2>
              <div class="title">{{ course.title }}</div>
              <br />
              <div class="name">{{ course.name }}</div>
            </h2>
            <div v-if="course.title === 'BLOCKCHAIN TECHNOLOGY'" class="watch">
              <q-spinner-hourglass color="primary" size="1.5em" />

              <small>Coming soon</small>
            </div>
            <div v-else class="watch">
              <p @click="toggleVideo(course.Video_link)">
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
</template>

<script>
export default {
  data() {
    return {
      video: [],
      videoDialog: false,
      load: true,
      courses: [
        {
          img: "/pe/design.png",

          title: "PRODUCT DESIGN",
          certificate: "PROFESSIONAL CERTIFICATE",
          Video_link: "https://www.youtube.com/embed/MCy6WtYjI-8",
        },
        {
          img: "/pe/frontend.png",

          // title: "HIS EXCELLENCY",
          title: "FRONTEND ENGINEERING",
          certificate: "PROFESSIONAL CERTIFICATE",
          Video_link: "https://www.youtube.com/embed/3cEhOYvO9SM",
        },
        {
          img: "/pe/backend.png",

          // title: "HIS EXCELLENCY",
          title: "BACKEND ENGINEERING",
          certificate: "PROFESSIONAL CERTIFICATE",
          Video_link: "https://www.youtube.com/embed/9IczM7y0Yc8",
        },

        {
          img: "/pe/data.png",

          // title: "HIS EXCELLENCY",
          title: "DATA SCIENCE",
          certificate: "PROFESSIONAL CERTIFICATE",
          Video_link: "https://www.youtube.com/embed/NJvncopOC88",
        },
        {
          img: "/pe/digital.png",

          // title: "HIS EXCELLENCY",
          title: "DIGITAL MARKETING",
          certificate: "PROFESSIONAL CERTIFICATE",
          Video_link: "https://www.youtube.com/embed/FVOfhCxJ6DU",
        },

        {
          img: "/pe/blockchain.png",

          // title: "HIS EXCELLENCY",
          title: "BLOCKCHAIN TECHNOLOGY",
          certificate: "PROFESSIONAL CERTIFICATE",
          Video_link: "https://www.youtube.com/embed/MCy6WtYjI-8",
        },
      ],
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
.team {
  padding: 2rem 0 0;
}

.delp p {
  font-size: 1.1rem;
  line-height: 1.5;
}
.delp h5 {
  font-weight: 400;
  font-size: 21px;
  line-height: 123.5%;
  letter-spacing: 0.335em;
  text-transform: capitalize;
  color: #00a250;
  margin-bottom: 1rem;
}

.delp img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
p {
  font-size: 26px !important;
}
p.desc {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 179.4%;
  color: rgba(51, 51, 51, 0.92);
  text-align: center;
  margin: 1rem 0;
}
.white {
  color: white !important;
}
.team {
  position: relative;
}

.headingg {
  padding: 0rem 0 1rem;
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
figure.effect-sadie h2 .name {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 122%;
  text-align: center;
  letter-spacing: 0.26em;
  color: #ffffff;
}

figure.effect-sadie h2 {
  position: absolute;
  bottom: 0%;
  padding: 2rem 0;
  left: 0;
  width: 100%;
  z-index: 5;
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
}
figure.effect-sadie:hover img {
  background: #051234;
  transition: all 2s ease-in-out;
  opacity: 0.3;
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
