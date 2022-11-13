import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  @Input()
  name: string;

  @Input()
  amount: number;

  constructor() { }

  ngOnInit(): void {
  }

}
