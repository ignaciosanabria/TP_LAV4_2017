import { Component, OnInit } from '@angular/core';
import {JuegoPiedraPapelTijera} from '../../clases/juego-piedra-papel-tijera';
@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {
  nuevoJuego : JuegoPiedraPapelTijera;
  ocultarGenerar : boolean;
  mostrarVerificar : boolean;

  Mensajes:string;

  constructor() {
    this.nuevoJuego = new JuegoPiedraPapelTijera();
    this.nuevoJuego.opcionUsuario = null;
    this.nuevoJuego.imagenMaquina = null;
    this.nuevoJuego.opcionUsuario = null;
    this.nuevoJuego.imagenesUsuario = null;
    this.mostrarVerificar = true;
   }

   generar()
   {
    this.ocultarGenerar = true;
    this.mostrarVerificar = false;
    this.nuevoJuego.empezarJuego();
    console.log(this.nuevoJuego.imagenesUsuario);
   }

   verificar()
   {
    this.mostrarVerificar = true; 
    if(this.nuevoJuego.verificar())
      {
        //alert("Ganaste perrito!");
        this.MostarMensaje("Genio. Le ganaste a la maquina!",true);
      }
      else
        {
          let mensaje:string;
          //alert("Segui participando!");
          mensaje = "Mala suerte. Has perdido con la maquina"
          this.MostarMensaje(mensaje,false);
        }
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
      modelo.mostrarVerificar = false;
     }, 3000);
    console.info("objeto",x);
  
   } 

  ngOnInit() {
  }

}
