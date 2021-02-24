import { Component, Input, OnInit } from '@angular/core';
import { Bereich, Fall, Fall_JaMa, Fall_Ma, HilfeArt, Ja, JaMa, Ma, Sprache, Ziel } from '../common/common';

@Component({
  selector: 'app-faelle',
  templateUrl: './faelle.component.html',
  styleUrls: ['./faelle.component.sass']
})
export class FaelleComponent implements OnInit {

  @Input('faelle') faelle: Fall[] = [];
  @Input('ja') ja: Ja[] = [];
  @Input('bereiche') bereiche: Bereich[] = [];
  @Input('hilfeArten') hilfeArten: HilfeArt[] = [];
  @Input('sprachen') sprachen: Sprache[] = [];
  @Input('ziele') ziele: Ziel[] = [];
  @Input('faelle_ma') faelle_ma: Fall_Ma[] = [];
  @Input('faelle_jaMa') faelle_jaMa: Fall_JaMa[] = [];
  @Input('ma') ma: Ma[] = [];
  @Input('jaMa') jaMa: JaMa[] = [];
  
  selFall: Fall = { id: -1, nachname: '', archiviert: false };

  constructor() { }

  ngOnInit(): void {
  }
}
