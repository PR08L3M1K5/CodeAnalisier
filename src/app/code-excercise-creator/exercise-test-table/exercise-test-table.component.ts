import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {Observable} from "rxjs";
import {Select} from "@ngxs/store";
import {ExerciseSelectors} from "../state/exercise.state";
import {Exercise} from "../models/exercise.model";


@Component({
  selector: 'app-exercise-test-table',
  templateUrl: './exercise-test-table.component.html',
  styleUrls: ['./exercise-test-table.component.css']
})
export class ExerciseTestTableComponent implements AfterViewInit{
  @Input() displayedColumns :string[]=[];
  @Input() editable:boolean=false;
  @Input() events:Observable<void>;
  @Select(ExerciseSelectors.getExercise) exercise$?:Observable<Exercise>;
  @ViewChild(MatTable) table: MatTable<any>;

  ngAfterViewInit() {
    this.events.subscribe(()=>this.refreshTable())
  }

  refreshTable()
  {
    this.table.renderRows();
  }

  delete(element:any) {
  }
}
