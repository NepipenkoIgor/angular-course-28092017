import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { HttpService } from './http.service';

// import { BASE_URL_TOKEN } from '../../config';

@Injectable()
export class ProductsService {

  public constructor(
    @Inject('baseUrl') private _baseUrlTest: string[],
    private _http: HttpClient
  ) {
   // tslint:disable-next-line
    console.log(this._baseUrlTest);
  }

  public getProducts(): Observable<Product[]> {
    return (this._http as HttpService)
      .customRequest('/products');

  }

}
