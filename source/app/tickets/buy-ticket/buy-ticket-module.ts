import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BuyTicketComponent } from './buy-ticket-component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule],
    declarations: [BuyTicketComponent],
    exports: [BuyTicketComponent]
})

export class BuyTicketModule { }
