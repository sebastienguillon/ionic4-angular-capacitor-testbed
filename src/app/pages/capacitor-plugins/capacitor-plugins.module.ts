import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { CapacitorPluginsPage } from './capacitor-plugins.page';

const routes: Routes = [
  {
    path: '',
    component: CapacitorPluginsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CapacitorPluginsPage]
})
export class CapacitorPluginsPageModule {}
