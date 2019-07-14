import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../services/pages.service';

import { LoggerService } from '../../common/logger/logger.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.page.html',
  styleUrls: ['./angular.page.scss'],
})
export class AngularPage implements OnInit {
  pages: PageLink[] = [];

  constructor(
    private pagesService: PagesService,
    private loggerService: LoggerService,
  ) {
    this.pages = this.pagesService.angularPages;
  }

  ngOnInit() {
    this.loggerService.debug('The standard style?');
  }

}
