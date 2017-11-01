import { Component, OnInit } from '@angular/core';
import { JuegoAdivinaPeliculaSerie } from '../../clases/juego-adivina-pelicula-serie'

@Component({
  selector: 'app-adivina-la-serie-pelicula',
  templateUrl: './adivina-la-serie-pelicula.component.html',
  styleUrls: ['./adivina-la-serie-pelicula.component.css']
})
export class AdivinaLaSeriePeliculaComponent implements OnInit {
  nuevoJuego : JuegoAdivinaPeliculaSerie;
  ocultarVerificar : boolean;

  constructor() {
    this.nuevoJuego = new JuegoAdivinaPeliculaSerie();
    this.ocultarVerificar = true;
   }
   
   public generar()
   {
     this.ocultarVerificar = false;
     this.nuevoJuego.generar();
     console.log(this.nuevoJuego.elementoAdivinar);
   }

   public verificar()
   {
    console.log(this.nuevoJuego.opcionIngresada);
    if(this.nuevoJuego.opcionIngresada == this.nuevoJuego.opcionCorrecta)
      {
        alert("Es correcta");
      }
      else
        {
          alert("Nada que ver!");
        }
   }
  ngOnInit() {
  }

}
