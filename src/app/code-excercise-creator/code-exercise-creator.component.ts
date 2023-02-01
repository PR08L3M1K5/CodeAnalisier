import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Store} from "@ngxs/store";
import {ChangeExerciseName, SaveExercise} from "./actions/exercise.actions";
import {ExerciseDescriptionComponent} from "./exercise-description/exercise-description.component";


@Component({
  selector: 'app-code-exercise-creator',
  templateUrl: './code-exercise-creator.component.html',
  styleUrls: ['./code-exercise-creator.component.css']
})
export class CodeExerciseCreatorComponent {
  isDataValid: boolean = false;
  @Output() updateTable: EventEmitter<void> = new EventEmitter();
  constructor(private _formBuilder: FormBuilder,private store:Store) {}

  validatorEventHandlerFunction(valueEmitted:boolean){
    this.isDataValid = valueEmitted;
  }
  update()
  {
    this.updateTable.emit()
  }

  saveExercise() {
      this.store.dispatch(new SaveExercise());
  }
}
