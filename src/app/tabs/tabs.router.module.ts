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
        path: 'ionic',
        children: [
          {
            path: '',
            loadChildren: '../pages/ionic/ionic.module#IonicPageModule',
          },
          {
            path: 'sticky',
            loadChildren: '../pages/ionic/sticky/sticky.module#StickyPageModule',
          },
          {
            path: 'sticky-property',
            loadChildren: '../pages/ionic/sticky-property/sticky-property.module#StickyPropertyPageModule',
          },
          {
            path: 'ion-modal',
            loadChildren: '../pages/ionic/ion-modal/ion-modal.module#IonModalPageModule',
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
          {
            path: 'toggle-switch',
            loadChildren: '../pages/angular/toggle-switch-demo/toggle-switch-demo.module#ToggleSwitchDemoPageModule',
          },
          {
            path: 'animations',
            loadChildren: '../pages/angular/animations/animations.module#AnimationsPageModule',
          },
        ],
      },
      {
        path: 'stencil',
        children: [
          {
            path: '',
            loadChildren: '../pages/stencil/stencil.module#StencilPageModule',
          },
          {
            path: 'stencil-basic',
            loadChildren: '../pages/stencil/stencil-basic/stencil-basic.module#StencilBasicPageModule',
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
            path: 'geolocation',
            loadChildren: '../pages/capacitor-plugins/geolocation/geolocation.module#GeolocationPageModule',
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
          {
            path: 'cordova-statusbar',
            loadChildren: '../pages/cordova-plugins/cordova-statusbar/cordova-statusbar.module#CordovaStatusBarPageModule',
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
