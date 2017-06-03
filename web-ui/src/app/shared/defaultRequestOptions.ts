import {Injectable} from "@angular/core";
import {BaseRequestOptions, RequestOptions} from "@angular/http";
import {AuthenticationService} from "./authentication.service";

@Injectable()
export class DefaultRequestOptions extends BaseRequestOptions {

  constructor() {
    super();
    this.headers.set('Content-Type', 'application/json');
    let token = AuthenticationService.getToken();
    if (token != null) {
      this.headers.set('Authorization', token);
    }
  }
}

export const RequestOptionsProvider = { provide: RequestOptions, useClass: DefaultRequestOptions };
