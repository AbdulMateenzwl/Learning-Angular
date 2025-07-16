import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AppService } from './app.service';

@Injectable({ providedIn: 'root' })
export class AppGuardService implements CanActivate {
  constructor(private http: HttpClient, private appService: AppService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    let flag = this.appService.isLoggedIn();
    if (!flag) {
      alert(flag ? 'Access granted' : 'Access denied');
    }
    return flag;
  }
}
