import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { IonicPage } from './ionic.page';

import { LoggerModule } from '../../common/logger/logger.module';

const routes: Routes = [
  {
    path: '',
    component: IonicPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    IonicModule,
    LoggerModule.setup({
      outputToConsole: true,
      debugTag: '[IonicPageModule]',
      debugStyle: 'color:#9f0',
    }),
    RouterModule.forChild(routes)
  ],
  declarations: [IonicPage]
})
export class IonicPageModule {}
