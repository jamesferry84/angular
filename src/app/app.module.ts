import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ShoppingComponent} from './shopping/shopping.component';
import {ShoppingListComponent} from './shopping/shopping-list/shopping-list.component';
import {ShoppingEditComponent} from './shopping/shopping-edit/shopping-edit.component';
import {RecipeComponent} from './recipe/recipe.component';
import {RecipeListComponent} from './recipe/recipe-list/recipe-list.component';
import {RecipeItemComponent} from './recipe/recipe-item/recipe-item.component';
import {RecipeDetailComponent} from './recipe/recipe-detail/recipe-detail.component';
import {HeaderComponent} from './header/header.component';
import {BasicHighlightDirective} from "./directives/basic-highlight.directive";
import {DropdownDirective} from "./directives/dropdown.directive";
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import {AuthService} from "./auth.service";
import {AuthGuard} from "./auth-guard.service";
import {RegisterComponent} from './register/register.component';
import {ShortenPipe} from "./pipes/shorten.pipe";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpExampleComponent} from './http-example/http-example.component';
import {AuthInterceptorService} from "./interceptors/auth-interceptor.service";
import {LoggingInterceptorService} from "./interceptors/logging-interceptor.service";


@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    HeaderComponent,
    BasicHighlightDirective,
    DropdownDirective,
    HomeComponent,
    RegisterComponent,
    ShortenPipe,
    HttpExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptorService,
      multi: true
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
