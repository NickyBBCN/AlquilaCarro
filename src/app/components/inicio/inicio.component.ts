import { Component,inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent  {


  private router= inject(Router)


  primerPunto(){
    this.router.navigate(['/ListaInicial'])
  }
  seguntoPunto(){
    this.router.navigate(['/ListaxFecha'])
  }
  tercerPunto(){
    this.router.navigate(['/ListaxDiaMes'])
  }


}
