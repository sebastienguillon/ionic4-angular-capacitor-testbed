import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';
import { CallbackID, GeolocationOptions, GeolocationPosition, Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;

import { ModalController } from '@ionic/angular';
import { GeolocationSettingsPage } from './modals/geolocation-settings/geolocation-settings.page';

const flashAnimation = animation([
  animate(
    '{{ timings }}',
    keyframes([
      style({
        backgroundColor: '{{ highlightColor }}'
      }),
      style({
        backgroundColor: '{{ backgroundColor }}'
      }),
    ])
  )
]);

const defaultGeolocationOptions: GeolocationOptions = {
  enableHighAccuracy: true,
  maximumAge: 10000,
  requireAltitude: false,
  timeout: 6000,
};

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
  animations: [
    trigger('flashing', [
        transition('on=>off, off=>on', useAnimation(flashAnimation, {
          params: {
            timings: '900ms ease-in-out',
            highlightColor: 'var(--ion-color-success)',
            backgroundColor: 'rgba(255, 255, 255, 0.33)',
          }
        })),
      ])
  ],
})
export class GeolocationPage implements OnInit {
  private watchCallbackID: CallbackID;
  private geolocationOptions: GeolocationOptions;

  // Used in template
  flashingState = 'off';
  currentGeoloc: GeolocationPosition;
  watchedGeoloc: GeolocationPosition = {
    coords: {
      accuracy: null,
      altitude: null,
      altitudeAccuracy: null,
      heading: null,
      latitude: null,
      longitude: null,
      speed: null,
    },
    timestamp: null
  };
  waitingForCurrentGeolocation = false;
  watchingPosition = false;
  positions: any[] = [];
  watchPositionsMeanInterval: number;

  constructor(
    private cdRef: ChangeDetectorRef,
    private modalController: ModalController,
  ) {
    console.log('GeolocationPage.constructor()');
  }

  ngOnInit() {
    console.log('GeolocationPage.ngOnInit()');
    this.resetGeolocationOptions();
  }

  resetGeolocationOptions(): void {
    this.geolocationOptions = defaultGeolocationOptions;
  }

  async getCurrentPosition(): Promise<any> {
    console.log('GeolocationPage.getCurrentPosition()');
    this.waitingForCurrentGeolocation = true;
    try {
      const current: GeolocationPosition = await Geolocation.getCurrentPosition(this.geolocationOptions);
      console.log('Current position:', current);
      this.currentGeoloc = current;
      this.waitingForCurrentGeolocation = false;
      // this.cdRef.detectChanges();
    } catch (error) {
      console.error('catch', error);
      this.waitingForCurrentGeolocation = false;
    }
  }

  private toggleFlashingState(): void {
    this.flashingState = (this.flashingState === 'on') ? 'off' : 'on';
    this.cdRef.detectChanges();
  }

  watchPosition(): void {
    console.log('GeolocationPage.watchPosition()');
    this.positions = [];
    this.updateWatchMean();
    this.watchingPosition = true;
    this.watchCallbackID = Geolocation.watchPosition(this.geolocationOptions, (position: GeolocationPosition, err) => {
      console.log('Watch, new position:', position);
      this.watchedGeoloc = position;
      const diff = (this.positions[0]) ? position.timestamp - this.positions[0].position.timestamp : 0;
      this.positions.unshift({
        position,
        diff,
      });
      this.updateWatchMean();
      console.log('this.positions', this.positions);
      this.toggleFlashingState();
      this.cdRef.detectChanges();
    });
    console.log('this.watchCallbackID', this.watchCallbackID);
  }

  stopWatchingPosition(): void {
    this.clearWatch()
    .then((status) => {
      console.log('GeolocationPage.stopWatchingPosition - Success, status:', status);
      this.watchingPosition = false;
    })
    .catch(err => {
      console.log('GeolocationPage.stopWatchingPosition - Error:', err);
    });
  }

  private clearWatch(): Promise<any> {
    console.log('GeolocationPage.clearWatch()');
    return new Promise((resolve, reject) => {
      if (this.watchCallbackID) {
        Geolocation.clearWatch({id: this.watchCallbackID})
        .then(() => {
          console.log('GeolocationPage.clearWatch - Success');
          resolve(true);
        })
        .catch((err) => {
          console.error('GeolocationPage.clearWatch - Failure, err:', err);
          reject('GeolocationPage.clearWatch - Failure');
        });
      } else {
        resolve(false);
      }
      this.watchCallbackID = null;
    });
  }

  private updateWatchMean(): void {
    if (this.positions.length) {
      const intervals: number[] = [];
      let curr;
      this.positions.forEach((pos, idx) => {
        if (idx !== 0) {
          intervals.push(curr - pos.position.timestamp);
        }
        curr = pos.position.timestamp;
      });
      console.log('intervals', intervals);
      const sum = intervals.reduce((tmpSum, current) => {
        return tmpSum + current;
      }, 0);
      console.log('sum', sum);
      this.watchPositionsMeanInterval = sum / intervals.length;
      console.log('this.watchPositionsMeanInterval', this.watchPositionsMeanInterval);
    }
  }

  hasHistory(): boolean {
    console.log('GeolocationPage.hasHistory(), this.positions.length:', this.positions.length);
    console.log('GeolocationPage.hasHistory(), this.positions.length > 0:', this.positions.length > 0);
    return this.positions.length > 0;
  }

  ionViewWillLeave() {
    this.stopWatchingPosition();
  }

  async openSettings() {
    const modal: HTMLIonModalElement = await this.modalController.create({
      component: GeolocationSettingsPage,
      componentProps: this.geolocationOptions,
    });
    await modal.present();

    const { data } = await modal.onDidDismiss();
    console.log( 'modal data:', data );

  }
}
