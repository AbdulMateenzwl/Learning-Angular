import { TaskPriority } from '../dashboard/enums/taskPriority.enum';
import { TaskStatus } from '../dashboard/enums/taskStatus.enum';

export class Task {
  public id: string;
  
  constructor(
    public title: string,
    public description: string,
    public status: TaskStatus,
    public priority: TaskPriority,
    public dueDate: Date
  ) {
    this.id = '';
  }
}
