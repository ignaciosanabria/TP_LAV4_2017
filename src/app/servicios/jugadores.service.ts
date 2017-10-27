import { Injectable } from '@angular/core';
import {ArchivoJugadoresServiceService} from "../servicios/archivo-jugadores-service.service"

@Injectable()
export class JugadoresService {
  
  miServicio : ArchivoJugadoresServiceService;
  constructor(archivoJugadoresServicio : ArchivoJugadoresServiceService) {
    this.miServicio = archivoJugadoresServicio;
   }

   public TraerJugadores()
   {
    return this.miServicio.TraerJugadores("jugadores/").then(data => {return data;}).catch(error => {console.info(error);})
   }

}
