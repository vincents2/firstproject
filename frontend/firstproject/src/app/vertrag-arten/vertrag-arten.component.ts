import { Component, Input, OnInit } from '@angular/core';
import { VertragArt } from '../common/common';

@Component({
  selector: 'app-vertrag-arten',
  templateUrl: './vertrag-arten.component.html',
  styleUrls: ['./vertrag-arten.component.sass']
})
export class VertragArtenComponent implements OnInit {

  @Input('vertragArten') vertragArten: VertragArt[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
