import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "../../../auth/auth.service";
import {take, timer} from "rxjs";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isModalVisible: boolean = false;

  constructor(private authService: AuthService) {}
  login(username: string, password: string, event: Event): void {
    event.preventDefault();
    const isLoggedIn = this.authService.login(username, password);

    if (!isLoggedIn) {
      {
        alert('Please check username or password!');
      }
    }
  }
}
