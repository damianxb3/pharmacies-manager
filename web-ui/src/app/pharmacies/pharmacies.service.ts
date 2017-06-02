import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Pharmacy } from "./pharmacy";

import 'rxjs/add/operator/toPromise'

@Injectable()
export class PharmaciesService {
  private readonly baseUrl = '/api/pharmacy';

  constructor(private http: Http) {}
  getAll(): Promise<Pharmacy[]> {
    return this.http.get('/api/pharmacy')
      .toPromise()
      .then(response => response.json() as Pharmacy[])
      .catch(PharmaciesService.handleError);
  }

  deletePharmacy(id: number): Promise<any> {
    return this.http.delete(this.baseUrl + '/delete/' + id)
      .toPromise();
  }

  addPharmacy(pharmacy: Pharmacy): Promise<Pharmacy> {
    return this.http.put(this.baseUrl + '/add', pharmacy)
      .toPromise()
      .then(response => response.json() as Pharmacy)
      .catch(PharmaciesService.handleError);
  }

  private static handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
