import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';

type DefaultColors = 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger' | 'dark';
type StatusBarStyles = 'default' | 'lightContent' | 'blackTranslucent' | 'blackOpaque';

interface AppIonicColor {
  name: DefaultColors;
  color: string;
}

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.page.html',
  styleUrls: ['./status-bar.page.scss'],
})
export class StatusBarPage implements OnInit {
  statusBarColor: DefaultColors = 'dark';
  statusBarStyle: StatusBarStyles = 'default';
  statusBarStyles: StatusBarStyles[] = ['default', 'lightContent', 'blackTranslucent', 'blackOpaque'];
  showStatusBar = true;
  overlayWebView = false;
  colors: AppIonicColor[] = [{
    name: 'primary',
    color: '#3880ff',
  }, {
    name: 'secondary',
    color: '#0cd1e8',
  }, {
    name: 'tertiary',
    color: '#7044ff',
  }, {
    name: 'success',
    color: '#10dc60',
  }, {
    name: 'warning',
    color: '#ffce00',
  }, {
    name: 'danger',
    color: '#f04141',
  }, {
    name: 'dark',
    color: '#222428',
  }];

  constructor(
    private statusBar: StatusBar
  ) { }

  ngOnInit() {
  }

  setStatusbarColor(): void {
    console.log('setStatusbarColor', this.statusBarColor);
    this.statusBar.backgroundColorByHexString(this.statusBarColor);
  }

  toggleStatusBar(): void {
    (this.showStatusBar) ? this.statusBar.show() : this.statusBar.hide();
  }

  setStatusBarOverlayWebView(): void {
    this.statusBar.overlaysWebView(this.overlayWebView);
  }

  toggleStatusBarStyle(): void {
    switch (this.statusBarStyle) {
      case 'default':
        this.statusBar.styleDefault();
        break;
      case 'lightContent':
        this.statusBar.styleLightContent();
        break;
      case 'blackTranslucent':
        this.statusBar.styleBlackTranslucent();
        break;
      case 'blackOpaque':
        this.statusBar.styleBlackOpaque();
        break;
    }
  }

}
