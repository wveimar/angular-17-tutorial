import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet,Router } from '@angular/router';
import { ProductService } from '../../../services/products/poduct.service';


@Component({
  selector: 'app-web-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './web-products.component.html',
  styleUrl: './web-products.component.css'
})
export class WebProductsComponent {
  productList: any[] = [];
  categoryList: any[] = [];

  constructor(private productSrv: ProductService, private router: Router) {}
 
  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategory();
  }

  navigateToProducts(id: number) {
    this.router.navigate(['/products', id]);
  }

  addToCart(id: number){
    const addtocartObj = {
      userId:5,
      date:new Date(),
      products:[{id:id,quantity:1}]
    };
    this.productSrv.addToCart(addtocartObj).subscribe((res:any) => {
      if(res) {
        alert("Product added successfully")
      }else {
        alert(res.message)
      }

    })
  }

  getAllProducts() {
    this.productSrv.getProducts().subscribe((res: any) => {
      this.productList = res;
    });
  }

  getAllCategory() {
    this.productSrv.getCategory().subscribe((res: any) => {
      this.categoryList = res;
    });
  }

}
