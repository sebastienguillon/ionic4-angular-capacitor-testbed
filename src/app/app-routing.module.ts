import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'geolocation-settings', loadChildren: './pages/capacitor-plugins/geolocation/modals/geolocation-settings/geolocation-settings.module#GeolocationSettingsPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // preloadingStrategy: NoPreloading,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {}
