import {AfterViewInit, Component, EventEmitter, Input, Output} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {Exercise} from "../models/exercise.model";
import {ExerciseSelectors} from "../state/exercise.state";

@Component({
  selector: 'app-exercise-summary',
  templateUrl: './exercise-summary.component.html',
  styleUrls: ['./exercise-summary.component.css',"../css/style.css"]
})
export class ExerciseSummaryComponent implements AfterViewInit{
  validationDisplayedColumns: string[] = ["type","param","action"];

  testDisplayedColumns: string[] = ["type","input","output","action"];
  @Select(ExerciseSelectors.getExercise) exercise$?: Observable<Exercise>;
  @Input() events:Observable<void>;
  @Output() updateTable: EventEmitter<void> = new EventEmitter();
  constructor() {
  }
  ngAfterViewInit() {
    this.events.subscribe(()=>this.updateTable.emit())
  }
}

