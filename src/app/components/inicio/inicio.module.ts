import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { PrimeNGModule } from '../../shared/prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    PrimeNGModule,
    FormsModule
  ]
})
export class InicioModule { }
