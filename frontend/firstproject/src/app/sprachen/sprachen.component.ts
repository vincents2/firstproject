import { Component, Input, OnInit } from '@angular/core';
import { Sprache } from '../common/common';

@Component({
  selector: 'app-sprachen',
  templateUrl: './sprachen.component.html',
  styleUrls: ['./sprachen.component.sass']
})
export class SprachenComponent implements OnInit {

  @Input('sprachen') sprachen: Sprache[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
