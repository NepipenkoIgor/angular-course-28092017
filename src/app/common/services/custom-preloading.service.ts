import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class CustomPreloadingService implements PreloadingStrategy {

  public preload(route: Route, fn: () => Observable<boolean>): Observable<boolean> {
    return Observable.of(true)
      .delay(5000)
      .mergeMap((_: boolean) => fn());
  }


}
