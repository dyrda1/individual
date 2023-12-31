import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const isLoggedIn = this.checkIfUserIsLoggedIn();

    if (!isLoggedIn) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }

  private checkIfUserIsLoggedIn(): boolean {
    // Here you would check for authentication status. For example:
    return localStorage.getItem('isLoggedIn') === 'true';
  }
}
