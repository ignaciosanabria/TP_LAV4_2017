import { Injectable } from '@angular/core';
import { MiHttpService} from '../servicios/mi-http.service';

@Injectable()
export class ArchivoJugadoresServiceService {
  
  miHttpServicio : MiHttpService;
  
  constructor(httpServicio : MiHttpService) {
    this.miHttpServicio = httpServicio;
   }

   public TraerJugadores(ruta : string)
   {
    return this.miHttpServicio.httpGetPromise(ruta).then(datos => {return datos;}).catch(error => {console.info(error)});
   }

  



}
