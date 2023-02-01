import {Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ExerciseSelectors} from "../state/exercise.state";
import {Observable} from "rxjs";
import {Exercise} from "../models/exercise.model";

@Component({
  selector: 'app-exercise-description',
  templateUrl: './exercise-description.component.html',
  styleUrls: ['./exercise-description.component.css',"../css/style.css"]
})
export class ExerciseDescriptionComponent{
  validatorFormGroup = new FormGroup({
    nameFormControl : new FormControl('', [Validators.required]),
    descriptionFormControl : new FormControl('', [Validators.required])
  })
  @Select(ExerciseSelectors.getExercise) exercise$?: Observable<Exercise>;
  @Output() onDataChange = new EventEmitter<boolean>();
  constructor() {
    this.validatorFormGroup.valueChanges.subscribe(()=>
    {
        this.onDataChange.emit(this.validatorFormGroup.valid)
    })
  }
}
