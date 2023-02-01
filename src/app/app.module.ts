import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CodeExerciseCreatorComponent } from './code-excercise-creator/code-exercise-creator.component';
import { AppRoutingModule} from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from "@angular/material/stepper";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { ExerciseDescriptionComponent } from './code-excercise-creator/exercise-description/exercise-description.component';
import {MatCardModule} from "@angular/material/card";
import { ExerciseSourceCodeComponent } from './code-excercise-creator/exercise-source-code/exercise-source-code.component';
import { ExerciseValidationComponent } from './code-excercise-creator/exercise-validation/exercise-validation.component';
import { ExerciseTestsComponent } from './code-excercise-creator/exercise-tests/exercise-tests.component';
import {MatSelectModule} from "@angular/material/select";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import { ExerciseSummaryComponent } from './code-excercise-creator/exercise-summary/exercise-summary.component';
import { ExerciseValidationTableComponent } from './code-excercise-creator/exercise-validation-table/exercise-validation-table.component';
import { ExerciseTestTableComponent } from './code-excercise-creator/exercise-test-table/exercise-test-table.component';
import {ExerciseState} from "./code-excercise-creator/state/exercise.state";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {NgxsLoggerPluginModule} from "@ngxs/logger-plugin";
import {NgxsModule} from "@ngxs/store";
import { CodeExerciseComponent } from './code-exercise/code-exercise.component';
import { ExerciseResultsComponent } from './code-exercise/exercise-results/exercise-results.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CodeExerciseCreatorComponent,
    ExerciseDescriptionComponent,
    ExerciseSourceCodeComponent,
    ExerciseValidationComponent,
    ExerciseTestsComponent,
    ExerciseSummaryComponent,
    ExerciseValidationTableComponent,
    ExerciseTestTableComponent,
    CodeExerciseComponent,
    ExerciseResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatTooltipModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    NgxsModule.forRoot([
      ExerciseState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
