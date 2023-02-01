import {HttpClient, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Exercise} from "../code-excercise-creator/models/exercise.model";
import {CandidateExercise} from "../code-exercise/model/candidate-exercise.model";

@Injectable({providedIn:'root'})
export class CandidateExerciseService{
  constructor(private http:HttpClient) {
  }

  getExerciseDetails(id:number):Observable<CandidateExercise>{
    return this.http.get<CandidateExercise>(`https://localhost:7267/CandidateExercise/${id}`)
  }

  getCodeResult(exerciseId:number,candidateCode:string)
  {
    let parameters = {"exerciseId":exerciseId,"candidateCode":candidateCode}
    let queryParams = new HttpParams({ fromObject: parameters });
    return this.http.get(`https://localhost:7267/CandidateExercise/CodeResult`,{params:queryParams})
  }

  saveExercise(exercise:Exercise)
  {
    return this.http.post<Exercise>(`https://localhost:7267/CandidateExercise`,exercise)
  }

}
