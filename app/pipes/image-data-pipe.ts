import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'to-img' })

export class ImageDataPipe implements PipeTransform {
    transform(data: string, extension: string) {
        return `data:image/${extension};base64,${data}`;
    }
}
