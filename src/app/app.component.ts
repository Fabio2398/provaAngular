import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  //template: '<h1>{{ title }}</h1>'

  template : 
   //Components go here:
  '<router-outlet></router-outlet>',


  
  //'<app-customers></app-customers>' 
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    //title: string;

  constructor() { }

  //Funzione che restituisce il title
  ngOnInit() {

    //this.title = "Prova di Angular";
  }
}
