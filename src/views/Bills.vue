<template>
  {{ state.bills }}
  <h2>Hello: {{ state.yourname }}</h2>

  <bills-form />
  <hr />
  <bills-list />
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import { Bill } from "../state/bills";
import BillsForm from "../components/BillsForm.vue";
import BillsList from "../components/BillsList.vue";

export default defineComponent({
  name: "Bills",
  components: { BillsForm, BillsList },
  setup() {
    const state = inject("state");
    return { state };
  },
});
</script>
