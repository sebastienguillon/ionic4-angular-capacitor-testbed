import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AppState, DeviceInfo, Plugins, StatusBarStyle } from '@capacitor/core';
// export { HelloWorldPlugin } from '../../node_modules/hello-world-capacitor-plugin';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      Plugins.StatusBar.setStyle({style: StatusBarStyle.Dark});
      Plugins.SplashScreen.hide();
      console.log('App is ready');
      this.listenToAppStateChange();
      this.getDeviceInfo();
      this.helloPluginTest();
    });
  }

  private listenToAppStateChange() {
    Plugins.App.addListener('appStateChange', (appState: AppState) => {
      if (appState.isActive) {
        console.log('App has become active');
      } else {
        console.log('App has become inactive');
      }
    });
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
    console.log('Plugins: ', Plugins);
    const { Device } = Plugins;
    const deviceInfo: DeviceInfo = await Device.getInfo();
    console.log('Device info:', deviceInfo);
  }

}
