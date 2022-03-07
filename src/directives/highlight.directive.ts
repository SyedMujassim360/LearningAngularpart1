import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef) { 
    
  }
  @HostBinding('style.backgroundColor') bgColor:any
  @HostListener('mouseenter')
  onEnter(){
    this.bgColor='grey'
  }
  @HostListener('mouseleave')
  onOut(){
    this.bgColor='pink'
  }
  ngOnInit(){
    this.bgColor='pink'
  }

}
