import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = "transparent";
  @Input() heighlightColor: string = "yellow";
  @HostBinding('style.backgroundColor') backgroundColor: string;;
  constructor(private elRef:ElementRef, private renderrer: Renderer2) { }
 ngOnInit(){
   this.backgroundColor = this.defaultColor;
   //this.renderrer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
 }
 @HostListener('mouseenter') mouseover(eventData: Event) {
  //this.renderrer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
  this.backgroundColor = this.heighlightColor;
 }
 @HostListener('mouseleave') mouseleave(eventData: Event) {
  //this.renderrer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  this.backgroundColor = this.defaultColor;
 }
}
