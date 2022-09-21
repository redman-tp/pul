<template>
  <div class="hold container">
    <h2
      style="text-align: center"
      class="section__title about__title text-center"
    >
      Meet the Judges
    </h2>
    <p class="q-mt-md q-mb-sm text-center">
      Winners of The Kukah Prize for Young Innovators will be selected through a
      rigorous selection criteria. Our judges have been uniquely selected from
      diverse backgrounds covering technology innovation and startups. Meet all
      five (5) judges.
    </p>
  </div>

  <div class="grid container">
    <!-- {{ boardData }} -->
    <div
      v-for="members in boardData"
      :key="members.id"
      class="grid-card my-font-poppins-light"
    >
      <figure class="effect-zoe">
        <div class="top-img">
          <img :src="members.img" alt="img25" />
          <span class="badge"></span>
        </div>

        <figcaption>
          <div class="movie">
            <q-btn @click="viewMember(members)" class="view"
              >View Profile</q-btn
            >
          </div>
        </figcaption>
      </figure>

      <div class="holert">
        <div class="det">
          <strong>{{ members.name }}</strong>
          <!-- <small>{{ members.position }}</small> -->
        </div>

        <p class="lead q-my-md">
          {{ members.desc }}
        </p>
        <!-- <span class="prev">Previously At</span>

        <img :src="members.previous" alt="" /> -->
      </div>

      <q-btn @click="viewMember(members)" class="profile">View Profile</q-btn>
    </div>

    <q-dialog full-width v-model="fixed">
      <q-card style="height: 60%">
        <div class="delp">
          <q-card-section>
            <!-- <div class="text-h6">{{ profile.name }}</div> -->
            <img :src="profile.img" alt="" class="imgg" />
          </q-card-section>

          <!-- <q-separator /> -->

          <q-card-section class="scroll">
            <div class="detr">
              <h5 class="text-weight-bold">{{ profile.name }}</h5>
              <!-- <small>{{ profile.position }}</small> -->
            </div>
            <p class="mk-lead">
              {{ profile.longerDesc }}
            </p>
          </q-card-section>
        </div>

        <!-- <q-separator /> -->

        <q-card-actions align="right">
          <!-- <q-btn flat label="Decline" color="primary" v-close-popup /> -->
          <q-btn
            class="bg-green q-pa-sm text-white"
            flat
            label="Close"
            color="primary"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
// import { ref } from "vue";
export default {
  data() {
    return {
      fixed: false,
      profile: [],
      boardData: [
        {
          id: 1,
          name: "Obi Brown",
          position: "position",
          desc: "Obi Brown JuniorX Innovation Academy is an afterschool enrichment space where kids (8-16) are taken through a word class curriculum in science, electronics, robotics and computing with the objective of helping them improve critical thinking, creativity, innovation and problem solving (www.juniorx.academy)",
          longerDesc:
            "Obi Brown JuniorX Innovation Academy is an afterschool enrichment space where kids (8-16) are taken through a word class curriculum in science, electronics, robotics and computing with the objective of helping them improve critical thinking, creativity, innovation and problem solving (www.juniorx.academy).He is the COO StudyLab360 which is a company wholly owned by Tech Vibes int. ltd. A transactions and services company working with various government entities and departments to help payroll and revenue transactions.Studylab360.com was acquired under this arrangement and I continued my role leading product vision and execution. (www.studylab360.com)",
          state: "Ile de France",
          img: "/pe/hasana.jpeg",
          previous:
            "https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/157686/previous_company_logo-a7152901e4945b193313d5a80f9ff0d0.svg",
        },
        {
          id: 2,
          name: "Robert John",
          position: "position",
          desc: "Robert has worked with databases and developed enterprise software for over a decade. He currently works with all things data, from engineering to visualization and Machine Learning. He recently started working with embedded systems and TinyML and is eager to see widespread adoption of embedded systems in Africa.",
          longerDesc: `Robert has worked with databases and developed enterprise software for over a decade. He currently works with all things data, from engineering to visualization and Machine Learning. He recently started working with embedded systems and TinyML and is eager to see widespread adoption of embedded systems in Africa. He contributes to the developer ecosystem by speaking at events, hosting meetups and code labs, and tutorials. He also writes articles on Hackster.io, Medium, and his personal blog about data visualization, ML, and Google Cloud Platform (GCP). He is a mentor at the Google for Startups Africa Accelerator programme, and is a co-organizer of the GDG Cloud developer community in Kaduna, Nigeria. Robert is part of the following programmes:  ● Google Developer Experts
          ● Arm Innovators
          ● Edge Impulse Experts`,
          state: "Ile de France",
          img: "/pe/robert.jpg",
          previous:
            "https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/157722/previous_company_logo-a2e4bba7a9d3357f6581c2ad6e72f0a1.svg",
        },
        {
          id: 3,
          name: "Aramide Abe",
          position: "position",
          desc: "Aramide is a British-Nigerian woman on a mission to influence the private sector in emerging economies and boost their macroeconomic development through entrepreneurship and job creation. She lives and works in Europe, managing a €7.5m multi-donor fund to invest in and strengthen entrepreneurship in Africa, specifically in Climate Adaptation, working with a global multilateral development bank. ",
          longerDesc: `Aramide is a British-Nigerian woman on a mission to influence the private sector in emerging economies and boost their macroeconomic development through entrepreneurship and job creation. She lives and works in Europe, managing a €7.5m multi-donor fund to invest in and strengthen entrepreneurship in Africa, specifically in Climate Adaptation, working with a global multilateral development bank. She does this through establishing strategic partnerships, mobilising funding and working with African governments to improve legal and regulatory frameworks for enabling business environments. While in Africa, the entrepreneur platform (Naija Startups) she co-founded in 2016 has scaled rapidly to a 95,000-member hub for SMEs and is impacting thousands of entrepreneurs in the areas of investment readiness, access to opportunities, capacity-building and programs.`,
          state: "Ile de France",
          img: "/pe/aramide.jpeg",
          previous:
            "https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/157725/previous_company_logo-17438ec79d6a39372fb9f661b31a2322.svg",
        },

        {
          id: 4,
          name: "Mercy Marcus",
          position: "position",
          desc: `Mercy is a civil engineering graduate who got perplexed about how most processes involved in the construction industry were still quite manual and repetitive. She made a switch and started by learning about data science and machine learning whilst leveraging cloud technologies along the way. Previously, she worked remotely as a Data Scientist for a Nigerian FinTech company. `,
          longerDesc: `Mercy is a civil engineering graduate who got perplexed about how most processes involved in the construction industry were still quite manual and repetitive. She made a switch and started by learning about data science and machine learning whilst leveraging cloud technologies along the way. Previously, she worked remotely as a Data Scientist for a Nigerian FinTech company. She currently works as a Software Engineer on Microsoft's Mixed Reality Team. She enjoys helping organize tech meetups, speaking about topics that interest her, listening to music, occasionally binge-watching shows & cartoons, and training for her first triathlon.`,
          state: "Ile de France",
          img: "/pe/mercy.jpeg",
          previous:
            "https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/157725/previous_company_logo-17438ec79d6a39372fb9f661b31a2322.svg",
        },

        {
          id: 5,
          name: "Abubakar Nur Khalil",
          position: "position",
          desc: `Abubakar is a Nigerian programmer, Bitcoin core contributor, and CEO & CTO at Recursive Capital. He is passionate about growing the Bitcoin development ecosystem in Africa and, along with his fellow Bitcoiners, launched Qala—a program designed to train the next generation of African Bitcoin and Lightning developers. `,
          longerDesc: `Abubakar is a Nigerian programmer, Bitcoin core contributor, and CEO & CTO at Recursive Capital. He is passionate about growing the Bitcoin development ecosystem in Africa and, along with his fellow Bitcoiners, launched Qala—a program designed to train the next generation of African Bitcoin and Lightning developers. He also serves as a board member of ₿Trust, where he is currently focusing on "building the future of Bitcoin and launching Africa into the forefront of the monetary revolution".`,
          state: "Ile de France",
          img: "/pe/abubakar.jpeg",
          previous:
            "https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/157725/previous_company_logo-17438ec79d6a39372fb9f661b31a2322.svg",
        },
      ],
    };
  },

  methods: {
    viewMember(member) {
      this.fixed = true;
      //   console.log("first", member);
      this.profile = member;
      console.log(this.profile);
    },
  },
};
</script>

<style scoped>
.hold {
  padding-top: 1rem;
}
.delp {
  display: grid;
  gap: 1rem;
  background: #ffff;
  padding: 1rem;
  grid-template-columns: 1fr 3fr;
  align-items: center;
}
.delp p {
  font-size: 1.1rem;
  line-height: 1.5;
}

.delp img {
  width: 100%;
  /* height: 100%; */
  height: 300px;
  object-fit: contain;
}
.grid {
  position: relative;
  margin: 0 auto;
  padding: 1.5em 0 1em;
  max-width: 1000px;
  list-style: none;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  gap: 2rem;
}
.grid-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  background-color: #fff;
  color: #2f3238;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 8%);
  width: 100%;
}

.grid-card p,
.mk-lead {
  text-align: left;
  color: #455065;
  flex: 1 0 auto;
  font-size: 14px;
  line-height: 21px;
  max-height: 400px;
  overflow: hidden;
  /* padding-top: 14px; */
}

.imgg {
  width: 100%;
}

.top-img,
.delp img {
  -webkit-clip-path: polygon(
    0 0,
    calc(100% + 1px) 0,
    calc(100% + 1px) 100%,
    24px 100%,
    0 calc(100% - 24px)
  );
  clip-path: polygon(
    0 0,
    calc(100% + 1px) 0,
    calc(100% + 1px) 100%,
    24px 100%,
    0 calc(100% - 24px)
  );
  background-color: #fff;
  position: relative;
}
.grid-card .det {
  display: flex;
  flex-direction: column;
  text-align: left;
}
.holert {
  display: flex;
  position: relative;
  flex: 1 0 auto;
  flex-direction: column;
  font-weight: 400;
  text-align: left;
  padding: 24px;
}

.holert img {
  height: 36px;
  width: 148px;
}

.holert .prev {
  color: #94989e;
  display: block;
  margin: 1rem 0;
  font-size: 12px;
  margin-bottom: 8px;
  white-space: nowrap;
}
.detr h5 {
  margin: 1rem 0;
  color: #262d3d;
  font-size: 28px;
  font-weight: 700;
  line-height: 1em;
}

/* Common style */
.grid figure {
  position: relative;
  float: left;
  overflow: hidden;
  /* margin: 10px 1%; */
  margin: 0;
  min-width: 320px;
  max-width: 480px;
  max-height: 360px;
  width: 48%;
  /* background: #3085a3; */
  text-align: center;
  cursor: pointer;
}

.badge::before {
  content: "\f4d6";
  /* background: url("/c9f029bcf4d7f03d94f59c8d85d49168.svg") no-repeat center
    center/cover; */
  z-index: 2000;
  width: 15px;
  height: 15px;
  bottom: 0%;
  left: 0;

  position: absolute;
  bottom: 4%;
  left: 1%;
  padding: 1rem;
  font-family: "FontAwesome";
  /* background-color: #00cc83; */
  /* background: #21ba45; */
  background: #204ecf;
  color: #fff;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.grid figure img {
  position: relative;
  display: block;
  width: 100%;
  object-fit: cover;
  height: 300px;
  min-height: 100%;
  max-width: 100%;
  opacity: 0.8;
}

.grid figure figcaption {
  padding: 2em;
  color: #fff;
  text-transform: uppercase;
  font-size: 1.25em;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.grid figure figcaption i {
  margin: 1rem;
  color: #00cc83;
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

.grid figure h2 span {
  font-weight: 800;
}

.grid figure h2,
.grid figure p {
  margin: 0;
}

.grid figure p {
  letter-spacing: 1px;
  font-size: 68.5%;
}

/* Individual effects */

/*---------------*/
/***** Zoe *****/
/*---------------*/

figure.effect-zoe figcaption {
  top: auto;
  bottom: 0;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 3.75em; */
  height: 100%;
  /* opacity: 0.55; */
  /* background: rgba(32, 78, 207, 0.55); */
  background: rgba(0, 0, 0, 0.5);
  color: #3c4a50;
  -webkit-transition: -webkit-transform 0.35s;
  transition: transform 0.35s;
  -webkit-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
}

figure.effect-zoe .view {
  border: none;
  background-color: #fff;
  padding: 1rem;
  color: #db9200;
  border-radius: 8px;
  position: relative;
  z-index: 10000;
  cursor: pointer;
  font-weight: 700;
}
.profile {
  background-color: #000;
  border: none;
  padding: 1rem;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  font-weight: 800;
  background: #21ba45;
  background: #db9200;
  border-color: #db9200;
  color: #fff;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color;
}

.movie {
  /* border: 1px solid #fff; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.det strong {
  color: #204ecf;
}
.det small {
  color: #8f96a3;
  margin: 0.55rem 0;
}

.lead {
  color: #455065;
}
figure.effect-zoe h2 {
  float: left;
}

figure.effect-zoe p.icon-links a {
  float: right;
  color: #3c4a50;
  font-size: 1.4em;
}

figure.effect-zoe:hover p.icon-links a:hover,
figure.effect-zoe:hover p.icon-links a:focus {
  color: #252d31;
}

figure.effect-zoe p.description {
  position: absolute;
  bottom: 8em;
  padding: 2em;
  color: #fff;
  text-transform: none;
  font-size: 90%;
  opacity: 0;
  -webkit-transition: opacity 0.35s;
  transition: opacity 0.35s;
  -webkit-backface-visibility: hidden; /* Fix for Chrome 37.0.2062.120 (Mac) */
}

figure.effect-zoe h2,
figure.effect-zoe p.icon-links a {
  -webkit-transition: -webkit-transform 0.35s;
  transition: transform 0.35s;
  -webkit-transform: translate3d(0, 200%, 0);
  transform: translate3d(0, 200%, 0);
}

figure.effect-zoe p.icon-links a span::before {
  display: inline-block;
  padding: 8px 10px;
  font-family: "feathericons";
  speak: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-eye::before {
  content: "\e000";
}

.icon-paper-clip::before {
  content: "\e001";
}

.icon-heart::before {
  content: "\e024";
}

figure.effect-zoe h2 {
  display: inline-block;
}

figure.effect-zoe:hover p.description {
  opacity: 1;
}
figure.effect-zoe:hover figcaption .movie {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0) scale(1);
  transform: translate3d(0, 0, 0) scale(1);
}

figure.effect-zoe:hover figcaption,
figure.effect-zoe:hover h2,
figure.effect-zoe:hover p.icon-links a {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.mk {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

figure.effect-zoe:hover h2 {
  -webkit-transition-delay: 0.05s;
  transition-delay: 0.05s;
}

figure.effect-zoe:hover p.icon-links a:nth-child(3) {
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
}

figure.effect-zoe:hover p.icon-links a:nth-child(2) {
  -webkit-transition-delay: 0.15s;
  transition-delay: 0.15s;
}

figure.effect-zoe:hover p.icon-links a:first-child {
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}

@media screen and (max-width: 50em) {
  .content {
    padding: 0 10px;
    text-align: center;
  }
  .grid figure {
    display: inline-block;
    float: none;
    margin: 10px auto;
    width: 100%;
  }
}
*,
*:after,
*:before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

body {
  /* background: #2f3238; */
  color: #fff;
  font-weight: 400;
  font-size: 1em;
  font-family: "Raleway", Arial, sans-serif;
}

a {
  outline: none;
  color: #3498db;
  text-decoration: none;
}

a:hover,
a:focus {
  color: #528cb3;
}

section {
  padding: 1em;
  text-align: center;
}

.content {
  margin: 0 auto;
  max-width: 1000px;
}

.content > h2 {
  clear: both;
  margin: 0;
  padding: 4em 1% 0;
  color: #484b54;
  font-weight: 800;
  font-size: 1.5em;
}

.content > h2:first-child {
  padding-top: 0em;
}

/* Header */
.codrops-header {
  margin: 0 auto;
  padding: 4em 1em;
  text-align: center;
}

.codrops-header h1 {
  margin: 0;
  font-weight: 800;
  font-size: 4em;
  line-height: 1.3;
}

.codrops-header h1 span {
  display: block;
  padding: 0 0 0.6em 0.1em;
  color: #74777b;
  font-weight: 300;
  font-size: 45%;
}

/* Demo links */
.codrops-demos {
  clear: both;
  padding: 1em 0 0;
  text-align: center;
}

.content + .codrops-demos {
  padding-top: 5em;
}

.codrops-demos a {
  display: inline-block;
  margin: 0 5px;
  padding: 1em 1.5em;
  text-transform: uppercase;
  font-weight: bold;
}

.codrops-demos a:hover,
.codrops-demos a:focus,
.codrops-demos a.current-demo {
  background: #3c414a;
  color: #fff;
}

/* To Navigation Style */
.codrops-top {
  width: 100%;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 0.69em;
  line-height: 2.2;
}

.codrops-top a {
  display: inline-block;
  padding: 1em 2em;
  text-decoration: none;
  letter-spacing: 1px;
}

.codrops-top span.right {
  float: right;
}

.codrops-top span.right a {
  display: block;
  float: left;
}

.codrops-icon:before {
  margin: 0 4px;
  text-transform: none;
  font-weight: normal;
  font-style: normal;
  font-variant: normal;
  font-family: "codropsicons";
  line-height: 1;
  speak: none;
  -webkit-font-smoothing: antialiased;
}

.codrops-icon-drop:before {
  content: "\e001";
}

.codrops-icon-prev:before {
  content: "\e004";
}

/* Related demos */
.related {
  clear: both;
  padding: 6em 1em;
  font-size: 120%;
}

.related > a {
  display: inline-block;
  margin: 20px 10px;
  padding: 25px;
  border: 1px solid #4f7f90;
  text-align: center;
}

.related a:hover {
  border-color: #39545e;
}

.related a img {
  max-width: 100%;
  opacity: 0.8;
}

.related a:hover img,
.related a:active img {
  opacity: 1;
}

.related a h3 {
  margin: 0;
  padding: 0.5em 0 0.3em;
  max-width: 300px;
  text-align: left;
}

/* Demo ad design */
body #cdawrap {
  background: none;
  top: 50px;
  border: none;
}

body #cdawrap a {
  color: #fff !important;
}

body #cda-remove {
  color: #fff;
}

@media screen and (max-width: 25em) {
  .codrops-header {
    font-size: 75%;
  }
  .codrops-icon span {
    display: none;
  }
}
@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  .badge::before {
    left: 5%;
  }
}
@media (max-width: 920px) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }
  .badge::before {
    left: 5%;
  }
}
@media (max-width: 700px) {
  .delp {
    grid-template-columns: 1fr;
  }
  .delp img {
    height: 200px;
  }
  .holert {
    padding: 15px;
  }
}
@media (max-width: 500px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
