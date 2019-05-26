import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {
  MotionEventResult,
  MotionOrientationEventResult,
  Plugins,
  PluginListenerHandle,
} from '@capacitor/core';

import { from, Subject, Subscription } from 'rxjs';
import { throttleTime, map } from 'rxjs/operators';

const { Motion } = Plugins;

@Component({
  selector: 'app-motion',
  templateUrl: './motion.page.html',
  styleUrls: ['./motion.page.scss'],
})
export class MotionPage implements OnInit {
  private accelListenerHandle: PluginListenerHandle;
  private orientationListenerHandle: PluginListenerHandle;
  private accelSubject: Subject<MotionEventResult> = new Subject();
  private accelSubscription: Subscription;

  // Used in template (public)
  motionEvent: MotionEventResult;
  accelerationEvents: MotionEventResult[] = [];
  listeningToAcceleration = false;
  motionOrientationEvent: MotionOrientationEventResult;
  listeningToOrientation = false;

  constructor(
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {}

  startAccelerationListening(): void {
    console.log('MotionPage.startAccelerationListening()');
    this.listeningToAcceleration = true;
    this.accelListenerHandle = Motion.addListener('accel', this.accelListener.bind(this));
    this.accelSubscription = this.accelSubject.pipe(
      throttleTime(100))
      .subscribe((motionEventResult: MotionEventResult) => {
        console.log('motionEventResult:', motionEventResult);
        this.motionEvent = motionEventResult;
        this.cdRef.detectChanges();
      }
    );
  }

  stopAccelerationListening(): void {
    console.log('MotionPage.stopAccelerationListening()');
    if (this.accelListenerHandle) {
      console.log('removing');
      this.accelListenerHandle.remove();
      console.log('removed');
    }
    if (this.accelSubscription) {
      console.log('this.accelSubscription');
      this.accelSubscription.unsubscribe();
      console.log('After unsubscribe()');
    }
    this.listeningToAcceleration = false;
  }

  private accelListener(event: MotionEventResult): void {
    this.accelSubject.next(event);
    this.accelerationEvents.push(event);
  }

  startOrientationListening(): void {
    console.log('MotionPage.startOrientationListening()');
    this.listeningToOrientation = true;
    this.orientationListenerHandle = Motion.addListener('orientation', (event: MotionOrientationEventResult) => {
      console.log('event:', event);
      this.motionOrientationEvent = event;
      this.cdRef.detectChanges();
    });
  }

  stopOrientationListening(): void {
    if (this.orientationListenerHandle) {
      this.orientationListenerHandle.remove();
    }
    this.listeningToOrientation = false;
  }

  ionViewWillLeave() {
    this.stopAccelerationListening();
    this.stopOrientationListening();
  }
}
