import { Component, OnInit } from '@angular/core';
import {JuegoPiedraPapelTijera} from '../../clases/juego-piedra-papel-tijera';
@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {
  nuevoJuego : JuegoPiedraPapelTijera;
  ocultarVerificar : boolean;
  ocultarOpcionMaquina : boolean;
  ocultarSpinner : boolean;
  Mensajes:string;
  jugador : JSON = JSON.parse(localStorage.getItem("usuarioEnLinea"));
  arrayResultados : Array<any> = new Array<any>();

  constructor() {
    this.nuevoJuego = new JuegoPiedraPapelTijera("Piedra, Papel o Tijera",false,this.jugador["mail"]);
    this.nuevoJuego.opcionUsuario = null;
    this.nuevoJuego.imagenMaquina = null;
    this.nuevoJuego.opcionUsuario = null;
    this.nuevoJuego.imagenesUsuario = null;
    //this.nuevoJuego.jugador = this.jugador["mail"];
    this.ocultarSpinner = true;
    this.ocultarVerificar = true;
    this.ocultarOpcionMaquina = true;
    this.arrayResultados = JSON.parse(localStorage.getItem("Resultados"));
   }

   generar()
   {
    this.ocultarVerificar = false;
    this.nuevoJuego.empezarJuego();
    console.log(this.nuevoJuego.opcionMaquina);
   }

   verificar(opcionUsuario : string)
   {
     this.nuevoJuego.opcionUsuario = opcionUsuario;
     this.ocultarSpinner = false;
     console.log(this.nuevoJuego.opcionUsuario);
     switch(opcionUsuario)
     {
       case "piedra":
       var boton = ((<HTMLInputElement>document.getElementById("btn1")));
       console.log(boton);
       boton.className = "btnApretado";
       console.log(boton.className);
       break;
       case "papel":
       var boton = ((<HTMLInputElement>document.getElementById("btn2")));
       console.log(boton);
       boton.className = "btnApretado";
       console.log(boton.className);
       break;
       case "tijera":
       var boton = ((<HTMLInputElement>document.getElementById("btn3")));
       console.log(boton);
       boton.className = "btnApretado";
       console.log(boton.className);
       break;
     }
     var modelo=this;
     setTimeout(function(){
        if(modelo.nuevoJuego.verificar())
      {
        // this.nuevoJuego.opcionUsuario = null;
        // this.nuevoJuego.imagenMaquina = null;
        // this.nuevoJuego.opcionUsuario = null;
        // this.nuevoJuego.imagenesUsuario = null;
        console.log(modelo.nuevoJuego);
        modelo.MostarMensaje("Genio. Le ganaste a la maquina!",true);
      }
      else
        {
          let mensaje:string;
          console.log(modelo.nuevoJuego);
          //alert("Segui participando!");
          mensaje = "Mala suerte. Has perdido con la maquina por que habia elegido "+modelo.nuevoJuego.opcionMaquina;
          modelo.MostarMensaje(mensaje,false);
        }
        modelo.arrayResultados.push(modelo.nuevoJuego);
        localStorage.setItem("Resultados",JSON.stringify(modelo.arrayResultados));
        modelo.nuevoJuego = new JuegoPiedraPapelTijera("Piedra, Papel o Tijera",false,modelo.jugador["mail"]);
        modelo.ocultarSpinner = true;
     },4000);
    //  if(this.nuevoJuego.verificar())
    //   {
    //     // this.nuevoJuego.opcionUsuario = null;
    //     // this.nuevoJuego.imagenMaquina = null;
    //     // this.nuevoJuego.opcionUsuario = null;
    //     // this.nuevoJuego.imagenesUsuario = null;
    //     console.log(this.nuevoJuego);
    //     this.MostarMensaje("Genio. Le ganaste a la maquina!",true);
    //   }
    //   else
    //     {
    //       let mensaje:string;
    //       console.log(this.nuevoJuego);
    //       //alert("Segui participando!");
    //       mensaje = "Mala suerte. Has perdido con la maquina por que habia elegido "+this.nuevoJuego.opcionMaquina;
    //       this.MostarMensaje(mensaje,false);
    //     }
    //     this.arrayResultados.push(this.nuevoJuego);
    //     localStorage.setItem("Resultados",JSON.stringify(this.arrayResultados));
    //     this.nuevoJuego = new JuegoPiedraPapelTijera("Piedra, Papel o Tijera",false,this.jugador["mail"]);
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
      modelo.ocultarVerificar = false;
     }, 3000);
    console.info("objeto",x);
  
   }
   
   verImagen()
   {
     let btn = ((<HTMLInputElement>document.getElementById("btn1")).value);
     let btn2 = ((<HTMLInputElement>document.getElementById("btn2")).value);
     console.log(btn);
     console.log(btn2);
   }




  ngOnInit() {
  }

}
