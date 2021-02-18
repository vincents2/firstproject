import { Component, Input, OnInit } from '@angular/core';
import { Bereich } from '../common/common';

@Component({
  selector: 'app-bereiche',
  templateUrl: './bereiche.component.html',
  styleUrls: ['./bereiche.component.sass']
})
export class BereicheComponent implements OnInit {

  @Input('bereiche') bereiche: Bereich[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
