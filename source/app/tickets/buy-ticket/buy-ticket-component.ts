import { Component } from '@angular/core';
import { ApiService } from '../../services/api-service';

@Component({
    selector: 'buy-ticket-component',
    templateUrl: './buy-ticket-component.html'
})
export class BuyTicketComponent {

    hours: number = 1;
    result: string = 'The result';
    constructor(private api: ApiService) { }

    buyTicket() {
        this.api.post('/tickets/buy', { hours: this.hours })
            .subscribe(
            resp =>
                this.result = `<img src="data:image/png;base64,${resp.QRCode}" />`,
            err =>
                this.result = err);
    }
}