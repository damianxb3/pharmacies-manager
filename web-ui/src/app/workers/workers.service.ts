import { Injectable } from '@angular/core';


import { Headers, Http } from '@angular/http';
import { Worker } from "./worker";

import 'rxjs/add/operator/toPromise'
import {Pharmacy} from "../pharmacies/pharmacy";

@Injectable()
export class WorkersService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}
  getAll(): Promise<Worker[]> {
    return this.http.get('/api/worker')
      .toPromise()
      .then(response => response.json() as Worker[])
      .catch(this.handleError);
  }

  getRoles(): Promise<string[]> {
    console.log("Ladowanie roli!");
    return this.http.get('/api/worker/add/roles')
      .toPromise()
      .then(response => response.json() as string[])
      .catch(this.handleError);
  }


  addWorker(firstName: String, lastName: String, role: String, workplace: number): Promise<Worker> {
    //var role: string = "Pharmacist";
    //var workplace: number = 1; //cos sie tutaj jebie

    return this.http
      .post('api/worker/add', JSON.stringify({firstName: firstName, lastName: lastName, role: role, workplace: workplace}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Worker)
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
