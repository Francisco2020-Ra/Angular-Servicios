import { Empleado } from './empleado/empleado.model';



export class EmpleadosService {

    empleados: Empleado[] = [
        new Empleado("Nicolas", "Gonzalez", "Presidente", 7500),
        new Empleado("Maria", "Martín", "Vicepresidente", 6500),
        new Empleado("Ana", "Lopez", "Jefa de Area", 4500),
        new Empleado("Alfredo", "Gimenez", "Supervisor", 3500),
    ];


    agregarEmpleadoServicio(empleado: Empleado) {
        this.empleados.push(empleado);
    }
}