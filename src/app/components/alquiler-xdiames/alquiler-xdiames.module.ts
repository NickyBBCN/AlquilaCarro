import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlquilerXdiamesRoutingModule } from './alquiler-xdiames-routing.module';
import { PrimeNGModule } from '../../shared/prime-ng/prime-ng.module';
import { AlquilerXdiamesComponent } from './alquiler-xdiames.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AlquilerXdiamesComponent
  ],
  imports: [
    CommonModule,
    AlquilerXdiamesRoutingModule,
    PrimeNGModule,
    FormsModule
  ]
})
export class AlquilerXdiamesModule { }
