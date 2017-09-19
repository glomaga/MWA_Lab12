import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[mycolor]'
})
export class MycolorDirective {
  private items = ['red','blue','green','purple'];
  private index=0;

  constructor(private e: ElementRef, private r: Renderer) { 
}

// To Listen to Events that are triggered by client
@HostListener('click') foo(){ 
  //this.myBG = 'yellow'
  this.myColor = this.items[this.index]; 
  console.log(this.items[this.index]);
  this.index++;
  if (this.index >this.items.length-1){
    this.index=0;
  }
}

// Bind a property (style.backgroundColor and style.color) on the host element 
// TO a property in the directive class 
//@HostBinding('style.backgroundColor') myBG;
@HostBinding('style.color') myColor;

}
