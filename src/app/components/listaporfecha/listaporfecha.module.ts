import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaporfechaRoutingModule } from './listaporfecha-routing.module';
import { PrimeNGModule } from '../../shared/prime-ng/prime-ng.module';
import { ListaporfechaComponent } from './listaporfecha.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListaporfechaComponent,
  ],
  imports: [
    CommonModule,
    ListaporfechaRoutingModule,
    PrimeNGModule,
    FormsModule
  ]
})
export class ListaporfechaModule { }
