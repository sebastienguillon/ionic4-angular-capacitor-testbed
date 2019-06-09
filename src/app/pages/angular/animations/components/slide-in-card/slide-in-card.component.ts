import { Component, Input, OnInit, HostListener, HostBinding } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-slide-in-card',
  templateUrl: './slide-in-card.component.html',
  styleUrls: ['./slide-in-card.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(100%)'}),
        animate('225ms cubic-bezier(0.165, 0.84, 0.44, 1)', style({transform: 'translateY(0%)'})), // https://easings.net/#easeOutQuart
      ]),
      transition(':leave', [
        animate('195ms cubic-bezier(0.895, 0.03, 0.685, 0.22)', style({transform: 'translateY(100%)'})), // https://easings.net/#easeInQuart
      ]),
    ]),
  ],
})
export class SlideInCardComponent implements OnInit {

  private newContent;
  private transitioning = false;

  // Used in template
  open = false;
  // @HostBinding('@slideInOut') open = false;
  card = {
    id: 1,
    title: 'Animations',
    text: '@angular/animations',
    image: 'animations',
  };

  constructor() { }

  ngOnInit() { }

  // @HostListener('@slideInOut.start', ['$event'])
  animationStart(event: any) {
    console.log('animationStart', event);
    this.transitioning = true;
  }

  // @HostListener('@slideInOut.done', ['$event'])
  animationDone(event: any) {
    this.transitioning = false;
    console.log('animationDone', event);
    if (this.newContent) {
      this.card = this.newContent;
      this.newContent = null;
      this.open = true;
    }
  }

  toggleState() {
    if (!this.transitioning) {
      this.open = !this.open;
    }
  }

  switchCard(cardContent: any) {
    let doOpen = true;
    if (this.open && cardContent.id === this.card.id) {
      doOpen = false;
    }
    if (!this.transitioning && doOpen) {
      console.log('switchCard, cardContent:', cardContent);
      if (this.open) {
        this.newContent = cardContent; // Do not update content until card is hidden again.
      } else {
        this.card = cardContent; // Update immediately as card is currently hidden.
      }
      this.toggleState();
    }
  }

  close() {
    this.open = false;
  }
}
