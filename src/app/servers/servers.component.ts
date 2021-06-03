import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
addNewServer:boolean = false;
serverCreationStatus: string = "No server was created!";
serverName:string = "Two Way DataBinding";
serverCreated:boolean = false;
servers = ['Test Server','Test Server 2'];
  constructor() {
    setTimeout(()=>{
      this.addNewServer = true;
    },2000)
   }

  ngOnInit(): void {
  }
onCreateServer(){
  this.serverCreationStatus = "Server was created! " + " the server Name is " + this.serverName;
  this.serverCreated = true;
  this.servers.push(this.serverName);
}
onUpdateServer(event:Event){
this.serverName=(<HTMLInputElement>event.target).value;
}
}
