import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { GeolocationSettingsPage } from './geolocation-settings.page';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild([]),
  ],
  declarations: [
    GeolocationSettingsPage,
  ],
  entryComponents: [
    GeolocationSettingsPage,
  ],
})
export class GeolocationSettingsPageModule {}
