<template>
  <div>
    <q-inner-loading :showing="visible">
      <q-spinner-puff size="5.5em" color="primary" />
    </q-inner-loading>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "LoadingComponent",
  setup() {
    return {
      visible: ref(true),
    };
  },
};
</script>
