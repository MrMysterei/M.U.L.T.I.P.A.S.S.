// Imports
import { Component, Input, OnInit } from '@angular/core';

// Component Decorator
@Component({
  selector: 'app-links-panel',
  templateUrl: './links-panel.component.html',
  styleUrls: ['./links-panel.component.css']
})

// Class Definition
export class LinksPanelComponent implements OnInit {
  panelTitle: string = 'Stuff';
  panelTypeId: number = 4;
  panelWidth: number = 3;
  links: any[];

  @Input() filteredLinks: any[];
  @Input() PanelTitle: string;
  @Input() PanelTypeId: number;
  @Input() PanelWidth: number;

  constructor() { }

  ngOnInit(): void {
    this.panelTitle = this.PanelTitle;
    this.links = this.filteredLinks;
  }
}
