<template>
  <h1>Hello About</h1>
  <h2>Hello: {{ state.yourname }}</h2>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";

export default defineComponent({
  name: "About",
  setup() {
    const state = inject("state");
    return {
      state,
    };
  },
});
</script>
