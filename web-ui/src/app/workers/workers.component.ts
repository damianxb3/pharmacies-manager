import { Component, OnInit } from '@angular/core';
import { WorkersService } from "./workers.service";
import { Worker } from "./worker";

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {
  workers: Worker[];

  constructor(private workersService: WorkersService) { }

  ngOnInit() {
    this.workersService.getAll().then(workers => this.workers = workers);
  }

}
