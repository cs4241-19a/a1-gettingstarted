import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Output()
  pageEmitter = new EventEmitter();

  page: number;

  constructor() { }

  ngOnInit() {
  }

  changePage(newPage: number) {
    this.page = newPage;
    this.pageEmitter.emit(this.page);
  }
}
