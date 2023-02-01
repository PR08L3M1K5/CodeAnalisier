import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseValidationComponent } from './exercise-validation.component';

describe('ExerciseValidationComponent', () => {
  let component: ExerciseValidationComponent;
  let fixture: ComponentFixture<ExerciseValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
