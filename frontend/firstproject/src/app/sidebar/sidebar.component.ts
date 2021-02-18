import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  @Output('viewChanged') viewChanged = new EventEmitter();

  view = 'faelle';

  constructor() { }

  ngOnInit(): void {
    this.viewChanged.emit(this.view);
  }

  changeView(view: string) {
    this.view = view;
    this.viewChanged.emit(this.view);
  }
}
