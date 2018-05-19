import { OnInit,
     Directive,
     ElementRef,
     Renderer2,
     HostBinding,
     HostListener
    } from '@angular/core';

@Directive({
    selector: '[appServerHoverDirective]'
})
export class ServerHoverDirective implements OnInit {

    @HostBinding('style.backgroundColor') backgroundcolor = 'transparent';

    constructor( private elRef: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'rgba(0,0,0,0.2)');
    }

    @HostListener('mouseenter') mousehover() {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'rgba(0,0,0,0.2)');
        this.backgroundcolor = 'rgba(0,0,0,0.2)';
    }

    @HostListener('mouseleave') mouseleave() {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'rgba(0,0,0,0)');
        this.backgroundcolor = 'transparent';
    }
}