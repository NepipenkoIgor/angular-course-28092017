import { Directive } from '@angular/core';
import { FormGroup, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

function asyncEqualValidator({ value }: FormGroup): Observable<{ [key: string]: boolean } | null> {
  const [first, ...rest] = Object.keys(value || {});
  const valid: boolean = rest.every((v: string) => value[v] === value[first]);
  return Observable.of(valid ? null : { equal: true })
    .delay(5000);
}
@Directive({
  selector: '[appAsyncEqual]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useValue: asyncEqualValidator,
      multi: true
    }
  ]
})
export class AsyncEqualDirective {

}
