import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() server_created = new EventEmitter<{server_name: string, server_content: string}>();
  @Output('bp_created') blueprint_created = new EventEmitter<{server_name: string, server_content: string}>();
  new_servercontent = '';
  allow_new_servers = false;
  @ViewChild('server_content_input') server_content_input: ElementRef;

  constructor() { }

  ngOnInit() {
    setTimeout( () => {
      this.allow_new_servers = true;
    }, 2000 );
  }

  on_create_server(server_name_input: HTMLInputElement) {
    this.server_created.emit({server_name: server_name_input.value, server_content: this.server_content_input.nativeElement.value});
  }

  on_create_blueprint(server_name_input: HTMLInputElement) {
    this.blueprint_created.emit({server_name: server_name_input.value, server_content: this.server_content_input.nativeElement.value});
  }

}
