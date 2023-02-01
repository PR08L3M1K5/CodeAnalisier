import { Component } from '@angular/core';
import {Select} from "@ngxs/store";
import {ExerciseSelectors} from "../state/exercise.state";
import {Observable} from "rxjs";
import {Exercise} from "../models/exercise.model";

@Component({
  selector: 'app-exercise-source-code',
  templateUrl: './exercise-source-code.component.html',
  styleUrls: ['./exercise-source-code.component.css' ,"../css/style.css"]
})
export class ExerciseSourceCodeComponent {
  @Select(ExerciseSelectors.getExercise) exercise$?: Observable<Exercise>;
}
