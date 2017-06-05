import {Component, OnInit} from "@angular/core";
import "rxjs/add/operator/switchMap";
import {Location} from "@angular/common";
import {Medicine} from "../medicine";
import {MedicinesService} from "../medicines.service";
import {ActivatedRoute, Params} from "@angular/router";


@Component ({
  selector: 'medicine-modify',
  templateUrl: './medicine-modify.component.html',
  styleUrls: ['./medicine-modify.component.css']
})

export class MedicineModifyComponent implements OnInit{

  medicine: Medicine = new Medicine();
  modified: boolean = false;
  error: boolean = false;

  constructor(
    private medicinesService: MedicinesService,
    private location: Location,
    private route: ActivatedRoute) { }

  ngOnInit(): void{
    this.route.params
      .switchMap((params: Params) => this.medicinesService.get(+params['id']))
      .subscribe(medicine => this.medicine = medicine);
  }

  modify(): void {
    this.medicinesService.modifyMedicine(this.medicine)
      .then(() => this.modified = true)
      .catch(() => this.error = true);
  }

  goBack(): void {
    this.location.back();
  }
}
