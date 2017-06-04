import {Injectable} from "@angular/core";
import {Headers, Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

@Injectable()
export class AuthenticationService {
  private authUrl = 'api/login';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  login(username: string, password: string): Observable<boolean> {
    return this.http.post(this.authUrl, JSON.stringify({username: username, password: password}), {headers: this.headers})
      .map((response: Response) => {
        let token = response.headers.get('Authorization');
        if (!token) {
          return false;
        }
        localStorage.setItem('currentUser', JSON.stringify({username: username, token: token}));
        return true;
      }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  static getToken(): string {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let token = currentUser && currentUser.token;
    return token ? token : null;
  }

  static logout(): void {
    localStorage.removeItem('currentUser');
  }
}
