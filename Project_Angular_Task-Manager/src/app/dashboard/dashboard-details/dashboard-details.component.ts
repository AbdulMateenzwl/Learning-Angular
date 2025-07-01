import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-details',
  templateUrl: './dashboard-details.component.html',
  styleUrls: ['./dashboard-details.component.scss'],
})
export class DashboardDetailsComponent {
  stats = [
    { label: 'Total Tasks', value: 4, icon: '📝', bg: 'bg-indigo-500' },
    { label: 'Completed', value: 1, icon: '✅', bg: 'bg-green-500' },
    { label: 'Pending', value: 2, icon: '🕒', bg: 'bg-yellow-500' },
    { label: 'Overdue', value: 3, icon: '⚠️', bg: 'bg-red-500' },
  ];
}
