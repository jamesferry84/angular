import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
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
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from "./app-routing.module";



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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
