import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PontosTuristicosComponent } from './components/pontos-turisticos/pontos-turisticos.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'inicio', component:HomeComponent},
  {path:'pontos-turisticos', component:PontosTuristicosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
