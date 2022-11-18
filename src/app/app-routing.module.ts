import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./auth-guard.service";
import {RegisterComponent} from "./register/register.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  // {
  //   path: 'recipes',
  //   // canActivate: [AuthGuard],
  //   canActivateChild: [AuthGuard],
  //   component: RecipeComponent, children: [
  //     {path: 'recipes/:id', component: RecipeDetailComponent},
  //     {path: 'recipes/:id/edit', component: RecipeDetailComponent}
  //   ]},
  // {path: 'shopping', component: ShoppingComponent},
  {path: 'register', component: RegisterComponent},
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
