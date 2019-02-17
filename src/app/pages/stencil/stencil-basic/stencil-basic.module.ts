import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StencilBasicPage } from './stencil-basic.page';

const routes: Routes = [
  {
    path: '',
    component: StencilBasicPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StencilBasicPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StencilBasicPageModule {}
