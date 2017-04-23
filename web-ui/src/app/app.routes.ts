import {AppComponent} from "./app.component";
import {Routes} from "@angular/router";
import {MedicinesComponent} from "./medicines/medicines.component";
import {WorkersComponent} from "./workers/workers.component";
import {PharmaciesComponent} from "./pharmacies/pharmacies.component";
import {StatisticsComponent} from "./statistics/statistics.component";

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
    }
];
