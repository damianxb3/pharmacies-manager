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

  addMedicine(name: String): Promise<Medicine> {
    var price = 10;
    var size: String = "100";
    var isReq: boolean = false;
    var ind: String = "test1";
    var usage: String = "test2";
    var contra: String = "asdasd";
    
    return this.http
      .post('api/medicine/add', JSON.stringify({name: name, price: price, size: size, isPrescriptionRequired: isReq, ingrediends: ind, usage: usage, contraindications: contra}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Medicine)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
