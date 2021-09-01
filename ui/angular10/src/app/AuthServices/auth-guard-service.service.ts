import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot, 
  CanActivateChild,
  Route
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceService implements  CanActivate, CanActivateChild {
  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (localStorage.getItem("LoggedIn")) {

        return true;
      }
      else {
        alert("Not Logged IN")
        this.router.navigate(["/login"]);
        return false
      }

  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return true;
  }

}
