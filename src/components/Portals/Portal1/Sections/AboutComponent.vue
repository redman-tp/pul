<template>
  <!--
        - #ABOUT
      -->

  <section class="about">
    <div class="container">
      <figure class="about-banner">
        <img :src="section.image" alt="Eduland students" class="about-img" />

        <img
          src="/pe/about-vector.svg"
          alt="Vector line art"
          class="vector-line"
        />

        <button class="play-btn">
          <i class="fa-duotone fa-play"></i>
        </button>
      </figure>

      <div class="about-content">
        <h2 class="h2 about-title">
          {{ section.title }}
        </h2>

        <p class="section-text">
          {{ section.content }}
        </p>

        <q-btn :to="section.link.url" class="btn btn-primary">{{
          section.link.title
        }}</q-btn>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutComponent",
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
