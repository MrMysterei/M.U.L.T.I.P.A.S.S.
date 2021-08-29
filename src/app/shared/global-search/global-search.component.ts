import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.css']
})
export class GlobalSearchComponent implements OnInit {

  @Output() searchValue = new EventEmitter<string>();

  handleSearchValue(value: string) {
    this.searchValue.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
