// Imports
import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../Category';
import { CATEGORIES } from '../mock-categories';

// Component Decorator
@Component({
  selector: 'app-links-panel',
  templateUrl: './links-panel.component.html',
  styleUrls: ['./links-panel.component.css']
})

// Class Definition
export class LinksPanelComponent implements OnInit {
  panelTitle: string = 'TBD';
  panelTypeId: number = 4;
  panelWidth: number = 3;
  links: any[];
  category: Category;

  @Input() filteredLinks: any[];
  @Input() PanelTitle: string;
  @Input() PanelTypeId: number;
  @Input() PanelWidth: number;

  constructor() { }

  ngOnInit(): void {
    this.links = this.filteredLinks;

    let currentCategoryId = this.filteredLinks[0].categoryId;

    this.category = CATEGORIES.find(x => x.id === currentCategoryId);
    this.panelTitle = this.category.name;
  }
}
