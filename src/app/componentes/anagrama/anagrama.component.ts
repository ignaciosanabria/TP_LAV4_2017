import { Component, OnInit } from '@angular/core';
import {JuegoAnagrama} from '../../clases/juego-anagrama';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {
  anagrama : JuegoAnagrama;
  ocultarPalabra : boolean;
  constructor() { 
    this.anagrama = new JuegoAnagrama();
    this.anagrama.palabraDesorganizada = null;
    this.ocultarPalabra = false;
  }

  public generar() : void
  {
   this.anagrama.generarPalabra();
  }

  public verificar() : void
  {
    this.anagrama.palabraIngresada = this.anagrama.palabraIngresada.toLocaleUpperCase();
    if(this.anagrama.verificar())
      {
        alert("Acertaste papa!");
      }
      else
        {
          alert("Ni ahi perro. Segui intentando!");
        }
  }

  ngOnInit() {
  }

}
