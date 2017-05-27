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

  constructor(private medicineService: MedicinesService,
              private router: Router) { }

  ngOnInit() {
    this.medicineService.getAll().then(medicines => this.medicines = medicines);
  }

  modify(id: number): void {
      this.router.navigate(['/medicine/modify/', id]);
  }

}
