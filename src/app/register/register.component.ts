import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  genders = ['male', 'female'];
  registerForm: FormGroup;
  forbiddenUsernames = ['boobs','cock'];

  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this)),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    // this.registerForm.valueChanges.subscribe((value) => {
    //   console.log(value);
    // })
    // this.registerForm.statusChanges.subscribe((value) => {
    //   console.log(value);
    // })
    // this.registerForm.setValue({
    //   'userData': {
    //     'username': 'James',
    //     'email': 'james@james.com'
    //   },
    //   'gender': 'male',
    //   'hobbies': []
    // });
    this.registerForm.patchValue({
      'userData': {
        'username': 'Tester'
      }
    });
  }

  onSubmit() {
    console.log(this.registerForm);
    this.registerForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.registerForm.get('hobbies')).push(control);
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
  }

}
