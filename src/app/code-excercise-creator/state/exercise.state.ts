import {State, Selector, Action, StateContext} from "@ngxs/store";
import {Exercise, ValidatorRule} from "../models/exercise.model";
import {Injectable} from "@angular/core";
import {AddTest, AddValidator, SaveExercise} from "../actions/exercise.actions";
import {updateItem} from "@ngxs/store/operators";
import {cleanOutdatedPackages} from "@angular/compiler-cli/ngcc/src/writing/cleaning/package_cleaner";
import {CandidateExerciseService} from "../../services/candidate-exercise.service";


export interface ExerciseStateModel{
  exercise:Exercise;
}

@State<ExerciseStateModel>({
  name:"exercise",
  defaults:{
    exercise:new Exercise()
  }
})

@Injectable()
export class ExerciseState{
  constructor(private exerciseService:CandidateExerciseService) {
  }
  @Action(AddValidator)
  addValidator(ctx:StateContext<ExerciseStateModel>,{payload}:AddValidator){
    const state = ctx.getState();
    state.exercise.validators.push(payload);
    ctx.patchState(state)
  }
  @Action(AddTest)
  addTest(ctx:StateContext<ExerciseStateModel>,{payload}:AddTest)
  {
    const state = ctx.getState();
    state.exercise.tests.push(payload);
    ctx.patchState(state);
  }
  @Action(SaveExercise)
  saveExercise(ctx:StateContext<ExerciseStateModel>,{}:SaveExercise)
  {
    const state = ctx.getState();
    this.exerciseService.saveExercise(state.exercise).subscribe();
  }


}
export class ExerciseSelectors{
  @Selector([ExerciseState])
  static getExercise(state:ExerciseStateModel):Exercise
  {
    return state.exercise;
  }


}
