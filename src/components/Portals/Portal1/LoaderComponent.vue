<template>
  <main>
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
      <!-- <about-component /> -->
      <!-- <departments-component /> -->
      <!-- <team-component /> -->
      <!-- <cta-component /> -->
    </article>
  </main>
  <PortalFooter :portal="currentPage.portal" />
</template>

<script>
import PortalFooter from "components/Portals/PortalFooter.vue";
import HeroComponent from "components/Portals/Portal1/Sections/HeroComponent.vue";
import AboutComponent from "components/Portals/Portal1/Sections/AboutComponent.vue";
import DepartmentsComponent from "components/Portals/Portal1/Sections/DepartmentsComponent.vue";
import TeamComponent from "components/Portals/Portal1/Sections/TeamComponent.vue";
import CtaComponent from "components/Portals/Portal1/Sections/CtaComponent.vue";

import "src/css/portal1.scss";

export default {
  name: "PageComponent1",
  props: {
    currentPage: {
      type: Object,
    },
  },
  components: {
    PortalFooter,
  },
  setup() {
    return {
      components: {
        HeroComponent,
        AboutComponent,
        DepartmentsComponent,
        TeamComponent,
        CtaComponent,
      },
    };
  },
  created() {
    console.log(this.currentPage);
  },
};
</script>
