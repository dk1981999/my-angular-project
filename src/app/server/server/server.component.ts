import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles:[`.online {
    color: white;
  }`]
})
export class ServerComponent implements OnInit {
  serverId: string = "192.168.1.1";
  serverStatus: string = "online";

  getServerStatus(){
    return this.serverStatus;
  }
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
   }
   getColor(){
     return this.serverStatus === "online" ? 'green' : 'red';
   }
  ngOnInit(): void {
  }
}
