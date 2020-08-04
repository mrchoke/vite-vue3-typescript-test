<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <br />
  <div>
    [<router-link :to="{ name: 'Home' }"> Home </router-link>] [<router-link
      :to="{ name: 'About' }"
    >
      About </router-link
    >] [<router-link :to="{ name: 'Hello' }"> Hello </router-link>][<router-link
      :to="{ name: 'Bills' }"
    >
      Bills </router-link
    >] [<router-link :to="{ name: 'BillsReport' }"> Report </router-link>]
  </div>

  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
});
</script>
