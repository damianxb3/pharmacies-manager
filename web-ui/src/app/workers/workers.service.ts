import {Injectable} from "@angular/core";


import {Http} from "@angular/http";
import {Worker} from "./worker";

import "rxjs/add/operator/toPromise";
import {WorkerDto} from "./workerDto";

@Injectable()
export class WorkersService {

  constructor(private http: Http) {}
  getAll(): Promise<Worker[]> {
    return this.http.get('/api/worker')
      .toPromise()
      .then(response => response.json() as Worker[])
      .catch(this.handleError);
  }

  getRoles(): Promise<string[]> {
    return this.http.get('/api/worker/roles')
      .toPromise()
      .then(response => response.json() as string[])
      .catch(this.handleError);
  }

  addWorker(workDto: WorkerDto): Promise<Worker> {
    return this.http.put('api/worker/add', JSON.stringify(workDto))
      .toPromise()
      .then(res => res.json().data as Worker)
      .catch(this.handleError);

  }

  delete(id: number): Promise<any> {
    return this.http.delete('api/worker/delete/' + id)
      .toPromise();
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
