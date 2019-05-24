import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

// Pages
import { GeolocationPage } from './geolocation.page';

// Components
import { GeolocationPositionsComponent } from './components/geolocation-positions/geolocation-positions.component';

// Modal page
import { GeolocationSettingsPageModule } from './modals/geolocation-settings/geolocation-settings.module';


const routes: Routes = [
  {
    path: '',
    component: GeolocationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    GeolocationSettingsPageModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    GeolocationPage,
    GeolocationPositionsComponent,
  ],
})
export class GeolocationPageModule {}
