import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";

@Component({
   selector: "about-component",
  templateUrl: "about.component.html",
  styleUrls: ["about.component.css"]

})
export class AboutComponent {
  constructor(public cart: Cart) {}
}
