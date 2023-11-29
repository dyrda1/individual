import {Component, OnInit} from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import {CommonModule, NgIf} from "@angular/common";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  isAuthenticated: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.isAuthenticated().subscribe((authenticated) => {
      this.isAuthenticated = authenticated;
    });
  }

  logout() {
    this.authService.logout();
  }
}
