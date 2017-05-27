import { Injectable } from '@angular/core';
//import { Http } from "@angular/http";
import { Headers, Http } from '@angular/http';
import { Medicine } from "./medicine";

import 'rxjs/add/operator/toPromise'

@Injectable()
export class MedicinesService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}
  getAll(): Promise<Medicine[]> {
    return this.http.get('/api/medicine')
      .toPromise()
      .then(response => response.json() as Medicine[])
      .catch(this.handleError);
  }

  get(id: number): Promise<Medicine> {
    const url = '/api/medicine/' + id;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response.json() as Medicine)
      .catch(this.handleError);
  }

  modifyMedicine(med: Medicine): void {
    this.http
      .put('api/medicine/modify', JSON.stringify(med), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Medicine)
      .catch(this.handleError);
  }

  addMedicine(med: Medicine): Promise<Medicine> {
    return this.http
      .post('api/medicine/add', JSON.stringify(med), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Medicine)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
