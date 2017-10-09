import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { CardComponent } from './card/card.component';
import { TooltipDirective } from './common/directives/tooltip.directive';
import { ProductsFilterPipe } from './common/pipes/products-filter.pipe';
import { SafeUrlPipe } from './common/pipes/safe-url.pipe';
import { ProductsService } from './common/services/products.service';

import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { BASE_URL, BASE_URL_TOKEN } from './config';
import { HttpService } from './common/services/http.service';
import { AppInterceptorService } from './common/services/app-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    CardComponent,
    TooltipDirective,
    ProductsFilterPipe,
    SafeUrlPipe,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
