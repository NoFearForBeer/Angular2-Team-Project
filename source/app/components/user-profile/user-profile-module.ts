import { NgModule } from '@angular/core';
import { UserProfileComponent } from './user-profile-component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [UserProfileComponent],
    exports: [UserProfileComponent],
})
export class UserProfileModule { }
