import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { ApiService } from '../../services';
import { ImageDataPipe } from '../../pipes';

@Component({
    selector: 'user-profile-component',
    templateUrl: './user-profile-component.html',
})
@Injectable()
export class UserProfileComponent implements OnInit {

    userProfile: any = {};
    tempImg: string = 'Initial';
    imageUpdated: boolean = false;
    imageSelected: boolean = false;
    isEdit: boolean = false;

    constructor(
        private api: ApiService,
        private imagePipe: ImageDataPipe
        ) { }

    ngOnInit() {
        this.userProfile = this.api.get('/users/info')
            .subscribe((jsonResp) => {
                this.userProfile = jsonResp;

                if (!this.userProfile.Avatar) {
                    this.tempImg = 'img/profile.jpg';
                    return;
                }

                this.tempImg = this.imagePipe.transform(this.userProfile.Avatar, this.userProfile.FileExtension);
            }, (error) => console.log(error));
    }

    imagePreview(event: any) {

        if (event.target.files && event.target.files[0]) {
            let reader: FileReader = new FileReader();

            reader.onload = (e: any) => {
                this.tempImg = e.target.result;
                this.imageSelected = true;
            };

            reader.readAsDataURL(event.target.files[0]);
        }
    }

    updateAvatar(file: File) {
        this.api.uploadFile('/users/avatar', file)
            .then(message => {
                this.imageUpdated = true;
                this.imageSelected = false;
                setTimeout(() => { this.imageUpdated = false; }, 2000);
            },
            rejected => console.log(rejected)
            );
    }

    toogle() {
        this.isEdit = !this.isEdit;
    }
}
