import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// https://api.github.com/search/repositories?q=${value}
@Injectable()
export class SearchService {

  // private _serachStream$$: Subject<string> = new Subject();

  public constructor(
    private _http: HttpClient
  ) { }

// tslint:disable-next-line
  public searchStream(value: string): Observable<any> {
    return this._http.get(`https://api.github.com/search/repositories?q=${value}`)
    // tslint:disable-next-line
      .catch((error: HttpErrorResponse): Observable<any> => {
        return Observable.of([]);
      });
  }

}
