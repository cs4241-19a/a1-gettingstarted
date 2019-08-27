import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project 1';

  page = 1;

  updatePage(newPage: number) {
    this.page = newPage;
  }
}
