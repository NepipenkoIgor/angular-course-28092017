import { AppComponent } from '../app.component';
import { HeaderComponent } from '../header/header.component';
import { SearchComponent } from '../search/search.component';
import { CardComponent } from '../card/card.component';
import { TooltipDirective } from '../common/directives/tooltip.directive';
import { ProductsFilterPipe } from '../common/pipes/products-filter.pipe';
import { SafeUrlPipe } from '../common/pipes/safe-url.pipe';
import { ModalComponent } from '../common/component/modal/modal.component';
import { FullCardComponent } from '../card/full-card/full-card.component';
import { CartComponent } from '../cart/cart.component';
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
  CartComponent
];