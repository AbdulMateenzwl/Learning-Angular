import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm!: FormGroup;
  forbiddenUsernames = ['Mateen', 'Saad'];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.forbiddenEmails
        ),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
    });

    this.signupForm.valueChanges.subscribe((value) => {
      console.log('Value Changes ');
      console.log(value)
    });

    this.signupForm.statusChanges.subscribe((status) => {
      console.log('Status Changes ');
      console.log(status)
    });

    // Setting values to form
    this.signupForm.setValue({
      userData: {
        username: 'Mateen',
        email: 'mateen@mail.com',
      },
      gender: 'male',
      hobbies: [],
    });

    // Set some values of the form
    this.signupForm.patchValue({
      userData: {
        username: 'saad',
        email: 'saad@mail.com',
      },
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  get hobbiesControls() {
    return (this.signupForm.get('hobbies') as FormArray)?.controls || [];
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } | null {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  forbiddenEmails(control: AbstractControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
    return promise;
  }
}
