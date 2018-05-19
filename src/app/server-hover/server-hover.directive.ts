import { OnInit,
     Directive,
     ElementRef,
     Renderer2,
     HostBinding,
     HostListener,
     Input
    } from '@angular/core';

@Directive({
    selector: '[appServerHoverDirective]'
})
export class ServerHoverDirective implements OnInit {

    @Input('appServerHoverDirective') default_color = 'transparent';
    @Input() highlight_color = 'rgba(0,0,0,0.2)';
    // @HostBinding('style.backgroundColor') backgroundcolor = 'transparent';
    @HostBinding('style.backgroundColor') backgroundcolor: string;

    constructor( private elRef: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        this.backgroundcolor = this.default_color;
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'rgba(0,0,0,0.2)');
    }

    @HostListener('mouseenter') mousehover(event_data: Event) {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'rgba(0,0,0,0.2)');
        this.backgroundcolor = this.highlight_color;
    }

    @HostListener('mouseleave') mouseleave(event_data: Event) {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'rgba(0,0,0,0)');
        this.backgroundcolor = this.default_color;
    }
}
