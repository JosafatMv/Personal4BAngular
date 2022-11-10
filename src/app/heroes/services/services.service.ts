import { Injectable } from '@angular/core';
import { Heroe } from '../entities/heroe';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private _heroes: Heroe[] = [];

  public get heroes(): Heroe[] {
    return [...this._heroes];
  }

  saveHeroe(heroe: Heroe){
    this._heroes.push(heroe);
  }

  deleteHeroe(id: number){
    
  }

  constructor() { }
}
