import {Component, OnInit} from '@angular/core';
import {Expense} from "../../models/expense";

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  showForm: boolean = false;

  dummyExpenseData: Expense[] = [
    { id: 1, name: 'Mortgage', amount: 800, frequency: 'monthly'},
    { id: 2, name: 'Council Tax', amount: 330, frequency: 'monthly'},
    { id: 3, name: 'Kitchen', amount: 550, frequency: 'monthly'},
    { id: 4, name: 'gas / electric', amount: 400, frequency: 'monthly'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  showEditForm() {
    this.showForm = !this.showForm;
  }

}
