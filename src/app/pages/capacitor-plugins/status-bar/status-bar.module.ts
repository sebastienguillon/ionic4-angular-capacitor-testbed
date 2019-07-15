import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StatusBarPage } from './status-bar.page';

const routes: Routes = [
  {
    path: '',
    component: StatusBarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StatusBarPage]
})
export class StatusBarPageModule {}
