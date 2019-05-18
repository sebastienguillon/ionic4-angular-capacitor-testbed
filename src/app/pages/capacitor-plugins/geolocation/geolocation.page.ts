import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { animate, animation, keyframes, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { GeolocationPosition, Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;

export const flashAnimation = animation([
  animate(
    '{{ timings }}',
    keyframes([
      style({ backgroundColor: '{{ highlightColor }}' }),
      style({ backgroundColor: '{{ backgroundColor }}' }),
    ])
  )
]);

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
  animations: [
    trigger('flashing', [
        transition('*=>*', useAnimation(flashAnimation, {
          params: {
            timings: '1s ease-in-out',
            highlightColor: 'var(--ion-color-warning)',
            backgroundColor: 'var(--ion-color-primary)',
          }
        }))
    ])
  ],
})
export class GeolocationPage implements OnInit {
  flashingState: boolean;
  currentGeoloc: GeolocationPosition;
  watchedGeoloc: GeolocationPosition;
  positions: any[] = [];

  constructor(
    private cdRef: ChangeDetectorRef,
  ) {
    console.log('GeolocationPage.constructor()');
    this.init();
  }

  ngOnInit() {
    console.log('GeolocationPage.ngOnInit()');
  }

  private init() {
    console.log('GeolocationPage.init()');
    this.getCurrentPosition();
    this.watchPosition();
  }

  async getCurrentPosition() {
    console.log('GeolocationPage.getCurrentPosition()');
    this.currentGeoloc = null;
    const current: GeolocationPosition = await Geolocation.getCurrentPosition();
    console.log('Current position:', current);
    this.currentGeoloc = current;
    this.cdRef.detectChanges();
  }

  toggleState() {
    this.flashingState = !this.flashingState;
  }

  watchPosition() {
    console.log('GeolocationPage.watchPosition()');
    const wait = Geolocation.watchPosition({}, (position: GeolocationPosition, err) => {
      console.log('Watch, new position:', position);
      this.watchedGeoloc = position;
      this.positions.unshift({
        timestamp: Date.now(),
        position
      });
      console.log('this.positions', this.positions);
      this.flashingState = !this.flashingState;
      this.cdRef.detectChanges();
    });
    console.log('wait', wait);
  }
}
