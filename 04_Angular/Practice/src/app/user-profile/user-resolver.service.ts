import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { User } from '../user.model';
import { catchError, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';

@Injectable({ providedIn: 'root' })
export class UserResolverService implements Resolve<User > {
  constructor(private http: HttpClient, private appService:AppService, private router:Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User > {
    const userId = route.paramMap.get('id');
    return this.http
      .get<User>(
        `https://687639e4814c0dfa653b33fa.mockapi.io/api/Users/${userId}`
      )
      .pipe(
        catchError((error) => {
          this.router.navigate(['/login']);
          console.error('Error fetching user data:', error);
          return of(null as unknown as User);
        })
      );
  }
}
