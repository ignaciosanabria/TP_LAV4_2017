import { Component, OnInit } from '@angular/core';
import { JugadoresService} from '../../servicios/jugadores.service'

@Component({
  selector: 'app-listado-jugadores',
  templateUrl: './listado-jugadores.component.html',
  styleUrls: ['./listado-jugadores.component.css']
})
export class ListadoJugadoresComponent implements OnInit {
 
  miJugadoresServicio : JugadoresService;
  jugadores : Array<any>;
  constructor(JugadoresService : JugadoresService) {
    this.miJugadoresServicio = JugadoresService;
    this.miJugadoresServicio.TraerJugadores().then(data => {this.jugadores = data;}).catch(error => {console.log(error);});
   }

   public mostrarJugadores()
   {
   //this.miJugadoresServicio.TraerJugadores().then(data => {this.jugadores = data}).catch(error => {console.log(error);});
   }

  ngOnInit() {

  }

}
