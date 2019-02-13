import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers-list/filter-textbox.component';
import { SharedModule } from '../shared/shared.module';
import { DataService } from '../core/data.service';
import { SorterService } from '../core/sorter.service';
import { CustomersRoutingModule } from './customers-routing.module';

@NgModule({
  declarations: [CustomersComponent, CustomersListComponent, FilterTextboxComponent ],
  imports: [ CommonModule, SharedModule, FormsModule, CustomersRoutingModule ], //CoomonModule, mi permette di avere le funzionalità come(ngFor,ngIf,ngClass...)
                                                                              //SharedModule, invece per il capitalize Pipe
                                                                             //FormsModule, per avere le funzionalità del form
  exports: [ CustomersComponent ],
  providers: [ DataService, SorterService ]
})
export class CustomersModule { } 