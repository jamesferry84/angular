import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from './header/header.component';
import {BasicHighlightDirective} from "./directives/basic-highlight.directive";
import {DropdownDirective} from "./directives/dropdown.directive";
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import {DemoAuthService} from "./demoAuth.service";
import {AuthGuard} from "./auth-guard.service";
import { RegisterComponent } from './register/register.component';
import {ShortenPipe} from "./pipes/shorten.pipe";
import {HttpClientModule} from "@angular/common/http";
import { ExpenseComponent } from './expense/expense.component';
import { AuthComponent } from './auth/auth.component';
import { ExpenseEditComponent } from './expense/expense-edit/expense-edit.component';
import { IncomeComponent } from './income/income.component';
import {AuthService} from "./services/auth.service";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BasicHighlightDirective,
    DropdownDirective,
    HomeComponent,
    RegisterComponent,
    ShortenPipe,
    ExpenseComponent,
    AuthComponent,
    ExpenseEditComponent,
    IncomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DemoAuthService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
