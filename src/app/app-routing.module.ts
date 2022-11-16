import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {RecipeComponent} from "./recipe/recipe.component";
import {RecipeDetailComponent} from "./recipe/recipe-detail/recipe-detail.component";
import {ShoppingComponent} from "./shopping/shopping.component";
import {AuthGuard} from "./auth-guard.service";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'recipes',
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: RecipeComponent, children: [
      {path: 'recipes/:id', component: RecipeDetailComponent},
      {path: 'recipes/:id/edit', component: RecipeDetailComponent}
    ]},
  {path: 'shopping', component: ShoppingComponent},
  {path: '**', redirectTo: '/'} //generic route should always be last, as routes get parsed top to bottom
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
