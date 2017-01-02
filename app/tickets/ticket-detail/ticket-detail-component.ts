import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Ticket } from '../../models';

@Component({
    selector: '[ticket-detail-component]',
    templateUrl: './ticket-detail-component.html'
})
export class TicketDetailComponent {
    @Input() ticketModel: Ticket;

    @Output() ticketActivatedDetail = new EventEmitter();

    ticketActivateClick(id: string) {
        this.ticketActivatedDetail.emit(id);
    }
}
