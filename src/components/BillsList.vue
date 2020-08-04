<template>
  <table class="center">
    <thead>
      <th>Desc</th>
      <th>Price</th>
    </thead>
    <tr v-for="(item, i) in list" :key="i">
      <td>{{ item.desc }}</td>
      <td>{{ item.price }}</td>
    </tr>
    <tfoot>
      <td>Total</td>
      <td>{{ bills.data.sum }}</td>
    </tfoot>
  </table>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import bills from "../state/bills";

export default defineComponent({
  name: "BillsList",
  setup() {
    const list = computed(() => bills.data.list);
    return {
      list,
      bills,
    };
  },
});
</script>

<style scoped>
.center {
  margin: 0 auto;
}
table {
  width: 50%;
  border: 1px;
  border-style: dotted;
}
table th {
  background-color: bisque;
}

table tr:nth-child(odd) {
  background-color: #e8e8e8;
}
table tfoot {
  background-color: thistle;
}
</style>
