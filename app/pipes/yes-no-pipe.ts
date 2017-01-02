import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'toYesNo' })
export class YesNoPipe implements PipeTransform {
    transform(value: boolean) {
        return value ? 'Yes' : 'No';
    }
}
