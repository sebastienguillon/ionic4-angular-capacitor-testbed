import { Component, OnInit } from '@angular/core';
import { AppPreferences } from '@ionic-native/app-preferences/ngx';

@Component({
  selector: 'app-cordova-plugins',
  templateUrl: './cordova-plugins.page.html',
  styleUrls: ['./cordova-plugins.page.scss'],
})
export class CordovaPluginsPage implements OnInit {
  preferenceKey = 'pref1';
  favoriteColor = '';

  constructor(
    private appPreferences: AppPreferences
  ) {}

  ngOnInit() {
    this.getPreferences(this.preferenceKey);
  }

  getPreferences(key: string): void {
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

  setPreferences(key: string, val: string): void {
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
