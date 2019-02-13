import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../services/pages.service';

@Component({
  selector: 'app-ionic',
  templateUrl: './ionic.page.html',
  styleUrls: ['./ionic.page.scss'],
})
export class IonicPage implements OnInit {
  pages: PageLink[] = [];

  constructor(
    private pagesService: PagesService,
  ) {
    this.pages = this.pagesService.ionicPages;
  }

  ngOnInit() {
  }

}
