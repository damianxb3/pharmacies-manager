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
  constructor(
    private workersService: WorkersService,
    private location: Location,
    private pharmaciesService: PharmaciesService
  ) {}

  ngOnInit() {
     this.pharmaciesService.getAll().then(pharmacies => this.pharmacies = pharmacies);
     this.workersService.getRoles().then(roles => this.roles = roles);
  }

    add(name: string, lastName: string, role: string, workplace: number): void {
    var workDto = new WorkerDto(name, lastName, role, workplace);
    this.workersService.addWorker(workDto);
  }

    goBack(): void {
    this.location.back();
  }
}
