import {Exercise, TestCase, ValidatorRule} from "../models/exercise.model";
export class ChangeExerciseName{
  static readonly type = '[EXERCISE] ChangeName'
  constructor(public payload:string) {}
}
export class RemoveExercise{
  static readonly type = '[EXERCISE] Remove'

  constructor(public payload:{exercise:Exercise}) {
  }
}
export  class AddValidator{
  static readonly type='[EXERCISE] Add validator'
  constructor(public payload:ValidatorRule) {
  }
}
export class AddTest{
  static readonly  type = '[EXERCISE] Add test'
  constructor(public payload:TestCase) {
  }
}
export class SaveExercise{
  static readonly  type = '[EXERCISE] Save exercise'
}
