import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AppPreferences } from '@ionic-native/app-preferences/ngx';

@Component({
  selector: 'app-app-preferences',
  templateUrl: './app-preferences.page.html',
  styleUrls: ['./app-preferences.page.scss'],
})
export class AppPreferencesPage implements OnInit {

  preferenceKey = 'pref1';
  favoriteColor = '';

  constructor(
    private appPreferences: AppPreferences,
    private platform: Platform,
  ) {}

  ngOnInit() {
    this.getPreferences(this.preferenceKey);
  }

  getPreferences(key: string): void {
    if (this.platform.is('mobile')) {
      this.appPreferences.fetch(key)
      .then((res) => {
        console.log(`Fetched "${key}":`, res);
        this.favoriteColor = res;
      })
      .catch(err => {
        console.log('Error', err);
        throw new Error(`Unable to fetch preference "${key}"`);
      });
    }
  }

  setPreferences(key: string, val: string): void {
    if (this.platform.is('mobile')) {
      this.appPreferences.store(this.preferenceKey, val)
      .then(res => {
        console.log(res);
        this.getPreferences(key);
      })
      .catch(err => {
        console.log('Error', err);
        throw new Error(`Unable to set preference "${key}"`);
      });
    }
  }

}
