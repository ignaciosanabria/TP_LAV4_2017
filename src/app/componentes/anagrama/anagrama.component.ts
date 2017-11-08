import { Component, OnInit } from '@angular/core';
import {JuegoAnagrama} from '../../clases/juego-anagrama';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {
  anagrama : JuegoAnagrama;
  ocultarVerificar : boolean;
  Mensajes:string;
  contador:number;
  arrayResultados : Array<any> = new Array<any>();
  jugador = JSON.parse(localStorage.getItem("usuarioEnLinea"));
  constructor() { 
    this.anagrama = new JuegoAnagrama("Anagrama",false,this.jugador["mail"]);
    this.anagrama.palabraDesorganizada = null;
    this.ocultarVerificar = true;
    this.arrayResultados = JSON.parse(localStorage.getItem("Resultados"));
  }

  public generar() : void
  {
   this.anagrama.generarPalabra();
   console.log(this.anagrama.palabraCorrecta);
   console.log(this.anagrama.palabraIngresada);
   console.log(this.anagrama.palabraDesorganizada);
   this.ocultarVerificar = false;
  }

  public verificar() : void
  {
    if(this.anagrama.palabraIngresada != null)
      {
    this.anagrama.palabraIngresada = this.anagrama.palabraIngresada.toLocaleUpperCase();
    this.ocultarVerificar = true;
    console.log(this.anagrama.palabraDesorganizada);
    console.log(this.anagrama.palabraIngresada);
    console.log(this.anagrama.palabraCorrecta);
    if(this.anagrama.verificar())
      {
        this.MostarMensaje("Genio. Has acertado la palabra!",true);
      }
      else
        {
          let mensaje:string;
          //alert("Segui participando!");
          this.anagrama.palabraIngresada = null;
          mensaje = "Mala suerte. No acertaste la palabra"
          this.MostarMensaje(mensaje,false);
        }
      }
      else
        {
          let mensaje : string;
          mensaje = "ERROR. Debe ingresar una palabra!!";
          this.MostarMensaje(mensaje,false);
        }
        this.arrayResultados.push(this.anagrama);
        localStorage.setItem("Resultados",JSON.stringify(this.arrayResultados));
        this.anagrama = new JuegoAnagrama("Anagrama",false,this.jugador["mail"]);
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
