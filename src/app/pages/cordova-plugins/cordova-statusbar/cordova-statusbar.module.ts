import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CordovaStatusBarPage } from './cordova-statusbar.page';

const routes: Routes = [
  {
    path: '',
    component: CordovaStatusBarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CordovaStatusBarPage]
})
export class CordovaStatusBarPageModule {}
