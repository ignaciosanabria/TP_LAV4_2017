import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad'

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {
   @Output() 
  enviarJuego :EventEmitter<any>= new EventEmitter<any>();
  nuevoJuego : JuegoAgilidad;
  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor:any;
  private subscription: Subscription;
  Mensajes:string;
  jugador = JSON.parse(localStorage.getItem("usuarioEnLinea"));
  arrayResultados : Array<any> = new Array<any>();
  ngOnInit() {
  }
   constructor() {
     this.ocultarVerificar=true;
     this.Tiempo=10; 
    this.nuevoJuego = new JuegoAgilidad("Agilidad Aritmetica",false,this.jugador["mail"]);
    this.arrayResultados = JSON.parse(localStorage.getItem("Resultados"));
    console.info("Inicio agilidad");  
  }
  NuevoJuego() {
    this.ocultarVerificar=false;
    this.nuevoJuego.generar();
   this.repetidor = setInterval(()=>{ 
      
      this.Tiempo--;
      console.log("llego", this.Tiempo);
      if(this.Tiempo==0 ) {
        clearInterval(this.repetidor);
        this.verificar();
        this.ocultarVerificar=true;
        this.Tiempo=10;
      }
      }, 900);

  }
  verificar()
  {
    this.ocultarVerificar=false;
    clearInterval(this.repetidor);
    if(this.nuevoJuego.verificar())
      {
        this.MostarMensaje("Sos un genio papa!",true);
      }
      else
        {
          this.MostarMensaje("No llegaste papa!",false);
        }
      //RESETEO TODOS LOS VALORES DEL JUEGO
      // this.nuevoJuego.numeroUno = null;
      // this.nuevoJuego.numeroDos = null;
      // this.nuevoJuego.operador = null;
      // this.nuevoJuego.resultadoJugador = null;
      // this.nuevoJuego.resultadoVerdadero = null;
      this.ocultarVerificar = true;
      this.Tiempo = 10;
      this.arrayResultados.push(this.nuevoJuego);
      localStorage.setItem("Resultados",JSON.stringify(this.arrayResultados));
      this.enviarJuego.emit(this.nuevoJuego);
      //Reseteo el nuevo juego despues de mostrar el mensaje de si gano o no
      this.nuevoJuego = new JuegoAgilidad("Agilidad Aritmetica",false,this.jugador["mail"]);
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
      modelo.ocultarVerificar= true;
     }, 3000);
    console.info("objeto",x);
  
   }

}
