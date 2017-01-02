import { Input, Output, Component, EventEmitter } from '@angular/core';

@Component({
    selector: 'activate-ticcket-component',
    templateUrl: './activate-ticket-component.html'
})
export class ActivateTicketComponent {
    @Output() ticketActivated = new EventEmitter();
    @Input() ticketId: string;

    activateClick() {
        this.ticketActivated.emit(this.ticketId);
    }
}
