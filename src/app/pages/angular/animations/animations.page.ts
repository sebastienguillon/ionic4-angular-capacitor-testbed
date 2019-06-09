import { Component, OnInit, ViewChild } from '@angular/core';
import { animate, animation, keyframes, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { SlideInCardComponent } from './components/slide-in-card/slide-in-card.component';

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
          },
        }))
    ])
  ],
})
export class AnimationsPage implements OnInit {
  @ViewChild('slideInCard') slideInCard: SlideInCardComponent;

  private flashingInterval: any;

  // Used in template
  flashingState = 'off';
  flashIntervalRunning = false;

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

  toggleBottomCard(cardNumber: number) {
    const cardContent = {
      id: 1,
      image: '',
      title: '',
      text: '',
    };
    switch (cardNumber) {
      case 1:
        cardContent.id = 1;
        cardContent.image = 'animations',
        cardContent.title = 'Animations';
        cardContent.text = '@angular/animations';
        break;
      case 2:
        cardContent.id = 2;
        cardContent.image = 'router',
        cardContent.title = 'Router';
        cardContent.text = '@angular/router';
        break;
      case 3:
        cardContent.id = 3;
        cardContent.image = 'compiler',
        cardContent.title = 'Compiler';
        cardContent.text = '@angular/compiler';
        break;
    }
    this.slideInCard.switchCard(cardContent);
  }

  toggleCard() {
    this.slideInCard.toggleState();
  }
}
