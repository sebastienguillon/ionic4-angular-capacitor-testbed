import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Capacitor, Plugins, StatusBarInfoResult, StatusBarStyle } from '@capacitor/core';

const { StatusBar } = Plugins;

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.page.html',
  styleUrls: ['./status-bar.page.scss'],
})
export class StatusBarPage implements OnInit {
  statusBarInfo: StatusBarInfoResult;

  constructor(
    private cdRef: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.getStatusBarInfo();
  }

  private getStatusBarInfo(): void {
    if (Capacitor.isPluginAvailable('StatusBar')) {
      StatusBar.getInfo()
      .then((statusBarInfo: StatusBarInfoResult) => {
        this.statusBarInfo = statusBarInfo;
        this.cdRef.detectChanges();
        console.log('statusBarInfo', statusBarInfo);
      });
    }
  }
  hideStatusBar(): void {
    if (Capacitor.isPluginAvailable('StatusBar')) {
      StatusBar.hide();
      this.getStatusBarInfo();
    }
  }

  showStatusBar(): void {
    if (Capacitor.isPluginAvailable('StatusBar')) {
      StatusBar.show();
      this.getStatusBarInfo();
    }
  }

  setSatusBarStyle(style: StatusBarStyle): void {
    if (Capacitor.isPluginAvailable('StatusBar')) {
      StatusBar.setStyle({style: style});
      this.getStatusBarInfo();
    }
  }

  setSatusBarColor(color: string): void {
    if (Capacitor.isPluginAvailable('StatusBar')) {
      StatusBar.setBackgroundColor({color});
      this.getStatusBarInfo();
    }
  }
}
