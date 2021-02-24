import { Component, Input, OnInit } from '@angular/core';
import { Fall, Fall_Ma, Ma, MaArt, Sprache, VertragArt } from '../common/interfaces';

@Component({
  selector: 'app-ma',
  templateUrl: './ma.component.html',
  styleUrls: ['./ma.component.sass']
})
export class MaComponent implements OnInit {

  @Input('ma') ma: Ma[] = [];
  @Input('vertragArten') vertragArten: VertragArt[] = [];
  @Input('maArten') maArten: MaArt[] = [];
  @Input('sprachen') sprachen: Sprache[] = [];
  @Input('faelle_ma') faelle_ma: Fall_Ma[] = [];
  @Input('faelle') faelle: Fall[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
