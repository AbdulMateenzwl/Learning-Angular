import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, switchMap } from 'rxjs';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AppService {
  user: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  constructor(private http: HttpClient) {}

  getUser() {
    return this.user;
  }

  setUser(user: User | null) {
    this.user.next(user);
  }

  isLoggedIn() {
    return this.user.getValue() !== null;
  }

  loadUser(userId: number) {
    return this.http.get<User>(
      `https://687639e4814c0dfa653b33fa.mockapi.io/api/Users/${userId}`
    );
  }

  keepGivingUserUpdates() {
    return interval(5000).pipe(
      switchMap(() => {
        let randomId = Math.floor(Math.random() * 15) + 1;
        return this.loadUser(randomId);
      })
    );
  }
}
