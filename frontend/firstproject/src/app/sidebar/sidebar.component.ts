import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Bereich, Fall, HilfeArt, Ja, Ma, MaArt, Sprache, VertragArt } from '../common/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  @Input('faelle') faelle: Fall[] = [];
  @Input('ja') ja: Ja[] = [];
  @Input('bereiche') bereiche: Bereich[] = [];
  @Input('hilfeArten') hilfeArten: HilfeArt[] = [];
  @Input('ma') ma: Ma[] = [];
  @Input('maArten') maArten: MaArt[] = [];
  @Input('vertragArten') vertragArten: VertragArt[] = [];
  @Input('sprachen') sprachen: Sprache[] = [];

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
