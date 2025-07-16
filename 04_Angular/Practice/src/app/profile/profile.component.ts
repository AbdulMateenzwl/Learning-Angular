import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  userId: number = 1;

  constructor(private router: Router) {}

  navigateToUserProfile() {
    this.router.navigate(['/profile', this.userId]);
  }
}
