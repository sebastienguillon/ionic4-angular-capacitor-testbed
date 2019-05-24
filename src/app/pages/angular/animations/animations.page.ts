import { Component, OnInit } from '@angular/core';
import { animate, animation, keyframes, state, style, transition, trigger, useAnimation } from '@angular/animations';

const flashAnimation = animation([
  animate(
    '{{ timings }}',
    keyframes([
      style({ backgroundColor: '{{ highlightColor }}' }),
      style({ backgroundColor: '{{ backgroundColor }}' }),
    ])
  )
]);

@Component({
  selector: 'app-animations',
  templateUrl: './animations.page.html',
  styleUrls: ['./animations.page.scss'],
  animations: [
    trigger('flashing', [
        transition('on=>off, off=>on', useAnimation(flashAnimation, {
          params: {
            timings: '900ms ease-in-out',
            highlightColor: 'var(--ion-color-warning)',
            backgroundColor: 'transparent',
          }
        }))
    ])
  ],
})
export class AnimationsPage implements OnInit {
  flashingState = 'off';
  flashIntervalRunning = false;
  private flashingInterval: any;

  constructor() { }

  ngOnInit() {
  }

  toggleFlashingState() {
    this.flashingState = (this.flashingState === 'on') ? 'off' : 'on';
  }

  startFlashingInterval() {
    this.flashIntervalRunning = true;
    this.flashingInterval = setInterval(() => {
      this.toggleFlashingState();
    }, 1100);
  }
  stopFlashingInterval() {
    this.flashIntervalRunning = false;
    clearInterval(this.flashingInterval);
  }
}
