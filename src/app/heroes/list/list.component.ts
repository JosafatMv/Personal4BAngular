import { Component } from "@angular/core";
import { Heroe } from '../entities/heroe';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent{
  heroes: Heroe[] = [];
  heroe: Heroe = {
    name: '',
    power: 0,
    habilities: []
  }

  constructor(){
    this.heroes.unshift({
      name: 'Josa',
      power: 10,
      habilities: ['Ninguna']
    })
  }
}
