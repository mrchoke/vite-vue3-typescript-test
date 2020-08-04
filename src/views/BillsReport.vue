<template>
  <h1>Report</h1>
  <h2>Hello: {{ state.yourname }}</h2>
  <hr />
  <bills-list />
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import { Bill } from "../state/bills";
import BillsList from "../components/BillsList.vue";

export default defineComponent({
  name: "BillsReport",
  components: { BillsList },
  setup() {
    const state = inject("state");
    return { state };
  },
});
</script>
