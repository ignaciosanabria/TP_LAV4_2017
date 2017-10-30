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

  constructor() { 
    this.anagrama = new JuegoAnagrama();
    this.anagrama.palabraDesorganizada = null;
    this.ocultarVerificar = true;
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
    this.anagrama.palabraIngresada = this.anagrama.palabraIngresada.toLocaleUpperCase();
    this.ocultarVerificar = true;
    console.log(this.anagrama.palabraDesorganizada);
    console.log(this.anagrama.palabraIngresada);
    console.log(this.anagrama.palabraCorrecta);
    if(this.anagrama.verificar())
      {
        this.MostarMensaje("Genio. Has acertado la palabra!",true);
        this.anagrama.palabraCorrecta = null;
        this.anagrama.palabraDesorganizada = null;
        this.anagrama.palabraIngresada = null;
      }
      else
        {
          let mensaje:string;
          //alert("Segui participando!");
          mensaje = "Mala suerte. No acertaste la palabra"
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
      modelo.ocultarVerificar=false;
     }, 3000);
    console.info("objeto",x);
  
   } 

  ngOnInit() {
  }

}
