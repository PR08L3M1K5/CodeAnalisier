import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeExerciseCreatorComponent } from './code-exercise-creator.component';

describe('CodeExcersiseCreatorComponent', () => {
  let component: CodeExerciseCreatorComponent;
  let fixture: ComponentFixture<CodeExerciseCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeExerciseCreatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeExerciseCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
