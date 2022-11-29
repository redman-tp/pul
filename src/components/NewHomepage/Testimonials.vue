<template>
  <div class="testimonials">
    <div class="wrapper">
      <div class="hold container">
        <h2 class="who">Testimonials</h2>
        <p class="desc">Here’s what people say about us</p>
      </div>
      <img src="/images/bg.png" alt="" />
      <Testi />
    </div>
  </div>
  <div class="emojis">
    <Emojis />
  </div>
</template>

<script>
import Testi from "../components/Testi.vue";
import Emojis from "../components/Emojis.vue";
export default {
  components: {
    Testi,
    Emojis,
  },
};
</script>

<style scoped>
.wrapper {
  padding: 10rem 0;
  position: relative;
  overflow: hidden;
  background: rgba(34, 34, 34, 0.1);
}
.who {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 42px;
  text-transform: capitalize;
  color: #8d354a;
}
img {
  position: absolute;
  top: 0;
  right: -50%;
}

p.desc {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 800;
  /* font-size: 25px; */
  font-size: 45px;
  line-height: 130%;
  text-align: justify;
  color: #000000;
}

h6 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  /* font-size: 30px; */
  line-height: 42px;
  text-transform: capitalize;
  color: #facc07;
}

img {
  height: 100%;
}

.emojis {
  position: absolute;
  bottom: 0;
  z-index: 10;
}

@media (max-width: 768px) {
  img {
    right: -30%;
  }
}
</style>
