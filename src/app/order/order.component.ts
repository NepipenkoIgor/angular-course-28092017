import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SearchService } from './search.service';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.sass']
})
export class OrderComponent {

  // public name: FormControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  public formModel: FormGroup = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  public constructor(
    private _searchService: SearchService
  ) {

  }

  public ngOnInit(): void {
    (this.formModel.get('firstname') as FormControl).valueChanges
      .debounceTime(1000) // cтроки
      .switchMap((value: string) => this._searchService.searchStream(value));
    // .subscribe((searchResult: any) => {
    //   console.log(searchResult);
    // });
  }

  // tslint:disable-next-line
  public onSubmit(value: any): void {
    // tslint:disable-next-line
    console.log(value);
  }
}
