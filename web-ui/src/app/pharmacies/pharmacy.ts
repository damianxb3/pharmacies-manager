import { Address } from "../shared/address";

export class Pharmacy {
  id: number;
  address: Address;

  constructor() {
    this.address = new Address();
  }
}
