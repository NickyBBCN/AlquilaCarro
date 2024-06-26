import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlquilerXdiamesComponent } from './alquiler-xdiames.component';

const routes: Routes = [
  {path:'',component:AlquilerXdiamesComponent},
  {path:'**', redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlquilerXdiamesRoutingModule { }
