import { Component, OnInit } from '@angular/core';
import {ShoppingItem} from "../../../models/shoppingItem";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  name: string;
  amount: number;

  items: ShoppingItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addItem() {
    this.items.push(new ShoppingItem(this.name, this.amount));
  }

  removeItem() {
    this.items.pop();
  }

  removeAllItems() {
    this.items = [];
  }

}
