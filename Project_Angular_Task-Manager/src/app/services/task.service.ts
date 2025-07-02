import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { v4 as uuidv4 } from 'uuid';
import { TaskStatus } from '../dashboard/enums/taskStatus.enum';
import { TaskPriority } from '../dashboard/enums/taskPriority.enum';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  tasks = this.tasksSubject.asObservable();

  testTasks: Task[] = [
    {
      id: '1',
      title: 'Implement user authentication system',
      description:
        'Create login and registration functionality with JWT tokens',
      status: TaskStatus.PENDING,
      priority: TaskPriority.HIGH,
      dueDate: new Date(),
    },
    {
      id: '2',
      title: 'Design responsive dashboard layut',
      description: 'Create mobile-friendly dashboard with CSS Grid and Flexbox',
      status: TaskStatus.PENDING,
      priority: TaskPriority.HIGH,
      dueDate: new Date(),
    },
  ];

  constructor() {
    for (const task of this.testTasks) {
      this.addTask(task);
    }
  }

  getTasks(): Observable<Task[]> {
    return this.tasks;
  }

  getTask(id: string): Observable<Task | undefined> {
    return this.tasksSubject
      .asObservable()
      .pipe(map((tasks) => tasks.find((task) => task.id === id)));
  }

  addTask(task: Omit<Task, 'id'>) {
    const newTask: Task = { ...task, id: uuidv4() };
    const updated = [...this.tasksSubject.value, newTask];
    this.tasksSubject.next(updated);
  }

  updateTask(updatedTask: Task) {
    const updated = this.tasksSubject.value.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    this.tasksSubject.next(updated);
  }

  deleteTask(id: string) {
    const updated = this.tasksSubject.value.filter((task) => task.id !== id);
    this.tasksSubject.next(updated);
  }
}
