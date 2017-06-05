import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Medicine} from "./medicine";

import "rxjs/add/operator/toPromise";

@Injectable()
export class MedicinesService {

  constructor(private http: Http) {}
  getAll(): Promise<Medicine[]> {
    return this.http.get('/api/medicine')
      .toPromise()
      .then(response => response.json() as Medicine[])
      .catch(this.handleError);
  }

  get(id: number): Promise<Medicine> {
    return this.http.get('/api/medicine/' + id)
      .toPromise()
      .then(response => response.json() as Medicine)
      .catch(this.handleError);
  }

  modifyMedicine(med: Medicine): Promise<Medicine> {
    return this.http.put('api/medicine/modify', JSON.stringify(med))
      .toPromise()
      .then(res => res.json().data as Medicine)
      .catch(this.handleError);
  }

  addMedicine(med: Medicine): Promise<Medicine> {
     return this.http.put('api/medicine/add', JSON.stringify(med))
      .toPromise()
      .then(res => res.json().data as Medicine)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    return this.http.delete('api/medicine/delete/' + id)
      .toPromise()
      .then(() => {} )
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
