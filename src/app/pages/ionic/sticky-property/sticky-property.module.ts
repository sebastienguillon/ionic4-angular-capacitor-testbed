import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StickyPropertyPage } from './sticky-property.page';

const routes: Routes = [
  {
    path: '',
    component: StickyPropertyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StickyPropertyPage]
})
export class StickyPropertyPageModule {}
