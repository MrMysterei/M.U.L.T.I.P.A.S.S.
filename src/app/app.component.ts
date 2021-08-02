import { Component, OnInit } from '@angular/core';
import { Link } from './Link';
import { LINKS } from './mock-links';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  title: string = 'Multipass';

  links: Link[] = LINKS;

  category1List: any[];
  category2List: any[];
  category3List: any[];
  category4List: any[];
  category5List: any[];
  category6List: any[];
  category7List: any[];
  category8List: any[];

  ngOnInit(): void {
    this.category1List = this.GetLinksByCategory(this.links, 1);
    this.category2List = this.GetLinksByCategory(this.links, 2);
    this.category3List = this.GetLinksByCategory(this.links, 3);
    this.category4List = this.GetLinksByCategory(this.links, 4);

    this.category5List = this.GetLinksByCategory(this.links, 5);
    this.category6List = this.GetLinksByCategory(this.links, 6);
    this.category7List = this.GetLinksByCategory(this.links, 7);
    this.category8List = this.GetLinksByCategory(this.links, 8);
  }

  GetLinksByCategory(links, catId) {
    return this.links.filter(x => x.categoryId === catId);
  }
}
