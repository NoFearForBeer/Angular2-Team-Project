import { Component, Injectable } from '@angular/core';
import { ChargeAccountModel } from '../../models/charge-account';
import { Router } from '@angular/router';

import { ApiService } from '../../services';
import { CommonModule, } from '@angular/common';

@Component({
    selector: 'charge-account',
    templateUrl: './charge-account-component.html',
    providers: [CommonModule]
})
@Injectable()
export class ChargeAccountComponent {

    years: number[];
    model: ChargeAccountModel = new ChargeAccountModel();
    hasInvalidDate: boolean = false;

    // new Date(yearInput.value, monthInput.value - 1 ) < new Date() 
    constructor(private api: ApiService, private router: Router) {
        let startYear: number = new Date().getFullYear();
        this.years = Array.apply(null, { length: 10 }).map(function () { return startYear++; });
        this.model.expireMonth = '';
        this.model.expireYear = '';
    }

    onSubmitform() {
        if (new Date(Number.parseInt(this.model.expireYear), Number.parseInt(this.model.expireMonth) - 1) < new Date()) {
            this.hasInvalidDate = true;
            return;
        }

        this.api.put('/users/charge', this.model)
        .subscribe(() =>
    //  TODO: Alert service
            this.router.navigate(['/profile']),
                err => console.log(err));
    }

    // TODO: Should we unsubscribe?
}
