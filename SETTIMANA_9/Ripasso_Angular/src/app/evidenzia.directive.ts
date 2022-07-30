import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appEvidenzia]' // una direttiva serve a dare uno stile ad un selettore semplicemente richiamando appEvidenzia
})
export class EvidenziaDirective {

  constructor(private el:ElementRef, private renderer:Renderer2) {
    renderer.setStyle(el.nativeElement, "backgroundColor", "yellow")
  }

}
