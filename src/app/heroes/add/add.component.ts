import { Component } from "@angular/core";
import { Heroe } from "../entities/heroe";
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-add-heroe',
  templateUrl: './add.component.html',
})
export class AddHeroeComponent{

  heroe: Heroe = {
    name: '',
    power: 0,
    abilities: []
  }

  constructor(private ListComponent:ListComponent){

  }

  saveHeroe(){
    this.ListComponent.listHeroes.push(this.heroe)
  }


}
