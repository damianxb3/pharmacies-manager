import {Component} from "@angular/core";
import {Pharmacy} from "../pharmacy";
import {PharmaciesService} from "../pharmacies.service";


@Component({
  selector: 'app-medicine-add',
  templateUrl: './pharmacy-add.component.html',
  styleUrls:  ['./pharmacy-add.component.css']
})

export class PharmacyAddComponent {
  added: boolean = false;
  error: boolean = false;
  pharmacy: Pharmacy = new Pharmacy();

  constructor(
    private pharmaciesService: PharmaciesService,
  ) {}

  onSubmit(): void {
    this.pharmaciesService.addPharmacy(this.pharmacy)
      .then(() => this.added = true)
      .catch(() => this.error = true);
  }
}
