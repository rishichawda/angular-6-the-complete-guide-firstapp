import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  show_login: boolean;

  constructor(private router: Router, private auth_service: AuthService) { }

  ngOnInit() {
    this.show_login = this.auth_service.logged_in;
    this.auth_service.authEvent
    .subscribe(
      () => {
        this.show_login = this.auth_service.logged_in;
       }
     );
  }

  on_load_servers(id: number) {
    this.router.navigate(['servers', id, 'edit'], {queryParams: {allowEdits: true}, fragment: 'loading'});
  }

  on_login() {
    this.auth_service.login();
  }

  on_logout() {
    this.auth_service.logout();
  }
}
