import { Cart } from './../model/cart.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'skill-component',
  templateUrl: 'skill.component.html'
})

export class skillComponent {
   constructor(public cart: Cart) { }
}
