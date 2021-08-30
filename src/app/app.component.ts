import { Component, OnInit } from '@angular/core';
import { Link } from './Link';
import { LINKS } from './mock-links';
import { CATEGORIES } from './mock-categories';
import { Category } from './Category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  title: string = 'Multipass';

  links: Link[] = LINKS;
  categories: Category[] = CATEGORIES;

  filter: string = '';

  ngOnInit(): void {
    // Nothing going on here currently...
  }

  handleSearch(value: string) {
    this.filter = value;
  }

  GetLinksByCategory(catId) {
    return this.filter.length > 0
      ? this.links.filter(x => x.categoryId === catId && ((x.title.toLocaleLowerCase().indexOf(this.filter.toLocaleLowerCase()) >= 0) || (x.url.toLocaleLowerCase().indexOf(this.filter.toLocaleLowerCase()) >= 0)))
      : this.links.filter(x => x.categoryId === catId);
  }
}
