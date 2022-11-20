import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {DemoAuthService} from "./demoAuth.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: DemoAuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenicated()
      .then((authenticated: boolean) => {
        if (authenticated) {
          return true;
        } else {
          console.log('authservice: ', this.authService.isAuthenicated())
          this.router.navigate(['/']);
        }
      })
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route,state);
  }

}
