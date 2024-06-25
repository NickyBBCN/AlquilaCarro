import { Component } from '@angular/core';
import { cliente } from '../../core/models/interfaceConsulta';
import { ConsultaService } from '../../core/services/consulta.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {
  clientes: cliente[] = [];
  cliente!: cliente;

  constructor(private consultaService: ConsultaService) {} // Inyecta ConsultaService en el constructor

  ngOnInit() {
    this.consultaService.VerConsulta().subscribe({
      next: (response) => {
        console.log('response', response);
        if (response.body?.data) {
          this.clientes = response.body.data.clientes; // Asigna los clientes obtenidos del servicio
          console.log('clientes:', this.clientes);
        }
      },
      error: (error) => {
        console.error('Error al obtener consulta:', error);
        // Maneja el error según tus necesidades
      }
    });
  }
}
