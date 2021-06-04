import { Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServersComponent implements OnInit {
@Input('element') customProperties:{type:string, name:string};
@Output('customEvent') afterCreated = new EventEmitter<{serverName: string}>();
@ViewChild('server,{static: true}') server :ElementRef;
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
  this.afterCreated.emit({serverName: this.serverName});
  console.log(this.server.nativeElement.value);

}
onUpdateServer(event:Event){
this.serverName=(<HTMLInputElement>event.target).value;
}
}
