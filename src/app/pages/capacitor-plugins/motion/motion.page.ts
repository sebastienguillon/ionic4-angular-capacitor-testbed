import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {
  MotionEventResult,
  MotionOrientationEventResult,
  Plugins,
  PluginListenerHandle,
} from '@capacitor/core';

import { from, Subject } from 'rxjs';
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
  private accelSub: Subject<MotionEventResult> = new Subject();

  // Used in template (public)
  motionEvent: MotionEventResult;
  accelerationEvents: MotionEventResult[] = [];
  listeningToAcceleration = false;
  listeningToOrientation = false;

  constructor(
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {}

  startAccelerationListening(): void {
    this.listeningToAcceleration = true;
    this.accelListenerHandle = Motion.addListener('accel', this.accelListener.bind(this));
    this.accelSub.pipe(
      throttleTime(100))
      .subscribe((motionEventResult: MotionEventResult) => {
        this.motionEvent = motionEventResult;
        this.cdRef.detectChanges();
      }
    );
  }

  stopAccelerationListening(): void {
    if (this.accelListenerHandle) {
      this.accelListenerHandle.remove();
    }
    if (this.accelSub) {
      this.accelSub.unsubscribe();
    }
    this.listeningToAcceleration = false;
  }

  private accelListener(event: MotionEventResult): void {
    this.accelSub.next(event);
    this.accelerationEvents.push(event);
  }

  startOrientationListening(): void {
    this.listeningToOrientation = true;
    this.orientationListenerHandle = Motion.addListener('orientation', this.orientationListener.bind(this));
  }

  stopOrientationListening(): void {
    if (this.orientationListenerHandle) {
      this.orientationListenerHandle.remove();
    }
    this.listeningToOrientation = false;
  }

  private orientationListener(event: MotionOrientationEventResult): void {
    // this.motionEvents.push(motionEvent);
    // console.log('count:', this.motionEvents.length);
  }

  ionViewWillLeave() {
    this.stopAccelerationListening();
    this.stopOrientationListening();
  }
}
