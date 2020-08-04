<template>
  <h1>Home</h1>
  <h2>Hello: {{ state.yourname }}</h2>
  <input type="text" v-model="state.yourname" />
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";

export default defineComponent({
  name: "Home",
  setup() {
    const state = inject("state");
    return {
      state,
    };
  },
});
</script>
