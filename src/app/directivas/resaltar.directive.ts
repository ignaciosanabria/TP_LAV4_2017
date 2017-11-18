import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective {

  constructor(obj : ElementRef) { 
    obj.nativeElement.style.backgroundColor = "red";
    obj.nativeElement.style.fontSize = "30px";
    obj.nativeElement.style.textAlign = "center";
  }

}
