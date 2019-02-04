import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
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
    ComponentsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CordovaPluginsPage]
})
export class CordovaPluginsPageModule {}
