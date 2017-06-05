import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { PharmaciesService } from "../../pharmacies/pharmacies.service";
import { Pharmacy } from "../../pharmacies/pharmacy";
import {WorkersService} from '../workers.service'
import {WorkerDto} from "../workerDto";

@Component({
  selector: 'app-worker-add',
  templateUrl: './worker-add.component.html',
  styleUrls:  ['./worker-add.component.css']
})

export class WorkerAddComponent implements OnInit {
  pharmacies: Pharmacy[];
  roles: string[];
  worker: WorkerDto = new WorkerDto();
  added: boolean = false;
  error: boolean = false;

  constructor(
    private location: Location,
    private workersService: WorkersService,
    private pharmaciesService: PharmaciesService
  ) {}

  ngOnInit() {
     this.pharmaciesService.getAll().then(pharmacies => this.pharmacies = pharmacies);
     this.workersService.getRoles().then(roles => this.roles = roles);
  }

  onSubmit(): void {
    this.workersService.addWorker(this.worker)
      .then(() => this.added = true)
      .catch(() => this.error = true);
  }

  goBack(): void {
    this.location.back();
  }
}
