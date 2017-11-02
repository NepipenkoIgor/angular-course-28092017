import { Component, Input } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent {

  @Input()
  public placeholder: string;


  public constructor(
    private _searchService: SearchService
  ) {

  }

  public search(text: string): void {
    this._searchService.updateSearchTerm = text;
  }

}
