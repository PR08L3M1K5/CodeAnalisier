import {Component, Input} from '@angular/core';
import {CodeResult} from "../model/exercise-result.model";

@Component({
  selector: 'app-exercise-results',
  templateUrl: './exercise-results.component.html',
  styleUrls: ['./exercise-results.component.css']
})
export class ExerciseResultsComponent {


  @Input() list:CodeResult[]=[];
  deleteResult(result: CodeResult) {
    this.list.forEach((value,index)=>{
      if(value.title==result.title) this.list.splice(index,1);
    });
  }
}
