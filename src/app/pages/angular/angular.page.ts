import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../services/pages.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.page.html',
  styleUrls: ['./angular.page.scss'],
})
export class AngularPage implements OnInit {
  pages: PageLink[] = [];

  constructor(
    private pagesService: PagesService,
  ) {
    this.pages = this.pagesService.angularPages;
  }

  ngOnInit() {
  }

}
