import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './composant/header/header.component';
import { SectionComponent } from './composant/section/section.component';
import { FooterComponent } from './composant/footer/footer.component';
import { ListregionalesComponent } from './composant/listregionales/listregionales.component';
import { RegionalComponent } from './composant/regional/regional.component';
import { HotelComponent } from './composant/hotel/hotel.component';
import { GalerieComponent } from './composant/galerie/galerie.component';
import { FormulaireComponent } from './composant/formulaire/formulaire.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminInterfaceComponent } from './composant/admin-interface/admin-interface.component';
import {HttpClientModule} from "@angular/common/http";
import { AproposComponent } from './composant/apropos/apropos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    FooterComponent,
    ListregionalesComponent,
    RegionalComponent,
    HotelComponent,
    GalerieComponent,
    FormulaireComponent,
    AdminInterfaceComponent,
    AproposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
