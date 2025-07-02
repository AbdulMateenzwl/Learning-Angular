import { Component } from '@angular/core';

@Component({
  selector: 'app-task-management',
  templateUrl: './task-management.component.html',
  styleUrls: ['./task-management.component.scss'],
})
export class TaskManagementComponent {
  statusFilter = '';
  priorityFilter = '';
  searchTerm = '';

  tasks = [
    {
      title: 'Implement user authentication system',
      description:
        'Create login and registration functionality with JWT tokens',
      status: 'Pending',
      priority: 'High Priority',
      dueDate: 'Dec 15, 2024',
    },
    {
      title: 'Design responsive dashboard layout',
      description: 'Create mobile-friendly dashboard with CSS Grid and Flexbox',
      status: 'In Progress',
      priority: 'Medium Priority',
      dueDate: 'Dec 12, 2024',
    },
  ];
}
