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

  add(name: string, price: number, size: string, ingred: string, usage: string, contra: string, pres: string): void {
    var prescription: boolean;

    if(pres === "Tak")
      prescription = true;
    else
      prescription = false;

    var med: Medicine =  new Medicine(name, price, size, prescription, ingred, usage, contra);
    this.medicinesService.addMedicine(med);
  }

  goBack(): void {
    this.location.back();
  }
}
