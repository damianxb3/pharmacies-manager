import {Component, OnInit} from "@angular/core";
import {MedicineItemService} from "./medicineItem.service";
import {Pharmacy} from "../pharmacies/pharmacy";
import {PharmaciesService} from "../pharmacies/pharmacies.service";
import {MedicineItem} from "./medicineItem";

@Component({
  selector: 'app-medicineitem',
  templateUrl: './medicineItem.component.html',
  styleUrls: ['./medicineItem.component.css']
})
export class MedicineItemComponent implements OnInit{

  selected: Pharmacy;
  pharmacies: Pharmacy[];
  medicineItems: MedicineItem[];

  constructor(private medicineItemService: MedicineItemService,
              private pharmaciesService: PharmaciesService) { }

  ngOnInit(){
    this.pharmaciesService.getAll().then(pharmacies => {
      this.pharmacies = pharmacies;
      this.selected = this.pharmacies[0];
      this.getMedicineItem();
    });
  }

  getMedicineItem(): void {
    this.medicineItemService.getList(this.selected.id)
      .then(medicineItems => this.medicineItems = medicineItems );
  }
}
