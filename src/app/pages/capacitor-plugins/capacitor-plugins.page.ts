import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../services/pages.service';

@Component({
  selector: 'app-capacitor-plugins',
  templateUrl: './capacitor-plugins.page.html',
  styleUrls: ['./capacitor-plugins.page.scss'],
})
export class CapacitorPluginsPage implements OnInit {
  pages: PageLink[] = [];

  constructor(
    private pagesService: PagesService,
  ) {
    this.pages = this.pagesService.capacitorPages;
  }

  ngOnInit() {
  }

}
