import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    NoopAnimationsModule,
    MatInputModule,
    MatToolbarModule,
  ],
  exports: [
    NoopAnimationsModule,
    MatInputModule,
    MatToolbarModule,
  ],
  declarations: []
})
export class MaterialModule {}
