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
            loadChildren: '../pages/home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'capacitor',
        children: [
          {
            path: '',
            loadChildren: '../pages/capacitor-plugins/capacitor-plugins.module#CapacitorPluginsPageModule'
          },
          {
            path: 'status-bar',
            loadChildren: '../pages/capacitor-plugins/status-bar/status-bar.module#StatusBarPageModule'
          },
          {
            path: 'motion',
            loadChildren: '../pages/capacitor-plugins/motion/motion.module#MotionPageModule'
          }
        ]
      },
      {
        path: 'cordova',
        children: [
          {
            path: '',
            loadChildren: '../pages/cordova-plugins/cordova-plugins.module#CordovaPluginsPageModule'
          }
        ]
      },
      {
        path: 'camera',
        children: [
          {
            path: '',
            loadChildren: '../pages/camera/camera.module#CameraPageModule'
          }
        ]
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
