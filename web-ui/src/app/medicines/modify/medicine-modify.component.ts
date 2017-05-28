import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Location } from '@angular/common';
import {Medicine} from "../medicine";
import {MedicinesService} from "../medicines.service";
import {ActivatedRoute, Params, Route} from "@angular/router";


@Component ({
  selector: 'medicine-modify',
  templateUrl: './medicine-modify.component.html',
  styleUrls: ['./medicine-modify.component.css']
})

export class MedicineModifyComponent implements OnInit{

  medicine: Medicine = new Medicine();

  constructor(
    private medicinesService: MedicinesService,
    private location: Location,
    private route: ActivatedRoute) { }

  ngOnInit(): void{
    this.route.params
      .switchMap((params: Params) => this.medicinesService.get(+params['id']))
      .subscribe(medicine => this.medicine = medicine);
  }

  modify(presc: string): void {
    if(presc === 'Tak')
      this.medicine.prescriptionRequired = true;
    else
      this.medicine.prescriptionRequired = false;

    this.medicinesService.modifyMedicine(this.medicine);
  }

  goBack(): void {
    this.location.back();
  }
}
