import { BrowserModule } from '@angular/platform-browser';
import {  NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
