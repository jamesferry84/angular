import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  loadHome() {
    this.router.navigate(['/'])
  }

  reload() {
    this.router.navigate(['recipes'])
    // this.router.navigate(['recipes'], {relativeTo: this.route})
  }

}
