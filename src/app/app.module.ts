import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './components/template/template.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { PontosTuristicosComponent } from './components/pontos-turisticos/pontos-turisticos.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { ComidasComponent } from './components/comidas/comidas.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    HomeComponent,
    CardComponent,
    PontosTuristicosComponent,
    ServicosComponent,
    ComidasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
