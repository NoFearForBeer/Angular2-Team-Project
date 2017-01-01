import { Component, Input, ViewContainerRef, Injectable } from '@angular/core';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { ImageDataPipe } from '../../pipes/image-data-pipe';

// Cannot use styleUrl 
// it's no longer allowed to omit the '-loader' prefix when using loaders.
//                You need to specify 'style-loader' instead of 'style'.
@Component({
    selector: 'modal-qr-code-component',
    templateUrl: './modal-component.html',
    styles: [`span.glyphicon.glyphicon-qrcode::before {
    font-size: 3.2em; 
    cursor: pointer;
}`]
})
@Injectable()
export class ModalQRCodeCompoennt {

    @Input() qrCode: string;

    constructor(
        private imagePipe: ImageDataPipe,
        public modal: Modal,
        overlay: Overlay,
        vcRef: ViewContainerRef) {
        overlay.defaultViewContainer = vcRef;
    }

    showModal() {

        let imageSrc = this.imagePipe.transform(this.qrCode, 'png');

        this.modal.alert()
            .size('sm')
            .showClose(true)
            .title('Your QR code')
            .body(`<img src="${imageSrc}" alt="QrCode" class="img-responsive" />`)
            .open();
    }
}


