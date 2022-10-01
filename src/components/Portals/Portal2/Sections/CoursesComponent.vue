<template>
  <!--
        - #COURSE
      -->

  <section class="section course" id="courses" aria-label="course">
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

      <ul class="grid-list" v-if="section.cards">
        <li v-for="card in section.cards" :key="card.id">
          <div class="course-card">
            <figure
              class="card-banner img-holder"
              style="--width: 370; --height: 220"
            >
              <img
                :src="card.image"
                width="370"
                height="220"
                loading="lazy"
                :alt="card.title"
                class="img-cover"
              />
            </figure>

            <div class="abs-badge">
              <i class="fa-duotone fa-timer"></i>

              <span class="span">3 Weeks</span>
            </div>

            <div class="card-content">
              <span class="badge">Beginner</span>

              <h3 class="h3">
                <a href="#" class="card-title">{{ card.title }}</a>
              </h3>

              <div class="wrapper" v-if="card.rating">
                <div class="rating-wrapper">
                  <i
                    class="fa-duotone fa-star"
                    v-for="(rating, i) in $plugins.helpers.range(card.rating)"
                    :key="i"
                  ></i>
                </div>

                <p class="rating-text">({{ card.rating }} Rating)</p>
              </div>

              <data class="price" value="29">{{
                $plugins.helpers.money(card.price)
              }}</data>

              <ul class="card-meta-list" v-if="card.infos">
                <li
                  class="card-meta-item"
                  v-for="(info, i) in card.infos"
                  :key="i"
                >
                  <i class="fa-duotone fa-school"></i>

                  <span class="span">{{ info }}</span>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>

      <q-btn :to="section.link.url" class="btn btn-primary">
        <span class="span">{{ section.link.title }}</span>

        <i class="fa-duotone fa-arrow-right"></i
      ></q-btn>
    </div>
  </section>
</template>

<script>
import Highlighter from "vue-highlight-words";
export default {
  name: "CoursesComponent",
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
