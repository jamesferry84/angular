import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoggingService} from "../../services/logging.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Recipe} from "../../../models/recipe";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  providers: [LoggingService]
})
export class RecipeDetailComponent implements OnInit, OnDestroy {

  recipe: Recipe;
  paramsSub: Subscription;

  constructor(private loggingService: LoggingService, private route: ActivatedRoute) {
    this.loggingService.logToConsole('recipe detail component created with logging service');
  }

  ngOnInit(): void {
    //snapshot is good to use if no other component will update the page
    this.recipe = {
      name: 'test',
      description: 'test desc',
      id: this.route.snapshot.params['id']
    };
    //preferred method
    this.paramsSub = this.route.params.subscribe((params: Params) => {
      this.recipe.id = params['id'];
    });
  }

  // angular should do this automatically
  ngOnDestroy(): void {
    this.paramsSub.unsubscribe();
  }

}
