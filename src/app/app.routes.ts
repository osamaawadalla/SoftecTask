import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadChildren: () => import('./pages/home/home-routes').then(c => c.default) },
    { path: 'products', loadChildren: () => import('./pages/products/products-routes').then(c => c.default) },
    { path: 'orders', loadChildren: () => import('./pages/orders/orders-routes').then(c => c.default) }
];
