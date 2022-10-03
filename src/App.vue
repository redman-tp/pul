<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
// import "remixicon/fonts/remixicon.css";

export default defineComponent({
  name: "App",
  mounted() {
    let script = document.createElement("script");
    script.src = "/fa.pro.js";
    document.head.append(script);
  },
});
</script>
