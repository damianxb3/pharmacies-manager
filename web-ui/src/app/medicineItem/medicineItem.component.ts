import { Component, OnInit } from '@angular/core';
import { MedicineItemService } from './medicineItem.service';

import {Router} from "@angular/router";

@Component({
  selector: 'app-medicineitem',
  templateUrl: './medicineItem.component.html',
  styleUrls: ['./medicineItem.component.css']
})
export class MedicineItemComponent {

  constructor(private medicineItemService: MedicineItemService,
              private router: Router) {
  }

}
