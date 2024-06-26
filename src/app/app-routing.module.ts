import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'inicio', loadChildren:()=>
    import('./components/inicio/inicio.module').then((m)=>m.InicioModule)
  },
  {path:'ListaInicial', loadChildren:()=>
    import('./components/lista1.4/lista1.4.module').then((m)=>m.Lista14Module)
  },
  {path:'ListaxFecha', loadChildren:()=>
    import('./components/listaporfecha/listaporfecha.module').then((m)=>m.ListaporfechaModule)
  },
  {path:'ListaxDiaMes', loadChildren:()=>
    import('./components/alquiler-xdiames/alquiler-xdiames.module').then((m)=>m.AlquilerXdiamesModule)
  },
  {path:'**', redirectTo:'inicio',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
