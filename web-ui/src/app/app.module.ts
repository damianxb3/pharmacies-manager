import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";

import {AppComponent} from "./app.component";
import {appRoutes} from "./app.routes";
import {LoginComponent} from "./login/login.component";
import {MedicinesComponent} from "./medicines/medicines.component";
import {WorkersComponent} from "./workers/workers.component";
import {PharmaciesComponent} from "./pharmacies/pharmacies.component";
import {StatisticsComponent} from "./statistics/statistics.component";
import {MedicinesService} from "./medicines/medicines.service";
import {PharmaciesService} from "./pharmacies/pharmacies.service";
import {WorkersService} from "./workers/workers.service";
import {MedicineModifyComponent} from "./medicines/modify/medicine-modify.component";
import {WorkerAddComponent} from "./workers/add/worker-add.component";
import {MedicineAddComponent} from "./medicines/add/medicine-add.component";
import {MedicineItemComponent} from "./medicineItem/medicineItem.component";
import {MedicineItemService} from "./medicineItem/medicineItem.service";
import {PharmacyAddComponent} from "./pharmacies/add/pharmacy-add.component";
import {AuthenticationService} from "./shared/authentication.service";
import {RequestOptionsProvider} from "app/shared/defaultRequestOptions";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MedicinesComponent,
    MedicineAddComponent,
    WorkersComponent,
    PharmaciesComponent,
    PharmacyAddComponent,
    StatisticsComponent,
    MedicineAddComponent,
    MedicineModifyComponent,
    WorkerAddComponent,
    MedicineItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthenticationService,
    RequestOptionsProvider,
    MedicinesService,
    PharmaciesService,
    WorkersService,
    MedicineItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
