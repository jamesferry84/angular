import { Component, OnInit } from '@angular/core';
import {LoggingService} from "../../services/logging.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  providers: [LoggingService]
})
export class RecipeDetailComponent implements OnInit {

  constructor(private loggingService: LoggingService) {
    this.loggingService.logToConsole('recipe detail component created with logging service');
  }

  ngOnInit(): void {
  }

}
