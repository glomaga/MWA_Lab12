import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[myvisibility]'
})
export class MyvisibilityDirective {


  constructor(private e: ElementRef, private r: Renderer) { 
}
// Set a property in the class from outside
@HostBinding('style.visibility') myhidden;
@Input('hide') defaultHidden = 'true'; 
ngOnInit(){ // reached after all bound properties are initilized
  console.log(" value "+ this.defaultHidden);
  if(this.defaultHidden=="true"){
    this.myhidden = 'visible';
    console.log(" visible");
  }else{
    this.myhidden = 'hidden';
    console.log(" hidden");
  }
}
}
