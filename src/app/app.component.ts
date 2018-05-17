import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  server_elements = [
    { type: 'server', name: 'test server', content: 'this is a test server' },
    { type: 'server', name: 'test server', content: 'this is a test server' }
  ];

  on_server_added(server_data: {server_name: string, server_content: string}) {
    this.server_elements.push({
      type: 'server',
      name: server_data.server_name,
      content: server_data.server_content
    });
  }

  on_blueprint_added(server_data: {server_name: string, server_content: string}) {
    this.server_elements.push({
      type: 'blueprint',
      name: server_data.server_name,
      content: server_data.server_content
    });
  }

  on_change_first() {
    this.server_elements[0].name = 'this element name was changed!';
  }

  on_destroy_first(){
    this.server_elements.splice(0,1);
  }
}
