import { NgModule } from '@angular/core';
import { AddHeroeComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ListComponent, AddHeroeComponent],
  imports: [CommonModule],
  providers: [],
  exports: [ListComponent, AddHeroeComponent]
})
export class HeroesModule{

}
