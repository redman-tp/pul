<template>
  <!--
        - #CATEGORY
      -->

  <section class="section category" aria-label="category">
    <div class="container">
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

      <ul class="grid-list" v-if="section.cards">
        <li v-for="card in section.cards" :key="card.id">
          <div
            class="category-card"
            :class="`bg-${card.color}-1`"
            style="--color: 170, 75%, 41%"
          >
            <div class="card-icon">
              <img
                :src="card.image"
                width="40"
                height="40"
                loading="lazy"
                :alt="card.title"
                class="img"
              />
            </div>

            <h3 class="h3">
              <a href="#" class="card-title">{{ card.title }}</a>
            </h3>

            <p class="card-text">
              {{ card.content }}
            </p>

            <span class="card-badge" :class="`text-${card.color}-10`">{{
              card.badge_text
            }}</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
// import "src/css/homepage2.scss"
import Highlighter from "vue-highlight-words";
export default {
  name: "ProgramsComponent",
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
