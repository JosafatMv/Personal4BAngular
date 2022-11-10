import { Component } from "@angular/core";
import { Heroe } from '../entities/heroe';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent{

  get heroes(){
    return this.service.heroes
  }

  constructor(private readonly service:ServicesService){

  }

}
