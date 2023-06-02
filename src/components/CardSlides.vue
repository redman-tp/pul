<template>
  <div class="wrapperr q-pt-lg">
    <div class="cards small_container">
      <Splide
        :options="{
          rewind: true,
          gap: 30,
          pagination: false,
          type: 'loop',
          arrows: false,
          perPage: 3,
          autoScroll: {
            speed: 0.5,
          },
          breakpoints: {
            640: {
              perPage: 1,
              gap: 20,
            },
            1000: {
              perPage: 2,
            },
            1454: {
              perPage: 3,
            },
            2000: {
              perPage: 3,
            },
          },
        }"
        :extensions="extensions"
        aria-label="My Favorite Images"
      >
        <SplideSlide v-for="(card, index) in images" :key="index">
          <img :src="card.img" alt="" />
        </SplideSlide>
      </Splide>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
// Default theme
import "@splidejs/vue-splide/css";

// or only core styles
import "@splidejs/vue-splide/css/core";
export default {
  components: { Splide, SplideSlide },
  props: ["images"],
  data() {
    return {
      dialog: false,
      plan: [],
      data: {},
      errors: [],
      options: {
        drag: "free",
        rewind: true,
        focus: "center",
        autoWidth: true,
        pagination: false,
        arrows: false,
        gap: 10,
        perPage: 5,
        autoScroll: {
          speed: 5,
        },
      },
      extensions: {
        AutoScroll,
      },
    };
  },
};
</script>

<style scoped>
.hold {
  background: #000;
  color: #fff;
  height: 300px;
  box-shadow: rgba(255, 255, 255, 0.24) 0px 3px 8px;
  border-radius: 10px;
}

.hold .head {
  font-size: 16px;
  padding: 2rem;
  height: 80px;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  line-height: 1.2;
  background: rgba(66, 66, 66, 0.49);
  border-radius: 10px;
}

i {
  margin-right: 1rem;
  background: #000;
  padding: 0.5rem;
  box-shadow: 0px 3.85089px 34.658px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}

.hold .body {
  padding: 0 1rem 0rem;
  font-size: 14px;
}
img {
  border-radius: 8px;
  height: 100%;
}

@media (min-width: 1200px) {
  .hold {
    height: 250px;
  }

  .hold .body {
    padding: 0 1rem 1rem;
  }
}
@media (max-width: 1100px) {
  .hold {
    height: 350px;
  }
  .hold .head {
    height: 100px;
  }
}
@media (max-width: 640px) {
  .small_container {
    width: 90%;
    margin: 0 auto;
  }
  .hold {
    height: 330px;
    width: 95%;
    padding-bottom: 2rem;
  }

  .hold .head {
    padding: 2rem 1rem;
  }
}
</style>
