import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task.model';
import { TaskStatus } from '../../enums/taskStatus.enum';
import { Router, ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent implements OnInit {
  taskForm!: FormGroup;
  task!: Task;

  updateOpen: boolean = false;

  @ViewChild('cardContainer') cardContainer!: ElementRef;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.task = data['task'];
      console.log(this.task);
      this.updateOpen = this.task !== undefined;
    });

    if (this.updateOpen) {
      this.taskForm = this.fb.group({
        title: [this.task.title, Validators.required],
        description: [this.task.description],
        priority: [this.task.priority, Validators.required],
        taskStatus: [this.task.status, Validators.required],
        dueDate: [this.task.dueDate, Validators.required],
      });
    } else {
      this.taskForm = this.fb.group({
        title: ['', Validators.required],
        description: [''],
        priority: ['Low', Validators.required],
        dueDate: ['', Validators.required],
      });
    }
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
      this.taskForm.value.dueDate
    );

    if (!this.updateOpen) {
      this.taskService.addTask(newTask);
    } else {
      newTask.id = this.task.id;
      newTask.status = this.taskForm.value.taskStatus;
      this.taskService.updateTask(newTask);
    }

    this.router.navigate(['/dashboard']);
  }

  onOutsideClick(event: MouseEvent) {
    if (
      this.cardContainer &&
      !this.cardContainer.nativeElement.contains(event.target as Node)
    ) {
      this.router.navigate(['/dashboard']);
    }
  }
}
