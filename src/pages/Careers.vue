<template>
  <div class="the-component">
    <div class="hero">
      <firstSection />
      <img
        class="grid-img animate__animated animate__fadeInRight"
        src="/career/hero-right-pic.png"
        alt="pic"
      />
    </div>
    <div>
      <!-- <Socials /> -->
    </div>
    <div>
      <SecondSection />
    </div>

    <Footer />
  </div>
</template>

<script>
import firstSection from "../components/careers/FirstSection.vue";
import SecondSection from "../components/careers/SecondSection.vue";
import Footer from "../components/NewHomepage/Footer.vue";

export default {
  name: "App",
  components: {
    firstSection,
    SecondSection,
    Footer,
    // GridedImages,
  },
};
</script>

<style>
.hero {
  margin: 2rem;
  padding-top: 9rem;
  display: grid;
  align-items: center;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
}
.photo-sec {
  border: 2px solid red;
}
.each-pic {
  max-width: 40%;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.the-component {
  max-width: 100%;
  width: 100%;
  max-width: 100%;
  padding: 0;
}
.grid-img {
  height: auto;
  max-width: 100%;
  /* width: 80%; */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 100%;
  margin: 5px;
  padding: 10px;
}
@media screen and (max-width: 1300px) {
  .grid-img {
    max-width: 100%;
    /* width: 50%; */
    margin: 0 auto;
  }
}
@media screen and (max-width: 800px) {
  .hero {
    padding-top: 9rem;
    /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
  }
}
@media screen and (max-width: 500px) {
  .hero {
    /* padding-top: 3rem; */
    margin: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}
@media screen and (max-width: 390px) {
  .hero {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}
</style>
