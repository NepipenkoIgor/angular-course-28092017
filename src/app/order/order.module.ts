import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MaterialModule } from '../material/material.module';
import { MatInputModule } from '@angular/material';
import { SearchService } from './search.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // TODO Why not material ?
    MatInputModule,
    RouterModule.forChild([
      {
        path: '',
        component: OrderComponent
      }
    ])
  ],
  providers: [SearchService],
  declarations: [
    OrderComponent
  ]
})
export class OrderModule {}
