import { Component } from "@angular/core";
import { Heroe } from '../entities/heroe';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent{
  private _heroes: Heroe[] = [];


  public get listHeroes(): Heroe[] {
    return [...this._heroes];
  }


}
