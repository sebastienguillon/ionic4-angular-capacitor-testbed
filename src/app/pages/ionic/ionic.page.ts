import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../services/pages.service';

import { LoggerService } from '../../common/logger/logger.service';

@Component({
  selector: 'app-ionic',
  templateUrl: './ionic.page.html',
  styleUrls: ['./ionic.page.scss'],
})
export class IonicPage implements OnInit {
  pages: PageLink[] = [];

  constructor(
    private pagesService: PagesService,
    private loggerService: LoggerService,
  ) {
    this.pages = this.pagesService.ionicPages;
  }

  ngOnInit() {
    this.loggerService.debug('This is cool!');
  }

}
