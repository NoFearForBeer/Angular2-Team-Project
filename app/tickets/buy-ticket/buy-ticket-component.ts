import { Component, Injectable } from '@angular/core';
import { ApiService } from '../../services/api-service';
import { ImageDataPipe } from '../../pipes';

import { flyInOut } from '../../animations/flyInOut-animation';

@Component({
    selector: 'buy-ticket-component',
    templateUrl: './buy-ticket-component.html',
    animations: [flyInOut()],
})

@Injectable()
export class BuyTicketComponent {

    hours: number = 1;
    result: string = 'The QR image will be shown here';
    constructor(
        private api: ApiService,
        private imagePipe: ImageDataPipe) { }

    buyTicket() {
        this.api.post('/tickets/buy', { hours: this.hours })
            .subscribe(
            resp => {
                let imageSrc = this.imagePipe.transform(resp.QRCode, 'png');
                this.result = `<img src="${imageSrc}" width="250" />`;
            },
            err => this.result = `<b class="text-primary">${err.json().Message}<b>`);
    }
}
