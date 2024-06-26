import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lista14RoutingModule } from './lista1.4-routing.module';
import { Lista14Component } from './lista1.4.component';
import { PrimeNGModule } from '../../shared/prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    Lista14Component
  ],
  imports: [
    CommonModule,
    Lista14RoutingModule,
    PrimeNGModule
  ]
})
export class Lista14Module { }
