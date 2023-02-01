import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Select, Store} from "@ngxs/store";
import {ExerciseSelectors} from "../state/exercise.state";
import {Observable} from "rxjs";
import {Exercise, TestCase} from "../models/exercise.model";
import {AddTest} from "../actions/exercise.actions";

@Component({
  selector: 'app-exercise-tests',
  templateUrl: './exercise-tests.component.html',
  styleUrls: ['./exercise-tests.component.css' ,"../css/style.css"]
})
export class ExerciseTestsComponent {
  exerciseTestForm = this.formBuilder.group({
    type:['',[Validators.required]],
    input:[''],
    output:['',[Validators.required]],
  })
  @Output() updateTable: EventEmitter<void> = new EventEmitter();
  @Select(ExerciseSelectors.getExercise) exercise$?: Observable<Exercise>;
  displayedColumns: string[] = ["type","input","output","action"];
  testTypeToSelect:TestType[] = [{name:"Variable test",type:"VARIABLE_TEST"}]
  constructor(private formBuilder:FormBuilder,private store:Store) {
  }

  addData() {
      this.store.dispatch(new AddTest(
        new TestCase(
          this.exerciseTestForm.get("type")?.value!,
          this.exerciseTestForm.get("input")?.value!,
          this.exerciseTestForm.get("output")?.value!
        )
      ))
    this.updateTable.emit();
  }
}
interface TestType{
  name:string;
  type:string;
}

