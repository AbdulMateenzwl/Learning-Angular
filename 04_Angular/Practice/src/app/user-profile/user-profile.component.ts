import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  user!: User;
  activeTab: string = 'about';
  isLoading: boolean = true;

  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      this.user = data['user'];
      this.isLoading = false;
    });
  }

  switchTab(tab: string) {
    this.activeTab = tab;
  }

  editProfile() {
    // Navigate to edit profile or open modal
    console.log('Edit profile clicked');
  }

  shareProfile() {
    // Share profile functionality
    if (navigator.share) {
      navigator.share({
        title: `${this.user.name}'s Profile`,
        text: `Check out ${this.user.name}'s profile`,
        url: window.location.href
      }).catch(console.error);
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(window.location.href)
        .then(() => console.log('Profile link copied to clipboard'))
        .catch(console.error);
    }
  }

  openSettings() {
    // Navigate to settings
    console.log('Settings clicked');
  }
}
