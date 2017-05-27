import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { appRoutes } from "./app.routes";
import { MedicinesComponent } from './medicines/medicines.component';
import { WorkersComponent } from './workers/workers.component';
import { PharmaciesComponent } from './pharmacies/pharmacies.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { MedicinesService } from "./medicines/medicines.service";
import { PharmaciesService } from "./pharmacies/pharmacies.service";
import { WorkersService } from "./workers/workers.service";
import { MedicineAddComponent} from './medicines/add/medicine-add.component'
import {MedicineModifyComponent} from "./medicines/modify/medicine-modify.component";


export function RestangularConfigFactory (RestangularProvider) {
  RestangularProvider.setBaseUrl('/api');
}

@NgModule({
  declarations: [
    AppComponent,
    MedicinesComponent,
    WorkersComponent,
    PharmaciesComponent,
    StatisticsComponent,
    MedicineAddComponent,
    MedicineModifyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    MedicinesService,
    PharmaciesService,
    WorkersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
