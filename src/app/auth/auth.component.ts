import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Observable} from "rxjs";
import {AuthResponseData} from "../../models/authResponseData";
import {Router} from "@angular/router";

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
  isLoading = false;
  error: string;

  constructor(private authService: AuthService, private router: Router) { }


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

    let authObs: Observable<AuthResponseData>;

    if (!this.isLoginMode) {
      authObs = this.authService.signUp(this.authForm.get('email').value, this.authForm.get('password').value);
    } else {
      authObs = this.authService.signIn(this.authForm.get('email').value, this.authForm.get('password').value);
    }

    authObs.subscribe( data => {
      console.log(data);
      this.isLoading = false;
      this.router.navigate(['/']);
    }, errorMessage => {
      console.log(errorMessage);
      this.error = errorMessage;
      this.isLoading = false;
    });

  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
    this.updateText();
  }

}
