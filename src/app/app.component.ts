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

}
