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
    newProfile: any = {};
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

                this.initNewProfile(this.userProfile.FirstName, this.userProfile.LastName, this.userProfile.Email);
                if (!this.userProfile.Avatar) {
                    this.tempImg = '/img/profile.jpg';
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

    toogle(reset?: boolean) {
        if (reset) {
            this.initNewProfile(this.userProfile.FirstName, this.userProfile.LastName, this.userProfile.Email);
        }

        this.isEdit = !this.isEdit;
    }

    updateProfile() {
        let data: any = {
            FirstName: this.newProfile.FirstName,
            LastName: this.newProfile.LastName,
            Email: this.newProfile.Email,
            Id: this.userProfile.Id,
            UserName: this.userProfile.UserName,
        };

        this.api.put('/users/', data)
            .subscribe(resp => {
                this.imageUpdated = true;
                this.imageSelected = false;

                this.userProfile.FirstName = data.FirstName;
                this.userProfile.LastName = data.LastName;
                this.userProfile.Email = data.Email;
                this.userProfile.FullName = data.FirstName +  ' ' + data.LastName;
                this.toogle();
                setTimeout(() => { this.imageUpdated = false; }, 2000);
            },
            err => console.error(err));
    }

    private initNewProfile(firsName: string, lastName: string, email: string) {
        this.newProfile.FirstName = firsName;
        this.newProfile.LastName = lastName;
        this.newProfile.Email = email;
    }
}
