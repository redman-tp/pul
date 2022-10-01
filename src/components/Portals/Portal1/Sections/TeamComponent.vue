<template>
  <!--
        - #TEAM
      -->

  <section class="instructor">
    <div class="container">
      <img
        src="/pe/instructor-vactor-1.svg"
        alt="Vector line art"
        class="vector-line"
      />

      <div class="title-wrapper">
        <h2 class="h2 instructor-title">{{ section.title }}</h2>

        <q-btn :to="section.link.url" class="btn btn-primary">{{
          section.link.title
        }}</q-btn>
      </div>

      <ul class="instructor-list">
        <li v-for="card in section.cards" :key="card.id">
          <div class="instructor-card">
            <figure class="card-banner">
              <img :src="card.image" alt="John Smith" />
            </figure>

            <a href="#">
              <h3 class="card-title">{{ card.title }}</h3>
            </a>

            <p class="card-subtitle">{{ card.content }}</p>

            <ul class="card-social-list">
              <li v-for="(link, i) in card.infos" :key="i + link.type">
                <a :href="link.link" class="card-social-link">
                  <i :class="`fa-brands fa-${link.type}`"></i>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>

      <img
        src="/pe/instructor-vactor-2.svg"
        alt="Vector line art"
        class="vector-line"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "TeamComponent",
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
