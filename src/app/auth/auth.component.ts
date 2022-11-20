import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authForm: FormGroup;
  isLoginMode = true;
  submitMessage: string;
  switchToMode: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

    this.updateText();

    this.authForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    });
  }

  updateText() {
    if (this.isLoginMode) {
      this.submitMessage = 'Login';
      this.switchToMode = 'Register';
    } else {
      this.submitMessage = 'Submit';
      this.switchToMode = 'Login';
    }
  }

  onSubmit() {
    console.log(this.authForm);
    console.log(this.authForm.get('email').value);
    console.log(this.authForm.get('password').value);
    if (!this.isLoginMode) {
      this.authService.signUp(this.authForm.get('email').value, this.authForm.get('password').value).subscribe( data => {
        console.log('signing up');
      })
    } else {
      this.authService.signIn(this.authForm.get('email').value, this.authForm.get('password').value).subscribe( data => {
        console.log('signed in');
        console.log(data);
      })
    }

  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
    this.updateText();
  }

}
