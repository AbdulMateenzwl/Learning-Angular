import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../user.model';
import { AppService } from '../app.service';
import { Subscription, take } from 'rxjs';

@Component({
  selector: 'app-take-one',
  templateUrl: './take-one.component.html',
  styleUrls: ['./take-one.component.css'],
})
export class TakeOneComponent implements OnInit, OnDestroy {
  user1!: User;
  user2!: User;

  subscriptions: Subscription[] = [];

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.subscriptions.push(
      this.appService
        .keepGivingUserUpdates()
        .pipe(take(1))
        .subscribe((user) => {
          if (user != null) {
            this.user1 = { ...user };
          }
        })
    );
    this.subscriptions.push(
      this.appService.keepGivingUserUpdates().subscribe((user) => {
        if (user != null) {
          this.user2 = user;
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
