import { Component, inject } from '@angular/core';
import { cliente } from '../../core/models/interfaceConsulta';
import { ConsultaService } from '../../core/services/consulta.service';

@Component({
  selector: 'app-listaporfecha',
  templateUrl: './listaporfecha.component.html',
  styleUrl: './listaporfecha.component.scss'
})
export class ListaporfechaComponent {
  clientes: cliente[] = [];
  filteredClientes: cliente[] = [];
  fechaInicial: Date | null = null;
  fechaFinal: Date | null = null;
  date: Date | undefined;
 private consultaService= inject( ConsultaService)

  ngOnInit() {
    this.consultaService.VerConsulta().subscribe({
      next: (response) => {
        console.log('response', response);
        if (response.body?.data) {
          this.clientes = response.body.data.clientes;
          console.log('clientes:', this.clientes);
        }
      },
      error: (error) => {
        console.error('Error al obtener consulta:', error);

      }
    });
    this.filtrarxFecha();
  }
  filtrarxFecha() {
    if (!this.fechaInicial || !this.fechaFinal) {
      this.filteredClientes = this.clientes;
      return;
    }

    const startOfDay = new Date(this.fechaInicial);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(this.fechaFinal);
    endOfDay.setHours(23, 59, 59, 999);

    this.filteredClientes = this.clientes.filter(cliente => {

      const fechaAlquiler = new Date(cliente.fechaAlquiler);
      return fechaAlquiler >= startOfDay && fechaAlquiler <= endOfDay;
    });
  }


}
