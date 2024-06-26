import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaporfechaComponent } from './listaporfecha.component';

const routes: Routes = [
  {path:'',component:ListaporfechaComponent},
  {path:'**', redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaporfechaRoutingModule { }
