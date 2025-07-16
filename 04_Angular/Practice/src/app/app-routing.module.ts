import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { AppGuardService } from './app-guard.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserResolverService } from './user-profile/user-resolver.service';
import { ProfileComponent } from './profile/profile.component';
import { DebounceComponent } from './debounce/debounce.component';
import { LoadManyComponent } from './load-many/load-many.component';
import { TakeOneComponent } from './take-one/take-one.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'page1',
    component: Component1Component,
    canActivate: [AppGuardService],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'search',
    component: ProfileComponent,
    canActivate: [AppGuardService],
  },
  {
    path: 'debounceSearch',
    component: DebounceComponent,
    canActivate: [AppGuardService],
  },
  {
    path: 'profile/:id',
    component: UserProfileComponent,
    canActivate: [AppGuardService],
    resolve: { user: UserResolverService },
  },
  {
    path: 'load-many',
    component: LoadManyComponent,
    canActivate: [AppGuardService],
  },
  {
    path: 'take-one',
    component: TakeOneComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
