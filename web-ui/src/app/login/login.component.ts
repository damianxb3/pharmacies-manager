import {Component, OnInit} from "@angular/core";

import {AuthenticationService} from "../shared/authentication.service";

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';

  constructor(
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    AuthenticationService.logout();
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(result => {
        if (result === true) {
          location.assign('home');
          location.reload();
        } else {
          this.error = 'Nieprawidłowe dane logowania';
          this.loading = false;
        }
      }, error => {
        this.loading = false;
        this.error = error;
      });
  }
}
