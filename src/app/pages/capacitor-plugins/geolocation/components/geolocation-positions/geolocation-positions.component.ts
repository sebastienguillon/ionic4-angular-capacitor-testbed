import { Component, Input, OnInit } from '@angular/core';
import { GeolocationPosition } from '@capacitor/core';

@Component({
  selector: 'app-geolocation-positions',
  templateUrl: './geolocation-positions.component.html',
  styleUrls: ['./geolocation-positions.component.scss']
})
export class GeolocationPositionsComponent implements OnInit {
  @Input() position: GeolocationPosition;
  showIcon = false;

  constructor() {
    console.log('GeolocationPositionsComponent.constructor(), this.position:', this.position);
  }

  ngOnInit() {
    console.log('GeolocationPositionsComponent.ngOnInit(), this.position:', this.position);
    setTimeout(() => {
      this.showIcon = true;
    }, 4000);
  }
}
