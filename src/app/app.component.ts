import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  server_elements = [
    { type: 'server', name: 'test server', details: 'this is a test server' },
    { type: 'server', name: 'test server', details: 'this is a test server' }
  ];


}
