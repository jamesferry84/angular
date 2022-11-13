import { Component, OnInit } from '@angular/core';
import {Recipe} from "../../../models/recipe";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  recipe: Recipe;


  constructor() {
    this.recipe = new Recipe('test-name', 'test-description');

  }

  ngOnInit(): void {
  }

}
