import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../services/pages.service';

@Component({
  selector: 'app-cordova-plugins',
  templateUrl: './cordova-plugins.page.html',
  styleUrls: ['./cordova-plugins.page.scss'],
})
export class CordovaPluginsPage implements OnInit {
  pages: PageLink[] = [];
  preferenceKey = 'pref1';
  favoriteColor = '';

  constructor(
    private pagesService: PagesService,
  ) {
    this.pages = this.pagesService.cordovaPages;
  }

  ngOnInit() {
  }

}
