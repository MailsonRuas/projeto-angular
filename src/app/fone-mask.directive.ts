import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFoneMask]'
})
export class FoneMaskDirective {
  constructor(private e: ElementRef){
    //console.log(this.e.nativeElement);
  }

  private valor: String;

  @HostListener('keyup')
  mask(){
    this.valor=this.e.nativeElement.value.toString().replace(/[\D]/gm,'');
    if(this.valor.length>=2&&this.valor.length<=6){
      this.valor=this.valor.replace(/^([\d]{2})(.*)/gm,"($1) $2");
    }else if(this.valor.length>6&&this.valor.length<=10){
      this.valor=this.valor.replace(/^([\d]{2})([\d]{4})(.*)/gm,"($1) $2-$3");
    }else if(this.valor.length>10){
      this.valor=this.valor.replace(/^([\d]{2})([\d]{5})(.*)/gm,"($1) $2-$3");
    }
    this.e.nativeElement.value=this.valor;
  }
}
