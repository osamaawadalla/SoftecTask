import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrdersService } from './services/orders.service';
import { Order } from 'src/app/core/models/order';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    NgFor
  ],
  providers: [OrdersService],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, OnDestroy {

  orders: Order[] = [];

  private subscription: Subscription = new Subscription();

  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getOrders(): void {
    this.subscription.add(this.ordersService.getOrders()
      .subscribe({
        next: res => {
          console.log(res);
          this.orders = res;
        }
      })
    )
  }

  itemByID(index: number, order: Order): number {
    return order.OrderId;
  }

}
