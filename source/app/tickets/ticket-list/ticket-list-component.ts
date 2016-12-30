import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../services';
import { Ticket } from '../../models';
import { Subscription } from 'rxjs';

@Component({
    selector: 'ticket-list-component',
    templateUrl: './ticket-list-component.html'
})
export class TicketListComponent implements OnInit, OnDestroy {

    private subscription: Subscription;
    tickets: Ticket[];

    constructor(private api: ApiService) { }

    ngOnInit() {
        this.subscription = this.api.get('/users/info')
            .subscribe(jsonResp => {
                this.tickets = jsonResp.Tickets;
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}