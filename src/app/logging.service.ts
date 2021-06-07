import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
 loggingConsole(server: string){
   console.log("this is from service:"+ server);
 }
  constructor() { }
}
