import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'inicio', loadChildren:()=>
    import('./components/inicio/inicio.module').then((m)=>m.InicioModule)
  },
  {path:'**', redirectTo:'inicio',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
