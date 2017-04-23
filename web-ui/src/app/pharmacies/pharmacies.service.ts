import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Pharmacy } from "./pharmacy";

import 'rxjs/add/operator/toPromise'

@Injectable()
export class PharmaciesService {

  constructor(private http: Http) {}
  getAll(): Promise<Pharmacy[]> {
    return this.http.get('/api/pharmacy')
      .toPromise()
      .then(response => response.json() as Pharmacy[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
