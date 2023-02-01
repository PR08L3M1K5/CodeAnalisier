import {AfterViewInit, Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {Select, Store} from "@ngxs/store";
import {ExerciseSelectors} from "../state/exercise.state";
import {Observable} from "rxjs";
import {Exercise, ValidatorRule} from "../models/exercise.model";
import {AddValidator} from "../actions/exercise.actions";
import {FormBuilder, FormControl, Validators} from "@angular/forms";



@Component({
  selector: 'app-exercise-validation',
  templateUrl: './exercise-validation.component.html',
  styleUrls: ['./exercise-validation.component.css' ,"../css/style.css"]
})

export class ExerciseValidationComponent {
  exerciseValidatorForm = this.formBuilder.group({
    name:['',[Validators.required]],
    param:['',[Validators.required]]
  })
  displayedColumns: string[] = ["type","param","action"];
  @Output() updateTable: EventEmitter<void> = new EventEmitter();
  @Select(ExerciseSelectors.getExercise) exercise$?: Observable<Exercise>;
  validationTypes:ValidationType[]=[
    {name:"Class/method usage",value:"CLASS_USAGE_RULE"},
    {name:"Code length",value:"CODE_LENGTH_RULE"}
  ]

  constructor(private store:Store ,private formBuilder: FormBuilder) {}
  addData() {
     this.store.dispatch(
       new AddValidator(
         new ValidatorRule(this.exerciseValidatorForm.get('name')?.value!,
          this.exerciseValidatorForm.get('param')?.value!)));
    this.updateTable.emit();
  }
}
interface ValidationType {
  name: string;
  value: string;
}

