import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AnimationsPage } from './animations.page';
import { SlideInCardComponent } from './components/slide-in-card/slide-in-card.component';

const routes: Routes = [
  {
    path: '',
    component: AnimationsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AnimationsPage,
    SlideInCardComponent,
  ],
})
export class AnimationsPageModule {}
