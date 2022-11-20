import { Component, OnInit } from '@angular/core';
import {DemoAuthService} from "../demoAuth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private demoAuthService: DemoAuthService) { }

  loggedIn: boolean;

  ngOnInit(): void {
    if (this.demoAuthService.loggedIn) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }



}
