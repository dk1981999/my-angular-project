import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
activeToInactiveCounter = 0;
inactiveToActiveCounter = 0;

incrementActiveToInactive(){
  this.activeToInactiveCounter++;
  console.log("Acive To InActive: "+ this.activeToInactiveCounter);
}

incrementInActiveToActive(){
  this.inactiveToActiveCounter++;
  console.log("InActive To Active: "+ this.inactiveToActiveCounter++);
}
  constructor() { }
}
