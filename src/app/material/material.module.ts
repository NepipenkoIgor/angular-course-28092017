import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MdInputModule, MdToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    NoopAnimationsModule,
    MdToolbarModule,
    MdInputModule,
  ],
  exports: [
    NoopAnimationsModule,
    MdToolbarModule,
    MdInputModule,
  ],
  declarations: []
})
export class MaterialModule {}
