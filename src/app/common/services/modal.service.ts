import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ModalService {
  // tslint:disable-next-line
  private _modalSequence$$: Subject<{ component: any, context: any } | null> = new Subject();

  // tslint:disable-next-line
  public open(item: { component: any, context: any }): void {
    this._modalSequence$$.next(item);
  }

  public close(): void {
    this._modalSequence$$.next(null);
  }

  // tslint:disable-next-line
  public get modalSequence$(): Observable<any> {
    return this._modalSequence$$.asObservable();
  }

}
