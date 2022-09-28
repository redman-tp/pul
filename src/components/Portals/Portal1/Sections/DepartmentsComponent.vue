<template>
  <!--
        - #DEPARTMENTS
      -->

  <section class="departments">
    <div class="container">
      <img
        src="/pe/departmets-vector.svg"
        alt="Vector line art"
        class="vector-line"
      />

      <h2 class="h2 departments-title">{{ section.title }}</h2>

      <ul
        class="departments-list"
        v-if="featured_pages.length && !loading_featured_pages"
      >
        <li v-for="featured in featured_pages" :key="featured.id">
          <div class="departments-card">
            <router-link
              :to="{
                name: 'portal.page',
                params: { portal: page.portal.slug, page: featured.slug },
              }"
              class="card-banner"
            >
              <figure>
                <img :src="featured.image" :alt="featured.title" />
              </figure>
            </router-link>

            <router-link
              :to="{
                name: 'portal.page',
                params: { portal: page.portal.slug, page: featured.slug },
              }"
            >
              <h3 class="h3 card-title">{{ featured.title }}</h3>
            </router-link>

            <p class="card-text">
              {{ featured.exerpt }}
            </p>

            <router-link
              :to="{
                name: 'portal.page',
                params: { portal: page.portal.slug, page: featured.slug },
              }"
              class="card-link"
            >
              <span>Learn More</span>
              <i class="fa-duotone fa-arrow-right"></i>
            </router-link>
          </div>
        </li>
      </ul>
      <q-btn :to="section.link.url" class="btn btn-primary">{{
        section.link.title
      }}</q-btn>
    </div>
  </section>
</template>

<script>
export default {
  name: "DepartmentsComponent",
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
  created() {
    this.loadPages();
  },
  data() {
    return {
      featured_pages: [],
      loading_featured_pages: false,
    };
  },
  methods: {
    loadPages() {
      this.loading_featured_pages = true;
      this.$api
        .get(
          `portals/${this.page.portal_id}/pages?filter[except]=${this.page.id}]&limit=3`
        )
        .then(({ data }) => {
          this.loading_featured_pages = false;
          this.featured_pages = data.data;
        })
        .catch((e) => {
          this.loading_featured_pages = false;
          this.$plugins.reader.error(e);
        });
    },
  },
};
</script>
