import {AfterViewInit, Component, Input, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {Exercise} from "../models/exercise.model";
import {Select} from "@ngxs/store";
import {ExerciseSelectors} from "../state/exercise.state";
import {Observable} from "rxjs";
import {MatTable} from "@angular/material/table";

@Component({
  selector: 'app-exercise-validation-table',
  templateUrl: './exercise-validation-table.component.html',
  styleUrls: ['./exercise-validation-table.component.css']
})
export class ExerciseValidationTableComponent implements AfterViewInit{

  @Input() displayedColumns :string[]=[];
  @Input() editable:boolean=false;
  @Select(ExerciseSelectors.getExercise) exercise$?:Observable<Exercise>;
  @ViewChild(MatTable) table: MatTable<any>;
  @Input() events:Observable<void>;

  ngAfterViewInit() {
    this.events.subscribe(()=>this.refreshTable())
  }

  refreshTable()
  {
    this.table.renderRows()
  }

}
