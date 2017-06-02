import {Component} from '@angular/core';
import {Location} from '@angular/common';
import {Pharmacy} from "../pharmacy";
import {PharmaciesService} from "../pharmacies.service";


@Component({
  selector: 'app-medicine-add',
  templateUrl: './pharmacy-add.component.html',
  styleUrls:  ['./pharmacy-add.component.css']
})

export class PharmacyAddComponent {
  added = false;
  pharmacy: Pharmacy = new Pharmacy();

  constructor(
    private pharmaciesService: PharmaciesService,
    private location: Location
  ) {}

  onSubmit(): void {
    this.pharmaciesService.addPharmacy(this.pharmacy)
      .then(() => this.added = true);
  }
}
