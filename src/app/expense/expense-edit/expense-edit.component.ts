import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-expense-edit',
  templateUrl: './expense-edit.component.html',
  styleUrls: ['./expense-edit.component.css']
})
export class ExpenseEditComponent implements OnInit {

  expenseForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
