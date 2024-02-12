import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { CategoriesComponent } from './pages/admin/categories/categories.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { CategoryProductsComponent } from './pages/website/category-products/category-products.component';
import { WebProductsComponent } from './pages/website/web-products/web-products.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: '',
        component: WebProductsComponent,
        title: 'All-Products'
      },
      {
        path: 'products/:id',
        component: CategoryProductsComponent
      }
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'category',
        component: CategoriesComponent,
      },
    ],
  },
];
