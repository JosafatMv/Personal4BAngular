import { NgModule } from '@angular/core';
import { AddHeroeComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListComponent, AddHeroeComponent],
  imports: [CommonModule, FormsModule],
  providers: [],
  exports: [ListComponent, AddHeroeComponent]
})
export class HeroesModule{

}
