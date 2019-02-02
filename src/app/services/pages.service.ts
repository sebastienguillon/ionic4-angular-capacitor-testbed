import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  capacitorPages: PageLink[] = [
    {
      path: '/tabs/capacitor/status-bar',
      text: 'Status Bar',
    },
    {
      path: '/tabs/capacitor/motion',
      text: 'Motion',
    },
  ];

  cordovaPages: PageLink[] = [
    {
      path: '/tabs/cordova/app-preferences',
      text: 'App Preferences',
    },
  ];

  pages: PageLink[] = [
    ...this.capacitorPages,
    ...this.cordovaPages,
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
