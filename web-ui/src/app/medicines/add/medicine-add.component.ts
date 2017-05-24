import {Component} from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import {Medicine} from '../medicine'
import {MedicinesService} from '../medicines.service'

@Component({
  selector: 'app-medicine-add',
  templateUrl: './medicine-add.component.html',
  styleUrls:  ['./medicine-add.component.css']
})

export class MedicineAddComponent {
  constructor(
    private medicinesService: MedicinesService,
    private location: Location
  ) {}

  add(name: String): void {
    this.medicinesService.addMedicine(name);
  }

  goBack(): void {
    this.location.back();
  }
}
