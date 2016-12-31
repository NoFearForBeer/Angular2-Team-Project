import { Component, OnInit, OnDestroy, Injectable } from '@angular/core';
import { ApiService, AlertService } from '../../services';
import { Ticket } from '../../models';
import { Subscription } from 'rxjs';

@Component({
    selector: 'ticket-list-component',
    templateUrl: './ticket-list-component.html'
})
@Injectable()
export class TicketListComponent implements OnInit, OnDestroy {

    private subscription: Subscription;
    private activateSubscription: Subscription = new Subscription();
    tickets: Ticket[];

    constructor(
        private api: ApiService,
        private alertService: AlertService) { }

    ngOnInit() {
        this.subscription = this.api.get('/users/info')
            .subscribe(jsonResp => {
                this.tickets = jsonResp.Tickets;
            });
    }

    activateTicket(id: string) {
        this.activateSubscription = this.api.put('/tickets/activate', {id : id})
            .subscribe(json => {
                this.ngOnInit();
                this.alertService.success(json.Message, false);
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.activateSubscription.unsubscribe();
    }
}