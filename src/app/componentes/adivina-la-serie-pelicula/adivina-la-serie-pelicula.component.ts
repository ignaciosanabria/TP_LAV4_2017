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
  Mensajes:string;
  arrayResultados : Array<any>;

  constructor() {
    this.nuevoJuego = new JuegoAdivinaPeliculaSerie("Adivina La Pelicula O Serie",false,"natalia natalia");
    this.ocultarVerificar = true;
    this.arrayResultados = JSON.parse(localStorage.getItem("Resultados"));
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
    if(this.nuevoJuego.verificar())
      {
        this.MostarMensaje("Correcto. Acertaste la correcta!!",true);
      }
      else
        {
          this.MostarMensaje("Fallaste. La opcion elegida es incorrecta!!",false);
        }
        //Agrego el juego a los resultados independiente si gane o no!
        this.arrayResultados.push(this.nuevoJuego);
        localStorage.setItem("Resultados",JSON.stringify(this.arrayResultados));
        //Despues de verificar si gane o no, reinicio el juego!!
        this.nuevoJuego = new JuegoAdivinaPeliculaSerie("Adivina La Pelicula O Serie",false,"natalia natalia");
   }

   MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean=false) {
    this.Mensajes=mensaje;    
    var x = document.getElementById("snackbar");
    if(ganador)
      {
        x.className = "show Ganador";
      }else{
        x.className = "show Perdedor";
      }
    var modelo=this;
    setTimeout(function(){ 
      x.className = x.className.replace("show", "");
      modelo.ocultarVerificar=false;
     }, 3000);
    console.info("objeto",x);
  
   } 
  ngOnInit() {
  }

}
