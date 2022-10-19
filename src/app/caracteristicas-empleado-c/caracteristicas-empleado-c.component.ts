import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent implements OnInit {

  @Output() caracteristicasEmpleado = new EventEmitter<string>();
  
  //constructor(private servicioMensaje: ServicioEmpleadosService){}

  ngOnInit(): void {
  }

  agregarCaracteristicas(value: string){
   // this.servicioMensaje.muestraMensaje(value);
    //this.caracteristicasEmpleado.emit(value);
  }

}
