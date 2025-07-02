import { TaskPriority } from "../dashboard/enums/taskPriority.enum";
import { TaskStatus } from "../dashboard/enums/taskStatus.enum";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: Date;
}
