import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../services/pages.service';

@Component({
  selector: 'app-stencil',
  templateUrl: './stencil.page.html',
  styleUrls: ['./stencil.page.scss'],
})
export class StencilPage implements OnInit {
  pages: PageLink[] = [];

  constructor(
    private pagesService: PagesService,
  ) {
    this.pages = this.pagesService.stencilPages;
  }

  ngOnInit() {
  }

}
