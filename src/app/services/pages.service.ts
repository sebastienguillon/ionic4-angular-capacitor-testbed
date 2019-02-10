import { Injectable } from '@angular/core';

const capacitorCategory: PageCategory = {
  category: 'capacitor',
  color: 'primary',
};
const cordovaCategory: PageCategory = {
  category: 'cordova',
  color: 'medium',
};
const angularCategory: PageCategory = {
  category: 'angular',
  color: 'danger',
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
  ];

  cordovaPages: PageLink[] = [
    {
      path: '/tabs/cordova/app-preferences',
      text: 'App Preferences',
      pageCategory: cordovaCategory,
    },
  ];

  angularPages: PageLink[] = [
    {
      path: '/tabs/angular/calendar',
      text: 'Calendar',
      pageCategory: angularCategory,
    },
  ];

  pages: PageLink[] = [
    ...this.capacitorPages,
    ...this.cordovaPages,
    ...this.angularPages,
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
