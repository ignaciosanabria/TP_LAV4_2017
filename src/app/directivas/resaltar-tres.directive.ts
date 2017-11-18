import { Directive, ElementRef, Renderer2, OnInit, Input} from '@angular/core';

@Directive({
  selector: '[appResaltarTres]'
})
export class ResaltarTresDirective {
@Input()
appResaltarTres : string;
  constructor(private obj : ElementRef, private renderizador : Renderer2) {
    }
 
    ngOnInit() : void
    {
     this.renderizador.setStyle(this.obj.nativeElement,"backgroundColor",this.appResaltarTres);
     console.log("Valor del Input"+this.appResaltarTres);
     this.renderizador.setProperty(this.obj.nativeElement,"textContent","Aqui llamo al Input de appResaltarTres");
    }

    //Siempre ponerle al Input el mismo nombre que el selector de la directiva para bindearle el input en HTML
    /*
    <p [appResaltarTres] = "'red'">
    ejemplo-directiva ResaltarTres!!
    </p>
    
    //Si tenemos un input que tiene un diferente nombre que el del Selector llamamos primera 
    a la directiva y luego al Input
    <p appResaltarTres [color]="'red'">
  ejemplo-directiva ResaltarTres!!
</p>
    */
}
