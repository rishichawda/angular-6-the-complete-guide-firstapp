import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() server_created = new EventEmitter<{server_name: string, server_content: string}>();
  @Output() blueprint_created = new EventEmitter<{server_name: string, server_content: string}>();
  new_servername = '';
  new_servercontent = '';
  allow_new_servers = false;

  constructor() { }

  ngOnInit() {
    setTimeout( ()=>{
      this.allow_new_servers = true;
    }, 2000 );
  }

  on_create_server() {
    this.server_created.emit({server_name: this.new_servername, server_content: this.new_servercontent});
  }

  on_create_blueprint() {
    this.blueprint_created.emit({server_name: this.new_servername, server_content: this.new_servercontent});
  }

}
