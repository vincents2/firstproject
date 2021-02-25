import { Component, Input, OnInit } from '@angular/core';
import { SyncItem, HttpMethod, VertragArt, HilfeArt, Bereich, Sprache, MaArt, Ma, Ma_Sprache, Ja, JaMa, Fall, Ziel, Fall_Ma, Fall_JaMa } from '../common/interfaces';
import { TemplateService } from '../services/template.service';
import { VertragArtenService } from '../services/vertrag-arten.service';
import { HilfeArtenService } from '../services/hilfe-arten.service';
import { BereicheService } from '../services/bereiche.service';
import { SprachenService } from '../services/sprachen.service';
import { MaArtenService } from '../services/ma-arten.service';
import { MaService } from '../services/ma.service';
import { MaSprachenService } from '../services/ma-sprachen.service';
import { JaService } from '../services/ja.service';
import { JaMaService } from '../services/ja-ma.service';
import { FaelleService } from '../services/faelle.service';
import { ZieleService } from '../services/ziele.service';
import { FaelleMaService } from '../services/faelle-ma.service';
import { FaelleJaMaService } from '../services/faelle-ja-ma.service';

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
  
  constructor(
    private srvTemplate: TemplateService,
    private srvVertragArten: VertragArtenService,
    private srvHilfeArten: HilfeArtenService,
    private srvBereiche: BereicheService,
    private srvSprachen: SprachenService,
    private srvMaArten: MaArtenService,
    private srvMa: MaService,
    private srvMaSprachen: MaSprachenService,
    private srvJa: JaService,
    private srvJaMa: JaMaService,
    private srvFaelle: FaelleService,
    private srvZiele: ZieleService,
    private srvFaelleMa: FaelleMaService,
    private srvFaelleJaMa: FaelleJaMaService
  ) { }
  
  ngOnInit(): void {
    let sync: SyncItem = { method: HttpMethod.GET }
    this.syncVertragArten(sync);
    this.syncHilfeArten(sync);
    this.syncBereiche(sync);
    this.syncSprachen(sync);
    this.syncMaArten(sync);
    this.syncMa(sync);
    this.syncMa_Sprachen(sync);
    this.syncJa(sync);
    this.syncJaMa(sync);
    this.syncFaelle(sync);
    this.syncZiele(sync);
    this.syncFaelle_Ma(sync);
    this.syncFaelle_JaMa(sync);
  }

  sync_singleEndpoint(sync: SyncItem, endpoint: string, array: any[]) {
    switch(sync.method) {
      case HttpMethod.POST:
        this.srvTemplate.post(endpoint, sync.item).subscribe((item: any) => {
          sync.item.id = item.id;
          console.log(`Success: POST request to endpoint \'${endpoint}\'. id = ${item.id}`);
        },
        (error: Response) => {
          console.log(`Error: POST request to endpoint \'${endpoint}\'. status = ${error.status}`);
        });
        break;
      case HttpMethod.GET:
        this.srvTemplate.get(`${endpoint}${sync.item ? `/${sync.item.id}` : ''}`).subscribe((items: any) => {
          array = items;
          console.log(`Success: GET request to endpoint \'${endpoint}\'. count = ${items.length}`);
        },
        (error: Response) => {
          console.log(`Error: GET request to endpoint \'${endpoint}\'. status = ${error.status}`);
        });
        break;
      case HttpMethod.PUT:
        this.srvTemplate.put(endpoint, sync.item).subscribe((item: any) => {
          console.log(`Success: PUT request to endpoint \'${endpoint}\'. id = ${item.id}`);
        },
        (error: Response) => {
          console.log(`Error: PUT request to endpoint \'${endpoint}\'. status = ${error.status}`);
        });
        break;
      case HttpMethod.DELETE:
        this.srvTemplate.delete(`${endpoint}/${sync.item.id}`).subscribe((item: any) => {
          console.log(`Success: DELETE request to endpoint \'${endpoint}\'. id = ${item.id}`);
        },
        (error: Response) => {
          console.log(`Error: DELETE request to endpoint \'${endpoint}\'. status = ${error.status}`);
        });
        break;
      default: break;
    }
  }

  syncVertragArten(sync: SyncItem) { // Ein Endpoint: /id
    let endpoint = 'vertragArten';
    switch(sync.method) {
      case HttpMethod.POST:
        this.srvTemplate.post(endpoint, sync.item).subscribe((item: any) => {
          sync.item.id = item.id;
          console.log(`Success: POST request to endpoint \'${endpoint}\'. id = ${item.id}`);
        },
        (error: Response) => {
          console.log(`Error: POST request to endpoint \'${endpoint}\'. status = ${error.status}`);
        });
        break;
      case HttpMethod.GET:
        this.srvTemplate.get(`${endpoint}${sync.item ? `/${sync.item.id}` : ''}`).subscribe((items: any) => {
          this.vertragArten = items;
          console.log(`Success: GET request to endpoint \'${endpoint}\'. count = ${items.length}`);
        },
        (error: Response) => {
          console.log(`Error: GET request to endpoint \'${endpoint}\'. status = ${error.status}`);
        });
        break;
      case HttpMethod.PUT:
        this.srvTemplate.put(endpoint, sync.item).subscribe((item: any) => {
          console.log(`Success: PUT request to endpoint \'${endpoint}\'. id = ${item.id}`);
        },
        (error: Response) => {
          console.log(`Error: PUT request to endpoint \'${endpoint}\'. status = ${error.status}`);
        });
        break;
      case HttpMethod.DELETE:
        this.srvTemplate.delete(`${endpoint}/${sync.item.id}`).subscribe((item: any) => {
          console.log(`Success: DELETE request to endpoint \'${endpoint}\'. id = ${item.id}`);
        },
        (error: Response) => {
          console.log(`Error: DELETE request to endpoint \'${endpoint}\'. status = ${error.status}`);
        });
        break;
      default: break;
    }
  }

  syncHilfeArten(sync: SyncItem) { // Ein Endpoint: /id
    let endpoint = 'hilfeArten';
    switch(sync.method) {
      case HttpMethod.POST:
        this.srvTemplate.post(endpoint, sync.item).subscribe((item: any) => {
          sync.item.id = item.id;
          console.log(`Success: POST request to endpoint \'${endpoint}\'. id = ${item.id}`);
        },
        (error: Response) => {
          console.log(`Error: POST request to endpoint \'${endpoint}\'. status = ${error.status}`);
        });
        break;
      case HttpMethod.GET:
        this.srvTemplate.get(`${endpoint}${sync.item ? `/${sync.item.id}` : ''}`).subscribe((items: any) => {
          this.hilfeArten = items;
          console.log(`Success: GET request to endpoint \'${endpoint}\'. count = ${items.length}`);
        },
        (error: Response) => {
          console.log(`Error: GET request to endpoint \'${endpoint}\'. status = ${error.status}`);
        });
        break;
      case HttpMethod.PUT:
        this.srvTemplate.put(endpoint, sync.item).subscribe((item: any) => {
          console.log(`Success: PUT request to endpoint \'${endpoint}\'. id = ${item.id}`);
        },
        (error: Response) => {
          console.log(`Error: PUT request to endpoint \'${endpoint}\'. status = ${error.status}`);
        });
        break;
      case HttpMethod.DELETE:
        this.srvTemplate.delete(`${endpoint}/${sync.item.id}`).subscribe((item: any) => {
          console.log(`Success: DELETE request to endpoint \'${endpoint}\'. id = ${item.id}`);
        },
        (error: Response) => {
          console.log(`Error: DELETE request to endpoint \'${endpoint}\'. status = ${error.status}`);
        });
        break;
      default: break;
    }
  }

  syncBereiche(sync: SyncItem) { // Ein Endpoint: /id
    let endpoint = 'bereiche';
    switch(sync.method) {
      case HttpMethod.POST:
        this.srvTemplate.post(endpoint, sync.item).subscribe((item: any) => {
          sync.item.id = item.id;
          console.log(`Success: POST request to endpoint \'${endpoint}\'. id = ${item.id}`);
        },
        (error: Response) => {
          console.log(`Error: POST request to endpoint \'${endpoint}\'. status = ${error.status}`);
        });
        break;
      case HttpMethod.GET:
        this.srvTemplate.get(`${endpoint}${sync.item ? `/${sync.item.id}` : ''}`).subscribe((items: any) => {
          this.bereiche = items;
          console.log(`Success: GET request to endpoint \'${endpoint}\'. count = ${items.length}`);
        },
        (error: Response) => {
          console.log(`Error: GET request to endpoint \'${endpoint}\'. status = ${error.status}`);
        });
        break;
      case HttpMethod.PUT:
        this.srvTemplate.put(endpoint, sync.item).subscribe((item: any) => {
          console.log(`Success: PUT request to endpoint \'${endpoint}\'. id = ${item.id}`);
        },
        (error: Response) => {
          console.log(`Error: PUT request to endpoint \'${endpoint}\'. status = ${error.status}`);
        });
        break;
      case HttpMethod.DELETE:
        this.srvTemplate.delete(`${endpoint}/${sync.item.id}`).subscribe((item: any) => {
          console.log(`Success: DELETE request to endpoint \'${endpoint}\'. id = ${item.id}`);
        },
        (error: Response) => {
          console.log(`Error: DELETE request to endpoint \'${endpoint}\'. status = ${error.status}`);
        });
        break;
      default: break;
    }
  }

  syncSprachen(sync: SyncItem) { // Ein Endpoint: /id
    let endpoint = 'sprachen';
    switch(sync.method) {
      case HttpMethod.POST:
        this.srvTemplate.post(endpoint, sync.item).subscribe((item: any) => {
          sync.item.id = item.id;
          console.log(`Success: POST request to endpoint \'${endpoint}\'. id = ${item.id}`);
        },
        (error: Response) => {
          console.log(`Error: POST request to endpoint \'${endpoint}\'. status = ${error.status}`);
        });
        break;
      case HttpMethod.GET:
        this.srvTemplate.get(`${endpoint}${sync.item ? `/${sync.item.id}` : ''}`).subscribe((items: any) => {
          this.sprachen = items;
          console.log(`Success: GET request to endpoint \'${endpoint}\'. count = ${items.length}`);
        },
        (error: Response) => {
          console.log(`Error: GET request to endpoint \'${endpoint}\'. status = ${error.status}`);
        });
        break;
      case HttpMethod.PUT:
        this.srvTemplate.put(endpoint, sync.item).subscribe((item: any) => {
          console.log(`Success: PUT request to endpoint \'${endpoint}\'. id = ${item.id}`);
        },
        (error: Response) => {
          console.log(`Error: PUT request to endpoint \'${endpoint}\'. status = ${error.status}`);
        });
        break;
      case HttpMethod.DELETE:
        this.srvTemplate.delete(`${endpoint}/${sync.item.id}`).subscribe((item: any) => {
          console.log(`Success: DELETE request to endpoint \'${endpoint}\'. id = ${item.id}`);
        },
        (error: Response) => {
          console.log(`Error: DELETE request to endpoint \'${endpoint}\'. status = ${error.status}`);
        });
        break;
      default: break;
    }
  }

  syncMaArten(sync: SyncItem) { // Ein Endpoint: /id
    let endpoint = 'maArten';
    switch(sync.method) {
      case HttpMethod.POST:
        this.srvTemplate.post(endpoint, sync.item).subscribe((item: any) => {
          sync.item.id = item.id;
          console.log(`Success: POST request to endpoint \'${endpoint}\'. id = ${item.id}`);
        },
        (error: Response) => {
          console.log(`Error: POST request to endpoint \'${endpoint}\'. status = ${error.status}`);
        });
        break;
      case HttpMethod.GET:
        this.srvTemplate.get(`${endpoint}${sync.item ? `/${sync.item.id}` : ''}`).subscribe((items: any) => {
          this.maArten = items;
          console.log(`Success: GET request to endpoint \'${endpoint}\'. count = ${items.length}`);
        },
        (error: Response) => {
          console.log(`Error: GET request to endpoint \'${endpoint}\'. status = ${error.status}`);
        });
        break;
      case HttpMethod.PUT:
        this.srvTemplate.put(endpoint, sync.item).subscribe((item: any) => {
          console.log(`Success: PUT request to endpoint \'${endpoint}\'. id = ${item.id}`);
        },
        (error: Response) => {
          console.log(`Error: PUT request to endpoint \'${endpoint}\'. status = ${error.status}`);
        });
        break;
      case HttpMethod.DELETE:
        this.srvTemplate.delete(`${endpoint}/${sync.item.id}`).subscribe((item: any) => {
          console.log(`Success: DELETE request to endpoint \'${endpoint}\'. id = ${item.id}`);
        },
        (error: Response) => {
          console.log(`Error: DELETE request to endpoint \'${endpoint}\'. status = ${error.status}`);
        });
        break;
      default: break;
    }
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
    //     break;w
    //   default: break;
    // }
  }

  syncJa(sync: SyncItem) { // Ein Endpoint: /id
    let endpoint = 'ja';
    switch(sync.method) {
      case HttpMethod.POST:
        this.srvTemplate.post(endpoint, sync.item).subscribe((item: any) => {
          sync.item.id = item.id;
          console.log(`Success: POST request to endpoint \'${endpoint}\'. id = ${item.id}`);
        },
        (error: Response) => {
          console.log(`Error: POST request to endpoint \'${endpoint}\'. status = ${error.status}`);
        });
        break;
      case HttpMethod.GET:
        this.srvTemplate.get(`${endpoint}${sync.item ? `/${sync.item.id}` : ''}`).subscribe((items: any) => {
          this.ja = items;
          console.log(`Success: GET request to endpoint \'${endpoint}\'. count = ${items.length}`);
        },
        (error: Response) => {
          console.log(`Error: GET request to endpoint \'${endpoint}\'. status = ${error.status}`);
        });
        break;
      case HttpMethod.PUT:
        this.srvTemplate.put(endpoint, sync.item).subscribe((item: any) => {
          console.log(`Success: PUT request to endpoint \'${endpoint}\'. id = ${item.id}`);
        },
        (error: Response) => {
          console.log(`Error: PUT request to endpoint \'${endpoint}\'. status = ${error.status}`);
        });
        break;
      case HttpMethod.DELETE:
        this.srvTemplate.delete(`${endpoint}/${sync.item.id}`).subscribe((item: any) => {
          console.log(`Success: DELETE request to endpoint \'${endpoint}\'. id = ${item.id}`);
        },
        (error: Response) => {
          console.log(`Error: DELETE request to endpoint \'${endpoint}\'. status = ${error.status}`);
        });
        break;
      default: break;
    }
  }

  syncJaMa(sync: SyncItem) { // Mehrere Endpoint: /id, /idJa
    console.log('not implemented');
  }

  syncFaelle(sync: SyncItem) { // Mehrere Endpoint: /id, /idJa, /idBereich, /idHilfeArt, /idSprache
    let endpoint = 'faelle';
    switch(sync.method) {
      case HttpMethod.POST:
        this.srvTemplate.post(endpoint, sync.item).subscribe((item: any) => {
          sync.item.id = item.id;
          console.log(`Success: POST request to endpoint \'${endpoint}\'. id = ${item.id}`);
        },
        (error: Response) => {
          console.log(`Error: POST request to endpoint \'${endpoint}\'. status = ${error.status}`);
        });
        break;
      case HttpMethod.GET:
        this.srvTemplate.get(`${endpoint}${sync.item ? `/${sync.item.id}` : ''}`).subscribe((items: any) => {
          this.faelle = items;
          console.log(`Success: GET request to endpoint \'${endpoint}\'. count = ${items.length}`);
        },
        (error: Response) => {
          console.log(`Error: GET request to endpoint \'${endpoint}\'. status = ${error.status}`);
        });
        break;
      case HttpMethod.PUT:
        this.srvTemplate.put(endpoint, sync.item).subscribe((item: any) => {
          console.log(`Success: PUT request to endpoint \'${endpoint}\'. id = ${item.id}`);
        },
        (error: Response) => {
          console.log(`Error: PUT request to endpoint \'${endpoint}\'. status = ${error.status}`);
        });
        break;
      case HttpMethod.DELETE:
        this.srvTemplate.delete(`${endpoint}/${sync.item.id}`).subscribe((item: any) => {
          console.log(`Success: DELETE request to endpoint \'${endpoint}\'. id = ${item.id}`);
        },
        (error: Response) => {
          console.log(`Error: DELETE request to endpoint \'${endpoint}\'. status = ${error.status}`);
        });
        break;
      default: break;
    }
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
