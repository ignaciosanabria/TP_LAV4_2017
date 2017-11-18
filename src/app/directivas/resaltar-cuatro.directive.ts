import { Directive, ElementRef, Renderer2, OnInit, Input, OnDestroy} from '@angular/core';

@Directive({
  selector: '[appResaltarCuatro]'
})
export class ResaltarCuatroDirective {
  @Input()
  appResaltarCuatro : string;
  funcionOver : Function;
  funcionOut : Function;
  constructor(private obj : ElementRef, private renderizador : Renderer2) { }
   

  ngOnInit() : void
  {
   this.renderizador.setStyle(this.obj.nativeElement,"backgroundColor",this.appResaltarCuatro);
   console.log("Valor del Input"+this.appResaltarCuatro);
   this.renderizador.setProperty(this.obj.nativeElement,"textContent","Aqui llamo al Input de appResaltarCuatro");
   this.funcionOver = this.renderizador.listen(this.obj.nativeElement,'mouseover',e => {this.renderizador.setStyle(this.obj.nativeElement,"backgroundColor","blue");});
   this.funcionOut = this.renderizador.listen(this.obj.nativeElement,"mouseout",e=>{this.renderizador.setStyle(this.obj.nativeElement,"backgroundColor","orange");});
  }

  ngOnDestroy() : void
  {
    this.funcionOut();
    this.funcionOver();
  }
}
