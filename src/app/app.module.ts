import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SuiModule } from 'ng2-semantic-ui';
import { RouterModule, Routes } from '@angular/router'
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { ProductsComponent } from './components/products/products.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { CartComponent } from './components/cart/cart.component';

import { DataService } from './services/data.service';

const appRoutes: Routes = [
  { path: 'user', component: UserComponent },
  {
    path: 'cart',
    component: CartComponent
  },
  { path: '',
    component: ProductsComponent
  },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductsComponent,
    PagenotfoundComponent,
    CartComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes, 
      { enableTracing: true }
    ),
    BrowserModule,
    SuiModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
