import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise'
import {MedicineItem} from "./medicineItem";

@Injectable()
export class MedicineItemService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  getList(id: number): Promise<MedicineItem[]> {
    const url = '/api/medicineItem/getByPhar/'+id;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as MedicineItem[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
