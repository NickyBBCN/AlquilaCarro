import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';



@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    TableModule,
    CalendarModule,
  ]
})
export class PrimeNGModule { }
