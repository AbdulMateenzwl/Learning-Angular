import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('f') signupForm!: NgForm;

  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];

  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };

  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // to set the data of the form
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: '',
    //   },
    //   secret: 'teacher',
    //   questionAnswer: '',
    //   gender: 'male',
    // });

    // to update some values of the form
    this.signupForm.form.patchValue({
      userData: {
        username: 'newUser',
      },
    });
  }

  onSubmit() {
    if (this.signupForm && this.signupForm.form) {
      this.submitted = true;
      this.user.username = this.signupForm.value.userData?.username || '';
      this.user.email = this.signupForm.value.userData?.email || '';
      this.user.secretQuestion = this.signupForm.value.secret;
      this.user.answer = this.signupForm.value.questionAnswer;
      this.user.gender = this.signupForm.value.gender;

      this.signupForm.reset();
    }
  }
}
