import { Component } from "@angular/core";

import { Router } from "@angular/router";

@Component({
  selector: "store",
  templateUrl: "store.component.html",
})
export class StoreComponent {
  selectedCategory: string | undefined;

  public productsPerPage = 4;
  public selectedPage = 1;

  constructor(

    private router: Router
  ) {}
 colors = [
    'linear-gradient(135deg, #ff9a9e, #fad0c4)',
    'linear-gradient(135deg, #a18cd1, #fbc2eb)',
    'linear-gradient(135deg, #84fab0, #8fd3f4)',
    'linear-gradient(135deg, #fbc2eb, #a6c1ee)',
    'linear-gradient(135deg, #ffecd2, #fcb69f)'
  ];

  textLines = [
    "Hi, I'm Md Shahnwaz",
    "A Passionate Software Developer",
    "I Build Web Applications",
    "Exploring Angular & React",
    "Turning Ideas into Reality"
  ];

  currentIndex = 0;
  textIndex = 0;
  dynamicText = this.textLines[0];

  ngOnInit() {
    setInterval(() => {
      this.currentIndex++;
    }, 4000);

    setInterval(() => {
      this.textIndex = (this.textIndex + 1) % this.textLines.length;
      this.dynamicText = this.textLines[this.textIndex];
    }, 3000);
  }




  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: any) {
    this.productsPerPage = Number(newSize.target.value);
    this.changePage(1);
  }

  // get pageNumbers(): number[] {
  //   return Array(
  //     Math.ceil(
  //       this.repository.getProducts(this.selectedCategory).length /
  //         this.productsPerPage
  //     )
  //   )
  //     .fill(0)
  //     .map((x, i) => i + 1);
  // }

  // addProductToCart(product: Product) {
  //   this.cart.addLine(product);
  //   this.router.navigateByUrl("/cart");
  // }
}
