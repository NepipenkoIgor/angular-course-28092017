import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { ProductsService } from './common/services/products.service';

import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { BASE_URL, BASE_URL_TOKEN, routes } from './config';
import { HttpService } from './common/services/http.service';
import { AppInterceptorService } from './common/services/app-interceptor.service';
import { declarations } from './hub/declarations';
import { ModalService } from './common/services/modal.service';
import { FullCardComponent } from './products/card/full-card/full-card.component';
import { CartService } from './common/services/cart.service';
import { FullCartComponent } from './cart/full-cart/full-cart.component';
import {
  // PreloadAllModules,
  RouterModule
} from '@angular/router';
import { ProductResolveService } from './products/product/product-resolve.service';
import { OrderGuardService } from './order/order-guard.service';
import { CustomPreloadingService } from './common/services/custom-preloading.service';

import { SearchService } from './search/search.service';

@NgModule({
  declarations,
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingService })
  ],
  providers: [
    {
      provide: HttpClient,
      useClass: HttpService
    },
    ProductsService,
    {
      provide: BASE_URL_TOKEN,
      useValue: BASE_URL
    },
    {
      provide: 'baseUrl',
      useValue: 'localhost:5555'
    },
    // {
    //   provide: 'baseUrl',
    //   useValue: 'localhost:7777',
    //   multi: true
    // },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptorService,
      multi: true
    },
    ModalService,
    CartService,
    ProductResolveService,
    OrderGuardService,
    CustomPreloadingService,
    SearchService
  ],
  entryComponents: [FullCardComponent, FullCartComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
