import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardDetailsComponent } from './dashboard/dashboard-details/dashboard-details.component';
import { TasksComponent } from './tasks/tasks.component';
import { ProjectsComponent } from './projects/projects.component';
import { SettingsComponent } from './settings/settings.component';
import { TaskManagementComponent } from './dashboard/task-management/task-management.component';
import { CreateTaskComponent } from './dashboard/task-management/create-task/create-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskCardComponent } from './dashboard/task-management/task-card/task-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    DashboardDetailsComponent,
    TasksComponent,
    ProjectsComponent,
    SettingsComponent,
    TaskManagementComponent,
    CreateTaskComponent,
    TaskCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
