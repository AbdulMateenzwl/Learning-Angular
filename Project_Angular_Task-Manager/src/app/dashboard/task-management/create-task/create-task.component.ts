import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task.model';
import { TaskStatus } from '../../enums/taskStatus.enum';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService, private router: Router, private route: ActivatedRoute) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      priority: ['Low', Validators.required],
      dueDate: ['', Validators.required],
    });
  }

  onSubmit() {

    if (this.taskForm.invalid) {
      return;
    }

    const newTask: Task = new Task(
      this.taskForm.value.title,
      this.taskForm.value.description,
      TaskStatus.PENDING,
      this.taskForm.value.priority,
      this.taskForm.value.Date
    );

    this.taskService.addTask(newTask);

    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
