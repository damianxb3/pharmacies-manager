import {Component} from "@angular/core";

import {Medicine} from "../medicine";
import {MedicinesService} from "../medicines.service";

@Component({
  selector: 'app-medicine-add',
  templateUrl: './medicine-add.component.html',
  styleUrls:  ['./medicine-add.component.css']
})

export class MedicineAddComponent {
  added = false;
  error = false;
  medicine: Medicine = new Medicine();

  constructor(
    private medicinesService: MedicinesService,
  ) {}

  onSubmit(): void {
    console.log(this.medicine);
    this.medicinesService.addMedicine(this.medicine)
      .then(() => this.added = true)
      .catch(() => this.error = true)
  }
}
