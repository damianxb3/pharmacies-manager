import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Medicine } from "./medicine";

import 'rxjs/add/operator/toPromise'

@Injectable()
export class MedicinesService {

  constructor(private http: Http) {}
  getAll(): Promise<Medicine[]> {
    return this.http.get('/api/medicine')
      .toPromise()
      .then(response => response.json() as Medicine[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
