<template>
  <!--
        - #HERO
      -->

  <section
    class="section hero has-bg-image"
    id="home"
    aria-label="home"
    :style="[
      { backgroundImage: `url('${section.background || '/pe/hero-bg.svg'}')` },
    ]"
  >
    <div class="container">
      <div class="hero-content">
        <h1 class="h1 section-title">
          <highlighter
            highlightClassName="transparent text-red"
            :searchWords="section.title_highlight.split(' ')"
            :textToHighlight="section.title"
            v-if="section.title_highlight"
          />
          <span v-else>{{ section.title }}</span>
        </h1>

        <p class="hero-text">
          {{ section.subtitle }}
        </p>

        <q-btn :to="section.link.url" class="btn btn-primary">
          <span class="span">{{ section.link.title }}</span>

          <i class="fa-duotone fa-arrow-right"></i
        ></q-btn>
      </div>

      <figure class="hero-banner">
        <div class="img-holder one" style="--width: 270; --height: 300">
          <img
            :src="section.image"
            width="270"
            height="300"
            alt="hero banner"
            class="img-cover"
          />
        </div>

        <div class="img-holder two" style="--width: 240; --height: 370">
          <img
            :src="section.image2"
            width="240"
            height="370"
            alt="hero banner"
            class="img-cover"
          />
        </div>

        <img
          src="/pe/hero-shape-1.svg"
          width="380"
          height="190"
          alt=""
          class="shape hero-shape-1"
        />

        <img
          src="/pe/hero-shape-2.png"
          width="622"
          height="551"
          alt=""
          class="shape hero-shape-2"
        />
      </figure>
    </div>
  </section>
</template>

<script>
// import "src/css/homepage2.scss"
import Highlighter from "vue-highlight-words";
export default {
  name: "HeroComponent",
  components: {
    Highlighter,
  },
  props: {
    page: {
      type: Object,
      default: () => ({}),
    },
    section: {
      type: Object,
      default: () => ({}),
    },
  },
  setup() {
    return {};
  },
};
</script>
