import { Component, OnInit } from '@angular/core';
import { MedicineItemService } from './medicineItem.service';

import {Router} from "@angular/router";
import {Pharmacy} from "../pharmacies/pharmacy";
import {PharmaciesService} from "../pharmacies/pharmacies.service";
import {MedicineItem} from "./medicineItem";
import {MedicinesService} from "../medicines/medicines.service";

@Component({
  selector: 'app-medicineitem',
  templateUrl: './medicineItem.component.html',
  styleUrls: ['./medicineItem.component.css']
})
export class MedicineItemComponent implements OnInit{

  selected = false;
  pharmacies: Pharmacy[];
  medicineItems: MedicineItem[];
  constructor(private medicineItemService: MedicineItemService,
              private medicineService: MedicinesService,
              private pharmaciesService: PharmaciesService,
              private router: Router) {
  }

  ngOnInit(){
    this.pharmaciesService.getAll().then(pharmacies => this.pharmacies = pharmacies);
  }

  getMedicineItem(id: number): void {
    console.log("zmiana "+id);
    this.medicineItemService.getList(id)
      .then(medicineItems => {
        this.medicineItems = medicineItems;
        this.selected = true;
        console.log(medicineItems[0].medicine.id)
      });

  }

  insertNames(): void {
    for(let x of this.medicineItems) {
        this.medicineService.get(x.medicine.id)
          .then(medicine => x.medicine = medicine);
    }
  }



}
