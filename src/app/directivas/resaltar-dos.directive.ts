import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appResaltarDos]'
})
export class ResaltarDosDirective {

  constructor(private obj : ElementRef, private renderizador : Renderer2) {
   //Primer parametro del renderizador.SetStyle(elObjetoQuieroPasarleAlgo, )
   //Siempre ponerle el Native Element al Obj del ElementRef
    // this.renderizador.setStyle(this.obj.nativeElement,"backgroundColor","yellow");
    // this.renderizador.setProperty(this.obj.nativeElement,"textContent","");
   }

   ngOnInit() : void
   {
    this.renderizador.setStyle(this.obj.nativeElement,"backgroundColor","yellow");
    this.renderizador.setProperty(this.obj.nativeElement,"textContent","");
     
   }


}
