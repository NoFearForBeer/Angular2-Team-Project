import { Input, Directive, ElementRef, HostListener } from '@angular/core';

const TicketPricePerHour = 0.1;
const TicketInitialPrice = 1.6;
const OneWeekInHours = 168;
const DiscountPercent = 0.3;

@Directive({
    selector: '[ticketPrice]'
})
export class TicketPriceDirective {

    private calculatedPriceEelementId: string;
    private selectElement: HTMLSelectElement;

    @Input('price-id') set setPriceId(priceIdElement: string) {
        if (!priceIdElement) {
            throw new Error(`please set the price-id`);
        }

        if (!document.getElementById(priceIdElement)) {
            throw new Error(`Cannot find html element with id ${priceIdElement}`);
        }

        this.calculatedPriceEelementId = priceIdElement;
    }

    constructor(private currentHtmlElement: ElementRef) {
        this.selectElement = this.currentHtmlElement.nativeElement;
    }

    @HostListener('change') onDropDownChange() {
        let hours: number = Number.parseInt(this.selectElement.value);
        this.calculatePrice(hours, this.calculatedPriceEelementId);
    }

    private calculatePrice(hours: number, resultElementId: string) {
        let ticketPrice: number = ((hours - 1) * TicketPricePerHour) + TicketInitialPrice;

        // get discount for one or more weekend tickets
        if (hours > OneWeekInHours) {
            ticketPrice = ticketPrice - (ticketPrice * DiscountPercent);
        }

        document.getElementById(resultElementId).innerHTML = `${ticketPrice.toPrecision(2)} lv.`;
    }
}
