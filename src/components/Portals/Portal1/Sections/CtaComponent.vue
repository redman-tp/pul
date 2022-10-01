<template>
  <!--
        - #CTA
      -->

  <section class="cta">
    <div class="container">
      <div class="title-wrapper">
        <h2 class="h2 cta-title">
          <span>{{ section.title }}</span>

          <img
            src="/pe/cta-vector.svg"
            alt="Vector arrow art"
            class="vector-line"
          />
        </h2>

        <q-btn :to="section.link.url" class="btn btn-primary">{{
          section.link.title
        }}</q-btn>
      </div>

      <div
        class="cta-banner"
        :style="{ backgroundImage: `url(${section.image})` }"
      ></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CtaComponent",
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
