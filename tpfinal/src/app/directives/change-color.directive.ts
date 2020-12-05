import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {


  constructor(private el:ElementRef) {
    el.nativeElement.style.color='white';
   }

   @HostListener('mouseover') onMouseOver(){
      this.cambiar('rgb(5,54,105)');
   }

   @HostListener('mouseout') onMouseOut(){
     this.cambiar('white');
   }

   cambiar(color:string){
    this.el.nativeElement.style.color=color;
   }
}
