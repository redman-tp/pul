<template>
  <q-page class="">
    <Hero2 />
    <!-- <Slides /> -->
    <Who />
    <FocusAreasCarousel />
    <Team />
    <OurOutings />

    <Metaverse />
    <Sponsors />
    <RecentUpdates />
    <Newsletter />
    <!-- <Testimonials /> -->
    <FooterMain />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import Hero2 from '../components/NewHomepage/Hero2.vue'
import Who from '../components/NewHomepage/Who.vue'
import FocusAreasCarousel from '../components/NewHomepage/FocusAreasCarousel.vue'
import OurOutings from '../components/NewHomepage/OurOutings.vue'
import Team from '../components/NewHomepage/Team.vue'
import Newsletter from '../components/NewHomepage/Newsletter.vue'
// import Testimonials from "../components/NewHomepage/Testimonials.vue";
import Metaverse from '../components/NewHomepage/Metaverse.vue'
import Sponsors from '../components/NewHomepage/Sponsors.vue'
import RecentUpdates from '../components/NewHomepage/RecentUpdates.vue'
import FooterMain from '../components/NewHomepage/Footer.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    Who,
    Team,
    Newsletter,
    Hero2,
    Metaverse,
    Sponsors,
    RecentUpdates,
    OurOutings,
    FooterMain,
    FocusAreasCarousel,
  },
})
</script>
