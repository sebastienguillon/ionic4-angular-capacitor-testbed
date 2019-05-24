import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Plugins, MotionEventResult } from '@capacitor/core';

const { Motion } = Plugins;

@Component({
  selector: 'app-motion',
  templateUrl: './motion.page.html',
  styleUrls: ['./motion.page.scss'],
})
export class MotionPage implements OnInit {
  lastAcceleration: DeviceAcceleration;
  motionEvents: MotionEventResult[] = [];

  constructor(
    private cdRef: ChangeDetectorRef
  ) {
    this.cdRef.detach();
    setInterval(() => {
      if (this.cdRef) {
        this.cdRef.detectChanges();
      }
    }, 200);
  }

  ngOnInit() {
  }

  startAccelerationListening(): void {
    Motion.addListener('accel', this.motionListener.bind(this));
  }

  stopAccelerationListening(): void {
    // Motion.removeListener('accel', this.motionListener);
  }

  private motionListener(motionEvent: MotionEventResult): void {
    this.lastAcceleration = motionEvent.acceleration;
    this.motionEvents.push(motionEvent);
    console.log('count:', this.motionEvents.length);
  }

  startOrientationListening(): void {

  }

  stopOrientationListening(): void {

  }

  ionViewWillLeave() {
    this.stopAccelerationListening();
  }
}
