import { Component, OnInit } from '@angular/core';
import { Plugins, MotionEventResult } from '@capacitor/core';

@Component({
  selector: 'app-motion',
  templateUrl: './motion.page.html',
  styleUrls: ['./motion.page.scss'],
})
export class MotionPage implements OnInit {
  motionEvents: MotionEventResult[] = [];

  constructor() { }

  ngOnInit() {
  }

  startAccelerationListening(): void {
    Plugins.Motion.addListener('accel', (motionEvent: MotionEventResult) => {
      console.log(motionEvent);
      this.motionEvents.push(motionEvent);
    });
  }

  // removeListener
}
