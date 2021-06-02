import { Component } from "@angular/core";

@Component({
selector:'app-success',
template:`<h5>This is a Success message!</h5>`,
styles:[`h5{
    color: green;
    padding: 20px;
    border: 1px solid green;
    background-color: salmon;
}`]
})
export class SuccessAlertComponent {

} 