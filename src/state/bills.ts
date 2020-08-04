import { reactive } from "vue";

export interface Bill {
  desc: string;
  price: number;
}

export class Bills {
  List: Bill[];

  constructor() {
    this.List = [];
  }

  get list(): Bill[] {
    return this.List;
  }

  get sum() {
    return this.List.reduce((a, b) => {
      return a + b.price;
    }, 0);
  }
  add_bill(bill: Bill) {
    this.List.push(bill);
  }
}

const bills = reactive({
  data: new Bills(),
});

export default bills;
