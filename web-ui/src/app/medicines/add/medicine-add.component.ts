import {Component} from '@angular/core';
import {Location} from '@angular/common';

import {Medicine} from '../medicine'
import {MedicinesService} from '../medicines.service'

@Component({
  selector: 'app-medicine-add',
  templateUrl: './medicine-add.component.html',
  styleUrls:  ['./medicine-add.component.css']
})

export class MedicineAddComponent {
  added = false;
  medicine: Medicine = new Medicine();

  constructor(
    private medicinesService: MedicinesService,
    private location: Location
  ) {}

  onSubmit(): void {
    console.log(this.medicine);
    this.medicinesService.addMedicine(this.medicine)
      .then(() => this.added = true);
  }
}
