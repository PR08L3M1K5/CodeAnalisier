import { Component } from '@angular/core';
import {CandidateExercise} from "./model/candidate-exercise.model";
import {CandidateExerciseService} from "../services/candidate-exercise.service";
import {Observable} from "rxjs";
import {CodeResult} from "./model/exercise-result.model";

@Component({
  selector: 'app-code-exercise',
  templateUrl: './code-exercise.component.html',
  styleUrls: ['./code-exercise.component.css']
})
export class CodeExerciseComponent {
  candidateExercise:CandidateExercise = new CandidateExercise(0,"","","","");
  resultList: CodeResult[] = [];
  constructor(private candidateExerciseService:CandidateExerciseService) {
    candidateExerciseService.getExerciseDetails(5).subscribe({next:(exercise:CandidateExercise)=>{
        this.candidateExercise = exercise;
        this.candidateExercise.candidateCode = this.candidateExercise.sourceCode;
      }})
  }
  getCodeResult() {
    this.candidateExerciseService.getCodeResult(this.candidateExercise.id,this.candidateExercise.candidateCode).subscribe({next:(response:any)=>
      {
        this.resultList.push(new CodeResult(response.statusTitle,response.statusDescription))
      }})
  }
}
