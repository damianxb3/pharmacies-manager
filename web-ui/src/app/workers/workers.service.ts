import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Worker } from './worker'

import 'rxjs/add/operator/toPromise'

@Injectable()
export class WorkersService {

  constructor(private http: Http) {}
  getAll(): Promise<Worker[]> {
    return this.http.get('/api/worker')
      .toPromise()
      .then(response => response.json() as Worker[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
