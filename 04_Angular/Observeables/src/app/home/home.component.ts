import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  filter,
  interval,
  map,
  Observable,
  Observer,
  Subscription,
} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription!: Subscription;

  constructor() {}

  ngOnInit() {
    const customeIntervalObserveable: Observable<number> = Observable.create(
      (observer: Observer<number>) => {
        let count = 0;
        setInterval(() => {
          observer.next(count);
          if (count === 7) {
            observer.complete();
          }
          if (count > 5) {
            observer.error(new Error('Count is greater than 3'));
          }
          count++;
        }, 1000);
      }
    );

    this.firstObsSubscription = customeIntervalObserveable
      .pipe(
        filter((data) => {
          return +data > 0;
        })
      )
      .pipe(
        map((data) => {
          return 'Round ' + (data + 1);
        })
      )
      .subscribe(
        (data: string) => {
          console.log(data);
        },
        (error: Error) => {
          console.log(error);
          alert(error.message);
        },
        () => {
          console.log('Completed');
        }
      );
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }
}
