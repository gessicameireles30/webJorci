import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PontosTuristicosComponent } from './components/pontos-turisticos/pontos-turisticos.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { ComidasComponent } from './components/comidas/comidas.component';
import { CardComponent } from './components/card/card.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'inicio', component:HomeComponent},
  {path:'pontos-turisticos', component:PontosTuristicosComponent},
  {path:'servicos', component:ServicosComponent},
  {path: 'comidas', component:ComidasComponent},
  {path: 'card', component:CardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
