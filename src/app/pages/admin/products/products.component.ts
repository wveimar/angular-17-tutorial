import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/products/poduct.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  isSidePanelVisible: boolean = false;
  productObj: any = {
  
    title: '', //title
    price: 0, //price
    description: '', //description
    category: '', //categoy
    image: '', //image
  };

  categoryList: any[] = [];
  productsList: any[] = [];

  constructor(private productSrv: ProductService) {}
  ngOnInit(): void {
    this.getProducts();
    this.getALlCategory();
  }

  getProducts() {
    this.productSrv.getProducts().subscribe((res: any) => {
      this.productsList = res;
    });
  }

  getALlCategory() {
    this.productSrv.getCategory().subscribe((res: any) => {
      this.categoryList = res;
    });
  }

  onSave() {
    this.productSrv.saveProduct(this.productObj).subscribe((res: any) => {
      debugger;
      if (res) {
        alert('Product Creation Success');
        this.getProducts();
      } else {
        alert(res.message);
      }
    });
  }

  onEdit(item: any) {
    this.productObj = item;
    this.openSidePanel();

  }
  onUpdate() {
    this.productSrv.updateProduct(this.productObj).subscribe((res: any) => {
      debugger;
      if (res) {
        alert('Product Updated Success');
        this.getProducts();
      } else {
        alert(res.message);
      }
    });
  }

    onDelete(item:any) {
      const isDelete = confirm('Are you sure you want to delete this product?');
      if (isDelete) {
        this.productSrv.delenteProduct(item.id).subscribe((res: any) => {
          debugger;
          if (res) {
            alert('Product delete Success');
            this.getProducts();
          } else {
            alert(res.message);
          }
        });

      }
     
      };


  openSidePanel() {
    this.isSidePanelVisible = true;
  }

  closeSidePanel() {
    this.isSidePanelVisible = false;
  }
}
