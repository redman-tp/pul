<template>
  <q-page>
    <Hero2 />
    <FocusAreasCarousel />
  </q-page>
</template>

<script>
import Hero2 from 'src/components/NewHomepage/Hero2.vue'
import FocusAreasCarousel from 'src/components/NewHomepage/FocusAreasCarousel.vue'

export default {
  name: 'PageIndex',
  components: {
    Hero2,
    FocusAreasCarousel,
  },
}
</script>
