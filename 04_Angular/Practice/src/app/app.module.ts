import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { DebounceComponent } from './debounce/debounce.component';
import { LoadManyComponent } from './load-many/load-many.component';
import { UserCardComponent } from './user-card/user-card.component';
import { LoggingInterceptorService } from './logging-interceptor.service';
import { TakeOneComponent } from './take-one/take-one.component';
import { ShortenPipe } from './shorten.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    HomeComponent,
    LoginComponent,
    UserProfileComponent,
    ProfileComponent,
    DebounceComponent,
    LoadManyComponent,
    UserCardComponent,
    TakeOneComponent,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
