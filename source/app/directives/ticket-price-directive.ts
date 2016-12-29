import { Input, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[ticketPrice]'
})
export class TicketPriceDirective {

    private calculatedPriceEelementId: string;

    @Input('price-id') set setPriceId(priceIdElement: string) {
        if (!priceIdElement) {
            throw new Error(`please set the price-id`);
        }

        if (!document.getElementById(priceIdElement)) {
            throw new Error(`Cannot find html element with id ${priceIdElement}`);
        }

        this.calculatedPriceEelementId = priceIdElement;
    }

    constructor(currentHtmlElement: ElementRef) {
         currentHtmlElement.nativeElement.style.backgroundColor = 'yellow';
    }

    @HostListener('change') onDropDownChange() {
        // this.highlight(null);
        console.log('change');
        //TODO:
    }

    private calculatePrice(hours: number, resultElementId: string) {

    }
}
