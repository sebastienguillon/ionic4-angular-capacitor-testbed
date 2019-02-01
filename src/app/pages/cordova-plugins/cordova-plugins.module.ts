import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CordovaPluginsPage } from './cordova-plugins.page';

const routes: Routes = [
  {
    path: '',
    component: CordovaPluginsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CordovaPluginsPage]
})
export class CordovaPluginsPageModule {}
