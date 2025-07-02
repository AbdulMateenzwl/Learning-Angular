import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Injectable()
export class TaskResolver implements Resolve<Task> {
  constructor(private taskService: TaskService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Task> | Task | Promise<Task> {
    return this.taskService.getTask(route.params['id']).pipe(
      map((task) => {
        if (!task) {
          throw new Error('Task not found');
        }
        return task;
      })
    );
  }
}
