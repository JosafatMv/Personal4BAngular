import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: number = 5;
  steps: number = 5;

  adding() {
    this.counter++;
  }

  minus() {
    this.counter--;
  }

  changeCounter(value:number){
   this.counter += value
  }

}
