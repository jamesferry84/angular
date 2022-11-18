import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from './header/header.component';
import {BasicHighlightDirective} from "./directives/basic-highlight.directive";
import {DropdownDirective} from "./directives/dropdown.directive";
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import {AuthService} from "./auth.service";
import {AuthGuard} from "./auth-guard.service";
import { RegisterComponent } from './register/register.component';
import {ShortenPipe} from "./pipes/shorten.pipe";
import {HttpClientModule} from "@angular/common/http";
import { ExpenseComponent } from './expense/expense.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BasicHighlightDirective,
    DropdownDirective,
    HomeComponent,
    RegisterComponent,
    ShortenPipe,
    ExpenseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
