import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseValidationTableComponent } from './exercise-validation-table.component';

describe('ExerciseValidationTableComponent', () => {
  let component: ExerciseValidationTableComponent;
  let fixture: ComponentFixture<ExerciseValidationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseValidationTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseValidationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
