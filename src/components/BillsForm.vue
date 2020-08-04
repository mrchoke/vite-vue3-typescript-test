<template>
  <hr />
  <div>
    <div>
      Description:
    </div>
    <div>
      <input type="text" v-model="bill.desc" />
    </div>
    <div>Price:</div>
    <div><input type="number" v-model="bill.price" /></div>
    <div>
      <button type="button" @click="addBill()">ADD</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import bills, { Bill } from "../state/bills";

export default defineComponent({
  name: "BillsForm",
  setup() {
    const bill = ref({} as Bill);

    const addBill = () => {
      bills.data.add_bill(bill.value);
      bill.value = {} as Bill;
    };
    return {
      bill,
      addBill,
    };
  },
});
</script>

<style></style>
