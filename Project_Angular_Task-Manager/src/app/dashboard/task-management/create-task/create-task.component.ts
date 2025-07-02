import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      taskTitle: ['', Validators.required],
      description: [''],
      priority: ['Low', Validators.required],
      dueDate: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.taskForm);
    if (this.taskForm.valid) {
    } else {
      this.taskForm.markAllAsTouched();
    }
  }
}
