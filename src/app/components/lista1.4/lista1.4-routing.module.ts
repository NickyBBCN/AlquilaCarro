import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lista14Component } from './lista1.4.component';

const routes: Routes = [
  {path:'',component:Lista14Component},
  {path:'**', redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lista14RoutingModule { }
