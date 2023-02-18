<template>
  <div class="metaverse">
    <p class="our_focus">Our Focus Area</p>
    <img src="controller.svg" class="top_image" alt="VR Controller image" />
    <div class="q-px-none">
      <q-carousel
        animated
        v-model="slide"
        infinite
        :autoplay="true"
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
        class="main_carousel"
      >
        <q-carousel-slide class="q-px-none carousel_item" :name="1">
          <div class="carousel_heading">The Metaverse</div>
          <div class="carousel">
            <div class="left_side">
              <div class="section_image q-mt-lg">
                <img src="/metaverse1.svg" alt="WOman holding VR Controller" />
              </div>
            </div>
            <div class="right_side">
              <p>
                We’ve joined in creating a world where you get to meet,
                collaborate, play games, organize and attend concerts without
                actually being there in person. Going beyond the restriction of
                your device regions, the Metaverse offers you a combination of
                extended-XR (augmented, mixed, and virtual technologies) and
                physical reality in a resolute and shared virtual space.
              </p>
              <p>
                Kaduna State is the first sub-national government in Nigeria
                leveraging the metaverse. We made it happen!
              </p>

              <q-btn
                flat
                text-color="white"
                class="view_portfolio"
                label="View "
                to="/metaverse"
                no-caps
                icon-right="fa-solid fa-arrow-right"
                size="1.1rem"
              />
            </div>
          </div>
        </q-carousel-slide>
        <!-- <q-carousel-slide class="q-px-none carousel_item" :name="2">
          <div class="carousel_heading">Co-Working Space</div>
          <div class="carousel">
            <div class="left_side">
              <div class="section_image q-mt-lg">
                <img src="guy.svg" alt="A guy operating a Laptop" />
              </div>
            </div>
            <div class="right_side">
              <p>
                We are a team of innovators who have gained a reputation in
                delivering quality services by delivering time critical
                solutions to solve urban and rural problems.
              </p>
              <p>
                We are a team of innovators who have gained a reputation in
                delivering quality services by delivering time critical
                solutions to solve urban and rural problems.
              </p>

              <q-btn
                flat
                text-color="white"
                class="view_portfolio"
                label="View Portfolio"
                no-caps
                icon-right="mdi-chevron-down"
                size="1.1rem"
              />
            </div>
          </div>
        </q-carousel-slide> -->
        <q-carousel-slide class="q-px-none carousel_item" :name="2">
          <div class="carousel_heading">Content Creation</div>
          <div class="carousel">
            <div class="left_side">
              <div class="section_image q-mt-lg">
                <img
                  src="/images/greyc.png"
                  alt="WOman holding VR Controller"
                />
              </div>
            </div>
            <div class="right_side">
              <p>
                “Redefining the African Creative Industry”, our mantra for
                content creation motivates our belief in the fact that
                everything can be created.
              </p>
              <p>
                By letting our creative light bulbs flick on, we are a
                sustainable and inspirational community that explores and
                creates amazing stuff from brands, content, music, art, films,
                etc.
              </p>

              <q-btn
                flat
                text-color="white"
                class="view_portfolio"
                label="View"
                to="/greycreate"
                no-caps
                icon-right="fa-solid fa-arrow-right"
                size="1.1rem"
              />
            </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide class="q-px-none carousel_item" :name="3">
          <div class="carousel_heading">Tech Education</div>
          <div class="carousel">
            <div class="left_side">
              <div class="section_image q-mt-lg">
                <img
                  src="/images/teched.png"
                  alt="WOman holding VR Controller"
                />
              </div>
            </div>
            <div class="right_side">
              <p>
                Talk about training the next set of solution-birthers. Through
                our academy’s training, we teach the skills needed to create,
                develop, execute, or operate in-demand technologies.
              </p>
              <p>
                Our GreyAcademy is a community space led by Greysoft
                technologies that provide training programs, interview prep
                coaching, and free webinars to you if you are looking to upskill
                and land your dream jobs.
              </p>

              <q-btn
                flat
                text-color="white"
                class="view_portfolio"
                label="View"
                to="/greyacademy"
                no-caps
                icon-right="fa-solid fa-arrow-right"
                size="1.1rem"
              />
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {
      slide: ref(1),
    };
  },
};
</script>

<style scoped>
p {
  margin: 0;
}
.metaverse {
  padding: 5% 0;
  position: relative;
  font-family: "Poppins";
}
.our_focus {
  font-size: 1.5rem;
  font-weight: 400;
  color: #8d354a;
  padding-left: 10%;
  margin: 0.2% 0;
}
.carousel_item {
  margin: 0;
}
.carousel_heading {
  font-size: 3.2rem;
  /* margin: 1% 0; */
  padding-left: 10%;
  font-weight: 900;
  color: #000000 !important;
}
.top_image {
  position: absolute;
  right: 0;
  top: -20%;
  /* background: red; */
  /* height: 100%; */
  width: 22%;
  z-index: 3;
}
p {
  color: #000000 !important;
}
.main_carousel {
  height: fit-content !important;
  padding: 0;
}
.carousel_item {
  transition: 1s ease !important;
}
.left_side .right_side {
  /* width: 50%; */
}
.section_image img {
  width: 100%;
}
.carousel {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 40px;
}
.carousel .right_side {
  padding-right: 30%;
}
.carousel .right_side p {
  font-size: 1.35rem;
  font-weight: 400;
  text-align: justify;
  margin: 1%;
}
.view_portfolio {
  background: linear-gradient(
    285.19deg,
    rgba(207, 2, 187, 0.94) -17.8%,
    rgba(211, 172, 31, 0.94) 67.55%,
    rgba(240, 13, 67, 0.94) 152.9%
  );
  border-radius: 2px;
  margin: 7% 0;
}
@media screen and (max-width: 1270px) {
  .carousel_item .carousel_heading {
    font-size: 2.5rem;
    margin: 0;
  }
  .our_focus {
    font-size: 1.3rem;
    margin: 0;
  }
  .carousel_item {
    padding: 0 !important;
  }
  .carousel .right_side p {
    font-size: 1.28rem;
  }
}
@media screen and (max-width: 1150px) {
  .section_image {
    margin-top: 1% !important;
  }
  .carousel .right_side p {
    font-size: 1.18rem;
  }
  .view_portfolio {
    font-size: 0.9rem !important;
  }
}
@media screen and (max-width: 1100px) {
  .our_focus,
  .carousel_item .carousel_heading {
    padding-left: 6%;
  }
  .carousel .right_side {
    padding-right: 30%;
  }
  .carousel {
    gap: 30px;
  }
  .carousel_item .carousel_heading {
    font-size: 2rem;
    margin: 0;
  }
  .our_focus {
    font-size: 1.2rem;
  }
}
@media screen and (max-width: 940px) {
  .carousel .right_side p {
    font-size: 1rem;
  }
  .view_portfolio {
    font-size: 0.85rem !important;
  }
}
@media screen and (max-width: 860px) {
  .carousel .right_side {
    padding-right: 20%;
  }
  .our_focus {
    font-size: 1.05rem;
  }
  .carousel_item .carousel_heading {
    font-size: 1.7rem;
  }
}
@media screen and (max-width: 770px) {
  .carousel {
    grid-template-columns: 1fr;
    padding: 0 6%;
    gap: 15px;
  }
  .top_image {
    display: none;
  }
  .carousel .right_side {
    padding-right: 5%;
  }
  .carousel .right_side p {
    text-align: left;
    font-size: 1.1rem;
    margin: 2% 0;
  }
  .view_portfolio {
    font-size: 0.9rem !important;
    margin: 3% 0;
  }
}
@media screen and (max-width: 580px) {
  .our_focus {
    font-size: 0.9rem;
    margin: 0;
  }
  .carousel_item .carousel_heading {
    font-size: 1.4rem;
    height: fit-content;
  }
  .carousel .right_side p {
    font-size: 1rem;
  }
  .carousel .right_side {
    padding-right: 0;
  }
  .view_portfolio {
    font-size: 0.85rem !important;
    margin: 3% 0;
  }
}
</style>
