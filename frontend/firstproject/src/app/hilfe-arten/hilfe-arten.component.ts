import { Component, Input, OnInit } from '@angular/core';
import { HilfeArt } from '../common/interfaces';

@Component({
  selector: 'app-hilfe-arten',
  templateUrl: './hilfe-arten.component.html',
  styleUrls: ['./hilfe-arten.component.sass']
})
export class HilfeArtenComponent implements OnInit {

  @Input('hilfeArten') hilfeArten: HilfeArt[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
