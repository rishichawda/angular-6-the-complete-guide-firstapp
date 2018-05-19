import { OnInit, Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appServerHoverDirective]'
})
export class ServerHoverDirective implements OnInit {
    constructor(private elRef: ElementRef, private renderer: Renderer2) {}

    ngOnInit(){
        this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'rgba(0,0,0,0.2)');
    }
}