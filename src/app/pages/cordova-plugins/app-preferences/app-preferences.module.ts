import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AppPreferencesPage } from './app-preferences.page';

const routes: Routes = [
  {
    path: '',
    component: AppPreferencesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AppPreferencesPage]
})
export class AppPreferencesPageModule {}
