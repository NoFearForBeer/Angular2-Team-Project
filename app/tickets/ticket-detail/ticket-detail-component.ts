import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Ticket } from '../../models';

@Component({
    selector: '[ticket-detail-comopnent]',
    templateUrl: './ticket-detail-comopnent.html'
})
export class TicketDetailCompoennt {
    @Input() ticketModel: Ticket;

    @Output() ticketActivatedDetail = new EventEmitter();

    ticketActivateClick(id: string) {
        this.ticketActivatedDetail.emit(id);
    }
}
