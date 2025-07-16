import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.css'],
})
export class DebounceComponent implements OnInit, OnDestroy {
  userId = new FormControl('');
  private subscription!: Subscription;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.userId.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        filter((value) => value !== null && value !== '')
      )
      .subscribe((userId) => {
        this.router.navigate(['/profile', userId]);
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
