<template>
  <q-page>
    <main class="main">
      <!-- === HOME === -->
      <section class="home" id="home">
        <img
          src="/pe/matthieu-comoy-koo_vYrlU_U-unsplash.jpg"
          alt=""
          class="home__img"
        />
        <div class="home__container container grid">
          <div class="home__data">
            <h1 class="home__data-title">GreyCreate</h1>

            <p class="home__data-title-d">
              “Redefining the African Creative Industry.”
            </p>
          </div>
        </div>
      </section>

      <section class="about section" id="tour">
        <div class="about__container container grid">
          <div class="about__data">
            <h2 class="section__title about__title">GreyCreate</h2>
            <p class="about__description">
              At our creative space, we have a common saying – “Let your
              creative juice flow”. This is because we believe that everything
              is possible; from creating amazing contents, brands, art, music,
              films etc.
            </p>
          </div>
          <div class="about__img" data-aos="zoom-in">
            <img src="/pe/GC1.jpg" alt="" />
          </div>
        </div>
      </section>
      <section class="about section" id="tour">
        <div class="about__container flexer container grid">
          <div class="about__img" data-aos="zoom-in">
            <img src="/pe/GC22 (1).jpg" alt="" />
          </div>
          <div class="about__data">
            <h2 class="section__title about__title">Cultural Masterpieces</h2>
            <p class="about__description">
              In the last five years, we have steadily partnered with Rabitz
              Studios (www.rabitzstudios.com) to deliver state of the art native
              and cultural events throughout Africa to showcase the beauty of
              the African continent, exploring hidden stories and values, as
              well as providing jobs for tons of women and youth and ensuring
              sustainability through constant training and mentorship programs.
            </p>
          </div>
        </div>
      </section>

      <section class="values">
        <h2 class="text-center q-mb-xl">Events we currently sponsor</h2>
        <div class="values-wrap container">
          <div class="card">
            <img src="/pe/guts talent show (1).jpg" alt="" />

            <p>Guts Talent Show</p>
          </div>
          <div class="card">
            <img src="/pe/sara.jpg" alt="" />

            <p>Sarauniya Carnival</p>
          </div>
          <div class="card">
            <img src="/pe/kaduna fashion.jpg" alt="" />

            <p>Kaduna Fashion Week</p>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </q-page>
</template>

<script>
import Footer from "../components/FooterMain.vue";
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

.card:nth-child(3) img {
  height: 400px !important;
}
</style>
