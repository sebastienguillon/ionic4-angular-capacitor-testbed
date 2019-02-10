import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../pages/home/home.module#HomePageModule',
          },
        ],
      },
      {
        path: 'capacitor',
        children: [
          {
            path: '',
            loadChildren: '../pages/capacitor-plugins/capacitor-plugins.module#CapacitorPluginsPageModule',
          },
          {
            path: 'status-bar',
            loadChildren: '../pages/capacitor-plugins/status-bar/status-bar.module#StatusBarPageModule',
          },
          {
            path: 'motion',
            loadChildren: '../pages/capacitor-plugins/motion/motion.module#MotionPageModule',
          },
          {
            path: 'modals',
            loadChildren: '../pages/capacitor-plugins/modals/modals.module#ModalsPageModule',
          },
          {
            path: 'camera',
            loadChildren: '../pages/capacitor-plugins/camera/camera.module#CameraPageModule',
          },
        ],
      },
      {
        path: 'cordova',
        children: [
          {
            path: '',
            loadChildren: '../pages/cordova-plugins/cordova-plugins.module#CordovaPluginsPageModule',
          },
          {
            path: 'app-preferences',
            loadChildren: '../pages/cordova-plugins/app-preferences/app-preferences.module#AppPreferencesPageModule',
          },
        ],
      },
      {
        path: 'angular',
        children: [
          {
            path: '',
            loadChildren: '../pages/angular/angular.module#AngularPageModule',
          },
          {
            path: 'calendar',
            loadChildren: '../pages/angular/calendar/calendar.module#CalendarPageModule',
          },
        ],
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
