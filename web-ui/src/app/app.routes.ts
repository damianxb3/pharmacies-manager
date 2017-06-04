import {Routes} from "@angular/router";
import {MedicinesComponent} from "./medicines/medicines.component";
import {WorkersComponent} from "./workers/workers.component";
import {PharmaciesComponent} from "./pharmacies/pharmacies.component";
import {StatisticsComponent} from "./statistics/statistics.component";
import {MedicineModifyComponent} from "./medicines/modify/medicine-modify.component";
import {WorkerAddComponent} from "./workers/add/worker-add.component";
import {MedicineAddComponent} from "./medicines/add/medicine-add.component";
import {MedicineItemComponent} from "./medicineItem/medicineItem.component";
import {PharmacyAddComponent} from "./pharmacies/add/pharmacy-add.component";
import {LoginComponent} from "./login/login.component";

export const appRoutes: Routes = [
  {
    path: 'home',
    redirectTo: 'medicines'
  },
  {
    path: 'login',
    component: LoginComponent
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
    path: 'medicine/modify/:id',
    component: MedicineModifyComponent
  },
  {
    path: 'medicineItem',
    component: MedicineItemComponent
  },
  {
    path: 'workers',
    component: WorkersComponent
  },
  {
    path: 'worker/add',
    component: WorkerAddComponent
  },
  {
    path: 'pharmacies',
    component: PharmaciesComponent
  },
  {
    path: 'pharmacies/add',
    component: PharmacyAddComponent
  },
  {
    path: 'statistics',
    component: StatisticsComponent
  }
];
