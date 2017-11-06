import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info.component';
import { RouterModule } from '@angular/router';
import { CdComponent } from '../cd/cd.component';
import { DefaultComponent } from '../cd/default/default.component';
import { OnPushComponent } from '../cd/on-push/on-push.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from '../cd/on-push/child/child.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: InfoComponent
      }
    ])
  ],
  declarations: [
    InfoComponent,
    CdComponent,
    DefaultComponent, OnPushComponent, ChildComponent
  ]
})
export class InfoModule {}
