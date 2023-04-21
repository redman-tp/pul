<template>
  <div class="wrapper">
    <div class="hold container">
      <h2 class="who">Who we are</h2>
      <p class="desc">
        We are a team of innovators who aim to offer quality technical services.
        The reality we create at Greysoft technologies is that young African
        talent can explore numerous job opportunities from the comfort of their
        home country and not have a limiting dream of living overseas just to
        exhibit those talents. At Greysoft, we place ‘people’ right at the
        center of everything we do,as we are driven by the community we serve.
        We enable an atmosphere of inspiration and productivity.
      </p>
    </div>

    <div class="grid">
      <div class="img">
        <img src="/images/ralphoculus.jpg" alt="" />
      </div>

      <div class="text text1">
        <h6 class="featured">Featured Projects</h6>

        <p>
          Making a difference through technological solutions. Here are some of
          our featured projects.
        </p>

        <!-- <q-btn icon-right="fa-solid fa-arrow-right" label="Our Projects" /> -->
      </div>
      <div class="text2 text">
        <h6 class="featured">Read Case Studies</h6>

        <p>
          From our evolution through the Metaverse to our demonstrable services,
          we make it a point to provide access to technological solutions.
        </p>

        <!-- <q-btn icon-right="fa-solid fa-arrow-right" label="See Case Studies" /> -->
      </div>
      <div class="img2">
        <img src="/images/company.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  background: rgba(34, 34, 34, 0.1);
  padding-top: 5rem;
}
.who {
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 42px;
  text-transform: capitalize;
  color: #8d354a;
}

.hold {
  margin-bottom: 5rem;
}

.text {
  background: linear-gradient(
    285.19deg,
    rgba(5, 5, 5, 0.67) -17.8%,
    rgba(173, 0, 255, 0.67) 56.88%,
    rgba(255, 0, 0, 0.67) 152.9%
  );

  padding-left: 3rem;
}

.text p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  /* font-size: 30px; */
  font-size: 25px;
  line-height: 100%;
  padding-right: 1.5rem;
  color: #ffffff;
  margin: 0.75rem 0 2rem;
}

p.desc {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 900;
  font-size: 25px;
  /* font-size: 45px; */
  /* font-size: 45px; */
  line-height: 130%;
  text-align: justify;
  color: #000000;
  margin-top: 1rem;
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
.q-btn {
  width: 250px;
}

.grid {
  display: grid;
  grid-template-areas:
    "img1 text1"
    "text2 img2";
  grid-auto-flow: dense;
  padding-top: 2rem;
  gap: 0 !important;
  max-width: 900px;
  margin: 0 auto;
}

.grid .img {
  grid-area: img1;
  height: 100%;
  width: 100%;
}
.grid .text1 {
  grid-area: text1;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.grid .text2 {
  grid-area: text2;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
}
.grid .img2 {
  grid-area: img2;
  height: 100%;
  width: 100%;
}

img {
  height: 100%;
  object-fit: cover;
}

.grid .q-btn {
  background: #ffffff;
  border-radius: 4px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 42px;
  text-transform: capitalize;
  color: #8d354a;
  margin-top: 1.5rem;
}

@media (max-width: 1100px) {
  .hero .q-carousel__navigation--bottom {
    bottom: 0%;
  }

  .grid {
    max-width: 800px;
  }
}
@media (max-width: 768px) {
  .grid {
    grid-template-areas:
      "img1 "
      "text1"
      "img2"
      "text2";
  }

  .text {
    height: 300px !important;
  }

  .text {
    padding-left: 1rem;
  }
  .text p {
    font-size: 22px;
    max-width: 600px;
  }

  img {
    object-fit: cover;
  }

  .grid .q-btn {
    font-size: 16px;
    width: 200px;
  }
  .wrapper {
    padding-top: 8rem;
  }
  .hold {
    margin-bottom: 1rem;
  }

  .grid {
    padding-top: 8rem;
  }
}

@media (max-width: 768px) {
  .text {
    height: 200px !important;
  }

  .text p {
    font-size: 18px;
  }
}
@media (max-width: 500px) {
  .wrapper {
    padding-top: 4rem;
  }

  .grid {
    padding-top: 4rem;
  }
}
</style>
