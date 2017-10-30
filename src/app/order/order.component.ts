import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SearchService } from './search.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.sass']
})
export class OrderComponent {

  // public name: FormControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  // public formModel: FormGroup = new FormGroup({
  //   firstname: new FormControl('', [Validators.required, Validators.minLength(4)]),
  //   passwordGroup: new FormGroup({
  //     password: new FormControl('', [Validators.required, Validators.minLength(4)]),
  //     pconfirm: new FormControl('', [Validators.required, Validators.minLength(4)]),
  //   })
  // });

  public formArrayModel: FormGroup = new FormGroup({
    emails: new FormArray([new FormControl('')])
  });


  public formModel: FormGroup;

  public constructor(
    private _searchService: SearchService,
    private _fb: FormBuilder
  ) {

  }

  public ngOnInit(): void {

    this.formModel = this._fb.group({
      firstname: [''],
      male: [false],
      passwordGroup: this._fb.group({
        'password': ['', [Validators.required, Validators.minLength(4)]],
        'pconfirm': ['', [Validators.required, Validators.minLength(4)]]
      }, {
        asyncValidator: this._asyncEqualValidator
      })
    });

    (this.formModel.get('firstname') as FormControl)
      .valueChanges
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

  public addEmail(): void {
    (this.formArrayModel.get('emails') as FormArray).push(new FormControl(''));
  }

  // private _nameValidator(control: FormControl): { [key: string]: boolean } | null {
  //   const value: string = control.value || '';
  //   const valid: boolean = /^[a-zA-Z]*$/.test(value);
  //   return valid ? null : { nospecial: true };
  // }

  private _asyncEqualValidator({ value }: FormGroup): Observable<{ [key: string]: boolean } | null> {
    const [first, ...rest] = Object.keys(value || {});
    const valid: boolean = rest.every((v: string) => value[v] === value[first]);
    return Observable.of(valid ? null : { equal: true })
      .delay(5000);
  }
}
