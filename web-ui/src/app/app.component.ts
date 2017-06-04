import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "./shared/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Pharmacies Manager';
  userLoggedIn = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.userLoggedIn = AuthenticationService.getToken() != null;
    if (!this.userLoggedIn) {
      this.router.navigate(['login']);
    } else {
      this.router.navigate(['home']);
    }
  }

  logout(): void {
    this.userLoggedIn = false;
    this.router.navigate(['login']);
  }

}
