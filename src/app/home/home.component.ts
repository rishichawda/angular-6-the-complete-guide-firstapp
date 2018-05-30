import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  on_load_servers(id: number) {
    this.router.navigate(['servers', id, 'edit'], {queryParams: {allowEdits: true}, fragment: 'loading'});
  }
}
