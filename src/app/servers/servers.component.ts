import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles:[`.over {
    color: white;
  }`]
})
export class ServersComponent implements OnInit {
// addNewServer:boolean = false;
// serverCreationStatus: string = "No server was created!";
// serverName:string = "Two Way DataBinding";
showContent:boolean = false;
logClick= [];
  // constructor() {
  //   setTimeout(()=>{
  //     this.addNewServer = true;
  //   },2000)
  //  }

  ngOnInit(): void {
  }
// onCreateServer(){
//   this.serverCreationStatus = "Server was created!" + " the server Name is " + this.serverName;
// }
// onUpdateServer(event:Event){
// this.serverName=(<HTMLInputElement>event.target).value;
// }
onToggle(){
  this.showContent = !this.showContent;
  return this.logClick.push(this.logClick.length+1);
}
}
