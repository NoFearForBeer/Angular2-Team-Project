import { Input, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[ticketPrice]'
})
export class TicketPriceDirective {

    private TicketPricePerHour: number = 0.1;
    private TicketInitialPrice: number = 1.6;
    private OneWeekInHours: number = 168;
    private DiscountPercent: number = 0.3;

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
        let ticketPrice: number = ((hours - 1) * this.TicketPricePerHour) + this.TicketInitialPrice;

        // get discount for one or more weekend tickets
        if (hours > this.OneWeekInHours) {
            ticketPrice = ticketPrice - (ticketPrice * this.DiscountPercent);
        }

        console.log(ticketPrice);
        document.getElementById(resultElementId).innerHTML = `${ticketPrice.toPrecision(2)} lv.`;
    }
}
