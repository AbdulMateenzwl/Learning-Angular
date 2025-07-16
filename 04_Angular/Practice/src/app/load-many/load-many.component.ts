import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { User } from '../user.model';
import { AppService } from '../app.service';

@Component({
  selector: 'app-load-many',
  templateUrl: './load-many.component.html',
  styleUrls: ['./load-many.component.css'],
})
export class LoadManyComponent {
  users: User[] = [];
  isLoading: boolean = true;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.isLoading = true;

    const observables = forkJoin({
      user1: this.appService.loadUser(1),
      user2: this.appService.loadUser(2),
      user3: this.appService.loadUser(3),
    });
    observables.subscribe({
      next: (data) => {
        this.users = [data.user1, data.user2, data.user3];
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading users:', error);
        this.isLoading = false;
      },
    });
  }
}
