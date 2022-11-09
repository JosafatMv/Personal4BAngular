import { NgModule } from '@angular/core';
import { AddHeroeComponent } from './add/add.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [ListComponent, AddHeroeComponent],
  imports: [],
  providers: [],
  exports: [ListComponent, AddHeroeComponent]
})
export class HeroesModule{

}
