import { Component } from '@angular/core';
import { Driver } from './models/driver';
import { Telefono } from './models/telefono';
import { DriverService } from './services/driver.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portafolio.App';

  drivers:Driver[]=[];
  constructor(private driverService: DriverService){}

  ngOnInit():void{
    this.driverService.getDrivers().subscribe((result:Driver[]) => (this.drivers=result));
    console.log(this.drivers); 
  }
  
  telefono: Telefono = new Telefono();
  successMessageVisible: boolean = false; // Variable para controlar la visibilidad de la alerta de éxito
  errorMessageVisible: boolean = false; 


  enviarMensaje(): void {
    this.driverService.postMensaje(this.telefono).subscribe(
      () => {
        console.log('Mensaje enviado exitosamente.');
        this.successMessageVisible = true; // Mostrar alerta de éxito
        this.errorMessageVisible = false; // Ocultar alerta de error
      },
      (error) => {
        // Si hay un error, mostrar mensaje de error
        console.error('Error al enviar el mensaje:', error);
        this.errorMessageVisible = true; // Mostrar alerta de error
        this.successMessageVisible = false; // Ocultar alerta de éxito
      }
    );
  }
}
