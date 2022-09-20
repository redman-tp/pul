<template>
  <q-page>
    <main class="main">
      <!-- === HOME === -->
      <section class="home" id="home">
        <img
          src="/pe/software-developer-gdf383dd56_1920.jpg"
          alt=""
          class="home__img"
        />
        <div class="home__container container grid">
          <div class="home__data">
            <h1 class="home__data-title">GreyTech</h1>

            <p class="home__data-title-d">
              “Creating solutions for the African community.”
            </p>
          </div>
        </div>
      </section>

      <section class="about section" id="tour">
        <div class="about__container flexer container grid">
          <div class="about__img" data-aos="zoom-in">
            <img src="/pe/testi.png" alt="" />
          </div>
          <div class="about__data">
            <h2 class="section__title about__title">Our Community</h2>
            <p class="about__description">
              We are building a community of tech enthusiasts who practically
              see a digital solution to every problem they come across. Africa
              is vast and its challenges are unique. At GreyTech, we develop
              solutions that are tailored for the Africa people, which include
              the rural and urban communities, spanning across health,
              education, entertainment and agricultural sector.
            </p>
          </div>
        </div>
      </section>

      <section class="about section" id="tour">
        <div class="about__container container grid">
          <div class="about__data">
            <h2 class="section__title about__title">Our Focus</h2>
            <p class="about__description">
              Our focus is the young people of Africa which constitute about 70
              percent of the 1.4 billion African population. We believe that
              opportunities abound throughout the continent and if the youth are
              armed with the required knowledge, they can create innovations
              that will transform every country in the continent into a
              prosperous nation. Hence we have taken the challenge to increase
              the level of digital literacy throughout the African continent.
            </p>
          </div>
          <div class="about__img" data-aos="zoom-in">
            <img
              src="/pe/group-young-cheerful-african-friends-wearing-facemasks-social-distancing-park.jpg"
              alt=""
            />
          </div>
        </div>
      </section>

      <section class="code-samples">
        <h2>Work Environments</h2>
        <p>
          We are familiar with various development platforms suitable for a
          variety of objectives. Whether you are a frontend, backend,
          blockchain, VR, AI, cloud infrastructure or game developer, we have
          the right environment and work community to match your skillset.
        </p>
        <div class="code-cards container">
          <div class="code-container container">
            <h1>
              DESIGN<br /><br />
              <div class="c1"><div class="type">FIGMA</div></div>
              <br />
              <div class="c2"><div class="type2">ADOBE ILLUSTRATOR</div></div>
              <br />
              <div class="c3"><div class="type3">ADOBE XD</div></div>
              <br />
              <div class="c4"><div class="type4">ADOBE PHOTOSHOP</div></div>
              <br />
            </h1>
          </div>
          <div class="code-container container">
            <h1>
              FRONT END<br /><br />
              <div class="c1"><div class="type">HTML</div></div>
              <br />
              <div class="c2"><div class="type2">CSS3</div></div>
              <br />
              <div class="c3">
                <div class="type3">BOOTSTRAP,MATERIALIZE</div>
              </div>
              <br />
              <div class="c4">
                <div class="type4">SASS - LESS - STYLUS</div>
              </div>
              <br />
              <div class="c4"><div class="type5">JAVASCRIPT</div></div>
              <br />
              <div class="c6"><div class="type6">VUE JS - QUAZAR</div></div>
              <br />
              <div class="c7"><div class="type7">REACT JS</div></div>
              <br />
              <div class="c8"><div class="type8">ANGULAR JS</div></div>
            </h1>
          </div>
          <div class="code-container container">
            <h1>
              BACKEND<br /><br />
              <div class="c1"><div class="type">PHP/LARAVEL</div></div>
              <br />
              <div class="c2"><div class="type2">NODE/EXPRESS JS</div></div>
              <br />
              <div class="c3"><div class="type3">PYTHON</div></div>
              <br />
              <div class="c4"><div class="type4">FIREBASE</div></div>
              <br />
              <div class="c4"><div class="type5">C++</div></div>
              <br />
              <div class="c6"><div class="type6">SWIFT</div></div>
              <br />
              <div class="c7"><div class="type7">C#</div></div>
              <br />
              <div class="c8"><div class="type8">JAVA</div></div>
            </h1>
          </div>
          <div class="code-container container">
            <h1>
              HOSTING<br /><br />
              <div class="c1"><div class="type">HEROKU</div></div>
              <br />
              <div class="c2"><div class="type2">AWS</div></div>
              <br />
              <div class="c3"><div class="type3">DIGITAL OCEAN</div></div>
              <br />
              <div class="c4"><div class="type4">NETLIFY</div></div>
              <br />
              <div class="c4"><div class="type5">FIREBASE</div></div>
              <br />
            </h1>
          </div>
          <div class="code-container container">
            <h1>
              SERVERS<br /><br />
              <div class="c1"><div class="type">APACHE</div></div>
              <br />
              <div class="c2"><div class="type2">UNITY</div></div>
              <br />
              <div class="c3"><div class="type3">NGINX</div></div>
              <br />
              <div class="c4"><div class="type4">SOLIDITY</div></div>
              <br />
            </h1>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </q-page>
</template>

<script>
import Footer from "../components/Footer.vue";

export default {
  components: {
    Footer,
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

.code-samples {
  margin-top: 4rem;
}
.code-samples h2 {
  margin-bottom: 0.75rem 0;
  text-align: center;
  font-size: var(--h1-font-size);
  font-weight: 500;
  color: var(--text-color);
}
.code-samples p {
  margin: 1rem auto 2rem;
  text-align: center;
  font-size: var(--h3-font-size);
  font-weight: 300;
  max-width: 800px;
  color: var(--text-color);
}
.code-container {
  background: var(--text-color) !important;

  border-radius: 5px;
  padding: 1rem;
  color: #fff !important;
  min-height: 300px;
  min-width: 200px;
  overflow: hidden;
}

.code-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  place-items: center;
}

.c1 {
  display: inline-block;
}
.c2 {
  display: inline-block;
}
.c3 {
  display: inline-block;
}
.c4 {
  display: inline-block;
}
.c5 {
  display: inline-block;
}
.c6 {
  display: inline-block;
}
.c7 {
  display: inline-block;
}
.c8 {
  display: inline-block;
}
.code-container h1 {
  font-size: var(--h3-font-size);

  color: #fff;
}
.code-container h1 .type {
  font-size: var(--small-font-size);
  color: #42b883;
  overflow: hidden;
  border-right: 0.15em solid orange;
  white-space: nowrap;
  width: 0;
  animation: typing 1.5s steps(30, end) forwards;
}
.code-container h1 .type2 {
  font-size: var(--small-font-size);
  color: #f05340;
  overflow: hidden;
  border-right: 0.15em solid orange;
  white-space: nowrap;
  width: 0;
  animation: typing 1.5s steps(30, end) forwards;
  animation-delay: 1.5s;
}
.code-container h1 .type3 {
  color: #cd6799;
  font-size: var(--small-font-size);
  overflow: hidden;
  border-right: 0.15em solid orange;
  white-space: nowrap;
  width: 0;
  animation: typing 2s steps(30, end) forwards;
  animation-delay: 3s;
}
.code-container h1 .type4 {
  color: #4078c0;
  font-size: var(--small-font-size);
  overflow: hidden;
  border-right: 0.15em solid orange;
  white-space: nowrap;
  width: 0;
  animation: typing 2s steps(30, end) forwards;
  animation-delay: 5.5s;
}
.code-container h1 .type5 {
  color: yellow;
  font-size: var(--small-font-size);
  overflow: hidden;
  border-right: 0.15em solid orange;
  white-space: nowrap;
  width: 0;
  animation: typing 2s steps(30, end) forwards;
  animation-delay: 7s;
}
.code-container h1 .type6 {
  color: greenyellow;
  font-size: var(--small-font-size);
  overflow: hidden;
  border-right: 0.15em solid orange;
  white-space: nowrap;
  width: 0;
  animation: typing 2s steps(30, end) forwards;
  animation-delay: 9.5s;
}
.code-container h1 .type7 {
  color: #6854fc;
  font-size: var(--small-font-size);
  overflow: hidden;
  border-right: 0.15em solid orange;
  white-space: nowrap;
  width: 0;
  animation: typing 2s steps(30, end) forwards;
  animation-delay: 11s;
}
.code-container h1 .type8 {
  color: #e08c29;
  font-size: var(--small-font-size);
  overflow: hidden;
  border-right: 0.15em solid orange;
  white-space: nowrap;
  width: 0;
  animation: typing 2s steps(30, end) forwards, blink 0.75s infinite;
  animation-delay: 13.5s;
}
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
@keyframes blink {
  from {
    border-color: transparent;
  }
  to {
    border-color: orange;
  }
}

/* typing ends */
</style>
