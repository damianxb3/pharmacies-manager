import {NgModule} from '@angular/core';
import {Routes} from "@angular/router";
import {MedicinesComponent} from "./medicines/medicines.component";
import {WorkersComponent} from "./workers/workers.component";
import {PharmaciesComponent} from "./pharmacies/pharmacies.component";
import {StatisticsComponent} from "./statistics/statistics.component";
import {WorkerAddComponent} from './workers/add/worker-add.component';
import {MedicineAddComponent} from "./medicines/add/medicine-add.component";

export const appRoutes: Routes = [
    {
      path: 'home',
      redirectTo: 'medicines'
    },
    {
      path: 'medicines',
      component: MedicinesComponent
    },
    {
      path: 'medicine/add',
      component: MedicineAddComponent
    },
    {
      path: 'workers',
      component: WorkersComponent
    },
    {
      path: 'pharmacies',
      component: PharmaciesComponent
    },
    {
      path: 'statistics',
      component: StatisticsComponent
    },
    {
      path: 'worker/add',
      component: WorkerAddComponent
    }
];
