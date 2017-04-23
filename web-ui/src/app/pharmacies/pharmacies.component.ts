import { Component, OnInit } from '@angular/core';
import { PharmaciesService } from "./pharmacies.service";
import { Pharmacy } from "./pharmacy";

@Component({
  selector: 'app-pharmacies',
  templateUrl: './pharmacies.component.html',
  styleUrls: ['./pharmacies.component.css']
})
export class PharmaciesComponent implements OnInit {
  pharmacies: Pharmacy[];

  constructor(private pharmaciesService: PharmaciesService) { }

  ngOnInit() {
    this.pharmaciesService.getAll().then(pharmacies => this.pharmacies = pharmacies);
  }

}
