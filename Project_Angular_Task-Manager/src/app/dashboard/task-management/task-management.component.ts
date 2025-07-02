import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskStatus } from '../enums/taskStatus.enum';
import { TaskPriority } from '../enums/taskPriority.enum';
import { TaskService } from 'src/app/services/task.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-task-management',
  templateUrl: './task-management.component.html',
  styleUrls: ['./task-management.component.scss'],
})
export class TaskManagementComponent implements OnInit {
  statusFilter = '';
  priorityFilter = '';
  searchTerm = '';

  tasks: Observable<Task[]> = new BehaviorSubject<Task[]>([]);

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }
}
