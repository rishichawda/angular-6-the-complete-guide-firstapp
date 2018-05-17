import { 
  Component, 
  OnInit, 
  Input, 
  ViewEncapsulation, 
  OnChanges, 
  SimpleChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy, 
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Applied by default, other values - None, Native
})
export class ServerElementComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy {

  // @Input('server_element') element: {type: string, name: string, details: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentparagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('onchanges called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('oninit called');
    console.log('Heading text is : ' + this.header.nativeElement.textContent);
    console.log('Content text is : ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('docheck called');
  }

  ngAfterContentInit(){
    console.log('aftercontentinit called');
    console.log('Content text is : '+this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(){
    console.log('aftercontentchecked called');
  }

  ngAfterViewInit(){
    console.log('afterviewinit called');
    console.log('Heading text is : '+this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(){
    console.log('afterviewchecked called');
  }

  ngOnDestroy(){
    console.log('ondestroy called');
  }
}
