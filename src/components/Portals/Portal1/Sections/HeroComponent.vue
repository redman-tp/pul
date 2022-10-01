<template>
  <!--
        - #HERO
      -->

  <section class="hero">
    <div class="container">
      <figure class="hero-banner">
        <img
          :src="section.image"
          alt="A young lady sits, holding a pen and a notebook."
        />
      </figure>

      <div class="hero-content">
        <h1 class="h1 hero-title">{{ section.title }}</h1>

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
  name: "HeroComponent",
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
