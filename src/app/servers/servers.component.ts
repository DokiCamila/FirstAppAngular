import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;

  serveCreationStatus = 'No server was created';
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000 );

  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serveCreationStatus = 'Server was created!';
  }
  onServerUpdateName( event: Event) {
    this.serverName =  (<HTMLInputElement>event.target).value;

  }


}
