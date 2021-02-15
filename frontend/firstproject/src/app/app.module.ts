import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { BereicheService } from './services/bereiche.service';
import { FaelleJaMaService } from './services/faelle-ja-ma.service';
import { FaelleMaService } from './services/faelle-ma.service';
import { FaelleService } from './services/faelle.service';
import { HilfeArtenService } from './services/hilfe-arten.service';
import { JaService } from './services/ja.service';
import { MaArtenService } from './services/ma-arten.service';
import { MaSprachenService } from './services/ma-sprachen.service';
import { MaService } from './services/ma.service';
import { SprachenService } from './services/sprachen.service';
import { VertragArtenService } from './services/vertrag-arten.service';
import { ZieleService } from './services/ziele.service';
import { ViewComponent } from './view/view.component';
import { BereicheComponent } from './bereiche/bereiche.component';
import { FaelleComponent } from './faelle/faelle.component';
import { HilfeArtenComponent } from './hilfe-arten/hilfe-arten.component';
import { JaComponent } from './ja/ja.component';
import { MaArtenComponent } from './ma-arten/ma-arten.component';
import { MaComponent } from './ma/ma.component';
import { SprachenComponent } from './sprachen/sprachen.component';
import { VertragArtenComponent } from './vertrag-arten/vertrag-arten.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    ViewComponent,
    BereicheComponent,
    FaelleComponent,
    HilfeArtenComponent,
    JaComponent,
    MaArtenComponent,
    MaComponent,
    SprachenComponent,
    VertragArtenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClient
  ],
  providers: [
    BereicheService,
    FaelleJaMaService,
    FaelleMaService,
    FaelleService,
    HilfeArtenService,
    JaService,
    MaArtenService,
    MaSprachenService,
    MaService,
    SprachenService,
    VertragArtenService,
    ZieleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
