import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Applied by default, other values - None, Native
})
export class ServerElementComponent implements OnInit {

  @Input('server_element') element: {type: string, name: string, details: string};

  constructor() { }

  ngOnInit() {
  }

}
