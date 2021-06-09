import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultValue = "pet";
  answer:string;
  genders = ['male','female'];
  user = {
    username:'',
    email:'',
    secretQuestion:'',
    answer:'',
    gender:''
  }
  submitted = false;
  @ViewChild('form') accessForm: NgForm;
  suggestUserName() {
    const suggestedName = 'Superuser';
    this.accessForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }
  // onSubmit(form: NgForm){
  //   console.log(form);
  // }
  onSubmit(){
    this.submitted = true;
    this.user.username = this.accessForm.value.userData.username;
    this.user.email = this.accessForm.value.userData.email;
    this.user.gender = this.accessForm.value.gender;
    this.user.secretQuestion = this.accessForm.value.secret;
    this.user.answer = this.accessForm.value.questionAnswer;
    
    this.accessForm.reset();
  }
}
