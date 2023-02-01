import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeExerciseComponent } from './code-exercise.component';

describe('CodeExerciseComponent', () => {
  let component: CodeExerciseComponent;
  let fixture: ComponentFixture<CodeExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeExerciseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
