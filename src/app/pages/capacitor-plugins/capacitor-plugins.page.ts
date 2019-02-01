import { Component, OnInit } from '@angular/core';
import { Plugins, StatusBarStyle } from '@capacitor/core';

@Component({
  selector: 'app-capacitor-plugins',
  templateUrl: './capacitor-plugins.page.html',
  styleUrls: ['./capacitor-plugins.page.scss'],
})
export class CapacitorPluginsPage implements OnInit {

  statusBarStyles = {
    dark: StatusBarStyle.Dark,
    light: StatusBarStyle.Light,
  };

  constructor() { }

  ngOnInit() {
    console.log('StatusBarStyle.Dark:', StatusBarStyle.Dark);
    console.log('StatusBarStyle.Light:', StatusBarStyle.Light);
  }

  hideStatusBar(): void {
    Plugins.StatusBar.hide();
  }

  showStatusBar(): void {
    Plugins.StatusBar.show();
  }

  setSatusBarStyle(style: StatusBarStyle): void {
    Plugins.StatusBar.setStyle({style: style});
  }

  setSatusBarColor(color: string): void {
    Plugins.StatusBar.setBackgroundColor({color});
  }

}
