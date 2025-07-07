import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  user!: { id: number; name: string };
  paramsSubscription!: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.user = {
      // Get the params from the route
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    };

    // to observe the changes from route if the page we are on does not change
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.user = {
        // Get the params from the route
        id: params['id'],
        name: params['name'],
      };
    });
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
