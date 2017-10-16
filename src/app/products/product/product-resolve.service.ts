import {  Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../../common/services/http.service';
import 'rxjs/add/observable/of';
@Injectable()
export class ProductResolveService implements Resolve<Product> {

  public constructor(
    private _http: HttpClient,
    private _router: Router
  ) { }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
    return (this._http as HttpService)
      .customRequest(`/products/${route.params.id}`)
      .catch((err: Error) => {
        this._router.navigate(['products']);
        return Observable.of(null);
      });
  }

}
