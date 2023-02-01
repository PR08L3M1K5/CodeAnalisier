import {CodeExerciseCreatorComponent} from "./code-excercise-creator/code-exercise-creator.component";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CodeExerciseComponent} from "./code-exercise/code-exercise.component"; // CLI imports router

const routes: Routes = [
  { path: 'code-exercise-creator', component: CodeExerciseCreatorComponent },
  { path: 'code-exercise', component: CodeExerciseComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
