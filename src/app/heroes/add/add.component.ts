import { Component } from "@angular/core";
import { Heroe } from "../entities/heroe";
import { ListComponent } from '../list/list.component';
import { ServicesService } from '../services/services.service';

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

  constructor(private service:ServicesService){

  }

  saveHeroe(){
    this.service.saveHeroe(this.heroe);
  }


}
