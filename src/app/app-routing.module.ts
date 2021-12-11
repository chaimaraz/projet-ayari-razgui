import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminInterfaceComponent } from './composant/admin-interface/admin-interface.component';
import { AproposComponent } from './composant/apropos/apropos.component';
import { FormulaireComponent } from './composant/formulaire/formulaire.component';
import { GalerieComponent } from './composant/galerie/galerie.component';
import { HotelComponent } from './composant/hotel/hotel.component';
import { ListregionalesComponent } from './composant/listregionales/listregionales.component';
import { RegionalComponent } from './composant/regional/regional.component';
import { SectionComponent } from './composant/section/section.component';


const routes:Routes =[
  {path:'Home', component:SectionComponent},
  {path:'galerie', component:GalerieComponent},
  {path:'Package', component:ListregionalesComponent},
  {path:'Formulaire',component:FormulaireComponent},
  {path: 'interface',component:AdminInterfaceComponent},
  {path: 'interface/:id',component:AdminInterfaceComponent},
{path:'propos',component:AproposComponent},
  {path:'Package/:place', component:RegionalComponent},
  {path:'Package/:place/:hotel', component:HotelComponent},
   {path:'', redirectTo:'Home', pathMatch:'full'}
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
