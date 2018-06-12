import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  error_message: string;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.data.subscribe(
      (data: Data) => {
        this.error_message = data['message'];
      }
    );
  }

}
