import { Component, OnDestroy, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-task-management',
  templateUrl: './task-management.component.html',
  styleUrls: ['./task-management.component.scss'],
})
export class TaskManagementComponent implements OnInit, OnDestroy {
  statusFilter = '';
  priorityFilter = '';
  searchTerm = '';

  tasksSubscription!: Subscription;

  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasksSubscription = this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  ngOnDestroy(): void {
    this.tasksSubscription.unsubscribe();
  }
}
