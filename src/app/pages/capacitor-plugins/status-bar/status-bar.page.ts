import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Plugins, StatusBarStyle } from '@capacitor/core';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.page.html',
  styleUrls: ['./status-bar.page.scss'],
})
export class StatusBarPage implements OnInit {

  statusBarStyles = {
    dark: StatusBarStyle.Dark,
    light: StatusBarStyle.Light,
  };

  constructor(
    private platform: Platform
  ) { }

  ngOnInit() {
    if (this.platform.is('mobile')) {
      console.log('StatusBarStyle.Dark:', StatusBarStyle.Dark);
      console.log('StatusBarStyle.Light:', StatusBarStyle.Light);
    }
  }

  hideStatusBar(): void {
    if (this.platform.is('mobile')) {
      Plugins.StatusBar.hide();
    }
  }

  showStatusBar(): void {
    if (this.platform.is('mobile')) {
      Plugins.StatusBar.show();
    }
  }

  setSatusBarStyle(style: StatusBarStyle): void {
    if (this.platform.is('mobile')) {
      Plugins.StatusBar.setStyle({style: style});
    }
  }

  setSatusBarColor(color: string): void {
    if (this.platform.is('mobile')) {
      Plugins.StatusBar.setBackgroundColor({color});
    }
  }
}
