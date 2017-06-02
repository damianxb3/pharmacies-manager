import {Pharmacy} from "../pharmacies/pharmacy";
import {Medicine} from "../medicines/medicine";

export class MedicineItem {
  id: number;
  quantity: number;
  pharmacy: Pharmacy;
  medicine: Medicine;

}
