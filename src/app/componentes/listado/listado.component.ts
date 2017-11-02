import { Component, OnInit } from '@angular/core';
import { JuegoServiceService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public listadoParaCompartir: Array<any>;
  juegoElegido : string;
   miServicioJuego:JuegoServiceService;
   opcionSeleccionar : boolean;
  constructor(servicioJuego:JuegoServiceService) { 
    this.miServicioJuego = servicioJuego;
    this.listadoParaCompartir = JSON.parse(localStorage.getItem("Resultados"));  
    this.opcionSeleccionar = true;
  }
  
  ngOnInit() {
    
  }

  verGanadores()
  {
   this.listadoParaCompartir = this.listadoParaCompartir.filter(function(valor)
  {
    return valor.gano == true;
  });
  }

  filtrarPorJuego(juego : string)
  {
    console.log(juego);
  }

  llamaService(){
    console.log("llamaService");
    this.listadoParaCompartir= this.miServicioJuego.listar();
  }

  llamaServicePromesa(){
    console.log("llamaServicePromesa");
    this.miServicioJuego.listarPromesa().then((listado) => {
        this.listadoParaCompartir = listado;
    });
  }
}
