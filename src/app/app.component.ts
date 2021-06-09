import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  selectedSubscription = 'Advanced';
  submitted = false;
  user = {
    email:'',
    subscription:''
  }
  @ViewChild('form', { static: false }) form: NgForm;
  onSubmit() {
    this.submitted = true;
    this.user.email = this.form.value.email;
    this.user.subscription = this.form.value.subscription;
    console.log(this.form);
  }
}
