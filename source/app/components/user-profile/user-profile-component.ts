import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { ApiService } from '../../services';

@Component({
    selector: 'user-profile-component',
    templateUrl: './user-profile-component.html',
})
@Injectable()
export class UserProfileComponent implements OnInit {

    userProfile: any = {};
    tempImg: string = 'Initial';

    constructor(private api: ApiService) { }

    ngOnInit() {
        this.userProfile = this.api.get('/users/info')
            .subscribe((jsonResp) => {
                this.userProfile = jsonResp;
                this.tempImg = 'data:image/jpeg;base64,' + this.userProfile.Avatar;
            }, (error) => console.log(error));
    }

    imagePreview(event: any) {

        if (event.target.files && event.target.files[0]) {
            let reader: FileReader = new FileReader();

            reader.onload = (e: any) => {
                this.tempImg = e.target.result;
            };

            reader.readAsDataURL(event.target.files[0]);
        }
    }

    updateAvatar(file: File) {
        this.api.uploadFile('/users/avatar', file)
            .then(message => console.log(message),
            rejected => console.log(rejected)
            );
    }
}
