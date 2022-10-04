<template>
  <main>
    <article>
      <component
        :is="components[section.component + 'Component']"
        v-for="section in currentPage.sections"
        :key="section.id"
        :page="currentPage"
        :section="section"
      />
    </article>
  </main>
  <PortalFooter :portal="currentPage.portal" />
</template>

<script>
import PortalFooter from "src/components/Portals/Portal3/PortalFooter.vue";
import AboutComponent from "components/Portals/Portal3/Sections/AboutComponent.vue";
import CoursesComponent from "components/Portals/Portal3/Sections/CoursesComponent.vue";
import CtaComponent from "components/Portals/Portal3/Sections/CtaComponent.vue";
import SliderComponent from "components/Portals/Portal3/Sections/SliderComponent.vue";
// import "src/css/Portal3.scss";

export default {
  name: "LoaderComponent",
  props: {
    currentPage: {
      type: Object,
    },
  },
  components: { PortalFooter },
  setup() {
    return {
      components: {
        SliderComponent,
        CtaComponent,
        AboutComponent,
        CoursesComponent,
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
