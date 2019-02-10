import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AppState, Capacitor, DeviceInfo, Plugins, StatusBarStyle } from '@capacitor/core';

import { ConfigService } from './services/config.service';

// export { HelloWorldPlugin } from '../../node_modules/hello-world-capacitor-plugin';

const { App, Device, StatusBar, SplashScreen } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private configService: ConfigService,
    private platform: Platform,
  ) {
    this.initializeApp();
  }

  initializeApp(): void {
    this.configService.setLocale('fr');
    this.platform.ready().then(() => {
      console.log('App is ready');

      if (Capacitor.isPluginAvailable('StatusBar')) {
        StatusBar.setStyle({style: StatusBarStyle.Dark})
        .catch(err => {
          console.log(err);
        });
      }

      if (Capacitor.isPluginAvailable('SplashScreen')) {
        SplashScreen.hide()
        .catch(err => {
          console.log(err);
        });
      }
      this.listenToAppStateChange();
      this.getDeviceInfo();
      this.helloPluginTest();
    });
  }

  private listenToAppStateChange(): void {
    if (Capacitor.isPluginAvailable('App')) {
      App.addListener('appStateChange',
      (appState: AppState) => {
        if (appState.isActive) {
          console.log('App has become active');
        } else {
          console.log('App has become inactive');
        }
      });
    }
  }

  private helloPluginTest(): void {
    // const { HelloWorld } = Plugins;
    // Plugins.HelloWorld.echo({
    //   value: 'Hello Capacitor!'
    // })
    // .then(res => {
    //   console.log('res from Hello World plugin:', res);
    // });
  }

  private async getDeviceInfo(): Promise<void> {
    const deviceInfo: DeviceInfo = await Device.getInfo();
    console.log('Device info:', deviceInfo);
  }

}
