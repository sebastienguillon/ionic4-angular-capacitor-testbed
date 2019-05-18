import { Injectable } from '@angular/core';

const ionicCategory: PageCategory = {
  category: 'ionic',
  color: 'primary',
};
const angularCategory: PageCategory = {
  category: 'angular',
  color: 'danger',
};
const stencilCategory: PageCategory = {
  category: 'stencil',
  color: 'dark',
};
const capacitorCategory: PageCategory = {
  category: 'capacitor',
  color: 'secondary',
};
const cordovaCategory: PageCategory = {
  category: 'cordova',
  color: 'medium',
};

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  capacitorPages: PageLink[] = [
    {
      path: '/tabs/capacitor/status-bar',
      text: 'Status Bar',
      pageCategory: capacitorCategory,
    },
    {
      path: '/tabs/capacitor/motion',
      text: 'Motion',
      pageCategory: capacitorCategory,
    },
    {
      path: '/tabs/capacitor/modals',
      text: 'Modals',
      pageCategory: capacitorCategory,
    },
    {
      path: '/tabs/capacitor/camera',
      text: 'Camera',
      pageCategory: capacitorCategory,
    },
    {
      path: '/tabs/capacitor/keyboard',
      text: 'Keyboard',
      pageCategory: capacitorCategory,
    },
    {
      path: '/tabs/capacitor/geolocation',
      text: 'Geolocation',
      pageCategory: capacitorCategory,
    },
  ];

  stencilPages: PageLink[] = [
    {
      path: '/tabs/stencil/stencil-basic',
      text: 'Stencil basic',
      pageCategory: stencilCategory,
    },
  ];

  ionicPages: PageLink[] = [
    {
      path: '/tabs/ionic/ion-modal',
      text: 'ion-modal',
      pageCategory: ionicCategory,
    },
    {
      path: '/tabs/ionic/sticky',
      text: 'CSS position: sticky',
      pageCategory: ionicCategory,
    },
    {
      path: '/tabs/ionic/sticky-property',
      text: 'Ionic’s "sticky" property',
      pageCategory: ionicCategory,
    },
  ];

  cordovaPages: PageLink[] = [
    {
      path: '/tabs/cordova/app-preferences',
      text: 'App Preferences',
      pageCategory: cordovaCategory,
    },
    {
      path: '/tabs/cordova/cordova-statusbar',
      text: 'Status Bar',
      pageCategory: cordovaCategory,
    },
  ];

  angularPages: PageLink[] = [
    {
      path: '/tabs/angular/calendar',
      text: 'Calendar',
      pageCategory: angularCategory,
    },
    {
      path: '/tabs/angular/toggle-switch',
      text: 'Toggle Switch',
      pageCategory: angularCategory,
    },
  ];

  pages: PageLink[] = [
    ...this.capacitorPages,
    ...this.cordovaPages,
    ...this.stencilPages,
    ...this.angularPages,
    ...this.ionicPages,
  ];

  constructor() { }

  filterPages(val: string): PageLink[] {
    if (val && val.trim() !== '') {
      return this.pages.filter((item) => {
        return (item.text.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    } else {
      return [];
    }
  }

}
