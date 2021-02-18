import { Component, Input, OnInit } from '@angular/core';
import { MaArt } from '../common/common';

@Component({
  selector: 'app-ma-arten',
  templateUrl: './ma-arten.component.html',
  styleUrls: ['./ma-arten.component.sass']
})
export class MaArtenComponent implements OnInit {

  @Input('maArten') maArten: MaArt[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
