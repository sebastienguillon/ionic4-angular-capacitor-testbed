import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { StencilPage } from './stencil.page';

const routes: Routes = [
  {
    path: '',
    component: StencilPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StencilPage]
})
export class StencilPageModule {}
