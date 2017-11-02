import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchService {


  private static _searchSubject: Subject<string> = new Subject();

  public get searchTerm(): Observable<string> {
    return SearchService._searchSubject.asObservable();
  }

  public set updateSearchTerm(text: string) {
    SearchService._searchSubject.next(text);
  }

}
