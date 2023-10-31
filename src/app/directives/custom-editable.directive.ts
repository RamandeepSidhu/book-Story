// custom-editable.directive.ts
import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[v-editable]'
})
export class VEditableDirective {
    @Input() blok: any;
    constructor(private el: ElementRef) {
    }
}
