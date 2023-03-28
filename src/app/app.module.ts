import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// ng-boostrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Ngrx Store
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ROOT_REDUCERS } from './store/app.state';

// Components
import { AppComponent } from './app.component';
import { SalePageComponent } from './pages/sale-page/sale-page.component';
import { ItemsEffects } from './store/effects/items.effects';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { FilterItemsPipe } from './pipes/filter-items.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPricePipe } from './pipes/filter-price.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SalePageComponent,
    ListItemsComponent,
    ItemCardComponent,
    CartComponent,
    CartItemComponent,
    FilterItemsPipe,
    FilterPricePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([ItemsEffects]),
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
