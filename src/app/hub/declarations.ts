import { AppComponent } from '../app.component';
import { HeaderComponent } from '../header/header.component';
import { SearchComponent } from '../search/search.component';
import { CardComponent } from '../products/card/card.component';
import { TooltipDirective } from '../common/directives/tooltip.directive';
import { ProductsFilterPipe } from '../common/pipes/products-filter.pipe';
import { SafeUrlPipe } from '../common/pipes/safe-url.pipe';
import { ModalComponent } from '../common/component/modal/modal.component';
import { FullCardComponent } from '../products/card/full-card/full-card.component';
import { CartComponent } from '../cart/cart.component';
import { FullCartComponent } from '../cart/full-cart/full-cart.component';
import { ProductsComponent } from '../products/products.component';
import { ProductComponent } from '../products/product/product.component';


// tslint:disable-next-line
export const declarations: any[] = [
  AppComponent,
  HeaderComponent,
  SearchComponent,
  CardComponent,
  TooltipDirective,
  ProductsFilterPipe,
  SafeUrlPipe,
  ModalComponent,
  FullCardComponent,
  CartComponent,
  FullCartComponent,
  ProductsComponent,
  ProductComponent
];