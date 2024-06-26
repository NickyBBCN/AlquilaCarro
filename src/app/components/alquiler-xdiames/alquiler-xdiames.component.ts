import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { ConsultaService } from '../../core/services/consulta.service';
import { cliente } from '../../core/models/interfaceConsulta';

@Component({
  selector: 'app-alquiler-xdiames',
  templateUrl: './alquiler-xdiames.component.html',
  styleUrl: './alquiler-xdiames.component.scss'
})
export class AlquilerXdiamesComponent {
  clientes: cliente[] = [];
  filteredClientes: cliente[] = [];
  fechaInicial: Date | null = null;
  fechaFinal: Date | null = null;
  private consultaSubscription: Subscription | undefined;

  constructor(private consultaService: ConsultaService) {}

  ngOnInit() {
    this.consultaSubscription = interval(60000) // Intervalo de 1 minuto
      .subscribe(() => {
        this.fetchData();
      });

    this.fetchData();
  }

  ngOnDestroy() {
    if (this.consultaSubscription) {
      this.consultaSubscription.unsubscribe();
    }
  }

  fetchData() {
    this.consultaService.VerConsulta().subscribe({
      next: (response) => {
        if (response.body?.data) {
          this.clientes = response.body.data.clientes;
          this.filtrarxFecha();
        }
      },
      error: (error) => {
        console.error('Error al obtener consulta:', error);
      }
    });
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

  countAlquileresPorDia() {
    // Lógica para contar alquileres por día
    // Ejemplo básico de conteo por día
    const countByDay = new Map<string, number>();

    this.filteredClientes.forEach(cliente => {
      const fechaAlquiler = new Date(cliente.fechaAlquiler);
      const key = fechaAlquiler.toISOString().substr(0, 10); // Solo fecha sin hora
      if (countByDay.has(key)) {
        countByDay.set(key, countByDay.get(key)! + 1);
      } else {
        countByDay.set(key, 1);
      }
    });

    return countByDay;
  }

  countAlquileresPorMes() {
    // Lógica para contar alquileres por mes
    // Ejemplo básico de conteo por mes
    const countByMonth = new Map<string, number>();

    this.filteredClientes.forEach(cliente => {
      const fechaAlquiler = new Date(cliente.fechaAlquiler);
      const key = fechaAlquiler.toISOString().substr(0, 7); // Solo año y mes
      if (countByMonth.has(key)) {
        countByMonth.set(key, countByMonth.get(key)! + 1);
      } else {
        countByMonth.set(key, 1);
      }
    });

    return countByMonth;
  }
}
