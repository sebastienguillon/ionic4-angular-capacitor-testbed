import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

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
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CapacitorPluginsPage]
})
export class CapacitorPluginsPageModule {}
