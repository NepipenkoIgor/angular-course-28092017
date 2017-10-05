import { BrowserModule } from '@angular/platform-browser';
import {  NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { CardComponent } from './card/card.component';
import { TooltipDirective } from './common/directives/tooltip.directive';
import { ProductsFilterPipe } from './common/pipes/products-filter.pipe';
import { SafeUrlPipe } from './common/pipes/safe-url.pipe';


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
    MaterialModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
