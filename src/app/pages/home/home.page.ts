import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../services/pages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  displayResults = false;
  searchResults: PageLink[] = [];

  constructor(
    private pagesService: PagesService,
  ) { }

  ngOnInit() {
  }

  findPages(event: CustomEvent): void {
    this.displayResults = false;
    const elm = event.target as HTMLInputElement;
    this.searchResults = this.pagesService.filterPages(elm.value);
    console.log(this.searchResults);
    if (this.searchResults.length) {
      this.displayResults = true;
    }
  }

}
