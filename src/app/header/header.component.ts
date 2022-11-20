import {Component, OnDestroy, OnInit} from '@angular/core';
import {DemoAuthService} from "../demoAuth.service";
import {AuthService} from "../services/auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLoggedIn: boolean = false
  private userSub: Subscription;

  constructor(private demoAuthService: DemoAuthService, private authService: AuthService) { }

  loggedIn: boolean;

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isLoggedIn = !user ? false : true;
    })
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  logout() {
    this.isLoggedIn = false;
  }


}
