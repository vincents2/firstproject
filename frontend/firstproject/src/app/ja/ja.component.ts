import { Component, Input, OnInit } from '@angular/core';
import { Ja } from '../common/common';

@Component({
  selector: 'app-ja',
  templateUrl: './ja.component.html',
  styleUrls: ['./ja.component.sass']
})
export class JaComponent implements OnInit {

  @Input('ja') ja: Ja[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
