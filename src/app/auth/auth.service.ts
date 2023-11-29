// auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
    this.isAuthenticatedSubject.next(this.isUserAuthenticated());
  }

  login(username: string, password: string): boolean {
    if (username === 'Admin' && password === '12345') {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/profile']);
      this.isAuthenticatedSubject.next(true);
      return true; // Login successful
    } else {
      return false; // Login failed
    }
  }

  logout(): void {
    this.isAuthenticatedSubject.next(false);
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  private isUserAuthenticated(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
}
