import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  url =
    'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBcOOk9CUXsGuzBsJhd-FqStXkN4MnJRUw';

  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(this.url, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        catchError((errorRes) => {
          let errorMessge = 'An unknown Error Occurred';
          if (!errorRes.erro || !errorRes.error.error) {
            return throwError(errorMessge);
          }
          switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
              errorMessge = 'This email exists already';
          }

          return throwError(errorMessge);
        })
      );
  }
}
