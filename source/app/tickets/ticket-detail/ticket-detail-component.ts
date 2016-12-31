import { Component, Input } from '@angular/core';
import { Ticket } from '../../models';

@Component({
    selector: '[ticket-detail-comopnent]',
    templateUrl: './ticket-detail-comopnent.html'
})
export class TicketDetailCompoennt {
    @Input() ticketModel: Ticket;
}
