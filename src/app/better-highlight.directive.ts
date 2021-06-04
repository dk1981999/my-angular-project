import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private elRef:ElementRef, private renderrer: Renderer2) { }
 ngOnInit(){
   //this.renderrer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
 }
 @HostListener('mouseenter') mouseover(eventData: Event) {
  this.renderrer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
 }
 @HostListener('mouseleave') mouseleave(eventData: Event) {
  this.renderrer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
 }
}
