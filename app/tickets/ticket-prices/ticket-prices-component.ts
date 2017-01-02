import { Component } from '@angular/core';

import { fadeInOut } from '../../animations/fadeInOut-animation';

@Component({
    selector: 'ticket-prices-component',
    templateUrl: './ticket-prices-component.html',
    animations: [fadeInOut()]
})

export class TicketPricesComponent { }
