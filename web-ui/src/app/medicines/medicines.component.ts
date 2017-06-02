import { Component, OnInit } from '@angular/core';

import {Medicine} from "./medicine";
import {MedicinesService} from "./medicines.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css']
})
export class MedicinesComponent implements OnInit {
  medicines: Medicine[];
  selected = false;
  replacements: Medicine[];
  selectedMedicine: Medicine;

  constructor(private medicineService: MedicinesService,
              private router: Router) { }

  ngOnInit() {
    this.medicineService.getAll().then(medicines => {
      this.medicines = medicines;
    });
  }


  modify(id: number): void {
      this.router.navigate(['/medicine/modify/', id]);
  }
  deleteMedicine(id: number): void {
    this.medicineService.delete(id)
      .then(() =>
      { this.medicines = this.medicines.filter(medicine => medicine.id !== id); });
  }

  showReplacements(medicine: Medicine): void {
    this.selectedMedicine = medicine;
    console.log(medicine.replacements);
    this.replacements = medicine.replacements;
    this.selected = true;
  }

}
