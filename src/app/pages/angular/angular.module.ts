import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { AngularPage } from './angular.page';

const routes: Routes = [
  {
    path: '',
    component: AngularPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AngularPage]
})
export class AngularPageModule {}
