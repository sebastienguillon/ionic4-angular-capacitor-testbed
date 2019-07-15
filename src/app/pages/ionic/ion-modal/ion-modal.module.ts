import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IonModalPage } from './ion-modal.page';

// Modal page.
import { InfoPageModule } from 'src/app/modals/info/info.module';

const routes: Routes = [
  {
    path: '',
    component: IonModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    InfoPageModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IonModalPage]
})
export class IonModalPageModule {}
