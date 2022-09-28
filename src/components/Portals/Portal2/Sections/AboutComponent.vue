<template>
  <!--
        - #ABOUT
      -->

  <section class="section about" id="about" aria-label="about">
    <div class="container">
      <figure class="about-banner">
        <div class="img-holder" style="--width: 520; --height: 370">
          <img
            :src="section.background"
            width="520"
            height="370"
            loading="lazy"
            alt="about banner"
            class="img-cover"
          />
        </div>

        <img
          :src="section.image"
          width="360"
          height="420"
          loading="lazy"
          alt=""
          class="shape about-shape-1"
        />

        <img
          :src="section.image2"
          width="371"
          height="220"
          loading="lazy"
          alt=""
          class="shape about-shape-2"
        />

        <img
          src="/pe/about-shape-3.png"
          width="722"
          height="528"
          loading="lazy"
          alt=""
          class="shape about-shape-3"
        />
      </figure>

      <div class="about-content">
        <p class="section-subtitle">{{ section.subtitle }}</p>

        <h2 class="h2 section-title">
          <highlighter
            highlightClassName="transparent text-red"
            :searchWords="section.title_highlight.split(' ')"
            :textToHighlight="section.title"
            v-if="section.title_highlight"
          />
          <span v-else>{{ section.title }}</span>
        </h2>

        <p class="section-text">
          {{ section.content }}
        </p>

        <ul class="about-list" v-if="section.list">
          <li class="about-item" v-for="(litem, i) in section.list" :key="i">
            <i class="fa-duotone fa-check-double"></i>

            <span class="span">{{ litem }}</span>
          </li>
        </ul>

        <img
          src="/pe/about-shape-4.svg"
          width="100"
          height="100"
          loading="lazy"
          alt=""
          class="shape about-shape-4"
        />
      </div>
    </div>
  </section>
</template>

<script>
// import "src/css/homepage2.scss"
import Highlighter from "vue-highlight-words";
export default {
  name: "AboutComponent",
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
