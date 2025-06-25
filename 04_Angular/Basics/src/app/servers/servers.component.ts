import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';

  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    } , 2000)
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }
}
