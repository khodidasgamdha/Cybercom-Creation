import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appInput]'
})
export class InputDirective {

  // Directive
  @Input('appInput') formate;

  constructor(private el: ElementRef ) { }

  @HostListener('blur') onBlur(){
    let value: String = this.el.nativeElement.value;

    if(this.formate == 'uppercase')
      this.el.nativeElement.value = value.toUpperCase();
    else
      this.el.nativeElement.value = value.toLowerCase();
  }

}
