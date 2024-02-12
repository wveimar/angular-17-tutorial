import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet,Router } from '@angular/router';
import { ProductService } from '../../../services/products/poduct.service';
import { WebProductsComponent } from '../web-products/web-products.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterOutlet,WebProductsComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent implements OnInit {
  productList: any[] = [];
  categoryList: any[] = [];

  constructor(private productSrv: ProductService, private router: Router) {

  }
  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategory();
  }

  navigateToProducts(id: number) {
    this.router.navigate(['/products', id]);
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
