import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersModule } from './customers/customers.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
//import { OrdersComponent } from './orders/orders.component';
import { OrdersModule } from './orders/orders.module';


@NgModule({
  declarations: [AppComponent],
  imports: [ BrowserModule, CustomersModule, OrdersModule, AppRoutingModule,  SharedModule, HttpClientModule, CoreModule],
  bootstrap: [AppComponent] 
})
export class AppModule { }
