import { Component } from '@angular/core';

@Component({
  selector : 'app-server',
  templateUrl : './server.component.html',
  styles: [`
  h2{
    color: cornflowerblue;
  }  
  `]

})

export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';


  getServerStatus(){
    return this.serverStatus;
  }
}
