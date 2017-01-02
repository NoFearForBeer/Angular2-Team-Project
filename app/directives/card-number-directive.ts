import { Input, Directive, ElementRef, HostListener } from '@angular/core';

const DefaultSeparator = '-';

@Directive({
    selector: '[card-number]'
})

export class CardNumberDirective {

    private separator: string = DefaultSeparator;
    private element: HTMLInputElement;

    @Input('separator') set setSeparator(separator: string) {
        this.separator = separator;
    }

    constructor(private currentHtmlElement: ElementRef) {
        this.element = this.currentHtmlElement.nativeElement;
    }

    @HostListener('input') onInputChange() {
        let currentValue: string = this.replaceAll(this.element.value, this.separator, '');
        let newValue: string[] = currentValue.match(/.{1,4}/g);
        this.element.value = newValue.join(this.separator);
    }

    // http://stackoverflow.com/questions/1144783/how-to-replace-all-occurrences-of-a-string-in-javascript#answer-1144788
    private replaceAll(str: string, find: string, replace: string) {
        return str.replace(new RegExp(find, 'g'), replace);
    }
}