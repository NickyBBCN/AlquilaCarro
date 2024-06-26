import { Component, inject } from '@angular/core';
import { cliente } from '../../core/models/interfaceConsulta';
import { ConsultaService } from '../../core/services/consulta.service';

@Component({
  selector: 'app-lista1.4',
  templateUrl: './lista1.4.component.html',
  styleUrl: './lista1.4.component.scss'
})
export class Lista14Component {
  clientes: cliente[] = [];
  filteredClientes: cliente[] = [];
  fechaInicial: Date | null = null;
  fechaFinal: Date | null = null;

private consultaService = inject( ConsultaService)

  ngOnInit() {
    this.consultaService.VerConsulta().subscribe({
      next: (response) => {
        console.log('response', response);
        if (response.body?.data) {
          this.clientes = response.body.data.clientes;
        }
      },
      error: (error) => {
        console.error('Error al obtener consulta:', error);
        // Maneja el error según tus necesidades
      }
    });

  }
}
