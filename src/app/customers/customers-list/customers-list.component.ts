import { Component, OnInit, Input } from '@angular/core';

import { ICustomer } from 'src/app/shared/interfaces';
import {SorterService} from '../../core/sorter.service';

//Decorator è una funzione
@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
})

export class CustomersListComponent implements OnInit {

  private _customers: ICustomer[] = [];

  //Function get
  @Input() get customers(): ICustomer[] {
    return this._customers;
  }

  //Function set
  set customers(value: ICustomer[]) {
    if (value) {
        this.filteredCustomers = this._customers = value;
        this.calculateOrders();
    }
}


  filteredCustomers: ICustomer[] = [];
  customersOrderTotal: number;
  currencyCode: string = 'EUR';

  //costruttore
  constructor(private sorterService: SorterService) {}

  //metodo
  ngOnInit() {

    /*this.filteredCustomers = [
      { id: 1, name: 'john Doe', city: 'Phoenix', orderTotal: 9.99, customerSince: new Date(2014, 7, 10) },
          { id: 2, name: 'Jane Doe', city: 'Chandler', orderTotal: 19.99, customerSince: new Date(2017, 2, 22)},
          { id: 3, name: 'Michelle Thomas', city: 'Seattle', orderTotal: 99.99, customerSince: new Date(2002, 10, 31)},
          { id: 4, name: 'Jim Thomas', city: 'New York', orderTotal: 599.99, customerSince: new Date(2002, 10, 31)},
    ];*/



  }

  //Function
  calculateOrders() {
    console.log("calculateOrders");
        this.customersOrderTotal = 0;
        this.filteredCustomers.forEach((cust: ICustomer) => {
            this.customersOrderTotal += cust.orderTotal;
        });

      }

      //Function
      filter(data: string) {
        if (data) {
            this.filteredCustomers = this.customers.filter((cust: ICustomer) => {
                return cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                       cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                       cust.orderTotal.toString().indexOf(data) > -1;
            });
            
        } else {
            this.filteredCustomers = this.customers;
        }
        this.calculateOrders();
    }

      //Function
      sort(prop: string) {
         //funzione che gestisce l'ordinamento
         this.sorterService.sort(this.filteredCustomers, prop);

      }
      
}
