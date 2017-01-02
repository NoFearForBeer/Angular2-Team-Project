import { Component } from '@angular/core';
import { flyInOut } from '../../animations/flyInOut-animation';

@Component({
    selector: 'map-component',
    templateUrl: 'map-component.html',
    animations: [flyInOut()],
})
export class MapComponent {
}
