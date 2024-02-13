import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import { ProductService } from '../../../services/products/poduct.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterOutlet],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent implements OnInit {
  productList: any[] = [];
  categoryList: any[] = [];
  cartList: any[] = [];

  constructor(private productSrv: ProductService, private router: Router) {}
  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategory();
    this.getCartByCustomerId();
  }

  navigateToProducts(id: number) {
    this.router.navigate(['/products', id]);
  }

  getCartByCustomerId() {
    this.productSrv.getCartDataByCustId(5).subscribe((res: any) => {
      if (res) {
        this.cartList = res;
        debugger;
      }
    });
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
