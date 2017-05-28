import { Component, OnInit } from '@angular/core';

import {Medicine} from "./medicine";
import {MedicinesService} from "./medicines.service";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css']
})
export class MedicinesComponent implements OnInit {
  medicines: Medicine[];

  constructor(private medicineService: MedicinesService) { }

  ngOnInit() {
    this.medicineService.getAll().then(medicines => this.medicines = medicines);
  }

  deleteMedicine(id: number): void {
    this.medicineService.delete(id)
      .then(() =>
      {
        for(let i = 0 ; i < this.medicines.length ; ++i) {
          if(this.medicines[i].id  === id) {
            this.medicines.splice(i, 1);
            break;
          }
        }
      });

  }

}
