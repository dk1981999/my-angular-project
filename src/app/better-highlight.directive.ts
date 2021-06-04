import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @HostBinding('style.backgroundColor') backgroundColor: string = "transparent";
  constructor(private elRef:ElementRef, private renderrer: Renderer2) { }
 ngOnInit(){
   //this.renderrer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
 }
 @HostListener('mouseenter') mouseover(eventData: Event) {
  //this.renderrer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
  this.backgroundColor = 'yellow';
 }
 @HostListener('mouseleave') mouseleave(eventData: Event) {
  //this.renderrer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  this.backgroundColor = 'transparent';
 }
}
