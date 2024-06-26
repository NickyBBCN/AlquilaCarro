import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'inicio', loadChildren:()=>
    import('./components/inicio/inicio.module').then((m)=>m.InicioModule)
  },
  {path:'ListaInicial', loadChildren:()=>
    import('./components/lista1.4/lista1.4.module').then((m)=>m.Lista14Module)
  },
  {path:'**', redirectTo:'inicio',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
