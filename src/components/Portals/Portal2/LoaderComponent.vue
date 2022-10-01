<template>
  <main class="main">
    <article>
      <component
        :is="components[section.component + 'Component']"
        v-for="section in currentPage.sections"
        :key="section.id"
        :page="currentPage"
        :section="section"
      >
      </component>
      <!-- <hero-component /> -->
      <!-- <programs-component /> -->
      <!-- <about-component /> -->
      <!-- <courses-component /> -->
      <!-- <video-component /> -->
      <!-- <counters-component /> -->
      <!-- <blog-component /> -->
    </article>
  </main>
  <PortalFooter :portal="currentPage.portal" />
</template>

<script>
import PortalFooter from "src/components/Portals/PortalFooter.vue";
import HeroComponent from "components/Portals/Portal2/Sections/HeroComponent.vue";
import ProgramsComponent from "components/Portals/Portal2/Sections/ProgramsComponent.vue";
import AboutComponent from "components/Portals/Portal2/Sections/AboutComponent.vue";
import CoursesComponent from "components/Portals/Portal2/Sections/CoursesComponent.vue";
import VideoComponent from "components/Portals/Portal2/Sections/VideoComponent.vue";
import CounterComponent from "components/Portals/Portal2/Sections/CountersComponent.vue";
import BlogComponent from "components/Portals/Portal2/Sections/BlogComponent.vue";
import "src/css/portal2.scss";

export default {
  name: "PageComponent2",
  props: {
    currentPage: {
      type: Object,
    },
  },
  components: { BlogComponent, PortalFooter },
  setup() {
    return {
      components: {
        HeroComponent,
        ProgramsComponent,
        AboutComponent,
        CoursesComponent,
        VideoComponent,
        CounterComponent,
        BlogComponent,
      },
    };
  },
  methods: {
    loadBlogs() {
      this.loading = true;
      this.$api
        .get("portals")
        .then(({ data }) => {
          this.loading = false;
          this.portal_list = data.data;
        })
        .catch((e) => {
          this.loading = false;
          this.$plugins.reader.error(e);
        });
    },
  },
};
</script>
