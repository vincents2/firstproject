import { Component, Input, OnInit } from '@angular/core';
import { SyncItem, HttpMethod, VertragArt, HilfeArt, Bereich, Sprache, MaArt, Ma, Ma_Sprache, Ja, JaMa, Fall, Ziel, Fall_Ma, Fall_JaMa } from './../common/common';
import { TemplateService } from '../services/template.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.sass']
})
export class ViewComponent implements OnInit {

  @Input('view') view = '';
  
  vertragArten: VertragArt[] = [];
  hilfeArten: HilfeArt[] = [];
  bereiche: Bereich[] = [];
  sprachen: Sprache[] = [];
  maArten: MaArt[] = [];
  ma: Ma[] = [];
  ma_sprachen: Ma_Sprache[] = [];
  ja: Ja[] = [];
  jaMa: JaMa[] = [];
  faelle: Fall[] = [];
  ziele: Ziel[] = [];
  faelle_ma: Fall_Ma[] = [];
  faelle_jaMa: Fall_JaMa[] = [];

  constructor(private srvTemplate: TemplateService) { }

  ngOnInit(): void {
  }

  sync_singleEndpoint(sync: SyncItem, endpoint: string, array: any[]) {
    switch(sync.method) {
      case HttpMethod.POST:
        this.srvTemplate.post(endpoint, sync.item).subscribe((item: any) => {
          sync.item.id = item.id;
          console.log(`Success: POST request to endpoint \'${endpoint}\'. id = ${item.id}`);
        });
        break;
      case HttpMethod.GET:
        this.srvTemplate.get(`${endpoint}${sync.item ? `/${sync.item.id}` : ''}`).subscribe((items: any) => {
          array = items;
          console.log(`Success: GET request to endpoint \'${endpoint}\'. count = ${items.length}`);
        });
        break;
      case HttpMethod.PUT:
        this.srvTemplate.put(endpoint, sync.item).subscribe((item: any) => {
          console.log(`Success: PUT request to endpoint \'${endpoint}\'. id = ${item.id}`);
        });
        break;
      case HttpMethod.DELETE:
        this.srvTemplate.delete(`${endpoint}/${sync.item.id}`).subscribe((item: any) => {
          console.log(`Success: DELETE request to endpoint \'${endpoint}\'. id = ${item.id}`);
        });
        break;
    }
  }

  syncVertragArten(sync: SyncItem) { // Ein Endpoint: /id
    let endpoint = 'vertragArten';
    this.sync_singleEndpoint(sync, endpoint, this.vertragArten)
  }

  syncHilfeArten(sync: SyncItem) { // Ein Endpoint: /id
    let endpoint = 'hilfeArten';
    this.sync_singleEndpoint(sync, endpoint, this.hilfeArten)
  }

  syncBereiche(sync: SyncItem) { // Ein Endpoint: /id
    let endpoint = 'bereiche';
    this.sync_singleEndpoint(sync, endpoint, this.bereiche)
  }

  syncSprachen(sync: SyncItem) { // Ein Endpoint: /id
    let endpoint = 'sprachen';
    this.sync_singleEndpoint(sync, endpoint, this.sprachen)
  }

  syncMaArten(sync: SyncItem) { // Ein Endpoint: /id
    let endpoint = 'maArten';
    this.sync_singleEndpoint(sync, endpoint, this.maArten)
  }

  syncMa(sync: SyncItem) { // Mehrere Endpoints: /id, /idVertragArt, /idMaArt
    console.log('not implemented');
  }

  syncMa_Sprachen(sync: SyncItem) { // Mehrere Endpoints: /idMa, /idSprache
    console.log('not implemented');
    // let endpoint = 'hilfeArten';
    // switch(sync.method) {
    //   case HttpMethod.POST:
    //     this.srvTemplate.post(endpoint, sync.item).subscribe((item: any) => {
    //       sync.item.id = item.id;
    //       console.log(`Success: POST request to endpoint \'${endpoint}\'. id = ${item.id}`);
    //     });
    //     break;
    //   case HttpMethod.GET:
    //     this.srvTemplate.get(endpoint, sync.item ? sync.item : undefined).subscribe((items: any) => {
    //       this.vertragArten = items;
    //       console.log(`Success: GET request to endpoint \'${endpoint}\'. count = (${items.length})`);
    //     });
    //     break;
    //   case HttpMethod.DELETE:
    //     this.srvTemplate.delete(`${endpoint}/${sync.item.id}`).subscribe((item: any) => {
    //       console.log(`Success: DELETE request to endpoint \'${endpoint}\'. id = ${item.id}`);
    //     });
    //     break;
    //   default: break;
    // }
  }

  syncJa(sync: SyncItem) { // Ein Endpoint: /id
    let endpoint = 'ja';
    this.sync_singleEndpoint(sync, endpoint, this.ja)
  }

  syncJaMa(sync: SyncItem) { // Mehrere Endpoint: /id, /idJa
    console.log('not implemented');
  }

  syncFaelle(sync: SyncItem) { // Mehrere Endpoint: /id, /idJa, /idBereich, /idHilfeArt, /idSprache
    console.log('not implemented');
  }

  syncZiele(sync: SyncItem) { // Mehrere Endpoint: /id, /idFall
    console.log('not implemented');
  }

  syncFaelle_Ma(sync: SyncItem) { // Mehrere Endpoints: /idFall, /idMa
    console.log('not implemented');
  }

  syncFaelle_JaMa(sync: SyncItem) { // Mehrere Endpoints: /idFall, /idJaMa
    console.log('not implemented');
  }
}
