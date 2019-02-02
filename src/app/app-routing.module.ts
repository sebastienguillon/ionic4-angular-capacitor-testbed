import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'status-bar', loadChildren: './pages/capacitor-plugins/status-bar/status-bar.module#StatusBarPageModule' },
  { path: 'motion', loadChildren: './pages/capacitor-plugins/motion/motion.module#MotionPageModule' },
  { path: 'app-preferences', loadChildren: './pages/cordova-plugins/app-preferences/app-preferences.module#AppPreferencesPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
