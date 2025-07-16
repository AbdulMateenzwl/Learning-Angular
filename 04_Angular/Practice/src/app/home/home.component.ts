import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = 'Welcome to the Home Page';

  onClickHandle() {
    this.title = new Date().toLocaleTimeString() + ' - ' + 'Title Changed';
  }

  onClickHandle2() {
    console.log('Button Clicked!');
  }
}
