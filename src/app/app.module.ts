import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Terceros

//Propias
import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [ //Implementando otros modulos
    BrowserModule,
    HeroesModule
  ],
  providers: [], //Servicios
  bootstrap: [AppComponent] //Componente con el que se inicializara nuestra aplicacion
})
export class AppModule { }
