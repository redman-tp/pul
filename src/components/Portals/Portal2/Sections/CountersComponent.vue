<template>
  <!--
        - #STATE
      -->

  <section class="section stats" aria-label="stats" v-if="section.cards">
    <div class="container">
      <ul class="grid-list">
        <li v-for="card in section.cards" :key="card.id">
          <div
            class="stats-card"
            :class="`bg-${card.color}-2`"
            style="--color: 170, 75%, 41%"
          >
            <h3 class="card-title" :class="`text-${card.color}-7`">
              {{ card.title }}
            </h3>

            <p class="card-text">{{ card.content }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "CountersComponent",
  setup() {
    return {};
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
};
</script>
