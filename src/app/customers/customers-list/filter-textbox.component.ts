import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'filter-textbox',
    template: 
            'Filter: <input type="text" [(ngModel)]="filter"/>'  //Viene richiamato ngModule, perchè nel file a cui fa riferimento, cioè customers.module.ts,
                                                                //il metodo ngModule racchiude negli import, tutti gli altri moduli
    
})

export class FilterTextboxComponent implements OnInit {

    private _filter: string;  //variable
    //In INPUT prendo il valore inserito nel filter
    @Input() get filter() {
        return this._filter;
    }
    
    set filter(val: string) { 
        this._filter = val;
        this.changed.emit(this.filter); //Raise changed event
    }

    //In OUTPUT cioò che matcha con quello che vi è scritto nel filter
    @Output() changed: EventEmitter<string> = new EventEmitter<string>();

    
    constructor()  {}

    ngOnInit() {

    }
}