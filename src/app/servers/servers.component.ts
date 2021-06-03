import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
addNewServer:boolean = false;
userCreationStatus: string = "";
userName:string = "";
  constructor() {
    setTimeout(()=>{
      this.addNewServer = true;
    },2000)
   }

  ngOnInit(): void {
  }
  onCreateUser(){
  this.userCreationStatus = "UserName was created!" + " the User Name is " + this.userName;
  this.userName="";
}
onUpdateServer(event:Event){
this.userName=(<HTMLInputElement>event.target).value;
}
}
