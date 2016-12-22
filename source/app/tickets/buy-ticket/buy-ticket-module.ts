import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BuyTicketComponent } from './buy-ticket-component';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [BuyTicketComponent],
    exports: [BuyTicketComponent]
})

export class BuyTicketModule { }
