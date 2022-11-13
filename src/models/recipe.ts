import {Ingredient} from "./ingredient";

export class Recipe {
  name: String;
  description: String;
  ingredients: Ingredient[];

  constructor(name: String, description: String) {
    this.name = name;
    this.description = description;
  }

}
