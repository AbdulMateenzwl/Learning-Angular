import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, map } from 'rxjs';
import { AppService } from '../app.service';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private http: HttpClient, private appService: AppService) {}

  login() {
    this.http.get<User>('https://687639e4814c0dfa653b33fa.mockapi.io/api/Users/4')
      .subscribe((response) => {
        this.appService.setUser(response);
      });
  }

  logout(){
    this.appService.setUser(null);
  }
}
