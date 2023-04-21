<template>
  <div class="updates">
    <p class="heading">Recent Updates</p>
    <h6>Our Campaigns</h6>
  </div>
  <div class="posts">
    <div class="post one">
      <img src="/images/empower.jpeg" />
      <div class="overlay">
        <!-- <p>Technology <span>13 Sept, 2021</span></p> -->
        <!-- <h4>The Kukah Prize for Young Innovators</h4> -->
        <!-- <p>
          The Kukah Prize for Young Innovators is an award of recognition for
          outstanding innovators in the field of technology presented to young
          Africans who show exceptional promise as developing leaders in digital
          transformation.
        </p> -->
      </div>
    </div>
    <div class="post two">
      <img src="/images/re2.png" />
      <div class="overlay">
        <!-- <p>Technology <span>13 Sept, 2021</span></p> -->
        <h4>
          Kaduna State Annual Investment Submit(KADINVEST 7.0 ) Metaverse
          Experience
        </h4>
        <p>
          Kaduna State becomes the first sub-national government in Nigeria
          leveraging the Metaverse with partnership from Greysoft .we made it
          happen!
        </p>
        <q-btn
          class="q-mt-md view"
          href="https://kadinvest.live"
          target="_blank"
        >
          Visit
        </q-btn>
      </div>
    </div>
    <div class="post three">
      <img src="/images/re4.png" />
      <div class="overlay">
        <!-- <p>Technology <span>13 Sept, 2021</span></p> -->
        <h4>Tech Hackathon: SDG 16.</h4>
        <p>
          Using technology to promote peaceful and inclusive societies and to
          solve insecurity within the state.
        </p>
      </div>
    </div>
    <div class="post four">
      <img src="kukah.svg" />
      <div class="overlay">
        <!-- <p>Technology <span>13 Sept, 2021</span></p> -->
        <h4>The Kukah Prize for Young Innovators</h4>
        <p>
          The Kukah Prize for Young Innovators is an award of recognition for
          outstanding innovators in the field of technology presented to young
          Africans who show exceptional promise.
        </p>

        <q-btn class="q-mt-md view" to="/kukah"> Visit </q-btn>
      </div>
    </div>
    <div class="post five">
      <img src="/images/oba.jpeg" />
      <div class="overlay">
        <!-- <p>Technology <span>13 Sept, 2021</span></p>
        <h4>The Kukah Innovation Prize and Awards</h4> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.updates {
  padding: 3% 10%;
  font-family: "Poppins";
}
p,
h4 {
  margin: 0;
}

p {
  margin-top: 1rem;
}
.heading {
  margin: 1% 0;
  font-size: 1.5rem;
  font-weight: 400;
  color: #8d354a;
}
.updates h6 {
  font-weight: 900;
  font-size: 2.5rem;
  color: #000000 !important;
}
.posts {
  margin: 3% 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 200px 200px 200px;
  gap: 10px;
  grid-template-areas:
    "one two three"
    "four two three"
    "four five three";
}
img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  object-position: top;
  /* border-radius: 10px; */
}

.view {
  background: linear-gradient(
    285.19deg,
    rgba(207, 2, 187, 0.94) -17.8%,
    rgba(211, 172, 31, 0.94) 67.55%,
    rgba(240, 13, 67, 0.94) 152.9%
  );
  color: #fff;
}
.one {
  grid-area: one;
}
.four {
  grid-area: four;
}
.two {
  grid-area: two;
}
.three {
  grid-area: three;
}
.five {
  grid-area: five;
}
.post {
  position: relative;
}
.overlay {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgb(0, 0, 0, 0.7);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 4% 7%;
}

.overlay .q-btn {
  width: 50%;
}
.overlay p {
  color: rgb(255, 255, 255, 0.9);
  font-size: 0.95rem;
}
.overlay h4 {
  font-weight: 900;
  font-size: 30px;
}
.overlay span {
  margin-left: 2%;
}
@media screen and (max-width: 1100px) {
  .updates {
    padding: 3% 6%;
  }
  .heading {
    font-size: 1.25rem;
  }
  .updates h6 {
    font-size: 2rem;
  }
  .overlay {
    padding: 0 4% 5%;
  }
  .overlay p {
    font-size: 0.9rem;
  }
  .overlay h4 {
    font-size: 1.7rem;
    line-height: 1.2;
  }
}
@media screen and (max-width: 870px) {
  .heading {
    font-size: 1.05rem;
  }
  .updates h6 {
    font-size: 1.7rem;
  }
  .posts {
    gap: 5px;
  }
  .overlay p {
    font-size: 1.2rem;
  }
  .overlay h4 {
    font-size: 1.5rem;
    line-height: 1.2;
  }

  .posts {
    grid-template-areas:
      "one two  two"
      "four two  two"
      "four five five"
      "three three three";
  }
}
@media screen and (max-width: 750px) {
  .posts {
    margin: 3% 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 150px 150px 150px 150px;
    grid-template-areas:
      "one "
      "one "
      "two"
      "two"
      "three"
      "four"
      "four"
      "five";
  }
  .overlay p {
    font-size: 1rem;
  }
  .overlay h4 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 1.3rem;
  }
}
@media screen and (max-width: 650px) {
  .heading {
    font-size: 0.95rem;
  }
  .updates h6 {
    font-size: 1.5rem;
  }
}
@media screen and (max-width: 560px) {
  .heading {
    font-size: 0.9rem;
    margin: 0;
    /* text-align: center; */
  }
  .posts {
    grid-template-areas:
      "four"
      "four"
      "four"
      "one"
      "one"
      "two"
      "two"
      "three"
      "five";
  }
  .updates h6 {
    font-size: 1.4rem;
    /* text-align: center; */
  }
  .overlay p {
    font-size: 0.85rem;
  }
  .overlay h4 {
    font-size: 1.2rem;
  }
}
</style>
