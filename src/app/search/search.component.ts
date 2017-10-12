import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent {

  @Input()
  public placeholder: string;

  @Output()
  public mySearch: EventEmitter<string> = new EventEmitter();

  public search(text: string): void {
    this.mySearch.emit(text);
  }

}
